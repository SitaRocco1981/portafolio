import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validaciones
    if (!body.nombre?.trim() || !body.email?.trim()) {
      return new Response(JSON.stringify({ result: "error", message: "Nombre y correo son obligatorios" }), { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(JSON.stringify({ result: "error", message: "Correo inválido" }), { status: 400 });
    }

    const sanitize = (str) => str.replace(/<[^>]*>?/gm, "");
    const cleanMensaje = sanitize(body.mensaje || "");

    if (cleanMensaje.length > 500) {
      return new Response(JSON.stringify({ result: "error", message: "El mensaje es demasiado largo" }), { status: 400 });
    }

    // Autenticación con Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Contacto!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.nombre.trim(), body.email.trim(), cleanMensaje, new Date().toLocaleString()]],
      },
    });

    return new Response(JSON.stringify({ result: "success" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ result: "error" }), { status: 500 });
  }
}
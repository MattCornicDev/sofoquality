import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Créer un transporteur avec OVH
    const transporter = nodemailer.createTransport({
      host: process.env.OVH_SMTP_HOST,
      port: parseInt(process.env.OVH_SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.OVH_SMTP_USER,
        pass: process.env.OVH_SMTP_PASSWORD,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: email,
      to: 'contact@sofogreen.com',
      subject: `Nouveau message de ${name}`,
      text: message,
      replyTo: email,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Échec de l\'envoi du message' },
      { status: 500 }
    );
  }
}
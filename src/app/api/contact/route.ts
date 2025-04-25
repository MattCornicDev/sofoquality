import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validate } from 'email-validator';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    console.log('Données reçues:', { name, email, message });

    // Validation de l'email
    if (!validate(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Vérification des variables d'environnement
    if (!process.env.OVH_SMTP_HOST || !process.env.OVH_SMTP_USER || !process.env.OVH_SMTP_PASSWORD) {
      console.error('Variables d\'environnement manquantes:', {
        hasHost: !!process.env.OVH_SMTP_HOST,
        hasUser: !!process.env.OVH_SMTP_USER,
        hasPassword: !!process.env.OVH_SMTP_PASSWORD
      });
      return NextResponse.json(
        { error: 'Configuration du serveur email manquante' },
        { status: 500 }
      );
    }

    console.log('Configuration SMTP:', {
      host: process.env.OVH_SMTP_HOST,
      port: process.env.OVH_SMTP_PORT,
      user: process.env.OVH_SMTP_USER
    });

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

    console.log('Envoi de l\'email...', mailOptions);

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Erreur lors de l\'envoi de l\'email:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.constructor.name : 'Unknown'
    });
    return NextResponse.json(
      { error: 'Échac de l\'envoi du message' },
      { status: 500 }
    );
  }
}

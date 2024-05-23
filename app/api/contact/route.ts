import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

        const {
            first_name,
            last_name,
            email,
           
            services,
            info,
          } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "michaelirvineduarte@gmail.com",
          pass: "ilol sufh rkje wuah",
        },
      });

      const mailOptions = {
        from: email,
        to: "michaelirvineduarte@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>Nome: ${first_name} ${last_name}</p>
                    <p>Email: ${email}</p>
                    <p>Area de interesse: ${services}</p>
                    <p>Mensagem: ${info}</p>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}
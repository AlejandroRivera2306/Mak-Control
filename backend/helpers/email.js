import { text } from 'express';
import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {

    const {email, nombre, token } = datos;

    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
      });

//informacion email
const info = await transport.sendMail({
    from: '"MakCuentas -Administrador de proyectos" <cuentas@makcuentas.com ',
    to: email,
    subject:"MakCuentas - comprueba tu cuenta",
    text:"Comprueba tu cuenta en Aldana Associates ",
    html: ` <p> Hola: ${nombre} comprueba tu cuenta MakCuentas</p>
    <p> Tu cuenta esta casi lista da click en el sieguiente enlace  
    
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>
    <p> Si tu no creaste la cuenta ignora el mensaje</p>
    
    
    
    
    `,

})


};

export const emailOlvidePassword = async (datos) => {

    const {email, nombre, token } = datos;

    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

//informacion email
const info = await transport.sendMail({
    from: '"MakCuentas -Administrador de proyectos" <cuentas@makcuentas.com ',
    to: email,
    subject:"MakCuentas - Reestablecer tu cuenta",
    text:"Comprueba tu cuenta en Aldana Associates ",
    html: ` <p> Hola: ${nombre} has solicitado reestablecer tu password: Aldana</p>
    <p> Tu cuenta esta casi lista da click en el sieguiente enlace  
    
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
    <p> Si tu no solicitaste ignora el mensaje</p>
    
    
    
    
    `,

})


};
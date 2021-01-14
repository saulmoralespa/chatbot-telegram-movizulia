require('dotenv').config();

const { Telegraf } = require('telegraf');
const express = require('express');
const expressApp = express();
const port = process.env.PORT || 3000
expressApp.get('/', (req, res) => {
  res.send('Hello World!')
});
expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

const app = new Telegraf(process.env.BOT_TOKEN);

app.start(ctx => {
    if (ctx.message.from.first_name !== undefined) {
      ctx.reply(
        `Bienvenido ${ctx.message.from.first_name} al chat bot de Movi Zulia, ¿ Ya has descargado la aplicación ? <a href="https://play.google.com/store/apps/details?id=com.saulmoralespa.movizulia">Descargar movi Zulia</a> 
        
        <strong>Contrólame enviando estos comandos:</strong>
        
        /usarapp - como usar Movi Zulia
        
        
        ⭐⭐⭐⭐⭐`, {
            parse_mode: 'HTML'
          }
      );
    } else if (ctx.message.from.username !== undefined) {
      ctx.reply(
        `Bienvenido ${ctx.message.from.username} al chat bot de Movi Zulia, ¿ Ya has descargado la aplicación ? <a href="https://play.google.com/store/apps/details?id=com.saulmoralespa.movizulia">Descargar movi Zulia</a> 
        
         <strong>Contrólame enviando estos comandos:</strong>
        
         /usarapp - como usar Movi Zulia

         
         ⭐⭐⭐⭐⭐`, {
             parse_mode: 'HTML'
           }
      );
    } else {
      ctx.reply(
        `Bienvenido ${ctx.message.from.id} al chat bot de Movi Zulia, ¿ Ya has descargado la aplicación ?  
        
        Puedes controlarme enviando estos comandos:
        
        /usarapp - como usar Movi Zulia`
      );
    }
  });

  app.command('usarapp', (ctx) => {
    ctx.reply(
        `Sencillo ${ctx.message.from.first_name} 🙂
        1. Descarga la aplicación: 
        <a href="https://play.google.com/store/apps/details?id=com.saulmoralespa.movizulia">Descargar movi Zulia</a>
        2. Inicia sesión con Facebook O Google
        3. Si quieres hacer un recorrido dentro del municipio pulsa: <strong>Recorrer la ciudad</strong> o caso contrario: <strong>Recorrer hacia fuera</strong>
        4. Si haz elegido "Recorrer la ciudad" tendrás ahora que buscar el vehículo más cercano a tu ubicación, tan solo pulsa sobre el
        5. Ahora espera que el conductor responda`, {
            parse_mode: 'HTML'
          }
      );
  })

  app.launch();
const https = require('https');

try{
  const req = https.request('https://api.ipify.org?format=json', res => {

    console.log('status code:');
    console.log(res.statusCode);

    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      if(res.statusCode === 200){
        try {
          let json = JSON.parse(data);

          if(json.ip){
            console.log('tu ip publica es:');
            console.log(json.ip);
          } else{
            console.error('ocurrio un error. Reintente de nuevo.');
          }
        } catch (err) {
          console.error('ocurrio un error. No se pudo convertir al informacion respondida en formate JSON');
          console.error(err);
        }
      } else{
        console.error('ocurrio un error.');
        console.error(res.statusMessage);
      }
    });

    res.on('error', err => {
      console.error('ocurrio un error en la respuesta');
      console.error(err);
    });
  });

  req.on('error', err => {
    console.error('ocurrio un error en la solicitud');
    console.error(err);
  });
  req.end(); // finalizando solicitud

} catch(err){
  console.error('ocurrio un error.');
  console.error(err);
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.ipify.org?format=json', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.writeln('status code:<br>');
    document.writeln(xhr.status + '<br>');

    try {
      const json = JSON.parse(xhr.responseText);
      if(json.ip){
        document.writeln('tu ip publica es:<br>');
        document.writeln(json.ip + '<br>');
      } else{
        document.writeln('ocurrio un error. Reintente de nuevo.<br>');
      }
    } catch (err) {
      document.writeln('ocurrio un error. No se pudo convertir al informacion respondida en formate JSON<br>');
      document.writeln(err + '<br>');
    }
  }
}

xhr.onerror = function(err){
  document.writeln('ocurrio un error<br>');
  document.writeln(err + '<br>');
}

xhr.send();

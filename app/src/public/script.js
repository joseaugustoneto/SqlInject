window.onload = function() {
  document.querySelector('[type="submit"]').addEventListener('click', () => {

      event.preventDefault();
      var data = JSON.stringify({
        email: document.querySelector('[name=email]').value,
        senha: document.querySelector('[name=senha]').value,
      });
      
      var xhr = new XMLHttpRequest();
      
      xhr.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
          const statusMessage = document.querySelector('[name=statusMessage]');
          statusMessage.innerHTML = this.responseText;
          statusMessage.style.display = 'block';
        }
      });
      
      xhr.open('POST', 'http://localhost/usuarios/login');
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.send(data);

  })
}
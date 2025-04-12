document.addEventListener("DOMContentLoaded", () => {
    
    const text = "Olá!";
    const textElement = document.getElementById("typewriter-text");
    let index = 0;
    const speed = 100;
  
    function typeWriter() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
     
    typeWriter();
  
    const botaoContato = document.getElementById("btn-contato");
    const contatoInfo = document.getElementById("contato-info");
  
    botaoContato.addEventListener("click", () => {
   
      contatoInfo.classList.toggle("show");
    });
  });


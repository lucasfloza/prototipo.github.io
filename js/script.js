//Letreiro
function typeWrite(elemento){
    const textoArray = elemento.textContent.split("");
    elemento.textContent = "";

      textoArray.forEach((letra,i) =>{

        setTimeout(()=>elemento.textContent += letra,100*i)

      })

  }
  const titulo = document.querySelector("#title-main");
  typeWrite(titulo)


  //Animação das Features
  function clickNavCard(e){
    
    displayNoneSection();
    var card = document.getElementById(e);
    card.style.display = "block";
    card.style.animation = "nascer .8s linear";

  } 

  function displayNoneSection(){

   document.querySelector("#seo-int-card").style.display = "none";
   document.querySelector("#publi-auto-card").style.display = "none";
   document.querySelector("#dash-info-card").style.display = "none";
   document.querySelector("#design-mec-card").style.display = "none";
  }


//validação bootstrap
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
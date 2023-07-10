document.addEventListener('DOMContentLoaded', async () => {
  let accepted = false;

  while (!accepted) {
    const { value: accept } = await Swal.fire({
      title: 'Términos y condiciones',
      html: 'Por favor, lee y acepta los <a href="error404.html" target="_blank">Términos y condiciones</a>',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'Estoy de acuerdo con los términos y condiciones',
      confirmButtonText: 'Continuar <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'Necesitas estar de acuerdo con los T&C';
      },
      allowOutsideClick: false, // Evita que se cierre la alerta al hacer clic fuera de ella
      allowEscapeKey: false // Evita que se cierre la alerta al presionar la tecla "Esc"
    });

    if (accept) {
      Swal.fire('¡Estás de acuerdo con los T&C!', '¡Bienvenido al Encriptador Texto-Numerico! :)');
      accepted = true;
    }
  }

  // Aquí puedes continuar con el resto del código de la página una vez que los términos y condiciones hayan sido aceptados
});


/*
document.addEventListener('DOMContentLoaded', async () => {
    let accepted = false;
  
    while (!accepted) {
      const { value: accept } = await Swal.fire({
        title: 'Terminos y condiciones',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder: 'Estoy de acuerdo con los terminos y condiciones',
        confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && 'Necesitas estar de acuerdo con los T&C';
        },
        allowOutsideClick: false, // Evita que se cierre la alerta al hacer clic fuera de ella
        allowEscapeKey: false // Evita que se cierre la alerta al presionar la tecla "Esc"
      });
  
      if (accept) {
        Swal.fire('Estas de acuerdo con T&C :)', 'Bienvenido a la pagina :)');
        accepted = true;
      }
    }
  
    // Aquí se puede continuar con el resto del código de la página una vez que los términos y condiciones han sido aceptados
  });
 */ 


/*
document.addEventListener('DOMContentLoaded', async () => {
    const { value: accept } = await Swal.fire({
      title: 'Terminos y condiciones',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'Estoy de acuerdo con los terminos y condiciones',
      confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'Necesitas estar de acuerdo con T&C';
      }
    });
  
    if (accept) {
      Swal.fire('Bienvenido a la pagina :)');
    }
  });

/*
document.addEventListener('DOMContentLoaded', function() {
    mostrarAlertaInicial();
  });
  
  function mostrarAlertaInicial() {
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'La página se ha cargado correctamente.',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  }
*/

/*
function encriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto 
                      .replace(/e/gi, "enter")
                      .replace(/i/gi, "imes")
                      .replace(/a/gi, "ai")
                      .replace(/o/gi, "ober")
                      .replace(/u/gi, "ufat")



    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./recursos/detective1.png";
    } else {
        muneco.src = "./recursos/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar algun texto para encriptar", "warning");
    }
                      
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")





    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./recursos/detective2.png";
    } else {
        muneco.src = "./recursos/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar algun texto para desencriptar", "warning");

    }        
}
*/

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");

  let textoCifrado = texto.replace(/[a-z0-9]/gi, function(match) {
    switch (match.toLowerCase()) {
      case 'a':
        return 'z';
      case 'b':
        return 'y';
      case 'c':
        return 'x';
      case 'd':
        return 'w';
      case 'e':
        return 'v';
      case 'f':
        return 'u';
      case 'g':
        return 't';
      case 'h':
        return 's';
      case 'i':
        return 'r';
      case 'j':
        return 'q';
      case 'k':
        return 'p';
      case 'l':
        return 'o';
      case 'm':
        return 'n';
      case 'n':
        return 'm';
      case 'o':
        return 'l';
      case 'p':
        return 'k';
      case 'q':
        return 'j';
      case 'r':
        return 'i';
      case 's':
        return 'h';
      case 't':
        return 'g';
      case 'u':
        return 'f';
      case 'v':
        return 'e';
      case 'w':
        return 'd';
      case 'x':
        return 'c';
      case 'y':
        return 'b';
      case 'z':
        return 'a';
      case '0':
        return '9';
      case '1':
        return '8';
      case '2':
        return '7';
      case '3':
        return '6';
      case '4':
        return '5';
      case '5':
        return '4';
      case '6':
        return '3';
      case '7':
        return '2';
      case '8':
        return '1';
      case '9':
        return '0';
      default:
        return match;
    }
  });

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./recursos/detective1.png";
  } else {
    muneco.src = "./recursos/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Ooops!", "Debes ingresar algún texto para encriptar", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");

  let textoDesencriptado = texto.replace(/[a-z0-9]/gi, function(match) {
    switch (match.toLowerCase()) {
      case 'a':
        return 'z';
      case 'b':
        return 'y';
      case 'c':
        return 'x';
      case 'd':
        return 'w';
      case 'e':
        return 'v';
      case 'f':
        return 'u';
      case 'g':
        return 't';
      case 'h':
        return 's';
      case 'i':
        return 'r';
      case 'j':
        return 'q';
      case 'k':
        return 'p';
      case 'l':
        return 'o';
      case 'm':
        return 'n';
      case 'n':
        return 'm';
      case 'o':
        return 'l';
      case 'p':
        return 'k';
      case 'q':
        return 'j';
      case 'r':
        return 'i';
      case 's':
        return 'h';
      case 't':
        return 'g';
      case 'u':
        return 'f';
      case 'v':
        return 'e';
      case 'w':
        return 'd';
      case 'x':
        return 'c';
      case 'y':
        return 'b';
      case 'z':
        return 'a';
      case '0':
        return '9';
      case '1':
        return '8';
      case '2':
        return '7';
      case '3':
        return '6';
      case '4':
        return '5';
      case '5':
        return '4';
      case '6':
        return '3';
      case '7':
        return '2';
      case '8':
        return '1';
      case '9':
        return '0';
      default:
        return match;
    }
  });

  if (texto.length !== 0) {
    document.getElementById("texto").value = textoDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./recursos/detective2.png";
  } else {
    muneco.src = "./recursos/Muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Ooops!", "Debes ingresar algún texto para desencriptar", "warning");
  }
}

function copiar() {
    var textarea = document.getElementById("texto");

    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand("copy");

    swal("Cool!", "Texto copiado al portapapeles", "success")
  }

  function borrar() {
    var textarea = document.getElementById("texto");

    textarea.select();

    document.execCommand("delete");
  }

// Código para el modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const contenedorTodo = document.querySelector('.contenedorTodo');

darkModeToggle.addEventListener('click', () => {
  contenedorTodo.classList.toggle('dark-mode');
});

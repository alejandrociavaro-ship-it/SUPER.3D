// =====================================
// CONFIGURACIÓN
// =====================================

// CAMBIÁ ESTE NÚMERO POR TU WHATSAPP
// Formato: código de país + número
// Argentina: 549 + código de área + número
// SIN +, espacios ni guiones

const WHATSAPP = "5490000000000";


// =====================================
// BOTONES DE WHATSAPP
// =====================================

function consultar(producto) {

  const mensaje =
    "Hola! 👋 Quisiera consultar por: " + producto;

  const url =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(mensaje);

  window.open(url, "_blank");
}


// =====================================
// CONFIGURAR LOS ENLACES DE WHATSAPP
// =====================================

document.addEventListener("DOMContentLoaded", function () {

  const enlaces =
    document.querySelectorAll('a[href*="wa.me"]');

  enlaces.forEach(function (enlace) {

    enlace.href =
      "https://wa.me/" +
      WHATSAPP;

  });

});

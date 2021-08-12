// Funcion que accionan el boton del menu responsive
(function () {
  let boton = document.getElementById("boton");
  let nav = document.getElementById("menu");
  let con = true;
  function menu() {
    if (con) {
      nav.style.right = "0";
      con = false;
    } else {
      nav.style.right = "-200%";
      con = true;
    }
  }

  boton.addEventListener("click", menu);

  $(".item").click(function () {
    let target = $(this).parent().children(".slide");
    $(target).slideToggle();
  });
})();

// Funciones que generan el TimeAgo de cada posteo subido en la Seccion Noticias

function time_ago(fecha) {
  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let dnow = new Date();
  let dpost = new Date(fecha);

  seconds = (dnow - dpost) / 1000;

  if (seconds <= 10) {
    return "ahora mismo";
  } else if (seconds < 60) {
    return "hace " + Math.ceil(seconds) + " segundos";
  } else if (seconds < 300) {
    return "hace " + Math.ceil(seconds / 60) + " minutos";
  } else if (seconds < 1000) {
    return "hace 15 minutos";
  } else if (seconds < 2000) {
    return "hace 30 minutos";
  } else if (seconds < 86400) {
    return "hace " + Math.ceil(seconds / 3600) + " horas";
  } else if (seconds < 610000) {
    return "hace " + Math.ceil(seconds / 86400) + " días";
  } else if (seconds < 2600000) {
    return "hace " + Math.ceil(seconds / 604800) + " semanas";
  } else if (seconds < 32000000) {
    return "hace " + Math.ceil(seconds / 2592000) + " meses";
  } else if (seconds < 95000000) {
    return "hace " + Math.ceil(seconds / 31536000) + " años";
  } else {
    return (
      "el " +
      dpost.getUTCDate() +
      " de " +
      months[dpost.getUTCMonth()] +
      " de " +
      dpost.getUTCFullYear()
    );
  }
}

function actualizar_fechas() {
  let posts = document.querySelectorAll("[data-timepost]");

  for (let x = 0; x < posts.length; x++) {
    posts[x].textContent = "Posteado " + time_ago(posts[x].dataset.timepost);
  }
}

actualizar_fechas();
setTimeout(actualizar_fechas, 15000);

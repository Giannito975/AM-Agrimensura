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

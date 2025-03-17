document.addEventListener("DOMContentLoaded", function() {

  var onglets = document.querySelectorAll(".onglet");

  onglets.forEach(function(onglet) {
    onglet.addEventListener("click", function() {

      var cible = this.getAttribute("data-target");

      var enlignes = document.querySelectorAll(".enligneqeel");

      enlignes.forEach(function(enligne) {
        enligne.style.display = "none";
      });

      var elementCible = document.querySelector("." + cible);
      if (elementCible) {
        elementCible.style.display = "block";
      }
    });
  });

  var onglet1 = document.querySelector(".onglet[data-target='onglet1']");
  if (onglet1) {
    onglet1.click();
  }
});
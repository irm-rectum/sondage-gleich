// Récupération des éléments du formulaire
const techSelect = document.getElementById("tech");
const jsQuestions = document.getElementById("js-questions");
const pythonQuestions = document.getElementById("python-questions");

// Fonction de logique conditionnelle
techSelect.addEventListener("change", function() {
  // Masquer toutes les questions conditionnelles
  jsQuestions.classList.add("hidden");
  pythonQuestions.classList.add("hidden");

  // Afficher les questions correspondantes à la réponse
  if (techSelect.value === "js") {
    jsQuestions.classList.remove("hidden");
  } else if (techSelect.value === "python") {
    pythonQuestions.classList.remove("hidden");
  }
});

// ✅ Tableau contenant des citations inspirantes
const citations = [
  "Le succès, c'est tomber sept fois, se relever huit. - Proverbe japonais",
  "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
  "Le meilleur moyen de prédire l'avenir est de le créer. - Peter Drucker",
  "Il n'y a pas de réussite sans échec. - Malcolm Forbes",
  "N'attendez pas. Le temps ne sera jamais juste. - Napoleon Hill",
  "Croyez en vous et tout sera possible. - Audrey Hepburn",
  "Faites de votre vie un rêve, et d’un rêve, une réalité. - Antoine de Saint-Exupéry",
  "Je ne perds jamais. Soit je gagne, soit j’apprends. - Nelson Mandela",
  "Tout ce que vous pouvez imaginer est réel. - Pablo Picasso",
  "Les grandes choses ne sont jamais faites par une seule personne. - Steve Jobs",
  "La seule limite à notre réalisation de demain, ce sont nos doutes d’aujourd’hui. - Franklin Roosevelt",
  "N’abandonnez jamais, car vous pourriez être à un pas de la réussite. - Thomas Edison",
  "Vous êtes plus courageux que vous ne le croyez. - A.A. Milne",
  "La confiance en soi est le premier secret du succès. - Ralph Waldo Emerson",
  "Le futur appartient à ceux qui croient à la beauté de leurs rêves. - Eleanor Roosevelt",
  "On devient ce que l'on croit. - Oprah Winfrey",
  "Ce n’est pas la montagne que nous conquérons, mais nous-mêmes. - Edmund Hillary"
];

// Récupération des éléments HTML (ID présents dans index.html)
const citationElement = document.getElementById("citation");
const boutonCitation = document.getElementById("btn-citation");

// Fonction qui affiche une citation aléatoire
function afficherCitation() {
  const indexAleatoire = Math.floor(Math.random() * citations.length);
  citationElement.textContent = citations[indexAleatoire];
}

//  Ajout d'un écouteur d'événement sur le bouton
boutonCitation.addEventListener("click", (afficherCitation));

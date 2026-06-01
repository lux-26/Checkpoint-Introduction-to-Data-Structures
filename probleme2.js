// Déclaration de la constante (optionnelle en JS car les tableaux sont dynamiques)
const MAX = 100;

/**
 * Calcule le produit scalaire de deux vecteurs.

 * @param {Array<number>} v1
 * @param {Array<number>} v2
 * @param {number} dim
 * @returns {number} Le produit scalaire
 */
function dotProduct(v1, v2, dim) {
  let ps = 0;

  for (let i = 0; i < dim; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

function main() {
  // Note : prompt() est utilisé ici pour l'affichage dans un navigateur.
  // parseInt() et parseFloat() permettent de convertir le texte saisi en nombres.
  let dim = parseInt(prompt("Entrez la dimension des vecteurs : "));
  let n = parseInt(
    prompt("Entrez le nombre de couples de vecteurs à tester (n) : "),
  );

  // Boucle principale pour traiter les n couples
  for (let i = 1; i <= n; i++) {
    console.log(`--- Saisie du couple de vecteurs n° ${i} ---`);

    let v1 = [];
    let v2 = [];

    // Saisie du premier vecteur
    console.log("Saisie du premier vecteur :");
    for (let j = 1; j <= dim; j++) {
      let composante = parseFloat(prompt(`Composante ${j} : `));
      v1.push(composante); // Ajoute l'élément au tableau (index 0 à dim-1)
    }

    // Saisie du deuxième vecteur
    console.log("Saisie du deuxième vecteur :");
    for (let j = 1; j <= dim; j++) {
      let composante = parseFloat(prompt(`Composante ${j} : `));
      v2.push(composante);
    }

    // Appel de la fonction et récupération du produit scalaire
    let ps = dotProduct(v1, v2, dim);

    // Vérification de l'orthogonalité
    if (ps === 0) {
      console.log(
        `Résultat : Les deux vecteurs du couple ${i} sont orthogonaux.`,
      );
    } else {
      console.log(
        `Résultat : Les deux vecteurs ne sont pas orthogonaux. (Produit scalaire = ${ps})`,
      );
    }
  }
}

// Lancement du programme
main();

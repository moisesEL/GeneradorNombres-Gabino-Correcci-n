let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

/* Codigo anterior */
/*
for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let d = 0; d < noun.length; d++) {
      console.log(pronoun[a] + adj[b] + noun[d] + '.com');
    }
  }
} */

 let NameGenerator = "";

pronouns.forEach(pronoun => {
  adjs.forEach(adj => {
    nouns.forEach(noun => {
      NameGenerator += pronoun + adj + noun + '.com\n' ;
    });
  });
});

console.log(NameGenerator);
   /* - Utilice forEach para anidar los arrays
      - Cambie los nombres de los elementos del for each a unos mas legibles
      - guarde todo lo generado en un array para imprimir al final
   */
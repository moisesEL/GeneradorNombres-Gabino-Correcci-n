let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

/* Codigo anterior */
/*
for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let d = 0; d < noun.length; d++) {
      console.log(pronoun[a] + adj[b] + noun[d] + '.com');
    }
  }
} */

  pronoun.forEach(a => {
  adj.forEach(b => {
    noun.forEach (c => {
     console.log(a + b + c + '.com')
  })})}); 
   /* Utilice forEachh para anidar los arrays*/
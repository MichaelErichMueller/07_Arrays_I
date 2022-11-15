"use strict";

/* Die Satzbau-Maschine | Arrays */

/* Theorie Arrays */

let arr;
// arr = new Array(); /* Konstruktor
arr = []; // Literal
arr = [2,7,11,4];
arr = [false,true,false];
arr = ["Ich", "bin", "Max", "Mütze"]

output(arr);
output(arr.length)
output(arr[0])// Index 0 ( 1 Pos. im Array)
output(arr[3]) // Konkret
output(arr[arr.length-1]) // Alg formulierung


// () --> Parameter
// {} --> Codeblöcke
// [] --> Arrasy, Index


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."


// output(getSentence("ich","bin","Max","Mütze"));
// output(getSentence("ich","bin","der","coole","Max","Mütze"));
// output(getSentence("ich","bin","die","coole","Maxine","Mützerich"));
// more of the same
function getSentence(word1,word2,word3,word4,word5,word6){
const gap   = " ";
const punct = ".";
let str     =   word1 + gap +
                word2 + gap +
                word3 + gap +
                word4 + gap +
                word5 + gap +
                word6 +
                punct;

return str;
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}



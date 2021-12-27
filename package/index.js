

/*FIRST EVER VERSION'S CODE */
/*function isJJA (string) {
    return string === 'JJA';
}
*/

/********************************************************************
function jozcapz(sentence){
    let capzed = [];

    let words = sentence.split(" ");
    console.log("our split sentence:",words);

    words.forEach(word => {
        let capzedWord = word.slice(0,1).toUpperCase() + word.splice(1);
        capzed.push(capzedWord);
    });

    console.log(capzed);

    let capzedConverted = capzed.join("");

    console.log(capzedConverted); 
}

module.exports = jozcapz; 
********************************************************************/

//var sentence = "this is our test sentence";
var sentence;
console.log("\n",sentence,"\n");

/* for loops instead of forEach*/
function jozzie(sentence){
    var words = sentence.split(" ");
    console.log("\n","array of words:",words,"\n");
    
    let capz = [ ];
    
    for (var i = 0; i < words.length ; i++) {
        words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
        capz.push(words[i]);
    }
    
    console.log("\n","capitalized list:",capz,"\n");
    var unity = capz.join(" ");
    console.log("\n","final sentence:",unity,"\n");
    
    return unity;
    
}

console.log("\n" ,jozzie(sentence));

module.exports = {jozzie};
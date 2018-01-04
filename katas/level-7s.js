// COMP 101B

// ONE: https://www.codewars.com/kata/mumbling/train/javascript
function accum(s) {
	let mumArr = [];
	for (let i = 0; i < s.length; i++){
	  mumArr[i] = s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
	}
	return mumArr.join("-");
}



// TWO: https://www.codewars.com/kata/get-the-middle-character/train/javascript
function getMiddle(s){
    return s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length/2 - 1] + s[s.length / 2]
}



// THREE: https://www.codewars.com/kata/highest-and-lowest/train/javascript
function highAndLow(numbers){
    let myArr = numbers.split(" ")
    for(let i = 0; i < myArr.length; i++){
      myArr[i] = parseInt(myArr[i])
    }
    let hi = myArr.reduce(function(a,b){
      return Math.max(a,b)
    })
    let lo = myArr.reduce(function(a,b){
      return Math.min(a,b)
    })
    return hi + " " + lo
 }
 



// FOUR: https://www.codewars.com/kata/jaden-casing-strings/train/javascript
String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  };
  


// FIVE: https://www.codewars.com/kata/complementary-dna/train/javascript
function DNAStrand(dna){
    let dnas = []
    for(let i = 0; i < dna.length; i++){
      console.log(dna[i])
      switch(dna[i]){
        case 'A':
          dnas.push('T')
          break;
        case 'T':
          dnas.push('A')
          break;
        case 'G':
          dnas.push('C')
          break;
        case 'C':
          dnas.push('G')
          break;
      }
    }
    return dnas.join("")
  }

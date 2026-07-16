const name = "Noman-aroraBonsai"
const repoCount = 50


console.log(`Hello my name is ${name} and my repo count ${repoCount}`)





const gameName = new String('Noman')

console.log(gameName[0]);
console.log(gameName.__proto__);


const newString = gameName.substring(0, 3)
console.log(newString)


const anoString = gameName.slice(-8, 4)
console.log(anoString)



const newStringOne = "  Noman   "

console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://myself.com/me%20newordfd"

console.log(url.replace('%20', '-'))

console.log(url.includes('myself'))


console.log()

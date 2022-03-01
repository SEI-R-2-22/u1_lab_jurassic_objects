// Movie Database (quick warmup)

// const blade = {
//   title: 'Blade',
//   director: 'Stephen Norrington',
//   actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
//   releaseYear: 1998,
//   duration: 120
// }

// console.log(blade.title)
// console.log(blade.director)
// console.log(blade.releaseYear)
// blade.duration = blade.duration + 25
// console.log(blade)




// Hammond Mines

// Part 1
const snakewaterMontana = {
  paleontologist: 'Dr. Alan Grant',
  depth: '10 meters',
  specimen: 'Velociraptor'
}

// 1.
let guestOfHonor = snakewaterMontana.paleontologist
// 2.
let cleverGirl = snakewaterMontana.specimen


// Part 2
const nicaragua = {
  depth: '200 meters',
  annualBudget: 1500000,
  specimens: [
    'Tyrannosaurus Rex',
    'Stegosaurous',
    'Triceratops',
    'Velociraptor'
  ]
}

// 1.
let nicaraguanSpecimens = nicaragua.specimens
// 2.
let favoriteSpecimen = nicaraguanSpecimens[1] // whichever dinosaur is your favorite
// 3.
nicaragua.annualBudget = nicaragua.annualBudget + 250000


// Part 3
const hammondsMines = {
  buenos_aires: {
    depth: '400 meters',
    annualBudget: 1000000,
    specimens: ['Dilophosaurus', 'Brachiosaurus']
  },
  mexico: {
    depth: '350 meters',
    annualBudget: 900000,
    specimens: ['Gallimimus', 'Parasaurolophus']
  }
}

// 1.
let mineDepthInMexico = hammondsMines.mexico.depth
// 2.
let budgetOfBuenosAires = hammondsMines.buenos_aires.annualBudget
// 3.
console.log(hammondsMines.buenos_aires.specimens)
// 4.
hammondsMines.nicaragua = nicaragua
// 5.
let buenosAiresBudget = hammondsMines.buenos_aires.annualBudget
let mexicoBudget = hammondsMines.mexico.annualBudget
let nicaraguaBudget = hammondsMines.nicaragua.annualBudget
// 6.
let totalBudget = buenosAiresBudget + mexicoBudget + nicaraguaBudget
// 7.
console.log(hammondsMines.mexico.specimens[1])

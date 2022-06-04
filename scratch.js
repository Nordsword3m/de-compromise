import nlp from './src/index.js'

nlp.verbose('tagger')


// können (can, to be able to), 
// müssen (must, to have to), 
// wollen (will, to want to), 
// sollen (should, am to, ought to, to be supposed to), 
// dürfen (may, to be allowed to), 
// mögen (to like, to like to).

let txt = ''
txt = ''
txt = 'butterweich' //soft as butter
txt = 'ausbrechen'
txt = 'Ausbruch' //breakout
txt = 'Bananenbrot' //bananabread
txt = 'Siebentausendzweihundertvierundfünfzig' //7254
txt = 'Schneeeule' //snow owl
txt = 'Fallschirmspringerschule'//parachute jumper school 

let doc = nlp(txt)
doc.compute('splitter')
doc.debug()
console.log(JSON.stringify(doc.json(), null, 2))

// proof-of-concept verb-conjugation
// let conjugate = dok.methods.one.transform.conjugate
// console.log(conjugate.toPast('verabschieden'))
// console.log(conjugate.fromPast('verabschiedete'))
// // ["verabschieden", "verabschiedete"]
// console.log(conjugate.toPresent('wissen'))
// console.log(conjugate.fromPresent('weiß'))
// // ["wissen","weiß"]

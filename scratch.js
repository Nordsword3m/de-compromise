import nlp from './src/index.js'

// nlp.verbose('tagger')


// können (can, to be able to), 
// müssen (must, to have to), 
// wollen (will, to want to), 
// sollen (should, am to, ought to, to be supposed to), 
// dürfen (may, to be allowed to), 
// mögen (to like, to like to).

let txt = ''
txt = ''
txt = 'fünf'
txt = 'fünfhundert'
txt = 'sechshundert'
txt = 'sechsundzwanzig'
// txt = '30'
txt = '22'
txt = '10000'
// txt = 'Wir kommen am 7. September vorbei.'
// txt = 'Am 5. Mai um 20.20 Uhr feiern wir mit 20.000 Margaritas.'
// txt = 'hunderterste'
// txt = 'zweiundzwanzig'
// txt = 'zweihunderteins'
// txt = 'dreiunddreiβig'
// txt = 'einhunderteinunddreißig'
// txt = 'eine million'

let doc = nlp(txt).debug()
let num = doc.numbers()
num.toText()
num.debug()
// num.toOrdinal()
// num.debug()
// console.log(doc.docs)
// console.log(num.json())
// doc.debug()
// console.log(JSON.stringify(doc.json(), null, 2))

// proof-of-concept verb-conjugation
// let conjugate = dok.methods.one.transform.conjugate
// console.log(conjugate.toPast('verabschieden'))
// console.log(conjugate.fromPast('verabschiedete'))
// // ["verabschieden", "verabschiedete"]
// console.log(conjugate.toPresent('wissen'))
// console.log(conjugate.fromPresent('weiß'))
// // ["wissen","weiß"]

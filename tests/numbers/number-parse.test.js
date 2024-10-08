import test from 'tape'
import nlp from '../_lib.js'
let here = '[de-number-parse] '
nlp.verbose(false)

let arr = [
  // [0, "null"],
  [1, "eins"],
  [2, "zwei"],
  [3, "drei"],
  [4, "vier"],
  [5, "fünf"],
  [6, "sechs"],
  [7, "sieben"],
  [8, "acht"],
  [9, "neun"],
  [10, "zehn"],
  [11, "elf"],
  [12, "zwölf"],
  [13, "dreizehn"],
  [14, "vierzehn"],
  [15, "fünfzehn"],
  [16, "sechzehn"],
  [17, "siebzehn"],
  [18, "achtzehn"],
  [19, "neunzehn"],
  [20, "zwanzig"],
  [21, "einundzwanzig"],
  [22, "zweiundzwanzig"],
  [23, "dreiundzwanzig"],
  [24, "vierundzwanzig"],
  [25, "fünfundzwanzig"],
  [26, "sechsundzwanzig"],
  [27, "siebenundzwanzig"],
  [28, "achtundzwanzig"],
  [29, "neunundzwanzig"],
  [30, "dreißig"],
  [31, "einunddreißig"],
  [32, "zweiunddreißig"],
  [33, "dreiunddreißig"],
  [34, "vierunddreißig"],
  [35, "fünfunddreißig"],
  [36, "sechsunddreißig"],
  [37, "siebenunddreißig"],
  [38, "achtunddreißig"],
  [39, "neununddreißig"],
  // [31, "einunddreiβig"],
  // [32, "zweiunddreiβig"],
  // [33, "dreiunddreiβig"],
  // [34, "vierunddreiβig"],
  [40, "vierzig"],
  [41, "einundvierzig"],
  [42, "zweiundvierzig"],
  [43, "dreiundvierzig"],
  [44, "vierundvierzig"],
  [45, "fünfundvierzig"],
  [46, "sechsundvierzig"],
  [47, "siebenundvierzig"],
  [48, "achtundvierzig"],
  [49, "neunundvierzig"],
  [50, "fünfzig"],
  [51, "einundfünfzig"],
  [52, "zweiundfünfzig"],
  [53, "dreiundfünfzig"],
  [54, "vierundfünfzig"],
  [55, "fünfundfünfzig"],
  [56, "sechsundfünfzig"],
  [57, "siebenundfünfzig"],
  [58, "achtundfünfzig"],
  [59, "neunundfünfzig"],
  [60, "sechzig"],
  [61, "einundsechzig"],
  [62, "zweiundsechzig"],
  [63, "dreiundsechzig"],
  [64, "vierundsechzig"],
  [65, "fünfundsechzig"],
  [66, "sechsundsechzig"],
  [67, "siebenundsechzig"],
  [68, "achtundsechzig"],
  [69, "neunundsechzig"],
  [70, "siebzig"],
  [71, "einundsiebzig"],
  [72, "zweiundsiebzig"],
  [73, "dreiundsiebzig"],
  [74, "vierundsiebzig"],
  [75, "fünfundsiebzig"],
  [76, "sechsundsiebzig"],
  [77, "siebenundsiebzig"],
  [78, "achtundsiebzig"],
  [79, "neunundsiebzig"],
  [80, "achtzig"],
  [81, "einundachtzig"],
  [82, "zweiundachtzig"],
  [83, "dreiundachtzig"],
  [84, "vierundachtzig"],
  [85, "fünfundachtzig"],
  [86, "sechsundachtzig"],
  [87, "siebenundachtzig"],
  [88, "achtundachtzig"],
  [89, "neunundachtzig"],
  [90, "neunzig"],
  [91, "einundneunzig"],
  [92, "zweiundneunzig"],
  [93, "dreiundneunzig"],
  [94, "vierundneunzig"],
  [95, "fünfundneunzig"],
  [96, "sechsundneunzig"],
  [97, "siebenundneunzig"],
  [98, "achtundneunzig"],
  [99, "neunundneunzig"],
  [100, "einhundert"],
  [101, 'einhunderteins'],
  [102, 'einhundertzwei'],
  [103, 'einhundertdrei'],
  [110, 'einhundertzehn'],
  [111, 'einhundertelf'],
  [120, 'einhundertzwanzig'],
  [121, 'einhunderteinundzwanzig'],
  [130, 'einhundertdreißig'],
  [131, 'einhunderteinunddreißig'],
  [140, 'einhundertvierzig'],
  [150, 'einhundertfünfzig'],
  [200, 'zweihundert'],
  [201, 'zweihunderteins'],
  [210, 'zweihundertzehn'],
  [300, 'dreihundert'],
  [400, 'vierhundert'],
  [500, 'fünfhundert'],
  [578, 'fünfhundertachtundsiebzig'],
  [600, 'sechshundert'],
  [700, 'siebenhundert'],
  [800, 'achthundert'],
  [900, 'neunhundert'],
  [1000, 'eintausend'],
  [1101, 'eintausendeinhunderteins'],
  [2000, 'zweitausend'],
  [3000, 'dreitausend'],
  [4000, 'viertausend'],
  [5000, 'fünftausend'],
  [6000, 'sechstausend'],
  [7000, 'siebentausend'],
  [8000, 'achttausend'],
  [9000, 'neuntausend'],
  [10000, 'zehntausend'],
  [100000, 'einhunderttausend'],//	one hundred thousand
  [500000, 'fünfhunderttausend'],//	five hundred thousand
  // [1000000, 'eine million'],//	one million
  // [2000001, 'zwei millionen eins'],//	two million one
  // [1000000000, 'eine milliarde'],//	one billion
]

test('match:', function (t) {
  arr.forEach(a => {
    let [n, str] = a
    let doc = nlp(str)
    // t.equal(doc.has('#Value'), true, here + ' [tag] ' + str)
    let num = doc.numbers().get()[0]
    t.equal(num, n, here + ' [parse] ' + str)

    doc = nlp(String(n))
    doc.numbers().toText()
    t.equal(doc.text(), str, here + ' [fmt] ' + str)

  })
  t.end()
})



test('misc:', function (t) {
  let doc = nlp('342').numbers().toOrdinal()
  t.equal(doc.text(), '342.', here + 'num-ord')

  doc = nlp('dreihundertsiebzigsten').numbers().toNumber().toOrdinal()
  t.equal(doc.text(), '370.', here + 'num-word-ord')
  t.end()
})
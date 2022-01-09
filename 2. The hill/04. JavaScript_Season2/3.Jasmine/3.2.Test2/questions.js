let CreationTableauLangages =  () => ["Html", "CSS", "Java", "PHP"]

let CreationTableauNombres =  () => [...Array(6).keys()]
// Or [0, 1, 2, 3, 4, 5] to play it lazy

let RemplacementElement =  (langages) => langages.map((langage, index) => index === 2 ? "Javascript" : langage)
// langages.splice(2, 1, Javascript) + return langages works just fine as well

let AjoutElementLangages =  (langages) => {
    const LANGUAGES = ["Ruby", "Python"]
    return langages.concat(LANGUAGES)
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1)
    return nombres
}

let SuppressionPremierElement =  (langages) => {
    langages.shift() // splice(0, 1)
    return langages
}

let SuppressionDernierElement =  (langages) => {
    langages.pop() // splice(-1)
    return langages
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => reseaux_sociaux_chaine.split(",")

let ConversionTableauChaine =  (langages) => langages.join(",")

let TriTableau =  (reseaux_sociaux) => reseaux_sociaux.sort()

let InversionTableau =  (langages) => langages.reverse()

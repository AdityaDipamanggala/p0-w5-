function changeVocals (str) {
    var arrKata = []
    var arrKataBaru = []
    var kataBaru = ``
    for (var i = 0 ; i < str.length ; i++){
        arrKata.push(str[i])
    }
    for (var a = 0 ; a < arrKata.length ; a++){
        if (arrKata[a] === `a`) {
            arrKataBaru.push(`b`)
        }
        else if (arrKata[a] === `i`) {
            arrKataBaru.push(`j`)
        }
        else if (arrKata[a] === `u`) {
            arrKataBaru.push(`v`)
        }
        else if (arrKata[a] === `e`) {
            arrKataBaru.push(`f`)
        }
        else if (arrKata[a] === `o`) {
            arrKataBaru.push(`p`)
        }
        else if (arrKata[a] === `A`) {
            arrKataBaru.push(`B`)
        }
        else if (arrKata[a] === `I`) {
            arrKataBaru.push(`J`)
        }
        else if (arrKata[a] === `U`) {
            arrKataBaru.push(`V`)
        }
        else if (arrKata[a] === `E`) {
            arrKataBaru.push(`F`)
        }
        else if (arrKata[a] === `O`) {
            arrKataBaru.push(`P`)
        }
        else{
            arrKataBaru.push(arrKata[a])
        }
    }
    for (var j = 0 ; j < str.length ; j++){
        kataBaru += arrKataBaru[j]
    }
    return kataBaru
}
  
function reverseWord (str) {
    var kataTerbalik = ``
    for (var a = str.length-1 ; 0 <= a ; a--){
        kataTerbalik += str[a]
    }
    return kataTerbalik
}

function setLowerUpperCase (str) {
    var arrKalimat = []
    var arrKalimatBaru = []
    var hasil = ``
    for (var i = 0 ; i <= str.length-1 ; i++){
        arrKalimat.push(str[i])
    } 
    for (var a = 0 ; a <= arrKalimat.length-1 ; a++){
        if (arrKalimat[a] === arrKalimat[a].toLowerCase()){
            arrKalimatBaru.push(arrKalimat[a].toUpperCase())
        }
        else {
            arrKalimatBaru.push(arrKalimat[a].toLowerCase())        }
    }   
    for (var j = 0 ; j <= arrKalimatBaru.length-1 ; j++){
        hasil += arrKalimatBaru[j]
    }
    return hasil
}
  
function removeSpaces (str) {
    var tanpaSpasi = ``
    for (var i = 0 ; i <= str.length-1 ; i++){
        if (str[i] !== ` `){
            tanpaSpasi += str[i]
        }
    } 
    return tanpaSpasi
}

function passwordGenerator (name) {
    if (name.length > 5){
        var hasil = changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
        return hasil
    }
    else{
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
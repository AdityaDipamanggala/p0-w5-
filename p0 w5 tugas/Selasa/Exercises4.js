function totalDigitRekursif(angka) {
    var strAngka = String(angka)
    var i = 0
    if (strAngka <= 0){
        return 0
    }
    else{
       return Number(strAngka[i]) + totalDigitRekursif(angka - Number(strAngka[i] * 10 ** (strAngka.length-1)))
    }
    
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

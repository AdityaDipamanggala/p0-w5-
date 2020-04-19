function kaliTerusRekursif(angka) {
    var strAngka = String(angka)
    var hasil = 1
    for (var a = 0 ; a <= strAngka.length-1 ; a++){
        hasil *= Number(strAngka[a])
     }
     if (strAngka.length === 1){
        return hasil
    }
    else{
       return kaliTerusRekursif(hasil)
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
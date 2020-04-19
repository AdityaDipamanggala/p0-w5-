function sorting(arrNumber) {
    for ( var a = 0 ; a <= arrNumber.length-1 ; a ++){
        for ( var b = 0 ; b <= arrNumber.length-1 ; b++ ){
            if (arrNumber[b] < arrNumber[b+1]) {
                var temp
                temp = arrNumber[b]
                arrNumber[b] = arrNumber[b+1]
                arrNumber[b+1] = temp
            }
        }
    }
    return arrNumber
}
  
function getTotal(arrNumber) {
    if(arrNumber.length === 0){
        return `""`
    }
    else{
        var count = 0
        for ( var a = 0 ; a < arrNumber.length ; a ++){
            if (arrNumber[a] === arrNumber[0]){
                count++
            }
        }
        var hasil = `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${count} kali`
    }   return hasil
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''
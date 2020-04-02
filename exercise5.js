function palindrome(kata) {
    // you can only write your code here!

    var kalimat = kata.length -1
    var balik = '' 
    console.log(kalimat)
  
    for(i = 0; kalimat >= i; kalimat--){
        balik += kata[kalimat]
    }
    if(balik == kata){
        return true
    }else{
        return false
    } 
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

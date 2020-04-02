function angkaPalindrome(num) {
  // you can only write your code here!

        while(num){
          num++
          var nomor = num.toString()
          var nb = ''
          for (i = nomor.length-1; i >= 0 ; i--){
              nb += nomor[i]
          }
          if (nb == nomor){
              return nb
          }
      }

 }



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
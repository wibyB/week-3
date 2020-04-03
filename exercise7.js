function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var jumkal= 1
    var cek = false
    for(i = 0 ; i <kalimat.length-1 ;i++){
      if (kalimat[i,i+1] == ' '){
        cek = true
        jumkal++
      }
    }
    return jumkal
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5‘ Berapa Jumlah kata ini? ‘
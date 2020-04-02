function pasanganTerbesar(num) {
    // you can only write your code here!
    var nostring = String(num)
    var temp = 0
    var temp2 = 0
    for(i= 0; i <nostring.length; i++ ){
        temp = Number(nostring[i] + nostring[i+1])
        if(temp > temp2){
            temp2 = temp
        }
    }
    return temp2

    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
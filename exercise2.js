function balikKata(kata) {

    var kalimat = kata.length -1
    var balik = '' 
    // var i = 0

    // while (kalimat > i){
    //     kalimat--
    //     balik += kata[kalimat]
    // }    
    // return balik


    for(i = 0; kalimat >= i; kalimat--){
        balik += kata[kalimat]
    }

    return balik
  }

  console.log(balikKata('hello world!'))
function groupAnimals(animals) {
    // you can only write your code here!
    var hewan = []
    var kelhewan =[]
    var alp = 'abcdefghijklmnopqrstuvwxyz'
    for(i= 0 ; i<alp.length ; i++){
        hewan = []
      for(j = 0; j< animals.length; j++){
          if(alp[i] == animals[j][0]){
             hewan.push(animals[j])
          }
        //  console.log(hewan[j])
      }
      if(hewan.length > 0){
        kelhewan.push(hewan)
        }
    }
    
    return kelhewan
  }
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
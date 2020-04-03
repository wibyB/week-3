function targetTerdekat(arr) {
  // you can only write your code here!
  var arx = []
  var cek = false
  var jarak = arr.length
  var aro = []
  for(i = 0; i < arr.length; i++){
    if(arr[i]=='o'){
      aro.push(i)
    }
    if(arr[i]=='x'){
      arx.push(i)
      cek = true
    }
  }
  if(cek){
    for(j = 0 ; j < arx.length ; j++){
      if(Math.abs(aro[0] - arx[j]) < jarak){
        jarak = Math.abs(aro[0] - arx[j])
      }
    }
    return jarak
  }else{
    return 0
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
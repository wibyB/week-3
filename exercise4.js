var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,1, 'Roman Alamsyah Elsharawy')
    input.splice(2,1,'Provinsi Bandar Lampung')
    input.splice(4,1, 'Pria')
    input.splice(5,0,'SMA Internasional Metro')
    console.log (input)
    var tgl = input[3].split('/')
    var bulan = (tgl[1])
    switch(bulan){
        case '01' :
            console.log('januari')
            break
        case '02' :
            console.log('februari')
            break
        case '04' :
            console.log('april')
            break
        case '05':
            console.log('mei')
            break
        case '06':
            console.log('juni')
            break
        case '07' :
            console.log('juli')
            break
        case '08' :
            console.log('agustus')
            break
        case '09' :
            console.log('september')
            break
        case '10':
            console.log('oktober')
            break
        case '11':
            console.log('november')
            break
        case '12' :
            console.log('desember')
            break
    }
    console.log(tgl)
    var tglgabung = tgl.join('-')
    console.log(tglgabung)
    var batasnama = input[1].slice(0,15)
    console.log(batasnama)
}

dataHandling2(input) 

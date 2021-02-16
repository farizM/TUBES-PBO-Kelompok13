const prompt = require('prompt-sync')()
//Constructor untuk buku 
function Buku(judulBuku, penulis, tahunTerbit, penerbit, harga){
  this.judulBuku = judulBuku
  this.penulis = penulis
  this.tahunTerbit = tahunTerbit
  this.penerbit = penerbit
  this.harga = harga
  
  // Fungsi untuk menampilkan data buku
  this.tampil = function(){
    console.log('Judul Buku\t\t\t\t\t   : ', this.judulBuku)
    console.log('Penulis\t\t\t\t\t: ', this.penulis)
    console.log('Tahun Terbit\t\t\t: ', this.tahunTerbit)
    console.log('Penerbit\t\t\t\t: ', this.penerbit)
    console.log('Harga\t: ', this.harga)
  } 
}
  
// Array
// Deklarasi array tanpa value
var array = []
 
// Object 
// Deklarasi object tanpa value
var buku = {} 

var cek = false
//tampilan menu
do{
  console.log('Pendataan Buku')
  console.log()
  
  console.log('Pilihan :')
  console.log('1. Tambah Buku')
  console.log('2. Edit Buku')
  console.log('3. Tampilkan Data Buku')
  console.log('4. Exit')
  console.log()
  let pil = prompt('Masukkan Pilihan : ')

  console.log()
//menu Pilihan 1
  if(pil == 1){
    let jmlBuku = prompt('Masukkan Jumlah Buku\t: ')

    for (let i = 0; i < jmlBuku; i++) {
      console.log(`\nBuku ke-${i}`);  
      buku = new Buku(
        prompt(`Judul Buku\t\t\t: `), 
        prompt(`Penulis\t\t\t: `), 
        prompt(`Tahun terbit\t\t\t: `),
        prompt(`penerbit\t\t\t\t: `),
        prompt(`harga\t\t\t: `)
      )
      array.push(buku)
    }
    console.log()

  //menu pilihan 2 
  }else if(pil == 2){
    var noBuku = prompt('Masukkan nomor urut buku\t: ')     
    Buku.prototype.edit = function(){
      judulBuku = prompt(`Judul Buku\t\t\t: `), 
      penulis = prompt(`Penulis\t\t\t: `), 
      tahunTerbit = prompt(`Tahun Terbit\t\t\t: `),
      penerbit = prompt(`Penerbit\t\t\t\t: `),
      harga = prompt(`Harga\t\t\t: `),
      tampil = this.tampil
      return {judulBuku, penulis, tahunTerbit, penerbit, harga, tampil}
    } 
    
    let index = noBuku-1
    array[index] = array[index].edit()
    
    console.log('\nData Telah diubah')
    console.log()

   //menu pilihan 3 
  }else if(pil == 3){
    index = 1
  
    //output program
    for (let x in array){
      console.log(`\nBuku ke-${index}`);
      index++;
      array[x].tampil()
    }
  console.log()

  }else if(pil == 4){
    cek = true
    console.log('Program Selesai')
  //Jika Pilihan input tidak sesuai 
  }else{
    console.log('inputan Tidak Sesuai')
    console.log()
  }
}while(!cek)
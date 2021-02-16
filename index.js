const prompt = require('prompt-sync')()
//Constructor untuk buku 
function Buku(judulBuku, penulis, tahunTerbit, penerbit, harga){
  this.judulBuku = judulBuku
  this.penulis = penulis
  this.tahunTerbit = tahunTerbit
  this.penerbit = penerbit
  this.harga = harga

  this.tampil = function(){

    console.log('Judul Buku\t\t\t\t\t: ', this.judulBuku)
    console.log('Penulis\t\t\t\t\t: ', this.penulis)
    console.log('Tahun Terbit\t\t\t: ', this.tahunTerbit)
    console.log('Penerbit\t\t\t\t: ', this.penerbit)
    console.log('Harga\t: ', this.harga)
    this.extra()
  }
  this.extra = function(){
    console.log('Edisi\t\t\t: ', this.edisi)
    console.log('Berwarna\t\t: ', this.berwarna)
    console.log('Halaman\t\t\t:', this.halaman)
  } 
}
 function Majalah(judul, penulis, tahunTerbit, penerbit,harga,edisi) {
  Buku.call(this, judul, penulis, tahunTerbit, penerbit,harga)
  this.edisi = edisi
}
Majalah.prototype = new Buku()

function Komik(judul, penulis, tahunTerbit, penerbit,harga,berwarna){
  Buku.call(this,judul, penulis, tahunTerbit, penerbit,harga)
  this.berwarna = berwarna
}
Komik.prototype = new Buku()

function Novel(judul,penulis,tahunTerbit,penerbit,harga,halaman){
  Buku.call(this,judul,penulis,tahunTerbit,penerbit,harga)
  this.halaman = halaman
}
Novel.prototype = new Buku()
  // Fungsi untuk menampilkan data buku
 


  
// Array
// Deklarasi array tanpa value
var array = [] 
// Object 
// Deklarasi object tanpa value
var buku = {} 

var cek = false
//tampilan menu
do{
  console.log()
  console.log('Pendataan Buku')
  console.log()
  
  console.log('Menu :')
  console.log('1. Tambah Buku')
  console.log('2. Edit Buku')
  console.log('3. Tampilkan Data Buku')
  console.log('4. Exit')
  console.log()
  let pil = prompt('Masukkan Pilihan Menu\t: ')

  console.log()
//Menampilkan menu Pilihan 1
  if(pil == 1){

  let jmlBuku = prompt('Masukkan Jumlah Buku\t: ')
       for (let i = 0; i < jmlBuku; i++) {
       console.log(`\nBuku ke-${i}`);
       let judulBuku = prompt(`Judul Buku\t\t\t: `)
       let penulis = prompt(`Penulis\t\t\t: `)
       let tahunTerbit = prompt(`Tahun terbit\t\t\t: `)
       let penerbit = prompt(`Penerbit\t\t\t\t: `)
       let harga = prompt(`Harga\t\t\t: `)
       
        console.log()
        console.log('Tipe Buku: ')
        console.log('1.Novel')
        console.log('2.Komik')
        console.log('3.Majalah')
        let tipebuku = prompt('Masukan Tipe Buku\t: ')

       if ( tipebuku == 1){
        const novel = new Novel(
        judulBuku,
        penulis,
        tahunTerbit,
        penerbit,
        harga,
        prompt(`Edisi:\t` )   
        
      )
      array.push(novel)
  }
   
    else if ( tipebuku == 2){
      const komik = new Komik(
        judulBuku,
        penulis,
        tahunTerbit,
        penerbit,
        harga,
        prompt(`Berwarna :\t` ) 
      )
      array.push(komik)
    }
    
    else if ( tipebuku == 3){
      const majalah = new Majalah(
        judulBuku,
        penulis,
        tahunTerbit,
        penerbit,
        harga,
        prompt(`Edisi:\t` ) 
      )
      array.push(majalah)
    }

    else{
      console.log('Tipe Buku tidak tersedia')
      console.log
    }
       
       }
  }else if(pil == 2){
    var noBuku = prompt('Masukkan nomor urut buku\t: ')
     
    // Tambah fungsi baru ke constructor
    Buku.prototype.edit = function(){
      judulBuku = prompt(`Judul Buku\t\t\t: `), 
      penulis = prompt(`Penulis\t\t\t: `), 
      tahunTerbit = prompt(`Tahun Terbit\t\t\t: `),
      penerbit = prompt(`Penerbit\t\t\t\t: `),
      harga = prompt(`Harga\t: `),
      tampil = this.tampil
      return {judulBuku, penulis, tahunTerbit, penerbit, harga, tampil}
    } 
    
    let index = noBuku-1
    array[index] = array[index].edit()
    
    console.log('\nData Telah diubah')
    console.log()
   
  }else if(pil == 3){
    index = 1
  
    // Mencetak output program
    for (let x of array){
      console.log(`\nBuku ke-${index}`);
      index++;
      x.tampil()
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
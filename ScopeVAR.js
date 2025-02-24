var nilaiUjian = 200;            // Variabel scope terluar, bisa diakses di semua blok
{
   var jumlahSoal = 100;        // Variabel scope tengah, hanya bisa diakses di blok ini dan blok dalam
   {
       var hasilAkhir = "lulus"; // Variabel scope terdalam, hanya bisa diakses di blok ini saja
       console.log(nilaiUjian);  // -> 200 (Bisa mengakses variabel dari scope terluar)
       console.log(jumlahSoal);  // -> 100 (Bisa mengakses variabel dari scope di atasnya)
       console.log(hasilAkhir);  // -> lulus (Mengakses variabel di scope yang sama)
   }
   console.log(nilaiUjian);      // -> 200 (Masih bisa mengakses variabel scope terluar)
   console.log(jumlahSoal);      // -> 100 (Mengakses variabel di scope yang sama)
   console.log(hasilAkhir);      // -> lulus (Karena var memiliki function-level scope)
}

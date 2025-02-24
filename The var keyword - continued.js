var pesanGlobal = "Halo, "; // Variabel global, bisa diakses di mana saja dalam program

function tampilkanPesan() { // Fungsi untuk menampilkan pesan
    var pesanLokal = "Selamat Datang!"; // Variabel lokal, hanya bisa diakses di dalam fungsi ini
    console.log("Di dalam fungsi:"); // Menampilkan teks sebagai indikator
    console.log(pesanGlobal); // Menampilkan isi dari variabel global
    console.log(pesanLokal); // Menampilkan isi dari variabel lokal
}

tampilkanPesan(); // Memanggil fungsi tampilkanPesan untuk menjalankan kode di dalamnya

console.log("Di program utama:"); // Menampilkan teks indikator program utama
console.log(pesanGlobal); // Menampilkan isi dari variabel global
// console.log(pesanLokal); // Akan menyebabkan error karena pesanLokal hanya ada dalam fungsi

var nilaiUtama = 100; // Variabel global, bisa diakses di seluruh program

function cekNilai() { // Fungsi untuk menguji variabel lokal
    var nilaiSementara = 50; // Variabel lokal, hanya bisa diakses di dalam fungsi ini
    console.log(nilaiSementara); // Menampilkan nilai variabel lokal (200)
}

console.log(nilaiUtama); // Menampilkan nilai variabel global (100)
cekNilai(); // Memanggil fungsi cekNilai, yang akan mencetak 200 dari variabel lokal
console.log(nilaiUtama); // Menampilkan kembali nilai variabel global (100)

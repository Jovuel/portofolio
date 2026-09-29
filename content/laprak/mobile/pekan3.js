window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[4] = {
    "pekan": 4,
    "pekannum": 3,
    "tanggal": "29 September 2026",
    "title": "Input Widgets & Forms: Menangkap Data, Dropdown, dan Validasi",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter",
    "icon": "bi-ui-checks",
    "description": "Mempelajari implementasi form pada Flutter dengan menangkap input pengguna melalui TextEditingController, menggunakan widget dropdown statis, serta menerapkan validasi input untuk mencegah data kosong atau format yang salah.",
    "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
    "pendahuluan": "Formulir dalam kerangka kerja Flutter dibangun menggunakan beberapa komponen utama yang disebut sebagai pilar formulir. Komponen tersebut meliputi Form & GlobalKey yang merupakan wadah utama untuk memvalidasi berbagai macam masukan dari pengguna secara serentak, TextFormField yang merupakan kolom teks dengan kapabilitas validasi terintegrasi, serta TextController yang berfungsi sebagai pengendali untuk membaca, mengubah, dan menangkap teks yang diketik oleh pengguna. Terkait proses validasi, sistem berfungsi untuk mencegah tersimpannya data yang tidak sesuai format. Komponen penting dalam validasi meliputi fungsi Validator, di mana pengembalian nilai null mengindikasikan bahwa data yang dimasukkan valid, sedangkan pengembalian berupa string mengindikasikan bahwa data tidak valid dan akan ditampilkan sebagai pesan kesalahan.",
    "tujuan": [
        "Menangkap teks dari pengguna via controller.",
        "Menerapkan widget dropdown statis.",
        "Validasi input untuk mencegah data kosong atau format salah."
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Menginisialisasi file Dart dan mendefinisikan class AddTransactionScreen sebagai StatefulWidget.",
            "gambar": [
                "images/aplikasiMobile/pekan3/1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Membuat class _AddTransactionScreenState, mendeklarasikan GlobalKey _formKey untuk form, dan controller untuk text input judul serta nominal.",
            "gambar": [
                "images/aplikasiMobile/pekan3/2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Melakukan override pada metode dispose() untuk membersihkan controller saat tidak digunakan dan mulai menyusun kerangka UI dengan widget Scaffold.",
            "gambar": [
                "images/aplikasiMobile/pekan3/3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Menyusun form di dalam SingleChildScrollView dan menambahkan TextFormField untuk input 'Judul Transaksi' lengkap dengan validasi.",
            "gambar": [
                "images/aplikasiMobile/pekan3/4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Menambahkan TextFormField untuk input 'Nominal' dengan validasi khusus tipe angka bulat, serta widget DropdownButtonFormField untuk menu pilihan 'Kategori'.",
            "gambar": [
                "images/aplikasiMobile/pekan3/5.png"
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Membuat tombol ElevatedButton 'Simpan Transaksi' yang berfungsi memicu proses validasi form, dan jika berhasil akan memunculkan SnackBar pemberitahuan warna hijau.",
            "gambar": [
                "images/aplikasiMobile/pekan3/6.png"
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Mengatur file utama main.dart untuk menjalankan aplikasi dengan MaterialApp yang menghilangkan pita debug dan merujuk halaman utamanya ke AddTransactionScreen.",
            "gambar": [
                "images/aplikasiMobile/pekan3/7.png"
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Tampilan antarmuka awal form pencatatan transaksi yang telah berjalan, memperlihatkan field Judul, Nominal, Kategori beserta tombol Simpan Transaksi.",
            "gambar": [
                "images/aplikasiMobile/pekan3/8.png"
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "Pengguna dapat mengklik field dropdown 'Kategori' yang akan membuka opsi pilihan statis seperti Makanan, Transportasi, Hiburan, dan Lainnya.",
            "gambar": [
                "images/aplikasiMobile/pekan3/9.png"
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "Menguji sistem validasi input: Sistem menolak dan menampilkan pesan error warna merah 'Harus berupa angka bulat yang valid' ketika field nominal diisi dengan teks alih-alih angka.",
            "gambar": [
                "images/aplikasiMobile/pekan3/10.png"
            ]
        },
        {
            "nomor": 11,
            "deskripsi": "Ketika semua data yang diinputkan sudah valid dan sesuai format, form berhasil disubmit yang ditandai dengan munculnya pop-up notifikasi SnackBar hijau di bawah layar.",
            "gambar": [
                "images/aplikasiMobile/pekan3/11.png"
            ]
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "Memodifikasi state pada _AddTransactionScreenState dengan menambahkan _dateController bertipe TextEditingController untuk menampung data tanggal yang dipilih.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Menerapkan _dateController di dalam class State dan memodifikasi metode dispose() agar juga membersihkan memori controller tanggal saat widget dihancurkan.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Membuat input baru berupa TextFormField untuk Tanggal Transaksi dengan properti readOnly true agar user dipaksa berinteraksi dengan pop-up kalender (showDatePicker) melalui aksi onTap.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Melanjutkan pengaturan TextFormField untuk menyematkan tanggal yang telah di-pick ke dalam text controller, serta memastikan field tanggal divalidasi agar tidak boleh kosong. Pada ElevatedButton, nilai tanggal dimasukkan ke dalam teks SnackBar saat form sukses disubmit.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Mengupdate judul MaterialApp pada main.dart agar halaman menampilkan teks 'Expense Tracker Tugas Modul 3' yang mengindikasikan program versi latihan.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-5.png"
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Tampilan UI browser yang telah diperbarui, menampilkan empat kolom isian: Judul Transaksi, Nominal, Kategori, serta tambahan kolom Tanggal Transaksi.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-6.png"
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Ketika pengguna menekan kolom Tanggal Transaksi, akan muncul antarmuka kalender date-picker popup (showDatePicker) yang interaktif untuk memudahkan proses pemilihan.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-7.png"
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Mengisi seluruh data simulasi secara lengkap dan valid pada keempat input form, termasuk input tanggal yang kini berisikan data '29/9/2026'.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-8.png"
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "Hasil akhir saat form dikirim: SnackBar berhasil muncul dan menampilkan rangkuman data termasuk detail teks tanggal ('pada 29/9/2026') yang berhasil ditangkap sistem.",
            "gambar": [
                "images/aplikasiMobile/pekan3/lat-9.png"
            ]
        }
    ],
    "kesimpulan": "Pada pelaksanaan praktikum pekan ketiga, mahasiswa telah berhasil mengimplementasikan formulir pada aplikasi mobile berbasis Flutter dengan memanfaatkan StatefulWidget, GlobalKey, dan TextEditingController. Mekanisme penanganan masukan pengguna serta penerapan logika validasi pada komponen TextFormField dan DropdownButtonFormField juga telah dipahami dengan baik. Selain itu, modifikasi tambahan untuk menangani masukan waktu menggunakan utilitas showDatePicker telah berhasil diterapkan, mendemonstrasikan kapabilitas antarmuka pengguna interaktif yang memiliki tingkat akurasi dan validasi yang optimal."
};

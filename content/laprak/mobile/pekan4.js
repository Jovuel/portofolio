window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[5] = {
    "pekan": 5,
    "pekannum": 4,
    "tanggal": "6 Oktober 2026",
    "title": "Navigasi & Passing Data: Navigator, Konsep Stack, dan Constructor",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter",
    "icon": "bi-signpost-split",
    "description": "Mempelajari implementasi navigasi antar layar pada Flutter menggunakan konsep tumpukan (stack) melalui Navigator.push dan Navigator.pop, serta mendemonstrasikan pengiriman data antar layar menggunakan Constructor berparameter.",
    "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
    "pendahuluan": "Navigasi merupakan komponen esensial dalam pengembangan aplikasi mobile yang memiliki antarmuka multi-layar. Framework Flutter mengelola sistem rute atau halaman (route) menggunakan konsep tumpukan (stack). Proses navigasi maju difasilitasi oleh metode Navigator.push(), yang bertugas meletakkan antarmuka baru pada posisi teratas tumpukan. Sebaliknya, proses navigasi mundur dilakukan menggunakan metode Navigator.pop(), yang akan menghapus lapisan layar teratas untuk mengembalikan pengguna ke layar sebelumnya. Di samping perpindahan layar, kemampuan untuk mentransmisikan data antar halaman sangat krusial. Proses transmisi ini atau passing data direalisasikan dengan mendefinisikan parameter pada konstruktor kelas penerima, menggunakan variabel bersifat final dan required guna menjamin ketersediaan informasi saat instansiasi layar baru terjadi.",
    "tujuan": [
        "Menerapkan Navigator.push untuk berpindah ke layar baru.",
        "Menggunakan Navigator.pop untuk menutup layar setelah aksi selesai.",
        "Mengirim data antar layar melalui Constructor."
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Mengintegrasikan fungsionalitas Navigator.pop(context) pada layar penambahan transaksi. Metode ini berfungsi untuk menutup halaman form secara otomatis dan mengembalikan pengguna ke antarmuka dashboard segera setelah data berhasil tervalidasi dan disimpan.",
            "gambar": [
                "images/aplikasiMobile/pekan4/1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Mengonstruksi kelas TransactionDetailScreen sebagai StatelessWidget. Kelas ini mendefinisikan sekumpulan variabel final (title, amount, category, date) dan sebuah konstruktor berparameter required guna menerima transmisi data (passing data) dari layar sebelumnya.",
            "gambar": [
                "images/aplikasiMobile/pekan4/2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Mengimpor dependensi file add_transaction_screen.dart dan transaction_detail_screen.dart pada bagian atas file dashboard_screen.dart untuk memungkinkan proses routing ke layar-layar tersebut.",
            "gambar": [
                "images/aplikasiMobile/pekan4/3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Mengimplementasikan rute navigasi maju pada widget FloatingActionButton yang terdapat di DashboardScreen. Metode Navigator.push disematkan agar antarmuka form penambahan transaksi (AddTransactionScreen) dibuka ketika tombol tersebut ditekan.",
            "gambar": [
                "images/aplikasiMobile/pekan4/4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Menyusun struktur widget _buildBalancedCard() pada halaman dashboard guna merepresentasikan total saldo pengguna melalui elemen antarmuka berupa kartu berdesain gradien.",
            "gambar": [
                "images/aplikasiMobile/pekan4/5.png"
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Memodifikasi daftar transaksi menggunakan widget ListTile yang memiliki properti onTap. Fungsi tersebut mengeksekusi Navigator.push menuju TransactionDetailScreen, dengan secara eksplisit menyertakan argumen data transaksi (title, amount, category, date) pada konstruktornya.",
            "gambar": [
                "images/aplikasiMobile/pekan4/6.png"
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Mendefinisikan titik masuk utama (entry point) aplikasi pada file main.dart. Widget MaterialApp dikonfigurasi untuk menggunakan DashboardScreen sebagai halaman beranda (home) yang pertama kali dimuat.",
            "gambar": [
                "images/aplikasiMobile/pekan4/7.png"
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Tampilan antarmuka Dashboard Keuangan yang memvisualisasikan saldo utama serta riwayat transaksi. Terdapat sebuah FloatingActionButton berwarna merah di sudut kanan bawah yang berfungsi sebagai pemicu navigasi.",
            "gambar": [
                "images/aplikasiMobile/pekan4/8.png"
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "Antarmuka halaman Catat Transaksi terbuka sebagai respons dari eksekusi Navigator.push(). Halaman ini menyediakan formulir masukan data judul dan nominal transaksi.",
            "gambar": [
                "images/aplikasiMobile/pekan4/9.png"
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "Mensimulasikan proses penginputan data dengan mengisikan nilai 'makan malam' pada field Judul dan '20000000' pada field Nominal sebelum melakukan proses penyimpanan.",
            "gambar": [
                "images/aplikasiMobile/pekan4/10.png"
            ]
        },
        {
            "nomor": 11,
            "deskripsi": "Setelah tombol Simpan ditekan, Navigator.pop() langsung dieksekusi sehingga layar kembali ke Dashboard Keuangan. Mekanisme ini dibarengi dengan kemunculan notifikasi SnackBar hijau yang mengonfirmasi bahwa data berhasil disimpan.",
            "gambar": [
                "images/aplikasiMobile/pekan4/11.png"
            ]
        },
        {
            "nomor": 12,
            "deskripsi": "Tampilan Detail Transaksi yang memverifikasi keberhasilan proses passing data. Informasi terperinci berupa nama transaksi, nominal uang, kategori, dan tanggal berhasil dirender secara dinamis menyesuaikan data item list yang di-klik pengguna.",
            "gambar": [
                "images/aplikasiMobile/pekan4/12.png"
            ]
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "Mengawali penyusunan file form pencatatan transaksi yang difokuskan sebagai bagian dari penugasan, dengan mendeklarasikan StatefulWidget serta beberapa instance controller sebagai instrumen penangkap masukan teks.",
            "gambar": [
                "images/aplikasiMobile/pekan4/lat-1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Menambahkan kerangka TextFormField pada metode build untuk input judul dan nominal transaksi. Sistem divalidasi agar mengeluarkan peringatan error manakala field dibiarkan kosong, diakhiri dengan logika navigasi pop saat tombol Simpan dieksekusi.",
            "gambar": [
                "images/aplikasiMobile/pekan4/lat-2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Melakukan penyesuaian fungsionalitas FloatingActionButton di halaman dashboard. Properti onPressed dikonfigurasi menggunakan MaterialPageRoute untuk secara spesifik memanggil kelas rute penugasan, yaitu TaskAddTransactionScreen.",
            "gambar": [
                "images/aplikasiMobile/pekan4/lat-3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Menampilkan antarmuka hasil dari rute penugasan (Tugas) yang telah memuat elemen form tambahan, yakni sebuah TextFormField terdedikasi untuk input 'Tanggal Transaksi' yang divisualisasikan bersama ikon kalender.",
            "gambar": [
                "images/aplikasiMobile/pekan4/lat-4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Mendemonstrasikan berjalannya mekanisme validasi form pada field tanggal. Sistem menolak kelanjutan proses penyimpanan dan menampilkan pesan galat 'Tanggal wajib diisi' apabila pengguna menekan tombol Simpan tanpa menspesifikasikan data waktu transaksi.",
            "gambar": [
                "images/aplikasiMobile/pekan4/lat-5.png"
            ]
        }
    ],
    "kesimpulan": "Melalui praktikum pekan keempat ini, mahasiswa sukses memahami dan mengaplikasikan konsep navigasi layar pada framework Flutter. Mekanisme routing stack menggunakan utilitas Navigator.push dan Navigator.pop berhasil diintegrasikan guna memfasilitasi interaksi pengguna yang transisional. Di samping itu, kompetensi terkait arsitektur transmisi data (passing data) antar layar juga tercapai, terbukti dengan kemampuan sistem untuk melemparkan nilai variabel melalui parameter konstruktor kelas secara dinamis, sehingga komponen antarmuka sasaran dapat merepresentasikan informasi kontekstual secara akurat."
};

window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[6] = {
    "pekan": 6,
    "pekannum": 5,
    "tanggal": "26 Oktober 2026",
    "title": "Arsitektur Navigasi: Named Routes & Bottom Navigation Bar",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter",
    "icon": "bi-menu-button-wide-fill",
    "description": "Menerapkan arsitektur navigasi terpusat menggunakan Named Routes dan mengintegrasikan Bottom Navigation Bar multi-halaman (Beranda, Riwayat, Profil) serta transmisi argumen otentikasi login antar layar pada framework Flutter.",
    "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
    "pendahuluan": "Navigasi dalam arsitektur aplikasi mobile multi-layar membutuhkan manajemen rute yang terstruktur agar kode program tetap rapi, modular, dan mudah dipelihara. Pendekatan Named Routes pada Flutter menyediakan mekanisme pemetaan rute berbasis string yang didefinisikan secara terpusat di dalam widget MaterialApp. Hal ini mencegah ketergantungan langsung antar layar (spaghetti code) dan mempermudah pemanggilan navigasi melalui metode seperti Navigator.pushNamed() maupun Navigator.pushReplacementNamed(). Selain routing terpusat, antarmuka aplikasi modern umumnya memanfaatkan widget BottomNavigationBar sebagai navigasi lapis utama. BottomNavigationBar mengontrol pergantian widget tampilan utama (body) melalui pengelolaan indeks aktif (_selectedIndex) di dalam StatefulWidget tanpa merestart atau mengganti Scaffold induk. Melalui penggabungan Named Routes dan Bottom Navigation Bar, integrasi antar halaman seperti antarmuka autentikasi, dashboard, riwayat transaksi, hingga profil pengguna dapat terwujud dalam satu aliran navigasi yang kohesif serta mendukung pengiriman parameter (passing arguments) secara dinamis.",
    "tujuan": [
        "Menerapkan Named Routes untuk navigasi terpusat dan rapi.",
        "Membangun menu bawah (BottomNavigationBar) ala aplikasi modern.",
        "Mengintegrasikan Dashboard, Riwayat, dan Profil dalam satu wadah."
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Mengonfigurasi tabel peta rute (Named Routes) pada widget MaterialApp di dalam file main.dart. Rute awal diatur menuju '/login' melalui parameter initialRoute, serta memetakan pasangan rute berupa string '/login', '/main', dan '/add' ke kelas antarmuka masing-masing guna menjamin routing terpusat.",
            "gambar": [
                "images/aplikasiMobile/pekan5/1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Membangun komponen penampung tab utama (MainScreen) berbasis StatefulWidget pada file main_screen.dart. Kelas ini menangkap transmisi argumen email pengguna melalui ModalRoute, menyusun koleksi halaman _pages (DashboardScreen, HistoryScreen, ProfileScreen), dan mengontrol perubahan tab aktif melalui widget BottomNavigationBar.",
            "gambar": [
                "images/aplikasiMobile/pekan5/2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Menyusun struktur antarmuka DashboardScreen bagian atas pada file dashboard_screen.dart. Kelas didefinisikan menerima parameter userEmail, mengekstraksi identitas nama pengguna sebelum karakter '@', serta menampilkan kartu informasi saldo utama dengan salam pembuka yang dipersonalisasi.",
            "gambar": [
                "images/aplikasiMobile/pekan5/3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Melengkapi antarmuka DashboardScreen bagian bawah dengan menambahkan deretan tombol aksi transaksi cepat, daftar riwayat transaksi terakhir menggunakan ListTile, serta memperbarui logika FloatingActionButton agar memicu navigasi rute bernama Navigator.pushNamed(context, '/add').",
            "gambar": [
                "images/aplikasiMobile/pekan5/4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Mengimplementasikan antarmuka AddTransactionScreen pada file add_transaction_screen.dart yang menyediakan formulir masukan judul dan nominal transaksi, diakhiri dengan tombol 'Simpan Transaksi' yang mengeksekusi Navigator.pop(context) untuk menutup halaman formulir.",
            "gambar": [
                "images/aplikasiMobile/pekan5/5.png"
            ]
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "Menyusun kerangka formulir autentikasi pada file login_screen.dart (bagian 1) menggunakan StatefulWidget. Mendeklarasikan TextEditingController untuk email dan sandi, GlobalKey untuk validasi form, serta fungsi _login yang memicu Navigator.pushReplacementNamed menuju rute '/main' dengan menyertakan email sebagai argumen data.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Menyelesaikan implementasi antarmuka login_screen.dart (bagian 2) dengan melengkapi komponen TextFormField email dan kata sandi bersandi tersembunyi (obscureText), penyematan ikon awalan, validasi teks tidak boleh kosong, serta tombol Login dengan aksen warna amber.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Menginisialisasi halaman riwayat transaksi pada file history_screen.dart (bagian 1) dengan mendefinisikan kelas HistoryScreen sebagai StatelessWidget, serta menyusun koleksi data transaksi terstruktur (historyItems) yang mencakup atribut judul, tanggal, nominal, indikator pengeluaran (isExpense), dan ikon.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Merangkai tampilan daftar riwayat transaksi pada history_screen.dart (bagian 2) menggunakan widget ListView.builder. Komponen memvisualisasikan data ke dalam Card dan ListTile dengan penerapan warna kondisional (merah untuk pengeluaran dan hijau untuk pemasukan gaji).",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Membangun tampilan profil pengguna pada file profile_screen.dart (bagian 1) yang menerima parameter userEmail. Halaman melakukan transformasi nama pengguna menjadi huruf kapital dan menampilkan foto profil lingkaran (CircleAvatar) berukuran besar bersama teks nama pengguna.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-5.png"
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Melengkapi profile_screen.dart (bagian 2) dengan menampilkan teks alamat email pengguna dan tombol 'Logout' berwarna merah yang mengeksekusi Navigator.pushNamedAndRemoveUntil menuju rute '/login' guna mengakhiri sesi dan membersihkan tumpukan navigasi.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-6.png"
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Hasil visual antarmuka halaman login (/login) saat aplikasi pertama kali dijalankan. Formulir menampilkan ikon dompet, teks selamat datang, kolom masukan email dan sandi, serta tombol masuk yang siap digunakan.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-7.png"
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Hasil visual antarmuka beranda (/main) setelah proses autentikasi berhasil. Data email yang dikirim melalui argumen navigasi sukses diterima dan ditampilkan secara personal pada salam pembuka 'Halo, jovantri!' di atas kartu saldo, dengan tab Beranda aktif pada bilah menu bawah.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-8.png"
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "Hasil visual tab Profil Pengguna saat diakses melalui Bottom Navigation Bar. Menampilkan avatar akun, nama pengguna kapital JOVANTRI, rincian alamat email, dan tombol keluar (Logout), dengan tab Profil berstatus aktif.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-9.png"
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "Hasil visual tab Riwayat Transaksi saat diakses melalui Bottom Navigation Bar. Daftar transaksi tersaji secara terstruktur dengan pemisahan warna hijau (pemasukan) dan merah (pengeluaran), membuktikan berjalannya integrasi antar tab tanpa terjadi pergantian Scaffold utama.",
            "gambar": [
                "images/aplikasiMobile/pekan5/lat-10.png"
            ]
        }
    ],
    "kesimpulan": "Melalui praktikum pekan kelima ini, implementasi arsitektur navigasi pada framework Flutter berhasil dipelajari dan diwujudkan secara komprehensif. Penggunaan Named Routes terbukti memberikan struktur routing yang terorganisir, terpusat, dan mudah dikelola tanpa menimbulkan ketergantungan kode yang rumit. Selain itu, integrasi widget BottomNavigationBar berhasil menyatukan seluruh antarmuka utama seperti Beranda, Riwayat Transaksi, dan Profil Pengguna ke dalam satu wadah Scaffold yang dinamis dan efisien. Mekanisme pengiriman argumen data antar rute serta pembersihan tumpukan navigasi menggunakan Navigator.pushReplacementNamed dan Navigator.pushNamedAndRemoveUntil juga telah teruji secara optimal dalam skenario autentikasi login dan logout aplikasi."
};

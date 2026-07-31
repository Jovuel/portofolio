window.laprakData = window.laprakData || {};
window.laprakData[9] = {
  "pekan": 9,
  "tanggal": "10 Juni 2026",
  "title": "STUDI KASUS SISTEM INFORMASI SEKOLAH",
  "subject": "Pemrograman Web Laravel",
  "badge": "Studi Kasus Laravel",
  "icon": "bi-journal-code",
  "description": "Membahas implementasi studi kasus Sistem Informasi Sekolah (Sisfo) berbasis Laravel dengan mengintegrasikan template SB Admin 2, fitur CRUD User, penyimpanan level dalam format JSON, dan manajemen autentikasi.",
  "github": "https://github.com/Jovuel/laravel-sisfo",
  "pendahuluan": "Praktikum pekan ini bertujuan untuk menerapkan seluruh konsep dasar hingga tingkat lanjut pemrograman web menggunakan framework Laravel ke dalam sebuah studi kasus nyata, yaitu pengembangan Sistem Informasi Sekolah (Sisfo). Fokus utama dari praktikum ini adalah membangun sistem manajemen pengguna (User CRUD) yang terintegrasi dengan sistem autentikasi bawaan Laravel UI, serta merombak tampilan default-nya menggunakan tema Bootstrap populer, SB Admin 2. Selain mempelajari proses kustomisasi layout Blade menggunakan teknik pemisahan komponen (sidebar, topbar, dan footer), praktikum ini juga melatih mahasiswa untuk mengelola struktur data yang lebih dinamis di tingkat database. Hal ini ditunjukkan dengan penambahan kolom kustom seperti username, level, dan status pada tabel pengguna default, di mana hak akses (level) disimpan dalam format JSON untuk mengakomodasi skenario peran ganda (multiple roles) seperti ADMIN, GURU, dan STAFF pada satu akun pengguna.",
  "tujuan": [
    "Memahami alur kerja implementasi studi kasus nyata Sistem Informasi Sekolah (Sisfo) menggunakan framework Laravel.",
    "Mengintegrasikan template SB Admin 2 ke dalam layout engine Blade Laravel secara modular dan dinamis.",
    "Menggunakan library Laravel UI untuk membuat sistem autentikasi berbasis Bootstrap secara cepat dan terstruktur.",
    "Mengimplementasikan skema migrasi database kustom untuk memodifikasi tabel pengguna bawaan (users table).",
    "Mengelola penyimpanan data dengan tipe data JSON di database untuk merepresentasikan multi-role level user (ADMIN, GURU, STAFF).",
    "Mengimplementasikan operasi CRUD (Create, Read, Update, Delete) yang lengkap dan aman untuk mengelola data user."
  ],
  "langkahLangkah": [
    {
      "nomor": 1,
      "deskripsi": "Membuka folder proyek Laravel <b>laravel-sisfo</b> pada VS Code dan mengakses file konfigurasi <b>.env</b> untuk memulai pengaturan koneksi database.",
      "gambar": ["./images/laprak9/1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Menyesuaikan parameter database pada file <b>.env</b> dengan mengubah nilai <b>DB_DATABASE</b> menjadi <b>laravel_sisfo</b> agar terhubung dengan database MySQL yang telah dibuat.",
      "gambar": ["./images/laprak9/2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Menginstal library <b>laravel/ui</b> melalui terminal dengan menjalankan perintah <b>composer require laravel/ui</b> untuk menyediakan framework autentikasi bawaan Laravel.",
      "gambar": ["./images/laprak9/3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Melakukan instalasi scaffolding autentikasi berbasis Bootstrap dengan mengetikkan perintah <b>php artisan ui bootstrap --auth</b> pada terminal proyek.",
      "gambar": ["./images/laprak9/4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Mengunduh dan memasang seluruh library frontend (dependencies) yang diperlukan oleh Bootstrap dengan menjalankan perintah <b>npm install</b>.",
      "gambar": ["./images/laprak9/5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Menjalankan compiler asset Vite di latar belakang dengan perintah <b>npm run dev</b> agar perubahan asset CSS dan JS dapat langsung dirender di browser.",
      "gambar": ["./images/laprak9/6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Membuat berkas migrasi baru bernama <b>costum_table_users</b> dengan menjalankan perintah <b>php artisan make:migration costum_table_users</b> untuk menambahkan kolom khusus pada tabel users.",
      "gambar": ["./images/laprak9/7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Membuka file migrasi baru tersebut di folder <b>database/migrations</b> dan menambahkan kolom <b>username</b> (tipe string unik), <b>level</b> (tipe string untuk menampung JSON role), serta <b>status</b> (tipe enum ACTIVE/INACTIVE dengan default ACTIVE).",
      "gambar": ["./images/laprak9/8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Menerapkan rancangan tabel baru ke database MySQL dengan mengeksekusi perintah migrasi <b>php artisan migrate</b> melalui terminal.",
      "gambar": ["./images/laprak9/9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Membuat file seeder baru dengan menjalankan perintah <b>php artisan make:seeder AdminSeeder</b> guna menginisialisasi akun administrator utama.",
      "gambar": ["./images/laprak9/10.png"]
    },
    {
      "nomor": 11,
      "deskripsi": "Mengedit isi file seeder <b>database/seeders/AdminSeeder.php</b> untuk membuat data admin default. Kolom <b>level</b> diisi dengan role <b>ADMIN</b> yang diubah ke bentuk JSON menggunakan fungsi <b>json_encode()</b>, dan password dienkripsi dengan <b>Hash::make()</b>.",
      "gambar": ["./images/laprak9/11.png"]
    },
    {
      "nomor": 12,
      "deskripsi": "Memasukkan data admin tersebut ke database menggunakan perintah <b>php artisan db:seed --class=AdminSeeder</b>.",
      "gambar": ["./images/laprak9/12.png"]
    },
    {
      "nomor": 13,
      "deskripsi": "Mengunduh template dashboard gratis <b>SB Admin 2</b> dari situs resmi Start Bootstrap untuk menggantikan tampilan standar bawaan Laravel.",
      "gambar": ["./images/laprak9/13.png"]
    },
    {
      "nomor": 14,
      "deskripsi": "Mengekstrak file zip SB Admin 2 yang telah didownload untuk memisahkan file HTML dan aset statisnya.",
      "gambar": ["./images/laprak9/14.png"]
    },
    {
      "nomor": 15,
      "deskripsi": "Membuat folder <b>sbadmin</b> di dalam direktori <b>public</b> proyek Laravel, lalu menyalin folder aset seperti <b>css</b>, <b>js</b>, <b>vendor</b>, dan <b>img</b> ke dalamnya.",
      "gambar": ["./images/laprak9/15.png"]
    },
    {
      "nomor": 16,
      "deskripsi": "Menyesuaikan file layout autentikasi di <b>resources/views/layouts/app.blade.php</b> dengan memodifikasi struktur HTML agar menggunakan CSS/JS dari SB Admin 2 dan mendesain ulang form login agar tampak minimalis dan elegan.",
      "gambar": ["./images/laprak9/16.png"]
    },
    {
      "nomor": 17,
      "deskripsi": "Membuat file layout utama <b>resources/views/layouts/main.blade.php</b> sebagai cetakan utama dashboard admin, lengkap dengan pemanggilan file CSS/JS SB Admin 2 serta integrasi sidebar, topbar, dan footer.",
      "gambar": ["./images/laprak9/17.png"]
    },
    {
      "nomor": 18,
      "deskripsi": "Membuat file komponen menu navigasi samping di <b>resources/views/layouts/sidebar.blade.php</b> yang berisi tautan cepat ke halaman Dashboard dan manajemen Users lengkap dengan ikon visual.",
      "gambar": ["./images/laprak9/18.png"]
    },
    {
      "nomor": 19,
      "deskripsi": "Membuat file header atas di <b>resources/views/layouts/topbar.blade.php</b> yang menampilkan nama user yang sedang login serta tombol dropdown untuk Logout.",
      "gambar": ["./images/laprak9/19.png"]
    },
    {
      "nomor": 20,
      "deskripsi": "Mengedit halaman dashboard utama di <b>resources/views/home.blade.php</b> dengan menghubungkannya ke layout main dan menambahkan teks selamat datang di dalam konten utama.",
      "gambar": ["./images/laprak9/20.png"]
    },
    {
      "nomor": 21,
      "deskripsi": "Membuat resource controller untuk user dengan perintah <b>php artisan make:controller UserController --resource</b> guna menyediakan method CRUD secara otomatis.",
      "gambar": ["./images/laprak9/21.png"]
    },
    {
      "nomor": 22,
      "deskripsi": "Mendaftarkan route resource untuk CRUD user pada file <b>routes/web.php</b> dengan menambahkan baris <b>Route::resource('users', UserController::class);</b>.",
      "gambar": ["./images/laprak9/22.png"]
    },
    {
      "nomor": 23,
      "deskripsi": "Mengisi logika pemrograman pada berkas <b>app/Http/Controllers/UserController.php</b> untuk menangani proses menampilkan data, form input, penyimpanan (menyimpan password terenkripsi dan role JSON), form edit, pembaruan data, hingga penghapusan user.",
      "gambar": ["./images/laprak9/23.png"]
    },
    {
      "nomor": 24,
      "deskripsi": "Memastikan controller <b>UserController.php</b> sudah tersimpan dengan benar pada struktur folder controllers di VS Code.",
      "gambar": ["./images/laprak9/24.png"]
    },
    {
      "nomor": 25,
      "deskripsi": "Membuat folder baru bernama <b>user</b> di dalam direktori views (<b>resources/views/user</b>) untuk menampung seluruh tampilan web manajemen pengguna.",
      "gambar": ["./images/laprak9/25.png"]
    },
    {
      "nomor": 26,
      "deskripsi": "Membuat file tampilan utama tabel pengguna di <b>resources/views/user/index.blade.php</b> untuk merender data user secara dinamis beserta tombol edit dan hapus.",
      "gambar": ["./images/laprak9/26.png"]
    },
    {
      "nomor": 27,
      "deskripsi": "Membuat file formulir tambah pengguna di <b>resources/views/user/create.blade.php</b> yang menyajikan input teks dan pilihan dropdown select multiple untuk role level (ADMIN, GURU, STAFF).",
      "gambar": ["./images/laprak9/27.png"]
    },
    {
      "nomor": 28,
      "deskripsi": "Membuat file formulir edit pengguna di <b>resources/views/user/edit.blade.php</b> dengan status input email dan username diatur readonly, serta mengambil data pilihan role level yang telah tersimpan sebelumnya.",
      "gambar": ["./images/laprak9/28.png"]
    },
    {
      "nomor": 29,
      "deskripsi": "Memeriksa kembali susunan file view CRUD user di folder explorer VS Code untuk memastikan tidak ada berkas yang terlewat atau salah penamaan.",
      "gambar": ["./images/laprak9/29.png"]
    },
    {
      "nomor": 30,
      "deskripsi": "Menjalankan server PHP lokal untuk proyek Laravel dengan mengetikkan perintah <b>php artisan serve</b>.",
      "gambar": ["./images/laprak9/30.png"]
    },
    {
      "nomor": 31,
      "deskripsi": "Membuka browser dan mengakses alamat <b>http://127.0.0.1:8000/login</b> untuk memastikan halaman login kustom bertema SB Admin 2 berhasil termuat dengan sempurna.",
      "gambar": ["./images/laprak9/31.png"]
    },
    {
      "nomor": 32,
      "deskripsi": "Melakukan uji coba login menggunakan kredensial admin default (<b>admin@sisfo.com</b> dan password <b>12345678</b>) yang sebelumnya telah dimasukkan melalui database seeder.",
      "gambar": ["./images/laprak9/32.png"]
    },
    {
      "nomor": 33,
      "deskripsi": "Setelah login sukses, kita masuk ke halaman dashboard lalu memilih menu Users (<b>http://127.0.0.1:8000/users</b>) untuk memverifikasi daftar user awal yang bersumber dari database.",
      "gambar": ["./images/laprak9/33.png"]
    },
    {
      "nomor": 34,
      "deskripsi": "Mengeklik tombol <b>Tambah User</b> untuk menguji formulir pembuatan pengguna baru, mengisi form dengan data lengkap dan memilih level akses, kemudian mengeklik tombol Simpan.",
      "gambar": ["./images/laprak9/34.png"]
    },
    {
      "nomor": 35,
      "deskripsi": "Memastikan data user baru berhasil tersimpan ke database, ditunjukkan dengan kembalinya halaman ke daftar user serta munculnya pesan sukses berwarna hijau (flash status message) <b>'User baru berhasil ditambahkan'</b>.",
      "gambar": ["./images/laprak9/35.png"]
    }
  ],
  "latihan": [],
  "kesimpulan": "Praktikum pekan ke-9 ini memberikan pemahaman mendalam mengenai pengembangan aplikasi web berskala dunia nyata dengan menerapkan arsitektur MVC (Model-View-Controller) secara terstruktur di Laravel. Melalui studi kasus Sistem Informasi Sekolah (Sisfo), kita berhasil menggabungkan sistem autentikasi bawaan Laravel UI dengan kerangka antarmuka SB Admin 2, menciptakan panel manajemen admin yang fungsional dan estetis. Selain itu, praktik penyimpanan kolom kustom berseri JSON untuk atribut level (role) membuktikan fleksibilitas Laravel dalam menangani skenario data yang dinamis tanpa memerlukan tabel relasional tambahan untuk sistem otorisasi sederhana. Secara keseluruhan, integrasi antara backend (Controller, Migration, Seeder) dan frontend (Blade Layouting) yang dipelajari pada pekan ini merupakan fondasi vital dalam merancang sistem informasi terintegrasi yang andal dan mudah dikelola."
};

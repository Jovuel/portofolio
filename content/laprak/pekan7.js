window.laprakData = window.laprakData || {};
window.laprakData[7] = {
  "pekan": 7,
  "tanggal": "27 Mei 2026",
  "title": "MIGRATION, SEEDING, ROUTING, MODEL, CONTROLLER, VIEW",
  "subject": "Pemrograman Web",
  "badge": "Laravel",
  "icon": "bi-journal-code",
  "description": "Membahas integrasi pilar utama Laravel MVC: pengelolaan database via Migration & Seeding, pembuatan Routing endpoint, relasi Model ORM, Controller resource, serta layouting Blade View.",
  "github": "https://github.com/Jovuel/PraktikumPWebLaravel",
  "pendahuluan": "Praktikum pekan ini berfokus pada integrasi penuh pilar-pilar utama framework Laravel berdasarkan arsitektur Model-View-Controller (MVC). Mahasiswa mempelajari cara mengelola skema database secara terstruktur menggunakan fitur Migration, yang memungkinkan pelacakan dan perubahan skema database tanpa manipulasi SQL manual. Untuk menyediakan data awal pengembangan, diterapkan konsep Seeding untuk mengisi tabel database dengan data dummy secara otomatis. Konsep Routing digunakan untuk mendefinisikan URL/endpoint aplikasi, yang kemudian dihubungkan ke Controller sebagai pengatur logika aplikasi. Model bertindak sebagai representasi data dan jembatan interaksi dengan database melalui Eloquent ORM, sedangkan View menangani penyajian tampilan antarmuka pengguna yang dinamis menggunakan Blade Templating Engine. Dengan mengintegrasikan pilar-pilar ini, mahasiswa dapat membangun aplikasi web CRUD (Create, Read, Update, Delete) yang terstruktur, aman, dan mudah dipelihara.",
  "tujuan": [
    "Mahasiswa memahami konsep dasar arsitektur MVC (Model View Controller) pada framework Laravel secara komprehensif.",
    "Mahasiswa mampu mengelola skema database menggunakan fitur Migration untuk membuat dan memodifikasi tabel database.",
    "Mahasiswa terampil menerapkan Seeding untuk mengisi data awal (dummy) ke database secara efisien.",
    "Mahasiswa mampu membuat dan mengatur Routing aplikasi untuk mendefinisikan alur URL endpoint.",
    "Mahasiswa memahami fungsi Model dalam menjembatani interaksi data dengan database menggunakan Eloquent ORM.",
    "Mahasiswa terampil mengembangkan Controller sebagai pusat pengatur logika aplikasi yang menghubungkan Model dan View.",
    "Mahasiswa mampu mendesain tampilan antarmuka pengguna yang dinamis dengan memanfaatkan fitur-fitur Blade Template (View).",
    "Mahasiswa mampu mengimplementasikan seluruh materi dalam bentuk aplikasi CRUD (Create, Read, Update, Delete) sederhana."
  ],
  "langkahLangkah": [
    {
      "nomor": 1,
      "deskripsi": "Membuat database baru di MySQL menggunakan phpMyAdmin (misalnya diberi nama <b>if24</b>) dan mengonfigurasi berkas <b>.env</b> pada project Laravel Anda untuk mengatur koneksi database (DB_DATABASE, DB_USERNAME, DB_PASSWORD).",
      "gambar": ["./images/laprak7-1/1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Memeriksa status struktur tabel bawaan Laravel dan menjalankan perintah migration awal menggunakan <b>php artisan migrate</b> untuk membuat tabel-tabel bawaan (seperti users, password_resets, dll) ke dalam database.",
      "gambar": ["./images/laprak7-1/2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Membuat file migration baru khusus untuk entitas mahasiswa dengan menjalankan perintah <b>php artisan make:migration create_mahasiswas_table</b> pada terminal aplikasi Anda.",
      "gambar": ["./images/laprak7-1/3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Membuka file migration baru yang telah terbuat di folder <b>database/migrations</b>, lalu definisikan kolom-kolom tabel seperti <b>nim</b> (string, unik), <b>nama</b> (string), dan <b>jurusan</b> (string).",
      "gambar": ["./images/laprak7-1/4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Menjalankan perintah migration <b>php artisan migrate</b> untuk menerapkan perubahan skema dan membuat tabel <b>mahasiswas</b> secara fisik ke dalam database MySQL Anda.",
      "gambar": ["./images/laprak7-1/5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Memeriksa tabel-tabel yang telah terbuat di phpMyAdmin untuk memastikan tabel <b>mahasiswas</b> beserta kolom-kolomnya (id, nim, nama, jurusan, created_at, updated_at) telah terbentuk dengan benar.",
      "gambar": ["./images/laprak7-1/6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Membuat Model baru bernama <b>Mahasiswa</b> untuk memetakan objek data mahasiswa dengan menjalankan perintah <b>php artisan make:model Mahasiswa</b>.",
      "gambar": ["./images/laprak7-1/7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Membuka file model <b>app/Models/Mahasiswa.php</b> dan menambahkan atribut <b>protected $fillable = ['nim', 'nama', 'jurusan'];</b> untuk mengizinkan penyimpanan data secara mass assignment.",
      "gambar": ["./images/laprak7-1/8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Membuat berkas Seeder baru khusus untuk mengisi data awal mahasiswa dengan perintah <b>php artisan make:seeder MahasiswaSeeder</b>.",
      "gambar": ["./images/laprak7-1/9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Membuka berkas <b>database/seeders/MahasiswaSeeder.php</b>, lalu tulis data dummy mahasiswa yang ingin dimasukkan ke database menggunakan model <b>Mahasiswa::create(...)</b>.",
      "gambar": ["./images/laprak7-1/10.png"]
    },
    {
      "nomor": 11,
      "deskripsi": "Membuka berkas <b>database/seeders/DatabaseSeeder.php</b> dan daftarkan <b>MahasiswaSeeder</b> ke dalam method <b>run()</b> dengan baris <b>$this->call(MahasiswaSeeder::class);</b>.",
      "gambar": ["./images/laprak7-1/11.png"]
    },
    {
      "nomor": 12,
      "deskripsi": "Menjalankan perintah <b>php artisan db:seed</b> di terminal untuk mengeksekusi seeder dan mengisi data dummy tersebut ke dalam database.",
      "gambar": ["./images/laprak7-1/12.png"]
    },
    {
      "nomor": 13,
      "deskripsi": "Membuat berkas Controller baru yang memiliki struktur method resource lengkap dengan menjalankan perintah <b>php artisan make:controller MahasiswaController --resource</b>.",
      "gambar": ["./images/laprak7-1/13.png"]
    },
    {
      "nomor": 14,
      "deskripsi": "Membuka berkas <b>routes/web.php</b> dan daftarkan routing resource baru untuk mengelola mahasiswa dengan baris <b>Route::resource('mahasiswa', MahasiswaController::class);</b>.",
      "gambar": ["./images/laprak7-1/14.png"]
    },
    {
      "nomor": 15,
      "deskripsi": "Membuka berkas <b>app/Http/Controllers/MahasiswaController.php</b> dan menambahkan logika pada method <b>index()</b> untuk mengambil seluruh data mahasiswa menggunakan <b>Mahasiswa::all()</b> lalu kirimkan ke view <b>mahasiswa.index</b>.",
      "gambar": ["./images/laprak7-1/15.png"]
    },
    {
      "nomor": 16,
      "deskripsi": "Membuat file layout induk di <b>resources/views/layouts/app.blade.php</b> sebagai template utama, kemudian buat berkas view <b>resources/views/mahasiswa/index.blade.php</b> yang mewarisi layout tersebut untuk menampilkan daftar mahasiswa dalam bentuk tabel.",
      "gambar": ["./images/laprak7-1/16.png"]
    },
    {
      "nomor": 17,
      "deskripsi": "Membuka peramban web dan akses URL <b>http://127.0.0.1:8000/mahasiswa</b> untuk memastikan data mahasiswa dari database berhasil di-render dengan sempurna di halaman web.",
      "gambar": ["./images/laprak7-1/17.png"]
    }
  ],
  "latihan": [
    {
      "nomor": 1,
      "deskripsi": "Membuat Model dan file migration baru sekaligus untuk entitas produk menggunakan perintah <b>php artisan make:model Product -m</b>.",
      "gambar": ["./images/laprak7-1/lat-1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Membuka berkas migration produk yang terbuat di folder migrations, lalu tambahkan kolom-kolom seperti <b>nama</b> (string), <b>harga</b> (integer), dan <b>stok</b> (integer) untuk mendefinisikan spesifikasi tabel produk.",
      "gambar": ["./images/laprak7-1/lat-2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Menjalankan perintah <b>php artisan migrate</b> untuk menerapkan migrasi dan membuat tabel <b>products</b> secara fisik ke database.",
      "gambar": ["./images/laprak7-1/lat-3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Membuat file seeder baru bernama <b>ProductSeeder</b> menggunakan perintah <b>php artisan make:seeder ProductSeeder</b>.",
      "gambar": ["./images/laprak7-1/lat-4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Membuka berkas <b>database/seeders/ProductSeeder.php</b>, lalu tambahkan data dummy produk (misalnya nama produk, harga, dan stok awal) dan daftarkan seeder di <b>DatabaseSeeder.php</b>.",
      "gambar": ["./images/laprak7-1/lat-5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Menjalankan perintah <b>php artisan db:seed</b> untuk mengisi data dummy produk tersebut ke dalam tabel products di database Anda.",
      "gambar": ["./images/laprak7-1/lat-6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Membuat Controller baru untuk mengelola produk dengan menjalankan perintah <b>php artisan make:controller ProductController</b>.",
      "gambar": ["./images/laprak7-1/lat-7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Membuka file <b>app/Http/Controllers/ProductController.php</b> dan tambahkan method <b>index()</b> untuk memanggil data produk dengan <b>Product::all()</b> dan mengarahkannya ke view <b>products</b>.",
      "gambar": ["./images/laprak7-1/lat-8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Membuka berkas <b>routes/web.php</b> dan daftarkan routing URL untuk menampilkan data produk dengan baris <b>Route::get('/products', [ProductController::class, 'index']);</b>.",
      "gambar": ["./images/laprak7-1/lat-9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Membuat file view baru bernama <b>resources/views/products.blade.php</b> untuk merender tabel data produk di peramban web dan akses URL <b>http://127.0.0.1:8000/products</b> untuk pengujian.",
      "gambar": ["./images/laprak7-1/lat-10.png"]
    },
    {
      "nomor": 11,
      "deskripsi": "Mengulangi seluruh prosedur di atas untuk entitas <b>Costumer</b> (Customer), mulai dari pembuatan Model dan Migration <b>Costumer</b> dengan perintah <b>php artisan make:model Costumer -m</b>.",
      "gambar": ["./images/laprak7-1/lat-11.png"]
    },
    {
      "nomor": 12,
      "deskripsi": "Mendefinisikan kolom tabel costumers, membuat <b>CostumerSeeder</b>, membuat <b>CostumerController</b>, mendaftarkan route <b>/costumer</b>, membuat view <b>costumer.blade.php</b>, lalu akses URL <b>http://127.0.0.1:8000/costumer</b> untuk memverifikasi hasilnya.",
      "gambar": ["./images/laprak7-1/lat-12.png"]
    },
    {
      "nomor": 13,
      "deskripsi": "Membuat <b>StudentController</b> untuk tugas opsional, lalu definisikan route <b>/student</b> (untuk memuat view student index) serta route kalkulasi luas & keliling lingkaran dinamis di path <b>/lingkaran</b> berdasarkan parameter radius.",
      "gambar": ["./images/laprak7-1/lat-13.png"]
    }
  ],
  "kesimpulan": "Berdasarkan rangkaian praktikum Pekan 7 yang telah dilakukan, konsep Model-View-Controller (MVC) di framework Laravel terbukti dapat menyederhanakan alur kerja pengembangan web secara signifikan. Fitur Migration mempermudah pelacakan dan perubahan skema database tanpa memanipulasi SQL mentah, sementara Seeder memfasilitasi pengisian data dummy secara cepat. Melalui routing terpusat dan penghubungan data oleh Controller dari Model ke View (Blade Template), struktur kode menjadi lebih modular, rapi, dan mudah dirawat. Pada akhirnya, pemahaman pilar-pilar dasar Laravel ini memberikan pondasi yang sangat kuat bagi mahasiswa untuk membangun aplikasi web CRUD interaktif dan melangkah ke materi tingkat lanjut seperti autentikasi dan deployment."
};

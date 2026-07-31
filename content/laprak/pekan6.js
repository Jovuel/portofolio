window.laprakData = window.laprakData || {};
window.laprakData[6] = {
  "pekan": 6,
  "tanggal": "20 Mei 2026",
  "title": "Konfigurasi Laravel",
  "subject": "Pemrograman Web",
  "badge": "Laravel",
  "icon": "bi-journal-code",
  "description": "Membahas instalasi framework Laravel, pemasangan alat pengembangan (XAMPP, Composer, Git, Node.js), hingga konfigurasi routing dasar Hello World.",
  "github": "https://github.com/Jovuel/PraktikumPWebLaravel",
  "pendahuluan": "Laravel merupakan salah satu framework PHP yang populer dan dikembangkan oleh Taylor Otwell. Framework ini bersifat open source dan dirancang untuk memudahkan pengembangan aplikasi berbasis web dengan arsitektur MVC (Model–View–Controller). Praktikum ini bertujuan agar mahasiswa mampu melakukan instalasi Laravel, membuat project baru, serta memahami struktur dasar dan konsep MVC yang digunakan. Laravel menyediakan berbagai fitur unggulan seperti Eloquent ORM untuk interaksi dengan database, Blade Templating Engine untuk pembuatan tampilan dinamis, Artisan Console sebagai command-line interface, sistem Routing yang fleksibel, serta dukungan Middleware untuk autentikasi dan validasi. Selain itu, Laravel juga memiliki fitur keamanan bawaan, sistem otentikasi dan otorisasi, caching, event broadcasting, hingga task scheduling. Dengan ekosistem paket yang kaya melalui Composer, Laravel menjadi pilihan utama dalam pengembangan aplikasi web modern.",
  "tujuan": [
    "Mahasiswa dapat memahami konsep dasar instalasi laravel.",
    "Mahasiswa mampu mempraktekkan pembuatan project baru laravel.",
    "Mahasiswa mengerti cara mengimplementasikan struktur laravel"
  ],
  "langkahLangkah": [
    {
      "nomor": 1,
      "deskripsi": "Install XAMPP dan lakukan cek pada versi PHP.",
      "gambar": ["./images/laprak7/1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Pastikan composer sudah diinstall juga yang nantinya akan digunakan untuk menambah package-package yang dibutuhkan saat development.",
      "gambar": ["./images/laprak7/2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Melakukan installasi pada GIT, dengan melakukan <i>version check</i> pada GIT, pada terminal.",
      "gambar": ["./images/laprak7/3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Install NodeJS dan NPM, dengan melakukan <i>check version</i> pada node dan juga pada npm, ini nantinya akan berfungsi untuk menangani masalah front end dan build asset UI pada laravel.",
      "gambar": ["./images/laprak7/4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Menjalankan perintah <b>composer global require laravel/installer</b> untuk melakukan download laravel dengan menggunakan composer pada terminal.",
      "gambar": ["./images/laprak7/5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Menjalankan perintah <b>laravel new [project-name]</b> untuk membuat project laravel baru pada environment.",
      "gambar": ["./images/laprak7/6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Setelah project laravel terinstall, jalankan perintah <b>cd [project-name]</b> untuk masuk ke dalam path project yang sudah dibuat tadi, yaitu project laravel.",
      "gambar": ["./images/laprak7/7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Menjalankan perintah <b>npm install && npm run build</b> untuk melakukan instalasi pada <i>node modules</i> yang dibutuhkan untuk menjalankan project laravel yang sudah di<i>set-up</i> tadi.",
      "gambar": ["./images/laprak7/8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Menjalankan perintah <b>composer run dev</b> untuk menjalankan project dengan composer.",
      "gambar": ["./images/laprak7/9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Menjalankan perintah <b>php artisan serve</b> untuk menjalankan project laravel yang telah dibuat tadinya.",
      "gambar": ["./images/laprak7/10.png"]
    },
    {
      "nomor": 11,
      "deskripsi": "Menjalankan route untuk hello world pada path \"/hello\", dengan kode dan hasil sebagai berikut.",
      "gambar": [
        "./images/laprak7/11.png",
        "./images/laprak7/11-1.png"
      ]
    }
  ],
  "kesimpulan": "Berdasarkan praktikum yang telah dilakukan, dapat diambil kesimpulan bahwa proses instalasi dan konfigurasi Laravel membutuhkan persiapan lingkungan pengembangan yang sesuai, seperti PHP versi terbaru, Composer, Git, Node.js, dan XAMPP sebagai web server. Setelah semua persyaratan terpenuhi, project Laravel dapat dibuat menggunakan Laravel Installer atau Composer, lalu dijalankan dengan perintah php artisan serve"
};

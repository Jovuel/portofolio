window.laprakData = window.laprakData || {};
window.laprakData[8] = {
  "pekan": 8,
  "tanggal": "3 Juni 2026",
  "title": "Relationship Student, Major, dan Subject",
  "subject": "Pemrograman Web",
  "badge": "Laravel Relation",
  "icon": "bi-journal-code",
  "description": "Membahas perancangan relasi database One-to-Many dan Many-to-Many antara Student, Major, dan Subject, migration foreign key, eager loading query, serta view relasional.",
  "github": "https://github.com/Jovuel/PraktikumPWebLaravel",
  "pendahuluan": "Praktikum pekan ini berfokus pada salah satu keunggulan utama Eloquent ORM di framework Laravel, yaitu pengelolaan relasi antar-tabel database (database relationship) secara berbasis objek. Di dunia nyata, data jarang berdiri sendiri; mereka saling terhubung satu sama lain. Pada praktikum kali ini, kita mengimplementasikan dua jenis relasi utama: relasi One-to-Many (Satu ke Banyak) antara tabel majors (jurusan) dan students (mahasiswa), serta relasi Many-to-Many (Banyak ke Banyak) antara tabel students (mahasiswa) dan subjects (mata kuliah). Melalui relasi One-to-Many, satu jurusan dapat menampung banyak mahasiswa, sementara melalui relasi Many-to-Many, seorang mahasiswa dapat mengambil beberapa mata kuliah sekaligus dan sebaliknya satu mata kuliah dapat diambil oleh banyak mahasiswa. Seluruh relasi ini dikelola menggunakan migration dengan foreign key constraints, didefinisikan pada model Eloquent, di-query secara optimal menggunakan teknik Eager Loading untuk menghindari permasalahan performa kueri N+1, serta disajikan secara dinamis pada berkas tampilan antarmuka (View).",
  "tujuan": [
    "Memahami konsep relationship (One-to-Many dan Many-to-Many) dalam framework Laravel.",
    "Mengimplementasikan One-to-Many dan Many-to-Many relationship pada Model Eloquent.",
    "Membuat migration tabel database lengkap dengan foreign key constraints.",
    "Menggunakan Eloquent relationship untuk melakukan kueri data secara efisien.",
    "Menampilkan data relasional antar-tabel secara dinamis pada berkas tampilan antarmuka (View)."
  ],
  "langkahLangkah": [
    {
      "nomor": 1,
      "deskripsi": "Memastikan database server (MySQL) di XAMPP telah aktif, kemudian membuka proyek Laravel dan menyesuaikan pengaturan koneksi database pada file <b>.env</b>. Pastikan variabel <b>DB_DATABASE</b> diubah menjadi <b>if24</b> sesuai dengan nama database yang digunakan.",
      "gambar": ["./images/laprak8/1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Membuat model <b>Major</b> sekaligus berkas migrasinya dengan menjalankan perintah Artisan <b>php artisan make:model Major -m</b> pada terminal proyek. Parameter <b>-m</b> digunakan untuk membuat file migrasi baru untuk tabel majors secara otomatis.",
      "gambar": ["./images/laprak8/2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Membuka file migrasi <b>create_majors_table.php</b> yang terletak di dalam direktori <b>database/migrations</b>. Di dalam method <b>up()</b>, tambahkan kolom baru <b>$table->string('name');</b> untuk menyimpan data nama program studi atau jurusan.",
      "gambar": ["./images/laprak8/3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Membuat model <b>Student</b> beserta berkas migrasinya dengan mengeksekusi perintah <b>php artisan make:model Student -m</b> pada terminal proyek.",
      "gambar": ["./images/laprak8/4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Membuka file migrasi <b>create_students_table.php</b> di folder migrations. Definisikan kolom <b>nim</b> (tipe string dan bersifat unik), <b>name</b> (tipe string), <b>address</b> (tipe text), serta kolom foreign key <b>major_id</b> yang mereferensikan tabel majors menggunakan constraint <b>onDelete('cascade')</b> agar data mahasiswa ikut terhapus secara otomatis jika jurusan terkait dihapus.",
      "gambar": ["./images/laprak8/5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Membuat model <b>Subject</b> beserta berkas migrasinya dengan menjalankan perintah <b>php artisan make:model Subject -m</b> pada terminal.",
      "gambar": ["./images/laprak8/6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Membuka berkas migrasi <b>create_subjects_table.php</b> di folder migrations. Definisikan kolom <b>name</b> (string) untuk nama mata kuliah dan kolom <b>sks</b> (integer) untuk bobot SKS mata kuliah tersebut.",
      "gambar": ["./images/laprak8/7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Membuat file migrasi untuk tabel pivot (perantara) bernama <b>student_subject</b> dengan menjalankan perintah <b>php artisan make:migration create_student_subject_table</b>.",
      "gambar": ["./images/laprak8/8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Membuka file migrasi pivot yang baru dibuat. Tambahkan kolom <b>student_id</b> dan <b>subject_id</b> sebagai foreign key yang masing-masing merujuk ke tabel <b>students</b> dan <b>subjects</b> dengan cascade delete. Jangan lupa menambahkan constraint unik gabungan <b>$table->unique(['student_id', 'subject_id']);</b> guna menghindari duplikasi relasi mata kuliah yang sama pada satu mahasiswa.",
      "gambar": ["./images/laprak8/9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Menjalankan proses migrasi untuk menerapkan seluruh rancangan tabel baru ke database MySQL dengan mengeksekusi perintah <b>php artisan migrate</b>.",
      "gambar": ["./images/laprak8/10.png"]
    },
    {
      "nomor": 11,
      "deskripsi": "Membuka phpMyAdmin untuk memverifikasi bahwa tabel <b>majors</b>, <b>students</b>, <b>subjects</b>, dan <b>student_subject</b> telah berhasil dibuat dengan struktur kolom yang sesuai.",
      "gambar": ["./images/laprak8/11.png"]
    },
    {
      "nomor": 12,
      "deskripsi": "Membuka berkas model <b>app/Models/Major.php</b>. Deklarasikan relasi One-to-Many ke model Student dengan membuat method <b>students()</b> yang mengembalikan nilai <b>$this->hasMany(Student::class)</b>.",
      "gambar": ["./images/laprak8/12.png"]
    },
    {
      "nomor": 13,
      "deskripsi": "Membuka berkas model <b>app/Models/Student.php</b>. Deklarasikan relasi kebalikan (inverse) One-to-Many ke model Major menggunakan method <b>major()</b> yang mengembalikan <b>$this->belongsTo(Major::class)</b>.",
      "gambar": ["./images/laprak8/13.png"]
    },
    {
      "nomor": 14,
      "deskripsi": "Di dalam model <b>app/Models/Student.php</b>, definisikan juga relasi Many-to-Many ke model Subject dengan membuat method <b>subjects()</b> yang mengembalikan relasi <b>$this->belongsToMany(Subject::class)</b>.",
      "gambar": ["./images/laprak8/14.png"]
    },
    {
      "nomor": 15,
      "deskripsi": "Membuka berkas model <b>app/Models/Subject.php</b>. Definisikan relasi Many-to-Many ke model Student dengan membuat method <b>students()</b> yang mengembalikan relasi <b>$this->belongsToMany(Student::class)</b>.",
      "gambar": ["./images/laprak8/15.png"]
    },
    {
      "nomor": 16,
      "deskripsi": "Membuat file seeder untuk mengisi data awal tabel majors dengan menjalankan perintah Artisan <b>php artisan make:seeder MajorSeeder</b>.",
      "gambar": ["./images/laprak8/16.png"]
    },
    {
      "nomor": 17,
      "deskripsi": "Membuka berkas seeder <b>database/seeders/MajorSeeder.php</b>, lalu tulis data dummy jurusan (seperti Teknik Informatika, Sistem Informasi, Teknik Komputer, dan Manajemen Informatika) menggunakan model Major.",
      "gambar": ["./images/laprak8/17.png"]
    },
    {
      "nomor": 18,
      "deskripsi": "Membuat berkas seeder baru untuk mengisi data mata kuliah awal dengan menjalankan perintah <b>php artisan make:seeder SubjectSeeder</b>.",
      "gambar": ["./images/laprak8/18.png"]
    },
    {
      "nomor": 19,
      "deskripsi": "Membuka berkas seeder <b>database/seeders/SubjectSeeder.php</b>, lalu isi data dummy mata kuliah beserta nilai SKS masing-masing (seperti Pemrograman Web, Database, Algoritma, Jaringan Komputer, dan Sistem Operasi).",
      "gambar": ["./images/laprak8/19.png"]
    },
    {
      "nomor": 20,
      "deskripsi": "Membuat berkas seeder baru untuk data mahasiswa dengan menjalankan perintah <b>php artisan make:seeder StudentSeeder</b>.",
      "gambar": ["./images/laprak8/20.png"]
    },
    {
      "nomor": 21,
      "deskripsi": "Membuka berkas seeder <b>database/seeders/StudentSeeder.php</b>. Masukkan data dummy mahasiswa, lalu tambahkan logika pivot untuk menyematkan mata kuliah acak ke setiap mahasiswa menggunakan method <b>attach()</b> di dalam loop.",
      "gambar": ["./images/laprak8/21.png"]
    },
    {
      "nomor": 22,
      "deskripsi": "Membuka berkas seeder utama <b>database/seeders/DatabaseSeeder.php</b>, lalu daftarkan ketiga seeder yang baru dibuat (MajorSeeder, SubjectSeeder, StudentSeeder) ke dalam method <b>run()</b>.",
      "gambar": ["./images/laprak8/22.png"]
    },
    {
      "nomor": 23,
      "deskripsi": "Menjalankan perintah database seeding <b>php artisan db:seed</b> di terminal untuk memasukkan seluruh data dummy relasional tersebut ke dalam database.",
      "gambar": ["./images/laprak8/23.png"]
    },
    {
      "nomor": 24,
      "deskripsi": "Membuat berkas controller baru untuk mengelola student dengan menjalankan perintah <b>php artisan make:controller StudentController</b>.",
      "gambar": ["./images/laprak8/24.png"]
    },
    {
      "nomor": 25,
      "deskripsi": "Membuka berkas <b>app/Http/Controllers/StudentController.php</b> & buat method <b>index()</b> yang memuat data mahasiswa beserta relasi majors & subjects secara efisien menggunakan Eager Loading: <b>Student::with(['major', 'subjects'])->get();</b> guna menghindari N+1 query problem.",
      "gambar": ["./images/laprak8/25.png"]
    },
    {
      "nomor": 26,
      "deskripsi": "Menambahkan method resource lainnya seperti <b>create()</b>, <b>store()</b>, <b>edit()</b>, <b>update()</b>, & <b>destroy()</b> di dalam controller untuk melengkapi fungsionalitas CRUD berelasi.",
      "gambar": ["./images/laprak8/26.png"]
    },
    {
      "nomor": 27,
      "deskripsi": "Membuka berkas routing utama <b>routes/web.php</b> & daftarkan route resource untuk students dengan baris <b>Route::resource('students', StudentController::class);</b>.",
      "gambar": ["./images/laprak8/27.png"]
    },
    {
      "nomor": 28,
      "deskripsi": "Membuat berkas tampilan utama <b>resources/views/students/index.blade.php</b> untuk merender daftar mahasiswa lengkap dengan kolom nama jurusan, badge daftar mata kuliah yang diambil, serta kalkulasi jumlah SKS.",
      "gambar": ["./images/laprak8/28.png"]
    },
    {
      "nomor": 29,
      "deskripsi": "Membuat berkas tampilan <b>resources/views/students/create.blade.php</b> untuk form penambahan mahasiswa baru, yang menyajikan dropdown dinamis daftar jurusan & checkbox pilihan mata kuliah.",
      "gambar": ["./images/laprak8/29.png"]
    },
    {
      "nomor": 30,
      "deskripsi": "Menjalankan server lokal menggunakan perintah <b>php artisan serve</b> & buka URL <b>http://127.0.0.1:8000/students</b> pada peramban web untuk menguji seluruh sistem relasi data.",
      "gambar": ["./images/laprak8/30.png"]
    }
  ],
  "latihan": [
    {
      "nomor": 1,
      "deskripsi": "Menambahkan method baru bernama <b>latihan()</b> di dalam berkas controller <b>app/Http/Controllers/StudentController.php</b> untuk memproses empat kueri relasional khusus (kueri seluruh mahasiswa beserta relasinya, kueri jurusan terpadat menggunakan <b>withCount()</b>, kueri mata kuliah mahasiswa tertentu dengan ID 1, & kueri jumlah SKS per mahasiswa menggunakan <b>withSum()</b>).",
      "gambar": ["./images/laprak8/lat-1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Membuka berkas routing <b>routes/web.php</b> & daftarkan routing khusus untuk halaman latihan dengan baris <b>Route::get('/latihan', [StudentController::class, 'latihan'])->name('students.latihan');</b>.",
      "gambar": ["./images/laprak8/lat-2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Membuat berkas tampilan baru <b>resources/views/students/latihan.blade.php</b> yang menampilkan keempat hasil kueri relasional relasi database tersebut secara interaktif menggunakan komponen card Bootstrap.",
      "gambar": ["./images/laprak8/lat-3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Membuka peramban web & akses URL <b>http://127.0.0.1:8000/latihan</b> untuk memastikan seluruh kueri relasional database Laravel Eloquent berhasil dirangkum & ditampilkan dengan benar.",
      "gambar": ["./images/laprak8/lat-4.png"]
    }
  ],
  "kesimpulan": "Praktikum pekan ke-8 ini membuktikan bahwa Eloquent ORM di Laravel menyediakan cara yang sangat intuitif dan kuat untuk mengelola relasi database kompleks. Melalui deklarasi relasi hasMany, belongsTo, dan belongsToMany pada berkas model Eloquent, program dapat melakukan query relasional yang rumit tanpa perlu menulis sintaks SQL JOIN yang membingungkan. Selain itu, implementasi Eager Loading (menggunakan method 'with') terbukti mampu mengoptimalkan performa aplikasi dengan menekan jumlah query database (solusi N+1 query problem). Konsep ini memberikan dasar fundamental dalam pengembangan sistem informasi yang saling terintegrasi erat di dunia industri."
};

window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[9] = {
    "pekan": 9,
    "pekannum": 8,
    "tanggal": "24 November 2026",
    "title": "HTTP Request dan Integrasi API pada ResepKu",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter HTTP & REST API",
    "icon": "bi-cloud-arrow-down-fill",
    "description": "Mengintegrasikan REST API eksternal DummyJSON ke aplikasi ResepKu menggunakan paket http, memisahkan logika networking ke RecipeService, mengelola siklus FutureBuilder dan refresh manual, serta menangani error state saat offline dan pengiriman data form via POST.",
    "github": "https://github.com/Jovuel/2411532014_KelasA_AppMob_ResepKu",
    "pendahuluan": "Pada praktikum modul ke-7 sebelumnya, aplikasi ResepKu telah berhasil menampilkan daftar dan grid resep dengan foto dari internet, font kustom Poppins, serta logo lokal. Akan tetapi, data resep yang digunakan masih bersifat statis dan tersimpan secara hardcoded di dalam memori lokal aplikasi (dummyRecipes). Pada modul ke-8 ini, aplikasi ditingkatkan ke level arsitektur produksi dengan mengintegrasikan REST API eksternal dari DummyJSON (https://dummyjson.com/recipes). Kita memanfaatkan paket resmi http untuk berkomunikasi dengan server backend secara asinkron (async/await). Logika networking diisolasi secara rapi ke dalam kelas RecipeService agar kode widget antarmuka tetap bersih dan mudah diuji. Tampilan antarmuka memanfaatkan FutureBuilder yang menangani tiga kondisi utama: loading (CircularProgressIndicator), error offline (ErrorView kustom dengan tombol coba lagi), dan data sukses. Pengguna juga dapat melakukan pull-to-refresh dengan RefreshIndicator serta menambahkan resep baru melalui form AddRecipePage yang divalidasi dan dikirim ke server melalui HTTP POST request. Seluruh status favorit dari Modul 6 tetap tersinkronisasi mulus berkat perbandingan berbasis ID unik.",
    "tujuan": [
        "Menambahkan paket http dan mengonfigurasi komunikasi jaringan pada aplikasi Flutter.",
        "Mengubah model Recipe agar mendukung deserialisasi JSON dari REST API DummyJSON (metode factory Recipe.fromJson).",
        "Membangun kelas RecipeService yang mengisolasi pemanggilan HTTP GET dan POST dengan batas waktu timeout serta penanganan kode status.",
        "Mendaftarkan RecipeService ke pohon widget menggunakan Provider dengan penutupan koneksi (dispose) yang aman.",
        "Menampilkan data dari server menggunakan FutureBuilder dan menangani kondisi offline dengan widget ErrorView serta RefreshIndicator.",
        "Membangun form tambah resep (AddRecipePage) yang memvalidasi input pengguna dan mengirimkan data ke endpoint POST DummyJSON.",
        "Mengimplementasikan fitur pencarian resep, pembaruan data (PUT), penghapusan data (DELETE), serta pengujian unit (unit testing) menggunakan MockClient."
    ],
    "tabelA1": {
        "judul": "Tabel Langkah A.1: Eksplorasi JSON DummyJSON Recipes",
        "bobot": "5%",
        "penjelasan": "Hasil analisis struktur respons JSON yang diperoleh dari endpoint https://dummyjson.com/recipes sebelum melakukan modifikasi pada model Recipe.",
        "items": [
            {
                "pertanyaan": "Nilai total pada respons root",
                "jawaban": "<strong>50</strong> (server DummyJSON menyediakan total 50 resep aktif)."
            },
            {
                "pertanyaan": "Key utama yang membungkus daftar resep",
                "jawaban": "<code>recipes</code> (berupa array of objects yang berisi objek-objek resep masakan)."
            },
            {
                "pertanyaan": "Tipe data rating pada resep pertama (int atau double?)",
                "jawaban": "<strong>double</strong> (contoh: 4.6). Namun pada payload JSON bisa saja bernilai bilangan bulat jika tanpa desimal (misal 5), sehingga deserialisasi yang aman wajib di-cast menggunakan <code>(json['rating'] as num).toDouble()</code> agar tidak terjadi crash type mismatch."
            },
            {
                "pertanyaan": "Tiga key resep dari server yang belum ada di model Recipe Modul 7",
                "jawaban": "<code>instructions</code> (daftar instruksi langkah memasak), <code>tags</code> (kategori label tambahan), dan <code>userId</code> (atau <code>mealType</code>)."
            }
        ]
    },
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Melakukan eksplorasi respons JSON dari endpoint <code>https://dummyjson.com/recipes</code> melalui browser atau perintah curl. Kita mengidentifikasi struktur payload root yang memiliki properti total (50 resep), skip, limit, serta array utama recipes. Setiap objek resep memuat properti id, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, tags, userId, image, dan rating.",
            "gambar": []
        },
        {
            "nomor": 2,
            "deskripsi": "Menambahkan paket resmi <code>http: ^1.2.0</code> ke dalam berkas <code>pubspec.yaml</code> pada bagian dependencies, lalu menjalankan perintah <code>flutter pub get</code> di terminal untuk mengunduh pustaka networking tersebut ke dalam proyek.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-a2-pubspec.png",
                    "caption": "Pendaftaran dependensi http pada pubspec.yaml"
                }
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Memperbarui model <code>Recipe</code> pada <code>lib/models/recipe.dart</code>. Menambahkan atribut baru <code>final List&lt;String&gt; instructions</code>, membuat konstruktor pabrik (factory) <code>Recipe.fromJson(Map&lt;String, dynamic&gt; json)</code> untuk mengonversi data JSON ke objek Dart, serta method <code>toJson()</code> untuk serialisasi saat pengiriman data ke server. Properti rating di-cast secara tangguh dengan <code>(json['rating'] as num?)?.toDouble() ?? 4.0</code> untuk mencegah error parsing.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-a3-recipe-model.png",
                    "caption": "Kode Model Recipe Baru dengan fromJson, toJson, dan instructions"
                }
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Membuat kelas layanan jaringan <code>RecipeService</code> pada berkas <code>lib/services/recipe_service.dart</code>. Layanan ini membungkus instance <code>http.Client</code> melalui injeksi dependensi konstruktor sehingga mudah di-mock saat unit test. Method <code>fetchRecipes()</code> mengirimkan request HTTP GET ke endpoint <code>https://dummyjson.com/recipes</code> dengan batas waktu timeout 10 detik. Jika status kode 200, string respons didekode menggunakan <code>jsonDecode</code> dan dipetakan menjadi <code>List&lt;Recipe&gt;</code>. Jika terjadi status error, exception dilempar ke pemanggil.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-b1-recipe-service.png",
                    "caption": "Kode Layanan Jaringan RecipeService (lib/services/recipe_service.dart)"
                }
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Mendaftarkan <code>RecipeService</code> ke pohon widget global di <code>lib/main.dart</code> menggunakan Provider biasa di dalam <code>MultiProvider</code>. Diberikan callback <code>dispose: (_, service) => service.dispose()</code> agar koneksi HTTP client ditutup secara bersih dari memori saat aplikasi dihentikan.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-b2-main.png",
                    "caption": "Pendaftaran Provider RecipeService dengan Dispose di lib/main.dart"
                }
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Membuat widget antarmuka <code>ErrorView</code> pada <code>lib/widgets/error_view.dart</code> untuk menangani kondisi offline atau galat jaringan. Widget menampilkan ikon sinyal terputus, pesan deskripsi kesalahan, dan tombol 'Coba Lagi' (ElevatedButton) yang menjalankan callback reload yang dikirimkan parent widget.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-b3-error-view.png",
                    "caption": "Kode Widget ErrorView (lib/widgets/error_view.dart)"
                }
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Mengintegrasikan pemanggilan API pada <code>HomePage</code> (<code>lib/pages/home_page.dart</code>). Variabel <code>late Future&lt;List&lt;Recipe&gt;&gt; _recipesFuture</code> diinisialisasi satu kali pada siklus <code>initState()</code> melalui method <code>_loadRecipes()</code>. Pada method build, widget <code>RefreshIndicator</code> membungkus <code>FutureBuilder</code>. Hal ini memastikan request jaringan tidak berulang kali dijalankan saat pengguna sekadar beralih antara tampilan list dan grid.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-b4-home-futurebuilder.png",
                    "caption": "Penerapan FutureBuilder dan RefreshIndicator di HomePage"
                }
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Memperbarui halaman detail <code>DetailPage</code> pada <code>lib/pages/detail_page.dart</code> untuk menampilkan langkah memasak dari server. Menggunakan <code>SliverToBoxAdapter</code> untuk judul 'Langkah-Langkah Memasak' dan <code>SliverList.builder</code> untuk merender urutan nomor langkah memasak beserta teks deskripsinya.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-b5-detail-instructions.png",
                    "caption": "Penyajian Langkah Memasak Menggunakan Sliver di DetailPage"
                }
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "<strong>[CHECKPOINT 1 - Bobot 15%]</strong> Menguji pemuatan data dari server dan penyajian halaman detail. Saat aplikasi pertama kali dibuka, indikator CircularProgressIndicator berputar di tengah layar. Setelah respons diterima, daftar 50 resep dari server DummyJSON tampil dengan rapi (termasuk resep di luar 6 dummy awal, seperti Russian Borsch dan Shakshuka). Saat salah satu kartu resep dibuka, halaman detail menampilkan foto besar, bahan, dan deretan nomor langkah instruksi memasak lengkap dengan footer identitas mahasiswa (2411532014 - Jovantri Immanuel Gulo).",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/cp1_home.png",
                    "caption": "Checkpoint 1: Beranda Menampilkan Resep dari Server DummyJSON (Termasuk Resep Ke-7 dst)"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/cp1_detail.png",
                    "caption": "Checkpoint 1: Halaman Detail Menampilkan Bagian Langkah-Langkah Memasak"
                }
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "<strong>[CHECKPOINT 2 - Bobot 10%]</strong> Menguji ketahanan aplikasi terhadap kegagalan koneksi. Perangkat diatur ke mode pesawat (airplane mode) lalu aplikasi di-restart. Sistem mendeteksi ketiadaan internet (SocketException) dan secara otomatis menampilkan widget ErrorView dengan ikon peringatan oranye serta tombol 'Coba Lagi'. Saat layar ditarik ke bawah (pull-to-refresh) dengan mode pesawat masih aktif, animasi putaran RefreshIndicator berjalan dan memicu reload tanpa membuat aplikasi crash.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/cp2_error.png",
                    "caption": "Checkpoint 2: Tampilan ErrorView Saat Offline dan Pull-to-Refresh Berjalan"
                }
            ]
        },
        {
            "nomor": 11,
            "deskripsi": "Menambahkan method <code>addRecipe(Map&lt;String, dynamic&gt; data)</code> pada <code>RecipeService</code> untuk mengirimkan data resep baru melalui HTTP POST ke <code>https://dummyjson.com/recipes/add</code> dengan header Content-Type application/json dan body ter-encode jsonEncode.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-c1-add-recipe-service.png",
                    "caption": "Method addRecipe pada RecipeService Menggunakan HTTP POST"
                }
            ]
        },
        {
            "nomor": 12,
            "deskripsi": "Membuat halaman form penambahan resep <code>AddRecipePage</code> pada <code>lib/pages/add_recipe_page.dart</code>. Form menggunakan <code>GlobalKey&lt;FormState&gt;</code> dengan TextFormField yang diberi validator 'Wajib diisi'. Pada method <code>_saveRecipe()</code>, setelah request POST selesai via await, dilakukan pengecekan <code>if (!mounted) return;</code> sebelum menampilkan SnackBar dan kembali ke halaman sebelumnya.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-c2-add-recipe-page.png",
                    "caption": "Kode Halaman AddRecipePage dengan Form Validation dan if (!mounted) return"
                }
            ]
        },
        {
            "nomor": 13,
            "deskripsi": "Menambahkan tombol aksi FloatingActionButton (atau tombol + di AppBar) pada <code>HomePage</code> untuk membuka <code>AddRecipePage</code> menggunakan Navigator.push. Saat halaman form ditutup dengan membawa hasil resep baru, method <code>_loadRecipes()</code> dipanggil kembali.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-c3-home-fab.png",
                    "caption": "Tombol FloatingActionButton Navigasi ke Form Tambah Resep"
                }
            ]
        },
        {
            "nomor": 14,
            "deskripsi": "<strong>[CHECKPOINT 3 - Bobot 10%]</strong> Menguji validasi form input dan pengiriman data ke server. Saat tombol 'Simpan Resep' ditekan dalam kondisi field nama resep kosong, form secara instan memunculkan pesan validasi berwarna merah 'Wajib diisi'. Setelah field diisi dan disimpan, aplikasi berhasil mengirimkan HTTP POST ke server DummyJSON dan memunculkan notifikasi SnackBar hijau bertuliskan 'Resep berhasil disimpan! ID: 51', membuktikan komunikasi dua arah (GET dan POST) berjalan sempurna.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/cp3_form.png",
                    "caption": "Checkpoint 3: Validasi Form Wajib Diisi dan SnackBar Resep Berhasil Disimpan ID: 51"
                }
            ]
        }
    ],
    "tabelUji": [
        {
            "nomor": 1,
            "skenario": "Buka aplikasi pertama kali",
            "ekspektasi": "Indikator loading tampil, lalu 50 resep dari server tampil di layar",
            "sesuai": true,
            "keterangan": "CircularProgressIndicator muncul sesaat, kemudian 50 resep dari server DummyJSON ter-render sempurna."
        },
        {
            "nomor": 2,
            "skenario": "Tandai dua resep sebagai favorit, lalu tarik untuk refresh",
            "ekspektasi": "Ikon hati kedua resep tetap merah dan badge favorit di AppBar tetap bernilai 2",
            "sesuai": true,
            "keterangan": "Status favorit tidak ter-reset karena verifikasi isFavorite berbasis recipe.id yang identik."
        },
        {
            "nomor": 3,
            "skenario": "Tekan tombol grid di AppBar, lalu kembali ke list",
            "ekspektasi": "Tampilan beralih tanpa memunculkan indikator loading baru",
            "sesuai": true,
            "keterangan": "Tidak ada loading ulang karena _recipesFuture diinisialisasi di initState, bukan di build."
        },
        {
            "nomor": 4,
            "skenario": "Buka detail salah satu resep",
            "ekspektasi": "Foto, porsi, bahan, dan langkah memasak tampil lengkap",
            "sesuai": true,
            "keterangan": "SliverList berhasil menampilkan urutan instruksi memasak lengkap dengan foto 16:9 dan bahan."
        },
        {
            "nomor": 5,
            "skenario": "Aktifkan mode pesawat, lakukan hot restart",
            "ekspektasi": "ErrorView tampil dengan pesan koneksi gagal dan tombol 'Coba lagi'",
            "sesuai": true,
            "keterangan": "Widget ErrorView tampil menggantikan daftar, tombol Coba Lagi tersedia tanpa error merah."
        },
        {
            "nomor": 6,
            "skenario": "Matikan mode pesawat, tekan 'Coba lagi'",
            "ekspektasi": "Indikator loading tampil sebentar, lalu daftar resep kembali tampil",
            "sesuai": true,
            "keterangan": "Fungsi _loadRecipes berjalan ulang, HTTP GET sukses, dan daftar resep kembali termuat utuh."
        },
        {
            "nomor": 7,
            "skenario": "Kirim resep baru melalui tombol + di AppBar/FAB",
            "ekspektasi": "SnackBar muncul dengan ID dari server (misal 51), form tertutup, kembali ke Home",
            "sesuai": true,
            "keterangan": "Server merespons sukses HTTP 201 dengan payload ID: 51, SnackBar muncul di bagian bawah."
        }
    ],
    "tabelUjiGambar": [
        {
            "src": "images/aplikasiMobile/pekan8/d1-1.png",
            "caption": "Skenario 1: Tampilan Awal Berhasil Memuat 50 Resep dari Server DummyJSON"
        },
        {
            "src": "images/aplikasiMobile/pekan8/d1-2.png",
            "caption": "Skenario 2: Dua Resep Ditandai Favorit dan Tetap Merah Setelah Pull-to-Refresh"
        },
        {
            "src": "images/aplikasiMobile/pekan8/d1-3.png",
            "caption": "Skenario 3: Beralih ke Tampilan Grid Dua Kolom Tanpa Memicu Loading Baru"
        },
        {
            "src": "images/aplikasiMobile/pekan8/d1-4.png",
            "caption": "Skenario 4: Halaman Detail Menampilkan Foto, Porsi, Bahan, dan Langkah Memasak"
        },
        {
            "src": "images/aplikasiMobile/pekan8/d1-5.png",
            "caption": "Skenario 5: Mode Pesawat Aktif Memicu Widget ErrorView dengan Tombol Coba Lagi"
        },
        {
            "src": "images/aplikasiMobile/pekan8/d1-6.png",
            "caption": "Skenario 6: Mode Pesawat Dimatikan dan Tombol Coba Lagi Ditekan, Resep Kembali Tampil"
        },
        {
            "src": "images/aplikasiMobile/pekan8/d1-7.png",
            "caption": "Skenario 7: Resep Baru Berhasil Dikirim via HTTP POST dan Menerima Respon ID: 51"
        }
    ],
    "pertanyaanAnalisis": [
        {
            "nomor": 1,
            "pertanyaan": "Pada skenario 2, mengapa status favorit tetap benar setelah refresh, padahal data resep dimuat ulang dari server dan menghasilkan objek-objek Recipe yang baru di memory? Kaitkan dengan cara perbandingan di FavoriteProvider pada Modul 6.",
            "jawaban": "Hal ini terjadi karena logika pemeriksaan pada method <code>isFavorite(Recipe recipe)</code> di dalam <code>FavoriteProvider</code> (yang telah kita rancang sejak Modul 6) membandingkan kesamaan item berdasarkan nilai properti ID resep, yaitu <code>_favoriteRecipes.any((r) => r.id == recipe.id)</code>, dan bukan membandingkan kesamaan referensi alamat memori objek secara identitas (<code>r == recipe</code>). Saat pengguna melakukan refresh melalui RefreshIndicator, proses deserialisasi JSON menghasilkan objek-objek instance <code>Recipe</code> baru di memori heap Dart. Meskipun alamat memorinya berbeda dari objek sebelum refresh, properti <code>id</code> yang dikembalikan oleh server DummyJSON untuk setiap resep tetap sama persis (misalnya id: 1 untuk Classic Margherita Pizza). Oleh karena itu, ketika widget mengecek status favorit ke provider, hasilnya tetap bernilai <code>true</code> dan ikon hati tetap menyala merah.",
            "gambar": []
        },
        {
            "nomor": 2,
            "pertanyaan": "Pada skenario 3, mengapa perpindahan list ke grid (atau sebaliknya) tidak memicu loading ulang dari server? Apa yang akan terjadi jika pemanggilan fetchRecipes() diletakkan langsung di dalam method build(), bukan di initState()? Jelaskan.",
            "jawaban": "Pada implementasi yang benar, variabel <code>_recipesFuture</code> diinisialisasi satu kali di dalam lifecycle <code>initState()</code> melalui method <code>_loadRecipes()</code>, dan objek Future tersebut disimpan sebagai variabel state. Ketika tombol grid atau list ditekan, fungsi <code>setState(() => _isGrid = !_isGrid)</code> dijalankan untuk memicu render ulang method <code>build()</code>. Karena widget <code>FutureBuilder</code> menerima objek Future yang referensinya tidak berubah, ia tidak akan mengeksekusi ulang permintaan HTTP ke jaringan, melainkan langsung merender data yang sudah tersedia di snapshot cache.<br><br>Jika pemanggilan <code>fetchRecipes()</code> ditulis langsung di dalam parameter <code>future: service.fetchRecipes()</code> pada method <code>build()</code>, maka setiap kali method <code>build()</code> terpanggil (seperti saat pergantian list/grid, perubahan ukuran layar, atau penekanan tombol favorit), objek Future baru akan terus dibuat ulang. Hal ini akan menyebabkan widget kembali ke status <code>ConnectionState.waiting</code>, memicu indikator loading terus-menerus, memboroskan kuota internet pengguna, membebani server backend, serta merusak kenyamanan antarmuka.",
            "gambar": []
        },
        {
            "nomor": 3,
            "pertanyaan": "Jelaskan keuntungan memisahkan logika HTTP ke dalam kelas RecipeService dibanding menuliskan pemanggilan http.get() langsung di dalam method _loadRecipes() pada HomePage. Sebutkan minimal dua keuntungan.",
            "jawaban": "Ada tiga keuntungan utama dari penerapan arsitektur pemisahan ke dalam <code>RecipeService</code>:<br>1. <strong>Separation of Concerns (Pemisahan Tanggung Jawab):</strong> Logika jaringan, konfigurasi base URL, header permintaan, serialisasi dan deserialisasi JSON, timeout, serta penanganan kode status HTTP terisolasi secara rapi di satu tempat. Widget UI hanya bertanggung jawab menampilkan antarmuka dan menangani interaksi pengguna tanpa dicampuri detail teknis networking.<br>2. <strong>Reusability (Dapat Digunakan Ulang):</strong> Method pada <code>RecipeService</code> dapat dipanggil secara bebas dari berbagai halaman berbeda di seluruh aplikasi (seperti HomePage, SearchPage, DetailPage, atau AddRecipePage) tanpa perlu menuliskan ulang baris pemanggilan HTTP dan penanganan error.<br>3. <strong>Testability (Kemudahan Pengujian / Unit Testing):</strong> Dengan memisahkan service dan menerapkan dependency injection (menerima <code>http.Client</code> pada konstruktor), kita dapat menguji logika service secara terisolasi menggunakan <code>MockClient</code> tanpa memerlukan koneksi internet aktif, sebagaimana telah dibuktikan pada Latihan 3.",
            "gambar": []
        },
        {
            "nomor": 4,
            "pertanyaan": "Resep yang baru ditambahkan pada Langkah C (skenario 7) tidak muncul di daftar resep setelah dilakukan pull-to-refresh. Mengapa demikian? Bagaimana cara agar resep baru tersebut tetap ada?",
            "jawaban": "Hal tersebut terjadi karena endpoint <code>https://dummyjson.com/recipes/add</code> adalah layanan mock REST API yang disediakan untuk keperluan pembelajaran dan simulasi frontend. Ketika kita mengirimkan HTTP POST, server DummyJSON memvalidasi format data dan mengembalikan respons sukses dengan nomor ID baru (misal id: 51), namun server tidak benar-benar menyimpan resep baru tersebut ke database fisik mereka. Oleh sebab itu, saat kita melakukan pull-to-refresh berikutnya, pemanggilan HTTP GET ke server hanya mengembalikan 50 data resep bawaan DummyJSON.<br><br>Agar resep baru tetap tersimpan dan muncul di daftar, ada beberapa pendekatan yang dapat diterapkan:<br>1. <strong>Penyimpanan Lokal / Caching (Offline-First):</strong> Menyimpan resep baru ke database lokal perangkat (seperti SQLite menggunakan sqflite, Hive, atau SharedPreferences), lalu menggabungkan data lokal dengan data yang diperoleh dari server.<br>2. <strong>Optimistic Local State Update:</strong> Memasukkan resep baru langsung ke dalam state manajemen lokal (misalnya <code>RecipeProvider</code>) saat form ditutup, sehingga daftar resep di memori aplikasi bertambah tanpa harus mengandalkan refresh penuh dari server.<br>3. <strong>Backend Produksi Sungguhan:</strong> Menghubungkan aplikasi ke server backend riil (misal REST API berbasis Laravel, Express.js, Golang, atau Firebase Firestore) yang melakukan operasi INSERT secara persisten ke database server.",
            "gambar": []
        },
        {
            "nomor": 5,
            "pertanyaan": "Pada method _save() di AddRecipePage terdapat baris if (!mounted) return; setelah pemanggilan await. Apa fungsi baris tersebut? Apa potensi masalah yang terjadi jika baris itu dihilangkan? Hubungkan dengan siklus hidup StatefulWidget.",
            "jawaban": "Pemanggilan <code>await service.addRecipe(...)</code> merupakan operasi asinkron jaringan yang membutuhkan waktu jeda beberapa detik selama menunggu respons dari server. Selama proses tunggu tersebut, pengguna bisa saja menekan tombol kembali (back button) pada ponsel atau navigasi untuk menutup halaman form. Ketika halaman ditutup sebelum operasi await selesai, objek State dari <code>AddRecipePage</code> telah dilepas dari widget tree (unmounted) dan di-dispose dari memori perangkat.<br><br>Properti <code>mounted</code> adalah penanda boolean bawaan framework Flutter yang bernilai <code>true</code> selama objek State masih terhubung ke widget tree dan berubah menjadi <code>false</code> setelah method <code>dispose()</code> dipanggil. Baris <code>if (!mounted) return;</code> berfungsi sebagai penjaga (guard clause) untuk menghentikan eksekusi kode berikutnya jika State sudah tidak aktif.<br><br>Jika baris tersebut dihilangkan, kode berikutnya seperti <code>ScaffoldMessenger.of(context).showSnackBar(...)</code> atau <code>Navigator.pop(context)</code> akan tetap dieksekusi dengan mengakses <code>BuildContext</code> yang sudah tidak valid. Hal ini akan memicu peringatan linter <em>'Do not use BuildContext across asynchronous gaps'</em> dan dapat menimbulkan <strong>runtime error / crash</strong> serta memory leak karena mencoba memanipulasi widget yang sudah hancur dari pohon memori.",
            "gambar": []
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "<strong>[Latihan 1 - Fitur Pencarian Resep]</strong><br>Mengimplementasikan fitur pencarian resep secara dinamis melalui REST API:<br>1. Menambahkan method <code>searchRecipes(String query)</code> pada <code>RecipeService</code> yang mengirimkan permintaan HTTP GET ke endpoint <code>https://dummyjson.com/recipes/search?q={query}</code>.<br>2. Membuat halaman baru <code>SearchPage</code> dengan kolom pencarian <code>TextField</code> di bagian AppBar yang dilengkapi tombol clear (ikon silang) dan debouncing interaksi.<br>3. Menampilkan indikator loading saat pencarian berlangsung, widget <code>ErrorView</code> jika koneksi bermasalah, pesan 'Resep tidak ditemukan' jika kata kunci tidak cocok, dan <code>RecipeTile</code> jika ditemukan hasil yang sesuai.<br>4. Menambahkan tombol aksi pencarian di AppBar <code>HomePage</code> untuk membuka <code>SearchPage</code>.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-lat1-search.png",
                    "caption": "Kode Latihan 1: Method searchRecipes pada RecipeService dan Arsitektur SearchPage"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/lat-1.png",
                    "caption": "Hasil Latihan 1: Tampilan Awal Halaman SearchPage dengan Kolom Pencarian di AppBar"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/lat-1,1.png",
                    "caption": "Hasil Latihan 1: Pencarian Kata Kunci 'Pizza' Menampilkan Resep Margherita Pizza"
                }
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "<strong>[Latihan 2 - Fitur Ubah dan Hapus Resep]</strong><br>Melengkapi operasi CRUD dengan menambahkan fungsionalitas HTTP PUT dan DELETE:<br>1. Menambahkan method <code>updateRecipe(int id, Map&lt;String, dynamic&gt; data)</code> pada <code>RecipeService</code> untuk mengirimkan HTTP PUT ke endpoint <code>/recipes/{id}</code>.<br>2. Menambahkan method <code>deleteRecipe(int id)</code> pada <code>RecipeService</code> untuk mengirimkan HTTP DELETE ke endpoint <code>/recipes/{id}</code>.<br>3. Memasang tombol menu pop-up <code>PopupMenuButton</code> di AppBar <code>DetailPage</code> yang memuat opsi 'Ubah Resep' dan 'Hapus Resep'.<br>4. Fitur Ubah memunculkan dialog input nama resep baru, mengirimkan request PUT, dan menampilkan SnackBar sukses berisi nama resep yang diperbarui.<br>5. Fitur Hapus memunculkan dialog konfirmasi (AlertDialog) dengan tombol Batal dan Hapus. Jika dikonfirmasi, sistem mengirimkan request DELETE, menampilkan SnackBar konfirmasi, dan melakukan navigasi kembali ke Home.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-lat2-update-delete.png",
                    "caption": "Kode Latihan 2: Method updateRecipe dan deleteRecipe pada RecipeService"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/lat-2.png",
                    "caption": "Hasil Latihan 2: Menu PopupButton di AppBar Halaman Detail (Ubah dan Hapus Resep)"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/lat-2,1.png",
                    "caption": "Hasil Latihan 2: Dialog Konfirmasi Penghapusan Resep dengan Tombol Batal dan Hapus"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/lat-2,2.png",
                    "caption": "Hasil Latihan 2: Notifikasi SnackBar Muncul Mengonfirmasi Resep Telah Berhasil Dihapus"
                }
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "<strong>[Latihan 3 (Bonus) - Unit Test RecipeService dengan MockClient]</strong><br>Membangun pengujian unit (unit testing) untuk memastikan keandalan kelas <code>RecipeService</code> tanpa memerlukan koneksi internet sungguhan:<br>1. Menambahkan dependensi dev <code>flutter_test</code> dan paket <code>http</code> pada <code>pubspec.yaml</code>.<br>2. Membuat berkas pengujian <code>test/recipe_service_test.dart</code>.<br>3. Menggunakan <code>MockClient</code> dari <code>package:http/testing.dart</code> untuk menyimulasikan respons JSON server DummyJSON.<br>4. Menguji kasus konversi nilai rating dari int ke double, pengisian nilai default jika ada field yang null, pemanggilan <code>fetchRecipes()</code> yang mengembalikan daftar objek Recipe yang valid, serta memastikan exception terlempar saat server merespons kode status 404.<br>5. Menjalankan perintah <code>flutter test</code> di terminal dengan hasil 100% passed (seluruh pengujian berhasil lulus sempurna).",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan8/code-lat3-unit-test.png",
                    "caption": "Kode Latihan 3: Pengujian Unit RecipeService dengan MockClient di test/recipe_service_test.dart"
                },
                {
                    "src": "images/aplikasiMobile/pekan8/lat-3.png",
                    "caption": "Hasil Latihan 3: Eksekusi Perintah flutter test di Terminal dengan Status All Tests Passed"
                }
            ]
        }
    ],
    "rubrikPenilaian": [
        {
            "komponen": "Tabel Langkah A.1",
            "bobot": "5%",
            "kriteria": "Menjawab keempat pertanyaan eksplorasi JSON DummyJSON dengan tepat.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Checkpoint 1 (Bagian B)",
            "bobot": "15%",
            "kriteria": "Indikator loading tampil saat membuka aplikasi; Home memuat 50 resep dari server (termasuk resep ke-7 dst); Detail menampilkan bagian Langkah-Langkah Memasak; footer identitas mahasiswa terlihat.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Checkpoint 2 (Bagian B)",
            "bobot": "10%",
            "kriteria": "ErrorView tampil saat mode pesawat aktif atau server tidak merespons; pull-to-refresh berjalan dan memicu reload tanpa crash.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Checkpoint 3 (Bagian C)",
            "bobot": "10%",
            "kriteria": "Form penambahan resep menampilkan pesan validasi 'Wajib diisi'; SnackBar menampilkan ID resep dari server setelah berhasil dikirim via POST.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Tabel Langkah D.1",
            "bobot": "10%",
            "kriteria": "Ketujuh skenario pengujian diverifikasi secara berurutan dan seluruh hasil observasi dicatat sesuai fakta lapangan.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Pertanyaan Analisis Modul",
            "bobot": "20%",
            "kriteria": "Kelima pertanyaan analisis dijawab tuntas dengan penjelasan teknis mendalam mengenai perbandingan objek, lifecycle FutureBuilder, arsitektur service, mock backend, dan siklus hidup State.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 1: Fitur Pencarian",
            "bobot": "15%",
            "kriteria": "Fitur searchRecipes dan SearchPage berhasil diimplementasikan dengan penanganan loading, error, dan hasil kosong.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 2: Ubah dan Hapus Resep",
            "bobot": "15%",
            "kriteria": "Method PUT dan DELETE pada RecipeService berhasil dipanggil melalui PopupMenuButton, dialog input/konfirmasi, dan SnackBar.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 3 (Bonus): Unit Testing",
            "bobot": "+5%",
            "kriteria": "Unit test RecipeService menggunakan MockClient berhasil dibuat dan lulus seluruh pengujian (flutter test 100% passed).",
            "status": "Terpenuhi (+5% Nilai Tambahan)"
        }
    ],
    "kesimpulan": "Praktikum modul ke-8 ini berhasil membawa aplikasi ResepKu ke tingkat kematangan perangkat lunak modern melalui integrasi REST API eksternal secara tangguh dan terstruktur. Penerapan arsitektur RecipeService memisahkan secara tegas urusan komunikasi HTTP dari lapisan presentasi antarmuka, menghasilkan kode yang bersih, mudah dipelihara, dan dapat diuji secara independen menggunakan MockClient. Pemanfaatan FutureBuilder yang dipadukan dengan RefreshIndicator dan inisialisasi di initState menjamin bahwa data diambil secara efisien tanpa request berulang saat pergantian layout. Selain itu, penanganan kondisi koneksi offline menggunakan widget ErrorView dan pengamanan konteks asinkron melalui guard clause if (!mounted) return membuktikan bahwa aplikasi dirancang tahan banting terhadap kegagalan jaringan maupun interaksi pengguna yang dinamis. Penambahan kapabilitas lengkap mulai dari pembacaan data (GET), pencarian berbasis query, pengiriman data form (POST), pembaruan (PUT), hingga penghapusan (DELETE) telah mentransformasi ResepKu menjadi aplikasi resep masakan berbasis cloud yang interaktif, stabil, dan siap pakai."
};

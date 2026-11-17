window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[8] = {
    "pekan": 8,
    "pekannum": 7,
    "tanggal": "17 November 2026",
    "title": "List, Grid, Gambar, dan Asset pada ResepKu",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter UI & Assets",
    "icon": "bi-grid-3x3-gap-fill",
    "description": "Menerapkan kustomisasi asset lokal berupa logo dan font Poppins, pemuatan gambar internet dengan Image.network yang memiliki loading dan error state, optimasi memori cacheWidth, serta fleksibilitas tampilan ListView.builder dan GridView.builder yang dapat beralih secara dinamis.",
    "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
    "pendahuluan": "Pada praktikum sebelumnya di Modul 6, aplikasi ResepKu sudah memiliki pengelolaan state yang baik menggunakan kombinasi setState dan Provider. Namun, tampilannya masih sangat sederhana karena hanya menampilkan teks dan avatar lingkaran berisi huruf inisial. Di modul ke-7 ini, fokus utama kita adalah memperkaya antarmuka pengguna dengan asset lokal dan gambar dari internet tanpa mengorbankan performa aplikasi. Kita menambahkan logo aplikasi dan font kustom Poppins yang didaftarkan melalui pubspec.yaml. Selain itu, foto resep dimuat secara online menggunakan Image.network yang dilengkapi penanganan loading state dan error state memakai gambar placeholder lokal. Agar konsumsi memori RAM tetap hemat saat menampilkan banyak foto, parameter cacheWidth diterapkan untuk membatasi ukuran decode gambar. Terakhir, struktur layout dibuat fleksibel menggunakan ListView.builder dan GridView.builder sehingga pengguna dapat berganti antara tampilan daftar baris dan kartu grid dua kolom hanya dengan menekan satu tombol di AppBar, sementara data favorit dari Modul 6 tetap tersinkronisasi.",
    "tujuan": [
        "Mendaftarkan asset gambar dan custom font di pubspec.yaml, lalu menggunakannya dengan Image.asset dan ThemeData.",
        "Menampilkan gambar dari internet dengan Image.network beserta loading state dan error state.",
        "Menampilkan data dengan ListView.builder dan GridView.builder secara efisien.",
        "Mengganti tampilan list dan grid dengan state lokal (setState) tanpa mengganggu state favorit di Provider."
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Membuat struktur folder assets pada direktori utama proyek resepku, sejajar dengan folder lib. Di dalamnya dibuat dua subfolder yaitu assets/images untuk menyimpan berkas logo.png serta placeholder.png, dan assets/fonts untuk menyimpan berkas font Poppins-Regular.ttf, Poppins-Medium.ttf, serta Poppins-Bold.ttf. Penamaan file dipastikan persis sama agar dapat didaftarkan dengan benar.",
            "gambar": []
        },
        {
            "nomor": 2,
            "deskripsi": "Mendaftarkan folder assets/images/ dan keluarga font Poppins ke dalam berkas pubspec.yaml pada blok konfigurasi flutter. Indentasi dua spasi diperhatikan secara ketat agar tidak menimbulkan error parsing YAML saat perintah flutter pub get dijalankan.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-a2-pubspec.png",
                    "caption": "Konfigurasi Asset dan Font di pubspec.yaml"
                }
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Menerapkan font kustom Poppins ke dalam tema global aplikasi di lib/main.dart. Properti fontFamily: 'Poppins' ditambahkan pada theme (mode terang) dan darkTheme (mode gelap) di dalam widget MaterialApp sehingga seluruh teks di aplikasi otomatis menggunakan tipografi Poppins.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-a3-main.png",
                    "caption": "Pemasangan fontFamily Poppins di lib/main.dart"
                }
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Memasang logo aplikasi pada AppBar halaman beranda di lib/pages/home_page.dart. Bagian parameter title diubah menjadi widget Row yang menampilkan Image.asset('assets/images/logo.png', height: 32) berdampingan dengan teks judul 'ResepKu'.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-a4-appbar-logo.png",
                    "caption": "Penyematan Logo dan Teks di AppBar HomePage"
                }
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "<strong>[CHECKPOINT 1 - Bobot 10%]</strong> Menjalankan ulang aplikasi secara penuh (stop dan flutter run) agar asset yang baru didaftarkan ikut ter-bundle ke build. Dari pengujian, logo mangkuk oranye berhasil tampil di AppBar dan seluruh teks sudah memakai font Poppins. Jika dibandingkan dengan tampilan Modul 6 (font bawaan), lengkungan huruf 'a', 'g', dan angka pada font Poppins terlihat jauh lebih membulat dan rapi. Footer identitas 2411532014 • Jovantri Immanuel Gulo tetap tampil di bagian bawah.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-1.png",
                    "caption": "Checkpoint 1: Beranda dengan Logo dan Font Poppins"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-1-compare.png",
                    "caption": "Perbandingan: Modul 6 Menggunakan Font Bawaan Tanpa Logo"
                }
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Membuat widget terpisah RecipeImage pada lib/widgets/recipe_image.dart untuk menangani pemuatan gambar dari internet. Widget ini menggunakan Image.network dengan BoxFit.cover, parameter cacheWidth untuk optimasi RAM, loadingBuilder yang memunculkan kotak warna dan ikon restaurant_menu saat proses unduh, serta errorBuilder yang otomatis menampilkan placeholder.png jika terjadi kegagalan jaringan atau URL salah.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-b1-recipe-image.png",
                    "caption": "Kode Widget RecipeImage (lib/widgets/recipe_image.dart)"
                }
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Memperbarui lib/widgets/recipe_tile.dart dengan mengganti leading CircleAvatar inisial huruf menjadi thumbnail foto berukuran 56 x 56 dp yang dibungkus ClipRRect dengan sudut membulat 8 dp. Diberikan cacheWidth: 168 (berdasarkan perhitungan 56 dp x devicePixelRatio 3x = 168 pixel fisik) agar memori RAM tidak terbuang percuma.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-b2-recipe-tile.png",
                    "caption": "Thumbnail Foto dengan ClipRRect di RecipeTile"
                }
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Mengganti body di lib/pages/home_page.dart dari ListView biasa menjadi ListView.builder. ListView.builder membuat item secara bertahap (lazy evaluation) hanya saat item digulir ke layar, sehingga aplikasi tetap responsif dan hemat sumber daya.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-b3-listview-builder.png",
                    "caption": "Penerapan ListView.builder di HomePage"
                }
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "<strong>[CHECKPOINT 2 - Bobot 15%]</strong> Menguji pemuatan foto resep dan mekanisme error state. Saat koneksi normal, seluruh resep menampilkan foto masing-masing. Ketika diuji dengan mengaktifkan mode pesawat (airplane mode) atau mengubah URL foto resep menjadi keliru (1.webpx), aplikasi secara otomatis menampilkan gambar placeholder dari asset lokal tanpa pernah memunculkan layar error merah.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-2.png",
                    "caption": "Checkpoint 2: Daftar Resep Menampilkan Thumbnail Foto"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-2-placeholder.png",
                    "caption": "Error State (Mode Pesawat): Semua Item Menampilkan Placeholder"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-2-placeholder-more.png",
                    "caption": "Error State (URL Salah pada Item 1): Item 1 Menampilkan Placeholder"
                }
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "Membuat widget kartu grid RecipeGridCard pada lib/widgets/recipe_grid_card.dart. Menggunakan Card dengan clipBehavior: Clip.antiAlias agar sudut foto terpotong rapi mengikuti lekukan kartu, Stack untuk menempatkan tombol favorit di pojok kanan atas foto (Positioned), serta teks informasi resep dengan batas maxLines: 1 dan TextOverflow.ellipsis agar layout kartu tidak meluap (overflow).",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-c1-recipe-grid-card.png",
                    "caption": "Kode RecipeGridCard (lib/widgets/recipe_grid_card.dart)"
                }
            ]
        },
        {
            "nomor": 11,
            "deskripsi": "Mengubah HomePage menjadi StatefulWidget dengan state lokal bool _isGrid = false. Tombol aksi di AppBar ditambahkan untuk beralih antara ikon view_list dan grid_view. Saat tombol ditekan, fungsi setState memicu render ulang untuk memilih antara method _buildList() atau _buildGrid() yang menggunakan GridView.builder dengan 2 kolom dan childAspectRatio 3 / 4.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-c2-homepage-grid.png",
                    "caption": "Penerapan State _isGrid dan GridView.builder di HomePage"
                }
            ]
        },
        {
            "nomor": 12,
            "deskripsi": "Menambahkan foto resep berukuran besar pada bagian atas halaman detail di lib/pages/detail_page.dart. Widget ClipRRect dengan sudut 16 dp membungkus AspectRatio(16 / 9) yang memuat RecipeImage. Pada halaman ini, parameter cacheWidth sengaja tidak diisi agar foto di-decode pada resolusi penuh sesuai lebar layar ponsel.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-d1-detail-foto.png",
                    "caption": "Foto Ber-Rasio 16:9 di lib/pages/detail_page.dart"
                }
            ]
        },
        {
            "nomor": 13,
            "deskripsi": "<strong>[CHECKPOINT 3 - Bobot 20%]</strong> Melakukan validasi akhir pada mode grid dua kolom dan halaman detail. Dari tampilan grid, resep Margherita ditandai favorit (ikon hati merah menyala dan badge AppBar menunjukkan angka 1). Saat kartu resep ditekan, halaman detail terbuka mulus dengan foto besar ber-rasio 16:9 di bagian atas. Footer identitas mahasiswa terlihat jelas di setiap layar.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-3,1.png",
                    "caption": "Checkpoint 3: Foto Besar di Halaman Detail Chicken Alfredo Pasta"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/checkpoint-3,2.png",
                    "caption": "Checkpoint 3: Status Favorit Aktif dan Tersinkronisasi di Beranda"
                }
            ]
        }
    ],
    "perhitungan": {
        "penjelasan": "Pada Langkah C.3, kita menghitung ukuran lebar dan tinggi setiap kartu grid pada smartphone dengan lebar layar 360 dp. Berdasarkan konfigurasi pada _buildGrid(), padding terluar adalah 8 dp di setiap sisi (kiri dan kanan total 16 dp), jumlah kolom (crossAxisCount) adalah 2, jarak spasi antar kolom (crossAxisSpacing) adalah 8 dp, serta rasio aspek (childAspectRatio) disetel 3 / 4 (lebar : tinggi).",
        "tabel": [
            {
                "item": "Lebar Efektif yang Tersedia",
                "rumus": "W_layar - padding_horizontal - crossAxisSpacing = 360 - 16 - 8",
                "hasil": "336 dp"
            },
            {
                "item": "Lebar Setiap Kartu (dp)",
                "rumus": "Lebar_efektif / crossAxisCount = 336 / 2",
                "hasil": "168 dp"
            },
            {
                "item": "Tinggi Setiap Kartu (dp)",
                "rumus": "Lebar_kartu / childAspectRatio = 168 / (3 / 4) = 168 * (4 / 3)",
                "hasil": "224 dp"
            }
        ]
    },
    "tabelUji": [
        {
            "nomor": 1,
            "skenario": "Buka aplikasi pertama kali",
            "ekspektasi": "Logo tampil di AppBar, font Poppins aktif, thumbnail foto tampil di setiap baris",
            "sesuai": true,
            "keterangan": "Logo mangkuk oranye tampil di AppBar, teks berfont Poppins rapi, foto resep terunduh sempurna."
        },
        {
            "nomor": 2,
            "skenario": "Tekan tombol grid di AppBar",
            "ekspektasi": "Resep tampil sebagai kartu dua kolom; ikon tombol berubah menjadi ikon list",
            "sesuai": true,
            "keterangan": "Tampilan beralih ke GridView 2 kolom; ikon AppBar berganti menjadi view_list."
        },
        {
            "nomor": 3,
            "skenario": "Di mode grid, tap ikon hati pada Margherita",
            "ekspektasi": "Ikon hati berubah merah dan badge favorit di AppBar bertambah",
            "sesuai": true,
            "keterangan": "Tombol hati di pojok kanan kartu berubah merah solid dan badge menunjukkan angka 1."
        },
        {
            "nomor": 4,
            "skenario": "Kembali ke mode list dengan menekan tombol AppBar",
            "ekspektasi": "Ikon hati Margherita pada mode list tetap berwarna merah",
            "sesuai": true,
            "keterangan": "Status favorit tidak hilang karena tersimpan di FavoriteProvider yang berada di root aplikasi."
        },
        {
            "nomor": 5,
            "skenario": "Tap kartu Alfredo di mode grid",
            "ekspektasi": "Halaman detail terbuka dengan foto besar di bagian atas",
            "sesuai": true,
            "keterangan": "Halaman detail terbuka menampilkan foto 16:9 yang proporsional di atas informasi porsi dan bahan."
        },
        {
            "nomor": 6,
            "skenario": "Aktifkan mode pesawat, tutup dan buka kembali aplikasi",
            "ekspektasi": "Gambar placeholder tampil tanpa ada layar error merah",
            "sesuai": true,
            "keterangan": "ErrorBuilder pada RecipeImage bekerja baik dengan merender gambar placeholder lokal secara mulus."
        }
    ],
    "tabelUjiGambar": [
        {
            "src": "images/aplikasiMobile/pekan7/skenario1.png",
            "caption": "Skenario 1: Tampilan Awal Beranda (Logo, Font Poppins, Thumbnail)"
        },
        {
            "src": "images/aplikasiMobile/pekan7/skenario2.png",
            "caption": "Skenario 2: Beralih ke Mode Grid Dua Kolom (Ikon AppBar Berubah List)"
        },
        {
            "src": "images/aplikasiMobile/pekan7/skenario3.png",
            "caption": "Skenario 3: Menandai Margherita Favorit di Mode Grid (Badge = 1)"
        },
        {
            "src": "images/aplikasiMobile/pekan7/skenario4.png",
            "caption": "Skenario 4: Kembali ke Mode List, Status Favorit Margherita Tetap Merah"
        },
        {
            "src": "images/aplikasiMobile/pekan7/skenario5.png",
            "caption": "Skenario 5: Membuka Halaman Detail dari Grid, Foto Besar 16:9 Tampil"
        },
        {
            "src": "images/aplikasiMobile/pekan7/skenario6.png",
            "caption": "Skenario 6: Mode Pesawat Aktif, Placeholder Tampil Tanpa Layar Error Merah"
        }
    ],
    "pertanyaanAnalisis": [
        {
            "nomor": 1,
            "pertanyaan": "Pada skenario 3 dan 4 Langkah D.2, status favorit tetap sama walaupun tampilan berganti dari grid ke list, padahal RecipeGridCard dan RecipeTile adalah dua widget yang berbeda. Jelaskan mengapa hal ini terjadi dengan mengaitkannya pada Modul 6.",
            "jawaban": "Hal ini terjadi karena status favorit tidak disimpan secara lokal di dalam widget RecipeGridCard maupun RecipeTile, melainkan disimpan pada state global FavoriteProvider yang dikelola oleh ChangeNotifier dan MultiProvider di atas MaterialApp (seperti yang telah kita bangun pada Modul 6). Kedua widget tersebut hanya bertindak sebagai 'konsumen' yang sama-sama membaca data melalui context.watch&lt;FavoriteProvider&gt;().isFavorite(recipe). Saat pengguna beralih tampilan dari grid ke list, widget lama dihancurkan dan widget baru dibuat ulang oleh Flutter, tetapi instance FavoriteProvider di puncak pohon widget tetap hidup di memori. Oleh karena itu, widget RecipeTile yang baru dibuat langsung membaca status favorit terkini dari provider, sehingga datanya tetap konsisten dan tidak hilang.",
            "gambar": []
        },
        {
            "nomor": 2,
            "pertanyaan": "Di dalam loadingBuilder terdapat baris if (loadingProgress == null) return child;. Apa yang akan tampil jika baris tersebut dihapus? Jelaskan alasannya.",
            "jawaban": "Jika baris tersebut dihapus, maka foto resep asli dari internet tidak akan pernah tampil di layar, bahkan setelah proses pengunduhan gambar selesai 100%. Alasannya, parameter loadingProgress bernilai null merupakan indikator resmi dari Flutter bahwa seluruh byte gambar sudah selesai diunduh dan siap ditampilkan sebagai child. Jika pengecekan kondisi tersebut dihilangkan, method loadingBuilder akan terus-menerus mengeksekusi kode di bawahnya dan mengembalikan widget loading (ColoredBox berisi ikon restaurant_menu), sehingga layar akan terjebak selamanya menampilkan kotak loading.",
            "gambar": []
        },
        {
            "nomor": 3,
            "pertanyaan": "Hitung berapa pixel foto thumbnail yang di-decode dengan dan tanpa cacheWidth: 168, jika foto asli dari server berukuran 1200 x 800 pixel. Apa akibatnya bagi memory ketika datanya menjadi 50 resep pada Modul 8?",
            "jawaban": "<strong>Perhitungan Pixel dan Memori:</strong><br>1. <strong>Tanpa cacheWidth:</strong> Foto asli berukuran 1200 x 800 pixel didecode seutuhnya ke memori RAM, yaitu 1200 x 800 = 960.000 pixel. Dengan format bitmap 32-bit (RGBA = 4 byte/pixel), satu foto memakan memori sebesar 960.000 x 4 byte = 3.840.000 byte (~3,84 MB).<br>2. <strong>Dengan cacheWidth: 168:</strong> Lebar foto diturunkan menjadi 168 pixel. Berdasarkan rasio asli 3:2, tingginya menjadi 168 x (800 / 1200) = 112 pixel. Jumlah pixel yang didecode hanya 168 x 112 = 18.816 pixel, sehingga kebutuhan memorinya hanya 18.816 x 4 byte = 75.264 byte (~75 KB).<br><br><strong>Dampak pada 50 Resep (Modul 8):</strong><br>Jika menampilkan 50 resep tanpa cacheWidth, memori yang terpakai mencapai 50 x 3,84 MB = 192 MB RAM hanya untuk gambar thumbnail kecil. Hal ini akan menyebabkan lagging parah saat scrolling, frame drop, atau bahkan crash akibat Out of Memory (OOM) pada ponsel spesifikasi menengah ke bawah. Sebaliknya, dengan cacheWidth: 168, total memori yang digunakan 50 resep hanya sekitar 50 x 75 KB = 3,75 MB RAM (terjadi penghematan memori sebesar 98%), sehingga aplikasi berjalan sangat ringan dan mulus.",
            "gambar": []
        },
        {
            "nomor": 4,
            "pertanyaan": "Logo memakai Image.asset, sedangkan foto resep memakai Image.network. Mengapa logo tidak sebaiknya diambil dari internet, dan mengapa foto resep tidak dimasukkan ke asset?",
            "jawaban": "Logo merupakan komponen identitas inti aplikasi yang sifatnya statis, berukuran kecil, dan harus langsung muncul seketika saat aplikasi dibuka, termasuk saat perangkat sedang offline atau sinyal buruk. Jika logo diambil dari internet, pengguna akan melihat jeda kosong atau ikon loading di AppBar setiap kali membuka aplikasi, yang menurunkan kenyamanan pengguna. Sebaliknya, foto resep adalah data konten yang dinamis, jumlahnya banyak, dan dapat terus bertambah (diambil dari API eksternal pada Modul 8). Jika puluhan atau ratusan foto resep dimasukkan ke dalam folder asset aplikasi, ukuran file instalasi APK akan membengkak puluhan megabyte, dan setiap kali ada penambahan atau perubahan foto resep kita harus merilis update aplikasi baru ke Play Store. Pemisahan ini merupakan praktik standar industri agar ukuran APK tetap ramping dan konten tetap dinamis.",
            "gambar": []
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "<strong>[Latihan 1 (Wajib) - Filter Cuisine]</strong><br>Menambahkan deretan ChoiceChip horizontal di bawah AppBar Home untuk memfilter resep berdasarkan kategori masakannya:<br>1. Menambahkan state String? _cuisine di _HomePageState, di mana nilai null merepresentasikan pilihan 'Semua'.<br>2. Mengambil daftar unik cuisine langsung dari data menggunakan dummyRecipes.map((r) => r.cuisine).toSet().toList().<br>3. Mengubah body menjadi Column yang menampung SizedBox(height: 56) berisi ListView horizontal untuk deretan ChoiceChip, dan Expanded berisi tampilan list atau grid.<br>4. Memilih sebuah chip (misalnya 'Italian') secara instan menyaring resep yang tampil hanya berupa Classic Margherita Pizza dan Chicken Alfredo Pasta, baik pada mode list maupun mode grid.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-lat1-filter-cuisine.png",
                    "caption": "Kode Latihan 1: Filter Cuisine dengan ChoiceChip"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/latihan1.png",
                    "caption": "Hasil Latihan 1: Deretan Chip Horizontal dengan Pilihan 'Semua' Aktif"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/latihan-1,1.png",
                    "caption": "Hasil Latihan 1: Memilih Chip 'Italian' Menyaring Hanya Resep Masakan Italia"
                }
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "<strong>[Latihan 2 (Wajib) - Halaman Favorit yang Lebih Rapi]</strong><br>Menyempurnakan antarmuka halaman Favorit (lib/pages/favorite_page.dart):<br>1. Menggunakan ListView.separated dengan Divider tipis di antara setiap item resep.<br>2. Setiap baris kini menampilkan thumbnail foto memakai widget RecipeImage dengan sudut membulat.<br>3. Menambahkan fitur interaktif geser ke kiri (Dismissible) untuk menghapus resep dari favorit, dilengkapi latar belakang merah berikon tempat sampah dan key unik ValueKey(recipe.id).<br>4. Saat item digeser keluar, sistem memunculkan SnackBar pemberitahuan '... dihapus dari favorit'. Tombol 'Hapus semua' dari Modul 6 tetap dipertahankan pada AppBar.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-lat2-favorite-dismissible.png",
                    "caption": "Kode Latihan 2: ListView.separated & Dismissible di FavoritePage"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/latihan-2.png",
                    "caption": "Hasil Latihan 2: Daftar Favorit Rapi dengan Divider dan Thumbnail Foto"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/latihan-2,1.png",
                    "caption": "Hasil Latihan 2: Menggeser Item ke Kiri untuk Menghapus (Dismissible)"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/latihan-2,2.png",
                    "caption": "Hasil Latihan 2: Notifikasi SnackBar Muncul Mengonfirmasi Resep Dihapus"
                }
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "<strong>[Latihan 3 (Bonus) - Foto yang Mengecil Saat Di-scroll (SliverAppBar)]</strong><br>Mengubah halaman detail menjadi CustomScrollView yang memanfaatkan efek transisi scrolling modern:<br>1. Menggunakan SliverAppBar dengan pinned: true dan expandedHeight: 260.<br>2. Memanfaatkan FlexibleSpaceBar untuk menampilkan foto resep berukuran penuh sebagai latar belakang yang mengecil secara elegan saat halaman digeser ke atas.<br>3. Memanfaatkan package cached_network_image agar foto resep tersimpan di disk lokal perangkat dan tidak perlu diunduh ulang setiap kali halaman dibuka.<br>4. Komponen porsi dan judul diletakkan di dalam SliverToBoxAdapter, sementara daftar bahan masakan dirender memakai SliverList.builder.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan7/code-lat3-sliver-appbar.png",
                    "caption": "Kode Latihan 3: CustomScrollView, SliverAppBar, dan CachedNetworkImage"
                },
                {
                    "src": "images/aplikasiMobile/pekan7/latihan-3.png",
                    "caption": "Hasil Latihan 3: SliverAppBar dengan Header Foto Menutupi Bagian Atas Halaman Detail"
                }
            ]
        }
    ],
    "rubrikPenilaian": [
        {
            "komponen": "Checkpoint 1 (Bagian A)",
            "bobot": "10%",
            "kriteria": "Logo tampil di AppBar dan seluruh teks memakai font Poppins; footer identitas terlihat.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Checkpoint 2 (Bagian B)",
            "bobot": "15%",
            "kriteria": "Thumbnail foto tampil di setiap resep, dan error state (gambar placeholder) tampil tanpa error merah saat offline.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Checkpoint 3 & Tabel Uji Langkah D.2",
            "bobot": "20%",
            "kriteria": "Keenam skenario pengujian terverifikasi sesuai; Home mode grid dengan resep favorit dan Detail foto besar memuat footer identitas.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Perhitungan Langkah C.3",
            "bobot": "5%",
            "kriteria": "Langkah pengerjaan dan hasil perhitungan ukuran kartu grid (168 dp x 224 dp) benar dan terstruktur.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Pertanyaan Analisis Modul",
            "bobot": "20%",
            "kriteria": "Keempat pertanyaan analisis dijawab tuntas dengan penjelasan teknis, perhitungan pixel, dan alasan desain arsitektur.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 1: Filter Cuisine",
            "bobot": "15%",
            "kriteria": "Filter ChoiceChip horizontal berfungsi menyaring resep baik pada tampilan list maupun grid.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 2: Halaman Favorit yang Lebih Rapi",
            "bobot": "15%",
            "kriteria": "ListView.separated, thumbnail foto, gestur Dismissible dengan SnackBar berfungsi baik.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 3 (Bonus): Foto Mengecil Saat Di-scroll",
            "bobot": "+5%",
            "kriteria": "CustomScrollView, SliverAppBar pinned dengan FlexibleSpaceBar, dan cached_network_image berhasil diimplementasikan.",
            "status": "Terpenuhi (+5% Nilai Tambahan)"
        }
    ],
    "kesimpulan": "Praktikum modul ke-7 ini berhasil memperkaya antarmuka aplikasi ResepKu menjadi jauh lebih interaktif dan visual tanpa mengorbankan performa. Penambahan asset lokal berupa logo dan font Poppins memberikan identitas desain yang konsisten dan nyaman dipandang. Pemuatan foto resep dari internet ditangani secara tangguh menggunakan widget RecipeImage yang siap menghadapi loading state maupun kondisi offline melalui placeholder asset. Penerapan cacheWidth terbukti menjadi teknik optimasi memori yang sangat ampuh karena menghemat lebih dari 98% penggunaan RAM untuk thumbnail. Selain itu, penggunaan ListView.builder dan GridView.builder memberikan kebebasan bagi pengguna untuk beralih antara tampilan daftar dan grid dua kolom dengan lancar, sambil tetap mempertahankan sinkronisasi status favorit dari modul sebelumnya. Fitur penyaring kategori (ChoiceChip), swipe-to-dismiss pada halaman favorit, serta bonus efek SliverAppBar pada halaman detail semakin menyempurnakan kualitas aplikasi mobile yang dibangun."
};

window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[7] = {
    "pekan": 7,
    "pekannum": 6,
    "tanggal": "10 November 2026",
    "title": "State Management pada Aplikasi ResepKu (setState dan Provider)",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter Provider",
    "icon": "bi-layers-half",
    "description": "Mengimplementasikan arsitektur state management pada aplikasi ResepKu melalui perpaduan state lokal (StatefulWidget dan setState) untuk fitur porsi resep serta state global (ChangeNotifier, MultiProvider, context.watch, context.read, dan Consumer) untuk fitur daftar resep favorit terintegrasi.",
    "github": "https://github.com/Jovuel/2411532014_KelasA_AppMob_ResepKu",
    "pendahuluan": "Dalam pengembangan aplikasi mobile berbasis Flutter, antarmuka pengguna merupakan fungsi langsung dari suatu kondisi data atau dikenal dengan prinsip <code>UI = f(state)</code>. State didefinisikan sebagai sekumpulan informasi yang dapat berubah selama siklus hidup aplikasi berjalan dan perubahan nilainya secara langsung memicu render ulang (rebuild) pada antarmuka. Berdasarkan cakupan dan kebutuhan distribusinya, state terbagi menjadi dua kategori utama, yakni <em>Ephemeral State</em> (State Lokal) dan <em>App State</em> (State Global). Ephemeral state merupakan data yang hanya dibutuhkan dan diisolasi di dalam satu widget tertentu tanpa mempengaruhi widget lain di luar sub-tree-nya, seperti pengaturan jumlah porsi resep dan kalkulasi kalori pada satu layar yang dikelola menggunakan <code>StatefulWidget</code> serta fungsi <code>setState()</code>. Sebaliknya, saat satu data yang sama harus diakses, diperbarui, dan disinkronkan secara konsisten oleh banyak layar dan widget yang berada pada cabang navigasi berbeda—seperti daftar koleksi resep favorit yang ditampilkan di Beranda, badge angka pada AppBar, halaman detail, hingga layar khusus Favorit—penggunaan state lokal tidak lagi memadai dan dapat menimbulkan masalah <em>spaghetti code</em> serta duplikasi state yang tidak konsisten. Untuk menyelesaikan tantangan tersebut, diperlukan arsitektur state management terpusat berbasis paket <code>provider</code>. Menggunakan kombinasi kelas <code>ChangeNotifier</code> sebagai pengelola data terpusat dan pemancar notifikasi perubahan (<code>notifyListeners()</code>) serta widget <code>MultiProvider</code> yang dipasang di root widget tree, seluruh antarmuka aplikasi mampu membaca data secara reaktif menggunakan <code>context.watch()</code> dan <code>Consumer</code>, atau memicu mutasi data di callback menggunakan <code>context.read()</code> secara efisien tanpa merender ulang elemen yang tidak berkepentingan.",
    "tujuan": [
        "Membuat state lokal dengan StatefulWidget dan setState() pada fitur jumlah porsi di halaman detail.",
        "Menjelaskan keterbatasan state lokal ketika satu data dibutuhkan oleh banyak widget dan halaman.",
        "Membuat state global dengan package provider (ChangeNotifier dan MultiProvider) pada fitur favorit.",
        "Membaca state dengan context.watch, context.read, dan Consumer di beberapa halaman secara tepat."
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Menginisialisasi proyek baru Flutter bernama <code>resepku</code> menggunakan perintah <code>flutter create resepku</code>. Selanjutnya, menyusun struktur direktori modular di dalam folder <code>lib/</code> yang terdiri atas lima folder utama: <code>models/</code>, <code>data/</code>, <code>providers/</code>, <code>pages/</code>, dan <code>widgets/</code> guna memisahkan peran logika, model, data sumber, dan antarmuka secara bersih. Berkas bawaan <code>test/widget_test.dart</code> dihapus untuk mencegah galat dependensi kelas awal.",
            "gambar": []
        },
        {
            "nomor": 2,
            "deskripsi": "Mendefinisikan entitas data model resep pada berkas <code>lib/models/recipe.dart</code>. Kelas <code>Recipe</code> memuat atribut-atribut esensial seperti <code>id</code>, <code>name</code>, <code>cuisine</code>, <code>difficulty</code>, waktu persiapan dan memasak, jumlah porsi acuan (<code>servings</code>), kalori per porsi, rating, serta daftar bahan masakan. Terdapat sebuah <em>computed getter</em> <code>totalTimeMinutes</code> yang menghitung durasi total memasak secara otomatis tanpa memicu overhead memori.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/1.png",
                    "caption": "Kode Model Data Recipe (lib/models/recipe.dart)"
                }
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Menyusun dataset statis awal pada berkas <code>lib/data/dummy_recipes.dart</code> yang menampung konstanta koleksi <code>dummyRecipes</code> berisi 6 varian resep masakan dunia (Classic Margherita Pizza, Vegetarian Stir-Fry, Chocolate Chip Cookies, Chicken Alfredo Pasta, Mango Salsa Chicken, dan Quinoa Salad). Format data disesuaikan dengan struktur JSON DummyJSON sehingga siap bertransisi ke modul pemanggilan API di masa mendatang.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/2.png",
                    "caption": "Kode Koleksi Data Dummy (lib/data/dummy_recipes.dart)"
                }
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Mengimplementasikan komponen penanda identitas mahasiswa pada <code>lib/widgets/identity_footer.dart</code>. Kelas <code>IdentityFooter</code> membungkus seluruh antarmuka aplikasi melalui parameter <code>builder</code> pada <code>MaterialApp</code>, menampilkan teks konstan <strong>2411532014 • Jovantri Immanuel Gulo</strong> di bagian bawah layar secara konsisten tanpa perlu disematkan manual ke dalam setiap Scaffold.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/3.png",
                    "caption": "Kode IdentityFooter (lib/widgets/identity_footer.dart) - NIM 2411532014 Jovantri Immanuel Gulo"
                }
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Membangun antarmuka halaman detail resep pada <code>lib/pages/detail_page.dart</code> menggunakan <code>StatefulWidget</code>. Variabel <code>_servings</code> dideklarasikan sebagai state lokal yang diinisialisasi pada metode <code>initState()</code> dari data bawaan resep. Aksi tombol penambahan (<code>_addServing</code>) dan pengurangan (<code>_removeServing</code>) dibungkus menggunakan <code>setState()</code> untuk memperbarui tampilan porsi dan kalkulasi total kalori (<code>recipe.caloriesPerServing * _servings</code>) secara instan.",
            "gambar": []
        },
        {
            "nomor": 6,
            "deskripsi": "<strong>[CHECKPOINT 1 - Bobot 15%]</strong> Melakukan pengujian antarmuka detail resep pada Classic Margherita Pizza. Pengujian berhasil membuktikan bahwa saat porsi ditingkatkan menjadi 6, total kalori terhitung secara presisi menjadi <strong>1800 kkal</strong> (6 × 300 kkal) dengan footer identitas <code>2411532014 - Jovantri Immanuel Gulo</code> tampak jelas di dasar layar. Selain itu, tombol pengurangan (−) terbukti dinonaktifkan (disabled state) saat porsi bernilai 1. Hal ini disebabkan oleh baris kode:<br><pre class=\"p-3 bg-dark text-light rounded font-monospace small mt-2 mb-2\">IconButton.filledTonal(\n  onPressed: _servings > 1 ? _removeServing : null,\n  icon: const Icon(Icons.remove),\n)</pre>di mana ekspresi ternary mengevaluasi <code>_servings > 1</code>; ketika bernilai <code>false</code> (yakni porsi = 1), properti <code>onPressed</code> diisi dengan nilai <code>null</code> yang secara otomatis menonaktifkan interaksi tombol pada framework Flutter.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/8.png",
                    "caption": "Checkpoint 1: Margherita Pizza Porsi 6 Menghasilkan Total 1800 kkal & Footer Identitas Terlihat"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/9.png",
                    "caption": "Verifikasi Batas Minimum: Porsi 1 Menonaktifkan Tombol Minus (Disabled State)"
                }
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "<strong>[Bagian B - Eksperimen State Lokal]</strong> Memodifikasi berkas <code>lib/widgets/recipe_tile.dart</code> menjadi <code>StatefulWidget</code> yang menyimpan variabel status favorit lokal <code>bool _isFavorite = false</code>. Di dalam method build, tombol trailing <code>IconButton</code> mengeksekusi <code>setState(() => _isFavorite = !_isFavorite)</code> untuk menguji apakah state lokal memadai untuk kebutuhan fitur favorit bersama.",
            "gambar": []
        },
        {
            "nomor": 8,
            "deskripsi": "Menguji hasil eksperimen Bagian B dengan melakukan hot reload dan menekan ikon hati pada dua resep (Margherita dan Vegetarian Stir-Fry). Hasil menunjukkan bahwa meski ikon hati lokal dapat berubah warna menjadi merah, data status favorit tersebut terisolasi di dalam masing-masing item dan tidak dapat dibaca oleh widget induk (AppBar HomePage) maupun halaman lain.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/11.png",
                    "caption": "Hasil Eksperimen B.2: Dua Ikon Hati Merah Aktif di Tile, Namun AppBar Tidak Menampilkan Informasi Favorit"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/12.png",
                    "caption": "Bukti Error Kompilasi IDE: Undefined name '_isFavorite' Saat Mencoba Membaca State Anak di HomePage"
                }
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "<strong>[Bagian C - State Global Provider]</strong> Menambahkan dependensi paket <code>provider</code> ke dalam proyek melalui perintah terminal <code>flutter pub add provider</code>, kemudian membuat kelas <code>FavoriteProvider</code> pada berkas <code>lib/providers/favorite_provider.dart</code>. Kelas ini meng-extend <code>ChangeNotifier</code>, mengisolasi koleksi privat <code>List&lt;Recipe&gt; _items</code> dengan getter unmodifiable, serta menyediakan metode mutasi <code>toggle(Recipe recipe)</code> dan <code>clear()</code> yang selalu diakhiri dengan pemanggilan <code>notifyListeners()</code> guna menyiarkan pembaruan data ke seluruh antarmuka.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/13.png",
                    "caption": "Kode FavoriteProvider (lib/providers/favorite_provider.dart)"
                }
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "Mendaftarkan <code>FavoriteProvider</code> pada puncak pohon widget di dalam berkas <code>lib/main.dart</code> menggunakan widget <code>MultiProvider</code> yang membungkus <code>MaterialApp</code>. Penempatan di atas MaterialApp ini menjamin seluruh rute navigasi yang dibuka oleh Navigator dapat mengakses instance penyedia state yang sama tanpa terputus.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/4.png",
                    "caption": "Pemasangan MultiProvider di atas MaterialApp pada lib/main.dart"
                }
            ]
        },
        {
            "nomor": 11,
            "deskripsi": "Mengembalikan kelas <code>RecipeTile</code> pada <code>lib/widgets/recipe_tile.dart</code> menjadi <code>StatelessWidget</code>. Komponen membaca status favorit secara reaktif menggunakan <code>context.watch&lt;FavoriteProvider&gt;().isFavorite(recipe)</code> pada saat metode build dieksekusi, serta memanggil mutasi <code>context.read&lt;FavoriteProvider&gt;().toggle(recipe)</code> pada event tombol ditekan (onPressed).",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/6.png",
                    "caption": "Kode RecipeTile Stateless Mengintegrasikan context.watch dan context.read"
                }
            ]
        },
        {
            "nomor": 12,
            "deskripsi": "Menyematkan tombol aksi favorit pada AppBar halaman detail <code>lib/pages/detail_page.dart</code>. Halaman ini kini secara harmonis menggabungkan dua bentuk state: variabel <code>_servings</code> sebagai state lokal berbasis <code>setState()</code>, dan status favorit yang tersinkronisasi secara global melalui <code>FavoriteProvider</code>.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/7.png",
                    "caption": "Kode DetailPage: Perpaduan Harmonis State Lokal Porsi dan State Global Favorit"
                }
            ]
        },
        {
            "nomor": 13,
            "deskripsi": "Membangun antarmuka halaman khusus koleksi favorit pada <code>lib/pages/favorite_page.dart</code> menggunakan widget <code>Consumer&lt;FavoriteProvider&gt;</code>. Layar ini menampilkan teks pemberitahuan apabila daftar favorit kosong, atau menyajikan daftar <code>ListView</code> dari resep-resep yang dipilih lengkap dengan tombol hapus yang mengeksekusi metode <code>favorite.toggle(recipe)</code>.",
            "gambar": []
        },
        {
            "nomor": 14,
            "deskripsi": "Membuat widget terisolasi <code>FavoriteBadgeButton</code> pada <code>lib/widgets/favorite_badge_button.dart</code> yang memanfaatkan widget Material 3 <code>Badge</code>. Widget ini membaca <code>context.watch&lt;FavoriteProvider&gt;().count</code> untuk menampilkan indikator jumlah favorit di atas ikon hati AppBar, lalu dipasang ke dalam <code>AppBar.actions</code> pada <code>lib/pages/home_page.dart</code>.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/18.png",
                    "caption": "Kode Widget Terpisah FavoriteBadgeButton (lib/widgets/favorite_badge_button.dart)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/5.png",
                    "caption": "Integrasi FavoriteBadgeButton pada AppBar Beranda (lib/pages/home_page.dart)"
                }
            ]
        },
        {
            "nomor": 15,
            "deskripsi": "<strong>[CHECKPOINT 2 - Bobot 25%]</strong> Melakukan validasi pengujian menyeluruh pada seluruh alur aplikasi ResepKu setelah integrasi Provider. Terbukti bahwa status resep favorit tersinkronisasi secara sempurna antara Beranda (badge bernilai 2), halaman Detail (ikon hati AppBar terisi penuh), dan halaman Favorit Saya yang menyajikan daftar resep terpilih secara akurat, seluruhnya dengan footer identitas <code>2411532014 - Jovantri Immanuel Gulo</code>.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/20.png",
                    "caption": "Checkpoint 2: Beranda dengan Badge Favorit Menunjukkan Angka 2 & Ikon Merah Terisi"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/21.png",
                    "caption": "Checkpoint 2: Halaman Detail Margherita dengan Ikon Hati AppBar Berstatus Terisi Penuh"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/24.png",
                    "caption": "Checkpoint 2: Halaman Favorit Saya Menampilkan Resep yang Telah Ditandai"
                }
            ]
        }
    ],
    "pengamatan": [
        {
            "nomor": 1,
            "pertanyaan": "Apakah ikon hati berubah? Mengapa hal tersebut dapat terjadi?",
            "jawaban": "<strong>Ya, ikon hati pada resep yang ditekan berhasil berubah</strong> dari ikon outline (<code>Icons.favorite_border</code>) menjadi ikon hati solid berwarna merah (<code>Icons.favorite</code>). Perubahan visual ini dapat terjadi karena pada implementasi eksperimen Bagian B, kelas <code>RecipeTile</code> diubah menjadi <code>StatefulWidget</code> yang mengelola variabel state lokal privat <code>bool _isFavorite = false</code>. Ketika pengguna menekan tombol <code>IconButton</code>, callback <code>onPressed</code> mengeksekusi pemanggilan <code>setState(() => _isFavorite = !_isFavorite)</code>. Fungsi <code>setState()</code> memberi sinyal langsung kepada framework Flutter bahwa internal state pada objek <code>_RecipeTileState</code> tersebut telah berubah nilai, sehingga Flutter segera menjadwalkan dan mengeksekusi ulang metode <code>build()</code> milik widget tile yang bersangkutan untuk merender tampilan ikon baru sesuai kondisi nilai boolean terbarunya.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/11.png",
                    "caption": "Bukti Pengamatan: Ikon Hati Merah Berubah di Tingkat Item Berkat setState Lokal"
                }
            ]
        },
        {
            "nomor": 2,
            "pertanyaan": "Coba tampilkan jumlah resep favorit di judul AppBar HomePage. Apakah hal itu dapat dilakukan? Di class mana data _isFavorite berada, dan apakah HomePage dapat membacanya?",
            "jawaban": "<strong>Hal tersebut mutlak TIDAK DAPAT DILAKUKAN</strong> dengan arsitektur state lokal saat ini. Data variabel <code>_isFavorite</code> dideklarasikan dan diisolasi di dalam kelas privat <code>_RecipeTileState</code> yang berada di hierarki widget anak (leaf/child widget). Sebaliknya, kelas <code>HomePage</code> merupakan widget leluhur (ancestor) yang bertindak sebagai induk dari daftar tile tersebut. Dalam aturan scoping dan enkapsulasi bahasa Dart serta prinsip unidirectional data flow pada Flutter, widget induk tidak memiliki hak akses atau referensi terhadap properti privat yang berada di dalam state widget turunannya. Ketika programmer mencoba memaksa membaca ekspresi <code>_isFavorite</code> di dalam judul AppBar <code>HomePage</code>, compiler Flutter akan langsung menolak dan memicu galat kompilasi <code>Undefined name '_isFavorite'</code> (seperti terdokumentasi jelas pada screenshot pengamatan). Oleh sebab itu, <code>HomePage</code> sama sekali tidak dapat menghitung total favorit yang sedang aktif.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/12.png",
                    "caption": "Galat Kompilasi: Undefined name '_isFavorite' Saat HomePage Mencoba Akses State Anak"
                }
            ]
        },
        {
            "nomor": 3,
            "pertanyaan": "Buka halaman detail dari resep yang sudah difavoritkan. Bagaimana halaman detail dapat mengetahui bahwa resep tersebut favorit?",
            "jawaban": "<strong>Halaman detail (DetailPage) SAMA SEKALI TIDAK DAPAT MENGETAHUI bahwa resep tersebut telah difavoritkan</strong>. Pada arsitektur navigasi yang berjalan, ketika pengguna melakukan tap pada tile, <code>Navigator.push()</code> hanya mengirimkan objek model <code>Recipe</code> murni melalui constructor <code>DetailPage(recipe: recipe)</code>. Objek model <code>Recipe</code> bersifat immutable dan sama sekali tidak memiliki field penyimpan status favorit. State <code>_isFavorite</code> hanya hidup di dalam instance memori lokal <code>_RecipeTileState</code> di halaman beranda. Ketika layar berpindah ke <code>DetailPage</code> yang menempati layer rute baru di atas tumpukan (stack) navigasi, tidak ada mekanisme komunikasi atau saluran transmisi data yang menghubungkan state lokal tile tersebut ke <code>DetailPage</code>. Akibatnya, ikon hati pada AppBar <code>DetailPage</code> tetap berstatus kosong dan tidak sinkron dengan pilihan pengguna di beranda.",
            "gambar": []
        }
    ],
    "tabelUji": [
        {
            "nomor": 1,
            "skenario": "Tap ikon hati pada Margherita dan Alfredo di Home",
            "ekspektasi": "Ikon berwarna merah, badge menunjukkan angka 2",
            "sesuai": true,
            "keterangan": "Ikon hati kedua item berubah merah pekat dan widget Badge di AppBar menampilkan angka 2 secara sinkron."
        },
        {
            "nomor": 2,
            "skenario": "Buka halaman detail resep Margherita",
            "ekspektasi": "Ikon hati di AppBar terisi (solid/merah)",
            "sesuai": true,
            "keterangan": "AppBar DetailPage membaca FavoriteProvider secara reaktif dan otomatis menampilkan ikon hati terisi."
        },
        {
            "nomor": 3,
            "skenario": "Di halaman detail Margherita, tap ikon hati, lalu kembali ke Home",
            "ekspektasi": "Ikon Margherita kosong, badge menunjukkan angka 1",
            "sesuai": true,
            "keterangan": "Status favorit Margherita dicabut dari detail; saat kembali ke Home, tile Margherita kosong dan badge AppBar tersisa angka 1 (Alfredo)."
        },
        {
            "nomor": 4,
            "skenario": "Tap tombol badge favorit di AppBar Home",
            "ekspektasi": "Halaman Favorit terbuka dan hanya berisi resep Alfredo",
            "sesuai": true,
            "keterangan": "Consumer pada FavoritePage merender hanya 1 item aktif, yaitu Chicken Alfredo Pasta."
        },
        {
            "nomor": 5,
            "skenario": "Hapus Alfredo dari halaman Favorit, lalu kembali ke Home",
            "ekspektasi": "Muncul pesan 'Belum ada resep favorit', badge di Home hilang",
            "sesuai": true,
            "keterangan": "Daftar kosong menampilkan pesan placeholder; saat kembali ke Beranda, badge hilang karena isLabelVisible = count > 0 (false)."
        },
        {
            "nomor": 6,
            "skenario": "Ubah porsi resep menjadi 2, kembali ke Home, lalu buka lagi resep yang sama",
            "ekspektasi": "Porsi kembali ke nilai awal (misal 4), karena state lokal dibuang saat halaman ditutup",
            "sesuai": true,
            "keterangan": "Membuktikan lifecycle ephemeral state: instance _DetailPageState dibuang dari memori saat Navigator.pop dieksekusi."
        }
    ],
    "tabelUjiGambar": [
        {
            "src": "images/aplikasiMobile/pekan6/20.png",
            "caption": "Skenario 1: Margherita & Alfredo Difavoritkan -> Badge AppBar = 2"
        },
        {
            "src": "images/aplikasiMobile/pekan6/21.png",
            "caption": "Skenario 2: Buka Detail Margherita -> Ikon Hati AppBar Terisi Penuh"
        },
        {
            "src": "images/aplikasiMobile/pekan6/22.png",
            "caption": "Skenario 3 (Aksi): Di Halaman Detail Margherita, Ikon Hati Ditekan Jadi Kosong"
        },
        {
            "src": "images/aplikasiMobile/pekan6/23.png",
            "caption": "Skenario 3 (Hasil): Kembali ke Home, Margherita Kosong & Badge Berkurang Menjadi 1"
        },
        {
            "src": "images/aplikasiMobile/pekan6/24.png",
            "caption": "Skenario 4: Halaman Favorit Dibuka Hanya Memuat 1 Resep Yaitu Chicken Alfredo Pasta"
        },
        {
            "src": "images/aplikasiMobile/pekan6/25.png",
            "caption": "Skenario 5 (Aksi): Alfredo Dihapus -> Tampil Pesan 'Belum ada resep favorit'"
        },
        {
            "src": "images/aplikasiMobile/pekan6/26.png",
            "caption": "Skenario 5 (Hasil): Kembali ke Home, Badge Angka di AppBar Otomatis Lenyap"
        },
        {
            "src": "images/aplikasiMobile/pekan6/27.png",
            "caption": "Skenario 6 (Aksi): Porsi Chicken Alfredo Diubah Menjadi 2 (1000 kkal)"
        },
        {
            "src": "images/aplikasiMobile/pekan6/28.png",
            "caption": "Skenario 6 (Hasil): Keluar Lalu Masuk Kembali, Porsi Ter-Reset ke Nilai Awal 4 (2000 kkal)"
        }
    ],
    "pertanyaanAnalisis": [
        {
            "nomor": 1,
            "pertanyaan": "Tuliskan jawaban tiga pertanyaan pada Langkah B.2, lengkap dengan alasannya.",
            "jawaban": "Berdasarkan rangkaian eksperimen pada Langkah B.2, disimpulkan bahwa: (1) <strong>Ikon hati pada RecipeTile berhasil berubah warna</strong> karena mutasi nilai boolean dibungkus menggunakan <code>setState()</code> di dalam kelas <code>_RecipeTileState</code>, yang secara otomatis memicu metode <code>build()</code> lokal untuk merender ulang antarmuka tile tersebut; (2) <strong>Jumlah resep favorit tidak dapat ditampilkan di AppBar HomePage</strong> karena variabel <code>_isFavorite</code> berada pada lingkup privat kelas anak (<code>_RecipeTileState</code>), sehingga <code>HomePage</code> sebagai widget induk terhalang oleh aturan enkapsulasi data dan memicu galat kompilasi <code>Undefined name</code>; dan (3) <strong>Halaman DetailPage tidak dapat mengetahui status favorit</strong> karena data resep yang dilewatkan melalui constructor hanyalah model data immutable <code>Recipe</code> tanpa referensi terhadap memori state lokal tile pada halaman beranda.",
            "gambar": []
        },
        {
            "nomor": 2,
            "pertanyaan": "Mengapa jumlah porsi tetap menggunakan setState() dan tidak dimasukkan ke Provider? Hubungkan jawaban Kalian dengan hasil skenario 6 pada Langkah C.7.",
            "jawaban": "Jumlah porsi resep dipertahankan menggunakan <code>setState()</code> karena data tersebut tergolong sebagai <strong>Ephemeral State (state lokal sementara)</strong> yang siklus hidupnya (lifecycle) hanya relevan selama pengguna berada di halaman detail untuk memperkirakan takaran bahan atau kalori sesi memasak saat itu. Data porsi tidak pernah dibutuhkan oleh layar lain seperti daftar resep di Beranda maupun layar Favorit. Hal ini terbukti secara empiris pada <strong>Skenario 6 Langkah C.7</strong>: ketika porsi diubah menjadi 2 lalu pengguna menekan tombol kembali ke Home dan membuka resep itu lagi, nilai porsi kembali ke nilai default awal (misalnya 4). Perilaku ini terjadi karena objek <code>_DetailPageState</code> secara otomatis dihancurkan (disposed) dari memori saat halaman ditutup oleh Navigator. Mengisolasi porsi sebagai state lokal merupakan praktik arsitektur terbaik yang mencegah pencemaran App State global, menghemat konsumsi memori, serta menghindari kompleksitas sinkronisasi state yang tidak perlu.",
            "gambar": []
        },
        {
            "nomor": 3,
            "pertanyaan": "Pindahkan ChangeNotifierProvider dari main() ke dalam HomePage (membungkus Scaffold). Apa yang terjadi ketika halaman Favorit dibuka? Jelaskan penyebabnya berdasarkan posisi provider di widget tree. Setelah itu, kembalikan kodenya seperti semula.",
            "jawaban": "Ketika <code>ChangeNotifierProvider</code> dipindahkan dari <code>main()</code> ke dalam <code>HomePage</code> (membungkus widget Scaffold milik HomePage), lalu pengguna menekan tombol badge untuk membuka halaman Favorit (<code>FavoritePage</code>), aplikasi akan mengalami crash seketika dengan pesan galat fatal: <strong><code>ProviderNotFoundException: Error: Could not find the correct Provider&lt;FavoriteProvider&gt; above this FavoritePage Widget</code></strong>.<br><br><strong>Penyebab Berdasarkan Posisi Widget Tree:</strong><br>Pada arsitektur Flutter, operasi navigasi perpindahan layar menggunakan perintah <code>Navigator.push(context, MaterialPageRoute(...))</code> akan meletakkan rute antarmuka baru (<code>FavoritePage</code>) tepat di bawah widget <code>NavigatorState</code> (yang bertindak sebagai overlay global milik <code>MaterialApp</code>). Secara hierarki pohon widget (widget tree), <code>FavoritePage</code> berkedudukan sebagai <strong>saudara sejajar (sibling)</strong> dari rute <code>HomePage</code>, dan BUKAN merupakan turunan/anak (child/descendant) dari <code>HomePage</code>. Ketika widget di dalam <code>FavoritePage</code> mengeksekusi <code>context.watch&lt;FavoriteProvider&gt;()</code> atau <code>Consumer</code>, Flutter akan melakukan penelusuran ke atas pohon elemen (ancestor lookup). Karena <code>ChangeNotifierProvider</code> terkurung di dalam sub-tree <code>HomePage</code>, penelusuran dari <code>FavoritePage</code> ke arah root <code>MaterialApp</code> tidak pernah melewati <code>HomePage</code>, sehingga provider tidak pernah ditemukan. Oleh karena itu, provider yang digunakan bersama oleh banyak rute navigasi <strong>wajib dipasang di atas MaterialApp</strong> pada fungsi <code>main()</code> agar dapat diakses secara universal oleh seluruh percabangan rute aplikasi.",
            "gambar": []
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "<strong>[Latihan 1 - Bobot 15%] Implementasi Manajemen Tema Gelap & Terang Global</strong><br>Menambahkan fitur kustomisasi tema aplikasi yang dapat beralih antara Mode Terang (Light Mode) dan Mode Gelap (Dark Mode) secara dinamis:<br>1. Membuat kelas penyedia state <code>ThemeProvider</code> pada <code>lib/providers/theme_provider.dart</code> yang meng-extend <code>ChangeNotifier</code>. Kelas mengelola variabel <code>ThemeMode _themeMode = ThemeMode.light</code>, getter, dan metode <code>toggleTheme(bool isDark)</code> yang mengeksekusi <code>notifyListeners()</code>.<br>2. Mendaftarkan <code>ThemeProvider</code> bersama <code>FavoriteProvider</code> di dalam array <code>providers</code> pada <code>MultiProvider</code> di <code>lib/main.dart</code>.<br>3. Menambahkan properti <code>darkTheme</code> dan mengonfigurasi <code>themeMode: context.watch&lt;ThemeProvider&gt;().themeMode</code> pada <code>MaterialApp</code> agar reaktif merender ulang tema seluruh layar.<br>4. Merancang antarmuka pengaturan pada <code>lib/pages/settings_page.dart</code> menggunakan widget <code>SwitchListTile</code> 'Mode Gelap', serta menyematkan tombol navigasi ikon roda gigi (<code>Icons.settings</code>) pada AppBar <code>HomePage</code>.<br>Hasil pengujian membuktikan peralihan switch berhasil mengubah tema warna seluruh aplikasi (Home, Settings, Detail) secara instan dan konsisten.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/lat-1-1.png",
                    "caption": "Kode ThemeProvider (lib/providers/theme_provider.dart)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-1-2.png",
                    "caption": "Kode Halaman Pengaturan (lib/pages/settings_page.dart)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-1-3.png",
                    "caption": "Integrasi Navigasi Pengaturan pada AppBar HomePage"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-1.png",
                    "caption": "Pengujian: Beranda ResepKu dalam Mode Terang (Light Mode)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-2.png",
                    "caption": "Pengujian: Halaman Pengaturan dengan Switch Mode Gelap OFF"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-3.png",
                    "caption": "Pengujian: Switch Mode Gelap Diaktifkan (ON) Seketika Mengubah Layar Jadi Gelap"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-4.png",
                    "caption": "Pengujian: Beranda ResepKu Sukses Berubah Menjadi Tema Gelap (Dark Mode)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-5.png",
                    "caption": "Pengujian: Halaman Detail Resep Mengadopsi Tema Gelap Secara Penuh"
                }
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "<strong>[Latihan 2 - Bobot 15%] Fitur Hapus Semua Favorit dengan Konfirmasi AlertDialog</strong><br>Melengkapi antarmuka halaman Favorit (<code>lib/pages/favorite_page.dart</code>) dengan tombol aksi pembersihan massal:<br>1. Menambahkan tombol aksi <code>IconButton</code> berikon sapu/sampah <code>Icons.delete_sweep</code> pada AppBar <code>FavoritePage</code> dengan tooltip 'Hapus semua'.<br>2. Tombol dikonfigurasi secara ketat dengan logika penonaktifan: jika daftar resep favorit sedang kosong (<code>final isFavoritesEmpty = favoriteProvider.items.isEmpty</code>), nilai <code>onPressed</code> bernilai <code>null</code> sehingga tombol otomatis dalam status tidak aktif (disabled/berwarna pudar).<br>3. Ketika terdapat item favorit, penekanan tombol akan memunculkan dialog modal <code>AlertDialog</code> bertajuk 'Hapus Semua Favorit' dengan pertanyaan konfirmasi 'Apakah anda yakin ingin menghapus semua resep dari daftar favorit?'.<br>4. Tombol 'Batal' menutup dialog via <code>Navigator.pop()</code>, sedangkan tombol 'Hapus' memanggil <code>context.read&lt;FavoriteProvider&gt;().clear()</code> yang mengosongkan seluruh daftar item favorit dan menyiarkan pembaruan ke badge AppBar serta beranda secara real-time.",
            "gambar": [
                {
                    "src": "images/aplikasiMobile/pekan6/lat-6-1.png",
                    "caption": "Kode FavoritePage: Logika Konfirmasi AlertDialog & Validasi Disabled Saat Kosong"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-6.png",
                    "caption": "Pengujian: Memilih 4 Resep Favorit di Beranda (Badge AppBar Menunjukkan Angka 4)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-7.png",
                    "caption": "Pengujian: Halaman Favorit Menampilkan 4 Resep & Tombol 'Hapus Semua' Berstatus Aktif"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-8.png",
                    "caption": "Pengujian: Seluruh Item Dikosongkan -> Tombol 'Hapus Semua' Otomatis Nonaktif (Disabled)"
                },
                {
                    "src": "images/aplikasiMobile/pekan6/lat-9.png",
                    "caption": "Pengujian: Tampilan Tooltip 'Hapus semua' pada Tombol yang Sedang Nonaktif"
                }
            ]
        }
    ],
    "rubrikPenilaian": [
        {
            "komponen": "Checkpoint 1 (Bagian A)",
            "bobot": "15%",
            "kriteria": "Porsi 6 menghasilkan 1800 kkal; tombol minus nonaktif saat porsi 1; footer identitas terlihat.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Pengamatan Bagian B",
            "bobot": "10%",
            "kriteria": "Tiga pertanyaan eksperimen state lokal dijawab tuntas lengkap dengan alasan ilmiah dan bukti galat kompilasi.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Tabel Uji Langkah C.7 & Checkpoint 2",
            "bobot": "25%",
            "kriteria": "Keenam skenario pengujian terverifikasi sesuai; tangkapan layar Checkpoint 2 (Home badge 2, Detail hati terisi, Halaman Favorit) memuat footer identitas.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Pertanyaan Analisis Modul",
            "bobot": "20%",
            "kriteria": "Ketiga pertanyaan analisis dijawab mendalam dengan tinjauan lifecycle widget tree dan arsitektur state management Flutter.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 1 — Tema Gelap dan Terang",
            "bobot": "15%",
            "kriteria": "Implementasi ThemeProvider, MultiProvider, SettingsPage, SwitchListTile; seluruh antarmuka aplikasi berganti tema secara reaktif.",
            "status": "Terpenuhi 100%"
        },
        {
            "komponen": "Latihan 2 — Hapus Semua Favorit",
            "bobot": "15%",
            "kriteria": "Tersedia dialog konfirmasi AlertDialog; tombol aksi memanggil clear() dan terbukti nonaktif ketika daftar favorit kosong.",
            "status": "Terpenuhi 100%"
        }
    ],
    "kesimpulan": "Praktikum modul keenam ini berhasil memberikan pemahaman komprehensif mengenai pemilihan dan penerapan pola arsitektur State Management pada framework Flutter. State lokal (Ephemeral State) yang dikelola melalui StatefulWidget dan metode setState() terbukti sangat ideal dan efisien untuk kebutuhan data sementara yang terisolasi di dalam satu antarmuka, seperti penyesuaian porsi resep dan kalkulasi kalori pada halaman detail yang secara otomatis dibuang (disposed) saat halaman ditutup. Di sisi lain, keterbatasan state lokal yang tidak mampu membagikan data lintas rute dan percabangan widget berhasil diatasi secara elegan menggunakan paket provider. Dengan mengimplementasikan kelas ChangeNotifier sebagai penyedia state terpusat (FavoriteProvider dan ThemeProvider) yang dipasang pada root widget tree melalui MultiProvider di atas MaterialApp, aplikasi ResepKu mampu mewujudkan sinkronisasi data reaktif secara universal pada daftar resep, badge notifikasi AppBar, halaman detail, layar koleksi favorit, hingga pengalihan tema gelap/terang. Pemisahan aturan konsumsi state antara context.watch/Consumer untuk kebutuhan rendering reaktif dan context.read untuk callback aksi pengguna terbukti menjamin performa aplikasi tetap optimal, modular, dan bersih dari rebuild yang tidak perlu."
};


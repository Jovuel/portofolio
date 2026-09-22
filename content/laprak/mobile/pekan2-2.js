window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[3] = {
    "pekan": 3,
    "pekannum": 2.2,
    "tanggal": "16 September 2026",
    "title": "Layouting & Styling : Row, Column, Container, dan ListTile",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter",
    "icon": "bi-phone",
    "description": "Mempelajari teknik layout dan styling dasar dalam aplikasi Flutter menggunakan kombinasi widget fundamental seperti Row, Column, Container, dan ListTile untuk membangun antarmuka pengguna yang terstruktur dan menarik secara visual.",
    "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
    "pendahuluan": "Dalam membangun sebuah aplikasi mobile, elemen antarmuka pengguna (User Interface/UI) yang menarik dan terstruktur merupakan faktor kunci untuk menciptakan pengalaman pengguna yang positif. Pengembang harus mampu mengatur tata letak elemen visual agar tampilannya tidak hanya estetis, tetapi juga responsif dan mudah dinavigasi oleh pengguna. Kerangka kerja Flutter menyediakan berbagai <i>layout widgets</i> yang dirancang khusus untuk memfasilitasi penataan komponen-komponen UI secara efisien. Oleh karena itu, praktikum ini dilaksanakan agar mahasiswa mampu mengimplementasikan teknik layout dan styling dasar, serta mengoptimalkan penggunaan widget fundamental seperti <b>Row</b>, <b>Column</b>, <b>Container</b>, dan <b>ListTile</b> untuk menghasilkan aplikasi mobile yang tidak hanya fungsional, tetapi juga memiliki tampilan yang rapi dan menarik.",
    "tujuan": [
        "Menerapkan widget Row untuk deretan tombol aksi.",
        "Menerapkan widget Column untuk daftar transaksi.",
        "Mengatur padding, margin, dan warna Container."
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Menginisialisasi file Dart baru untuk membangun layout halaman menggunakan widget tata letak dasar pada Flutter.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Menerapkan widget Container sebagai bungkus (wrapper) elemen lain. Mengatur properti margin dan padding agar elemen di dalamnya memiliki jarak yang rapi.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Menggunakan properti decoration pada Container untuk menambahkan warna latar belakang dan radius sudut (border radius) agar tampilan lebih menarik.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Mengimplementasikan widget Column untuk menyusun beberapa elemen anak (children) secara vertikal dari atas ke bawah.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Mengatur properti crossAxisAlignment dan mainAxisAlignment pada Column agar elemen-elemen di dalamnya terpusat dan selaras.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/5.png"
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Menerapkan widget Row untuk menyusun kumpulan elemen (seperti tombol aksi atau ikon) secara horizontal dari kiri ke kanan.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/6.png"
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Menyisipkan Spacer atau mengatur mainAxisAlignment pada Row untuk memberikan spasi yang proporsional di antara elemen horizontal.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/7.png"
            ]
        },
        {
            "nomor": 8,
            "deskripsi": "Menggunakan widget ListTile untuk membuat daftar baris yang terstruktur rapi, lengkap dengan bagian leading (ikon), title (judul), subtitle (keterangan), dan trailing (elemen ujung).",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/8.png"
            ]
        },
        {
            "nomor": 9,
            "deskripsi": "Menggabungkan Column, Row, Container, dan ListTile secara bersarang (nested) untuk menciptakan struktur User Interface (UI) yang lebih kompleks.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/9.png"
            ]
        },
        {
            "nomor": 10,
            "deskripsi": "Output akhir layout pada aplikasi dijalankan. Menampilkan kombinasi kartu (Container), barisan tombol (Row), dan daftar item (ListTile dalam Column) dengan posisi yang presisi.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/10.png"
            ]
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "Mengerjakan Tugas 1: Memodifikasi properti text color pada trailing transaksi. Menambahkan Colors.red untuk transaksi pengeluaran (- Rp 50.000, - Rp 25.000) dan Colors.green untuk transaksi pemasukan (+ Rp 5.000.000, + Rp 750.000).",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/lat-1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Mengerjakan Tugas 2: Menambahkan 2 item transaksi fiktif baru pada struktur data atau UI. Transaksi pertama adalah Transportasi dengan pengeluaran sebesar (- Rp 25.000).",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/lat-2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Menambahkan transaksi fiktif kedua, yaitu Freelance dengan pemasukan sebesar (+ Rp 750.000). Output menunjukkan daftar transaksi yang sudah menampilkan perubahan warna (merah dan hijau) beserta 2 transaksi baru di bagian paling bawah.",
            "gambar": [
                "images/aplikasiMobile/pekan2_2/lat-3.png"
            ]
        }
    ],
    "kesimpulan": "Dapat diambil kesimpulan bahwa widget <b>Row</b> digunakan untuk menyusun elemen secara horizontal, seperti deretan tombol aksi Pemasukan, Pengeluaran, dan Transfer, sedangkan <b>Column</b> digunakan untuk menyusun elemen secara vertikal, terutama pada bagian daftar transaksi. <b>Container</b> berperan dalam mengatur padding, margin, warna latar, dan bentuk sudut tombol agar tampilan lebih menarik. Selain itu, <b>ListTile</b> dimanfaatkan untuk membuat baris daftar transaksi menjadi lebih praktis karena sudah menyediakan bagian leading, title, subtitle, dan trailing. Seluruh komponen kemudian digabungkan ke dalam <b>SingleChildScrollView</b> agar konten yang panjang tidak menyebabkan overflow dan tetap dapat digulir. Pada bagian latihan, mahasiswa diminta mengubah warna teks nominal pengeluaran menjadi merah dan pemasukan menjadi hijau, serta menambahkan dua transaksi fiktif baru ke dalam daftar."
};

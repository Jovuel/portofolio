window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[2] = {
    "pekan": 2,
    "pekannum": 2.1,
    "tanggal": "16 September 2026",
    "title": "Pengenalan Widgets : Stateless, Stateful, & Manajemen State Dasar",
    "subject": "Praktikum Aplikasi Mobile",
    "badge": "Flutter",
    "icon": "bi-phone",
    "description": "Mempelajari perbedaan dasar antara StatelessWidget dan StatefulWidget dalam Flutter, serta bagaimana cara mengelola dan mengubah state pada aplikasi untuk menghasilkan UI yang dinamis dan interaktif.",
    "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
    "pendahuluan": "Dalam pengembangan aplikasi mobile, antarmuka pengguna yang responsif dan interaktif sangat bergantung pada kemampuan kerangka kerja (framework) untuk mengelola perubahan data secara efisien. Di Flutter, elemen fundamental untuk membangun antarmuka ini adalah <b>widget</b>, yang berfungsi sebagai blok bangunan dasar dari setiap visual yang ditampilkan di layar. Pemahaman mendalam mengenai jenis-jenis widget, terutama perbedaan krusial antara <b>StatelessWidget</b> dan <b>StatefulWidget</b>, menjadi kunci utama untuk merancang aplikasi yang tidak hanya statis, tetapi juga mampu bereaksi terhadap input pengguna dan memperbarui tampilannya secara dinamis. Oleh karena itu, praktikum ini dilaksanakan dengan tujuan agar mahasiswa memahami karakteristik masing-masing widget dan mampu mengimplementasikan manajemen state sederhana untuk menghasilkan aplikasi mobile yang interaktif dan efisien.",
    "tujuan": [
        "Memahami kerangka dasar aplikasi Flutter (MaterialApp & Scaffold)",
        "Membedakan penggunaan StatelessWidget dan StatefulWidget",
        "Menerapkan fungsi setState() untuk UI interaktif"
    ],
    "langkahLangkah": [
        {
            "nomor": 1,
            "deskripsi": "Membuat struktur awal file Dart untuk implementasi antarmuka. Mendefinisikan class utama aplikasi yang mewarisi StatelessWidget untuk menampilkan kerangka dasar aplikasi.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Menggunakan widget MaterialApp dan Scaffold sebagai struktur halaman dasar yang akan memuat AppBar dan body.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Mendefinisikan class baru yang mewarisi StatefulWidget. Ini diperlukan agar aplikasi dapat merespons perubahan interaksi dan memperbarui UI secara real-time.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/3.png"
            ]
        },
        {
            "nomor": 4,
            "deskripsi": "Mendeklarasikan variabel state di dalam class State. Variabel ini akan menyimpan nilai yang bisa berubah-ubah selama aplikasi berjalan.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/4.png"
            ]
        },
        {
            "nomor": 5,
            "deskripsi": "Membuat fungsi untuk mengubah nilai variabel state menggunakan metode setState(). Hal ini akan memicu pembangunan ulang (rebuild) pada widget sehingga tampilan ikut diperbarui.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/5.png"
            ]
        },
        {
            "nomor": 6,
            "deskripsi": "Menambahkan elemen interaktif seperti tombol (Button) pada antarmuka yang akan memanggil fungsi setState() ketika ditekan oleh pengguna.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/6.png"
            ]
        },
        {
            "nomor": 7,
            "deskripsi": "Hasil output aplikasi dijalankan. Saat pengguna berinteraksi dengan tombol, widget akan diperbarui secara dinamis menampilkan perubahan state.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/7.png"
            ]
        }
    ],
    "latihan": [
        {
            "nomor": 1,
            "deskripsi": "Mengerjakan Tugas 1: Memodifikasi widget BalanceCardWidget pada source code dengan mengubah properti color yang sebelumnya Colors.blueAccent diganti menjadi Colors.teal.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/lat-1.png"
            ]
        },
        {
            "nomor": 2,
            "deskripsi": "Mengerjakan Tugas 2: Menambahkan teks statis 'No. Rekening: 1234-5678' di bawah teks nominal saldo. Teks ini diletakkan di dalam widget Column pada layout kartu saldo.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/lat-2.png"
            ]
        },
        {
            "nomor": 3,
            "deskripsi": "Output akhir setelah menyelesaikan latihan. Tampilan kartu telah berubah menjadi warna teal dan terdapat tambahan informasi nomor rekening di bagian bawah nominal.",
            "gambar": [
                "images/aplikasiMobile/pekan2_1/lat-3.png"
            ]
        }
    ],
    "kesimpulan": "Berdasarkan analisis pada modul praktikum kali ini, elemen kunci dalam membangun antarmuka aplikasi Flutter terletak pada konsep <b>widget</b>. Secara fundamental, terdapat dua jenis widget utama, yakni <b>StatelessWidget</b> dan <b>StatefulWidget</b>, yang memiliki karakteristik berbeda dalam mengelola tampilan dan state aplikasi. StatelessWidget, seperti yang dicontohkan pada widget BalanceCardWidget, ideal untuk elemen UI yang bersifat statis dan tidak memerlukan interaksi dinamis, sebab widget ini hanya akan dibangun satu kali saat inisialisasi. Sebaliknya, StatefulWidget digunakan untuk mengakomodasi fitur interaktif seperti input pengguna atau elemen yang nilainya dapat berubah seiring waktu. Dalam StatefulWidget, komponen yang dapat memengaruhi tampilan harus dideklarasikan sebagai <i>state</i> dan dikelola melalui metode <b>setState()</b>. Hal ini memastikan bahwa setiap kali terdapat pembaruan data, widget terkait akan diperbarui secara otomatis sehingga tampilan aplikasi tetap konsisten dengan kondisi saat ini. Selain itu, efisiensi dalam pengembangan juga dicapai melalui integrasi kontrol input yang mumpuni — baik melalui TextField dengan TextEditingController maupun TextFormField yang terintegrasi dengan sistem validasi bawaan — untuk menyediakan pengalaman pengguna yang responsif dan andal."
};

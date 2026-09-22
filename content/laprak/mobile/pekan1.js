window.laprakMobileData = window.laprakMobileData || {};
window.laprakMobileData[1] = {
  "pekan": 1,
  "pekannum": 1,
  "tanggal": "9 September 2026",
  "title": "Basic Form — TextField & TextFormField",
  "subject": "Praktikum Aplikasi Mobile",
  "badge": "Flutter",
  "icon": "bi-phone",
  "description": "Mempelajari implementasi input widgets pada Flutter menggunakan TextField dengan TextEditingController dan TextFormField dengan validasi GlobalKey<FormState> untuk membangun formulir interaktif yang robust.",
  "github": "https://github.com/Jovuel/2411532014_PraktikumAplikasiMobile",
  "pendahuluan": "Interaksi antara pengguna dengan sistem merupakan hal yang paling penting dan paling krusial dalam sebuah aplikasi mobile. Salah satu bentuk interaksi yang paling umum adalah pengumpulan data pengguna melalui formulir. Dalam kerangka kerja Flutter, implementasi antarmuka input ini didukung oleh berbagai <i>input widgets</i> yang dirangkum dalam konsep <b>Basic Form</b>. Keberadaan basic form ini tidak hanya berfungsi sebagai wadah visual untuk menerima masukan langsung dari keyboard, tetapi juga berperan penting dalam memvalidasi dan mengelola data tersebut agar sesuai dengan aturan yang ditetapkan oleh pengembang sebelum diproses lebih lanjut. Oleh karena itu, praktikum ini dilaksanakan agar mahasiswa mampu merancang antarmuka formulir dasar, mengimplementasikan widget fungsional, serta mengontrol secara penuh alur masukan data dari pengguna untuk menghasilkan aplikasi yang interaktif dan minim error.",
  "tujuan": [
    "Membuat beberapa input widgets pada Flutter.",
    "Membuat dan mengontrol inputan dari user menggunakan TextEditingController.",
    "Mengimplementasikan validasi form menggunakan GlobalKey<FormState> dan TextFormField.",
    "Memahami perbedaan penggunaan TextField dan TextFormField dalam konteks pengelolaan formulir."
  ],
  "langkahLangkah": [
    {
      "nomor": 1,
      "deskripsi": "Membuat file Dart baru dengan nama <b>form-textfield.dart</b> di dalam folder <code>lib</code> sebagai entry point untuk implementasi TextField pertama.",
      "gambar": ["images/aplikasiMobile/pekan1/1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Membuat tampilan basic form menggunakan widget <b>TextField</b> untuk menerima input teks dari pengguna dan <b>ElevatedButton</b> sebagai trigger event listener-nya. Struktur utama terdiri dari class <code>MyApp</code> (StatelessWidget) dan <code>MyForm</code> (StatefulWidget).",
      "gambar": ["images/aplikasiMobile/pekan1/2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Pada class <b>_MyFormState</b>, menambahkan deklarasi variabel <code>TextEditingController _textEditingController</code> beserta override <code>dispose()</code> untuk membersihkan resource controller saat widget dihapus dari tree, mencegah memory leak.",
      "gambar": ["images/aplikasiMobile/pekan1/3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Menambahkan properti penting pada widget <b>TextField</b>: menghubungkan <code>controller: _textEditingController</code>, menetapkan <code>keyboardType: TextInputType.text</code>, dan mengimplementasikan callback <code>onChanged</code> yang mencetak teks ke konsol secara real-time saat user mengetik.",
      "gambar": ["images/aplikasiMobile/pekan1/4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Membuat logika pada <b>ElevatedButton</b>: variabel <code>inputText</code> mengambil nilai dari controller, lalu menampilkan hasil input tersebut kepada pengguna melalui widget <b>SnackBar</b> menggunakan <code>ScaffoldMessenger.of(context).showSnackBar()</code>.",
      "gambar": ["images/aplikasiMobile/pekan1/5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Output tampilan aplikasi TextField berjalan di browser (Flutter Web). Form menampilkan field <b>Nama Lengkap</b> dengan hint text, prefix icon, dan tombol <b>Tampilkan nama</b> berwarna kuning. Saat diisi dan diklik, SnackBar muncul di bagian bawah layar menampilkan nama yang dimasukkan.",
      "gambar": ["images/aplikasiMobile/pekan1/6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Membuat file Dart baru dengan nama <b>form-textformfield.dart</b> sebagai file terpisah untuk implementasi TextFormField yang memiliki fitur validasi bawaan lebih komprehensif dibanding TextField biasa.",
      "gambar": ["images/aplikasiMobile/pekan1/7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Membuat struktur form input menggunakan <b>2 widget TextFormField</b> (untuk Nama dan Email) dan <b>1 ElevatedButton</b> Submit. Kode lengkap mencakup class <code>MyFormText</code> (StatefulWidget) dan state-nya <code>_MyFormTextState</code>.",
      "gambar": ["images/aplikasiMobile/pekan1/8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Output awal saat aplikasi TextFormField dijalankan: tampil dua field input (Nama dan Email) dengan label <code>OutlineInputBorder</code> serta tombol Submit di bagian bawah. Halaman berjudul <b>Basic Form TextFormField</b>.",
      "gambar": ["images/aplikasiMobile/pekan1/9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Menambahkan variabel <code>GlobalKey&lt;FormState&gt; _formKey</code>, dua controller (<code>_nameController</code> dan <code>_emailController</code>), override <code>dispose()</code> untuk keduanya, serta method <b>_submitForm()</b> yang memvalidasi form via <code>_formKey.currentState!.validate()</code> dan menampilkan SnackBar sukses.",
      "gambar": ["images/aplikasiMobile/pekan1/10.png"]
    },
    {
      "nomor": 11,
      "deskripsi": "Mengubah <code>TextFormField</code> Nama agar lebih fleksibel: menambahkan <code>validator</code> yang memeriksa apakah field kosong (<code>value == null || value.isEmpty</code>) dan mengembalikan pesan error <i>'Masukkan nama anda'</i> jika validasi gagal.",
      "gambar": ["images/aplikasiMobile/pekan1/11.png"]
    },
    {
      "nomor": 12,
      "deskripsi": "Mengubah <code>TextFormField</code> Email dengan validasi ganda: memeriksa kekosongan field dan memvalidasi format email dengan mengecek apakah value mengandung karakter <code>@</code> menggunakan <code>!value.contains('@')</code>, mengembalikan error <i>'Email tidak valid'</i> jika format salah.",
      "gambar": ["images/aplikasiMobile/pekan1/12.png"]
    },
    {
      "nomor": 13,
      "deskripsi": "Menambahkan <code>onPressed: _submitForm</code> pada ElevatedButton melalui widget <b>SizedBox</b> full-width, sehingga tombol Submit terhubung ke method validasi. Widget Form juga dibungkus dengan <code>key: _formKey</code>.",
      "gambar": ["images/aplikasiMobile/pekan1/13.png"]
    },
    {
      "nomor": 14,
      "deskripsi": "Menguji logika validasi <b>invalid email format</b>: mengisi nama 'jovan' dan email 'jojo.sangat.baik.huwuw' (tanpa @). Sistem langsung menampilkan pesan error merah <i>'Email tidak valid'</i> di bawah field email, dan tombol Submit tidak memproses data.",
      "gambar": ["images/aplikasiMobile/pekan1/14.png"]
    },
    {
      "nomor": 15,
      "deskripsi": "Menguji validasi dengan data benar: mengisi nama 'jovan' dan email 'jojo@sangat.baik.huwuw' (mengandung @). Validasi berhasil, SnackBar muncul di bagian bawah dengan pesan <b>'Validasi jovan, jojo@sangat.baik.huwuw Berhasil'</b>.",
      "gambar": ["images/aplikasiMobile/pekan1/15.png"]
    },
    {
      "nomor": 16,
      "deskripsi": "Kode program <b>form-textformfield.dart</b> secara lengkap: mencakup seluruh struktur dari import, class MyApp, MyFormText, hingga _MyFormTextState dengan _submitForm, validator Nama & Email, serta integrasi widget Form + GlobalKey.",
      "gambar": ["images/aplikasiMobile/pekan1/16.png"]
    }
  ],
  "latihan": [
    {
      "nomor": 1,
      "deskripsi": "Membuat file baru untuk tugas Kalkulator Kabataku. Struktur utama dimulai dengan mendefinisikan <code>main()</code> dan <code>MyApp</code> yang menggunakan <code>MaterialApp</code> dengan tema biru.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-1.png"]
    },
    {
      "nomor": 2,
      "deskripsi": "Mendefinisikan <code>CalculatorPage</code> sebagai sebuah <b>StatefulWidget</b> agar halaman dapat merespons perubahan state saat pengguna melakukan operasi perhitungan.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-2.png"]
    },
    {
      "nomor": 3,
      "deskripsi": "Pada <code>_CalculatorPageState</code>, mendeklarasikan dua <code>TextEditingController</code> untuk menerima input angka, serta membuat fungsi-fungsi logika matematika (<code>_tambah</code>, <code>_kurang</code>, <code>_kali</code>, <code>_bagi</code>) yang dilengkapi dengan validasi input dan penanganan nilai <i>null</i>.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-3.png"]
    },
    {
      "nomor": 4,
      "deskripsi": "Melakukan override pada metode <code>dispose()</code> untuk membersihkan kedua controller dari memori saat widget sudah tidak digunakan.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-4.png"]
    },
    {
      "nomor": 5,
      "deskripsi": "Menulis antarmuka pengguna pada metode <code>build()</code>. Menggunakan <code>Column</code> yang menampung dua <code>TextField</code> untuk input nilai (bertipe <i>number</i>), serta <code>Row</code> yang berisi tombol-tombol operasi aritmatika (Tambah, Kurang, Kali, Bagi). Di bawahnya terdapat <code>Text</code> untuk menampilkan hasil kalkulasi secara reaktif.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-5.png"]
    },
    {
      "nomor": 6,
      "deskripsi": "Tampilan awal antarmuka Kalkulator Kabataku saat pertama kali dijalankan. Terdapat field 'Nilai Pertama' dan 'Nilai Kedua', empat tombol operasi, serta label 'Hasil: -' di bagian bawah.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-6.png"]
    },
    {
      "nomor": 7,
      "deskripsi": "Menguji operasi pengurangan. Menginput nilai pertama 3 dan nilai kedua 9, kemudian menekan tombol <b>- Kurang</b>. Hasil dengan akurat menampilkan <b>-6</b>.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-7.png"]
    },
    {
      "nomor": 8,
      "deskripsi": "Menguji operasi pembagian. Menginput nilai pertama 3 dan nilai kedua 9, lalu menekan tombol <b>÷ Bagi</b>. Hasil perhitungan menampilkan desimal presisi yaitu <b>0.3333333333333333</b>.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-8.png"]
    },
    {
      "nomor": 9,
      "deskripsi": "Menguji operasi penjumlahan. Menggunakan nilai pertama 3 dan nilai kedua 9, kemudian menekan tombol <b>+ Tambah</b>. Sistem memperbarui state dan menampilkan hasil <b>12</b>.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-9.png"]
    },
    {
      "nomor": 10,
      "deskripsi": "Menguji operasi perkalian. Dengan nilai pertama 3 dan nilai kedua 9, menekan tombol <b>× Kali</b> akan memproses kalkulasi dan menampilkan hasil yang benar yaitu <b>27</b>.",
      "gambar": ["images/aplikasiMobile/pekan1/lat-10.png"]
    }
  ],
  "kesimpulan": "Dari serangkaian percobaan yang telah dilakukan, dapat disimpulkan bahwa pengelolaan input pengguna di Flutter sangat bergantung pada pemilihan widget yang tepat dan manajemen state yang efisien. Penggunaan TextField terbukti mumpuni untuk mengakomodasi kebutuhan input teks sederhana yang dikontrol melalui TextEditingController. Namun, untuk formulir yang membutuhkan aturan validasi spesifik, TextFormField menjadi solusi yang lebih komprehensif karena terintegrasi secara bawaan dengan fungsi validasi. Proses validasi dapat dieksekusi secara kolektif menggunakan GlobalKey&lt;FormState&gt; yang terhubung dengan metode validate(), sehingga aplikasi dapat menolak input yang tidak memenuhi syarat dan otomatis menampilkan pesan error kepada pengguna. Selain aspek fungsionalitas, efisiensi antarmuka juga ditentukan oleh siklus hidup widget — pembaruan tampilan secara real-time wajib memanfaatkan setState(), sementara komponen statis direkomendasikan menggunakan deklarasi const agar proses kompilasi lebih ringan dan menghemat alokasi memori."
};

const questions = [
  {
    "id": 1,
    "question": "Pemeriksaan fisik terhadap bagasi dilakukan pada kondisi :",
    "options": {
      "a": "Operator X - Ray tidak dapat mengenali secara jelas",
      "b": "pemeriksaan acak (random check) sebanyak 10%",
      "c": "Tampilan monitor benda yang ada di bagasi sangat gelap",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 2,
    "question": "Pemeriksaan keamanan kargo dan pos menggunakan peralatan pemeriksaan harus sesuai dengan :",
    "options": {
      "a": "Surat pemberitahuan tentang isi (PTI)",
      "b": "Surat Muatan Angkutan Udara (SMU)",
      "c": "Jawaban A dan B Benar",
      "d": "Jawaban A dan B Salah"
    },
    "answer": "c"
  },
  {
    "id": 3,
    "question": "Pemegang sertifikat peralatan yang tidak memenuhi kebutuhan akan dikenakan sanksi administratif berupa :",
    "options": {
      "a": "Denda administratif",
      "b": "Pencabutan sertifikat peralatan",
      "c": "Peringatan",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 4,
    "question": "Peralatan dengan fungsi pendeteksi bahan nuklir, biologi, kimia , dan radioaktif adalah :",
    "options": {
      "a": "Hand held metal detector",
      "b": "Nubichera Detector",
      "c": "Walk through metal detector",
      "d": "Body inspection mechine"
    },
    "answer": "b"
  },
  {
    "id": 5,
    "question": "Ancaman orang dalam (Insider threat) merupakan salah satu bentuk dari ancaman dalam dunia penerbangan pada saat ini. Berikut ini adalah ancaman orang dalam (Insider threat) di dunia penerbangan kecuali...",
    "options": {
      "a": "Pilot",
      "b": "Semua Jawaban Salah",
      "c": "Petugas check in counter",
      "d": "Petugas avsec"
    },
    "answer": "b"
  },
  {
    "id": 6,
    "question": "Barang dilarang (prohibited items) yang memerlukan penanganan khusus dalam hal kemasan, label dan marka bila diangkut pesawat udara sipil adalah :",
    "options": {
      "a": "Senjata (Weapon)",
      "b": "Benda/alat yang berbahaya (Dangerous Article)",
      "c": "Barang berbahaya (Dangerous Goods)",
      "d": "Bahan Peledak (Explosive)"
    },
    "answer": "c"
  },
  {
    "id": 7,
    "question": "Berikut ini merupakan persyaratan pada pembatas fisik pada bandar udara internasional, Kecuali...",
    "options": {
      "a": "Memiliki tinggi minimal 1,5 meter dan dilengkapi dengan kawat berduri diatasnya",
      "b": "pagar perimeter berbahan metal yang bebas pandangan (clearly visible) dan memiliki lubang pagar (mesh) yang tidak dapat disusupi orang",
      "c": "tidak ada celah dari bawah sampai atas untuk disusupi orang, termasuk pemberian teralis pada drainase atau saluran pembuangan air",
      "d": "Dilengkapi sistem kamera pemantau (closed circuit television) yang dapat memantau seluruh perimeter"
    },
    "answer": "a"
  },
  {
    "id": 8,
    "question": "Pada pilihan di bawah ini merupakan tindakan yang dilakukan operator mesin x - ray ketika mengidentifikasi tampilan bagasi atau barang bawaan yang dikategorikan berbahaya berupa rangkaian bom, Kecuali...",
    "options": {
      "a": "Berkoordinasi dengan polisi",
      "b": "Menghentikan conveyor belt mesin x - ray",
      "c": "Langsung membuka bagasi tersebut",
      "d": "Memberitahukan pengawas (supervisor)"
    },
    "answer": "c"
  },
  {
    "id": 9,
    "question": "Langkah pertama yang harus dilakukan bila menemukan benda yang dicurigai sebagai bahan peledak di areal sekitar Bandara adalah :",
    "options": {
      "a": "Dilindungi",
      "b": "Jangan disentuh",
      "c": "Buat laporan",
      "d": "Segera dibuang"
    },
    "answer": "b"
  },
  {
    "id": 10,
    "question": "Personel keamanan penerbangan yang bertugas melakukan identifikasi tampilan bagasi atau barang bawaan di layar monitor x - ray adalah :",
    "options": {
      "a": "Pengatur arus masuk penumpang",
      "b": "Pemeriksa bagasi",
      "c": "Pemeriksa penumpang",
      "d": "Operator mesin x - ray"
    },
    "answer": "d"
  },
  {
    "id": 11,
    "question": "Setiap muatan kendaraan yang memasuki Daerah Keamanan Terbatas harus dilakukan pemeriksaan keamanan oleh personel pengamanan bandar udara, Kecuali...",
    "options": {
      "a": "muatan kendaraan berupa kargo dan pos yang telah dilakukan pemeriksaan atau pengendalian oleh regulated agent atau pengirim pabrikan (known consignor)",
      "b": "Semua Jawaban Salah",
      "c": "muatan kendaraan berupa jasa boga (catering) dan barang perbekalan (stores and supplies) yang akan dimuat ke dalam pesawat udara dan telah dilakukan validasi keamanan oleh Badan Usaha Angkutan Udara atau Perusahaan Angkutan Udara Asing",
      "d": "muatan kendaraan berupa barang merchandise dan barang perbekalan (supplies) yang akan diperjualbelikan di dalam bandar udara atau barang suku cadang (spare part) peralatan di bandar udara dan telah dilakukan validasi keamanan oleh Unit Penyelenggara Bandar Udara atau Badan Usaha Bandar Udara"
    },
    "answer": "b"
  },
  {
    "id": 12,
    "question": "Program Keamanan Penerbangan Nasional adalah ...",
    "options": {
      "a": "tindakan - tindakan atau percobaan yang membahayakan keselamatan penerbangan dan angkutan udara",
      "b": "dokumen tertulis yang memuat peraturan, prosedur dan langkah - langkah pengamanan yang diambil untuk melindungi penerbangan dari tindakan melawan hukum",
      "c": "suatu tindakan pengrusakan atau penghilangan terhadap harta benda, yang dapat mengancam atau menyebabkan terjadinya tindakan melawan hukum pada penerbangan dan fasilitasnya",
      "d": "suatu ancaman lisan atau tulisan dari seseorang yang tidak diketahui atau sebaliknya, yang menyarankan atau menyatakan, apakah benar atau tidak, bahwa keselamatan dari sebuah pesawat udara yang dalam penerbangan atau di darat, atau bandar udara atau fasilitas penerbangan, atau seseorang mungkin dalam bahaya karena suatu bahan peledak"
    },
    "answer": "b"
  },
  {
    "id": 13,
    "question": "Tindak pidana dan perbuatan - perbuatan tertentu yang dilakukan di dalam pesawat udara meliputi perbuatan yang merupakan pelanggaran terhadap hukum pidana atau bukan tetapi mungkin dapat mengganggu keamanan dan keselamatan penerbangan, diatur dalam konvensi",
    "options": {
      "a": "Montreal 1971",
      "b": "The Hague 1970",
      "c": "Tokyo 1963",
      "d": "Chicago 1944"
    },
    "answer": "c"
  },
  {
    "id": 14,
    "question": "Penumpang yang membawa alat peledak (Explosive Devices), harus diamankan dan dilaporkan kepada ?",
    "options": {
      "a": "Inspektur Keamanan Penerbangan",
      "b": "Security Airline",
      "c": "Kepolisian",
      "d": "Semua Jawaban salah"
    },
    "answer": "c"
  },
  {
    "id": 15,
    "question": "Kawasan di daratan dan/atau perairan dengan batas - batas tertentu yang digunakan sebagai tempat pesawat udara mendarat dan lepas landas, naik turun penumpang, bongkar muat barang, dan tempat perpindahan intra dan antarmoda transportasi, yang dilengkapi dengan fasilitas keselamatan dan Keamanan Penerbangan, serta fasilitas pokok dan fasilitas penunjang lainnya, merupakan pengertian dari...",
    "options": {
      "a": "Airstrip",
      "b": "Bandar Udara",
      "c": "Runway",
      "d": "Heliport"
    },
    "answer": "b"
  },
  {
    "id": 16,
    "question": "Tindakan melawan hukum adalah...",
    "options": {
      "a": "Tindakan - tindakan yang memberikan perlindungan",
      "b": "Tindakan - tindakan atau percobaan yang membahayakan keselamatan penerbangan dan angkutan udara",
      "c": "Tindakan - tindakan yang tergolong memberikan keamanan dan keselamatan penerbangan",
      "d": "Tindakan - tindakan yang tergolong memberikan kenyamanan terhadap penumpang"
    },
    "answer": "b"
  },
  {
    "id": 17,
    "question": "Peralatan yang digunakan khusus untuk mendeteksi bahan peledak adalah :",
    "options": {
      "a": "Hand Held Metal Detector (HHMD)",
      "b": "Explosive Detector",
      "c": "X - Ray Machine",
      "d": "Walk Through Metal Detector"
    },
    "answer": "b"
  },
  {
    "id": 18,
    "question": "Pada pilihan berikut ini merupakan langkah - langkah yang dilakukan operator mesin x - ray ketika menemukan bagasi atau barang bawaan yang dikategorikan mencurigakan, Kecuali...",
    "options": {
      "a": "Memerintahkan pemilik untuk membuka bagasi dengan memperhatikan reaksi dari pemilik",
      "b": "Melakukan pemeriksaan bagasi secara keseluruhan dari luar ke dalam untuk menemukan benda yang diinformasikan oleh operator mesin x - ray",
      "c": "Apabila bagasi telah diperiksa, tidak perlu mengembalikan dan membantu penumpang merapikan tasnya kembali",
      "d": "Memastikan kepemilikan bahasi atau barang bawaan"
    },
    "answer": "c"
  },
  {
    "id": 19,
    "question": "Petugas, barang bawaan dan kendaraan yang memasuki daerah keamanan terbatas atau ruang tunggu dilakukan pemeriksaan keamanan kecuali :",
    "options": {
      "a": "Pada kondisi kebakaran",
      "b": "Pada kondisi darurat medis",
      "c": "Pada kondisi darurat penerbangan",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 20,
    "question": "Untuk keselamatan dan alasan operasional, pada daerah take off dan landing di ujung runway, terhadap pembatas fisik pada perimeter yang tidak memenuhi harus dilakukan langkah - langkah mitigasi (mitigation plan). Berikut ini adalah langkah - langkah mitigasi (mitigation plan) sebagaimana dimaksud, yaitu ...",
    "options": {
      "a": "melengkapi tanda peringatan (sign board) keamanan penerbangan",
      "b": "Semua Jawaban Benar",
      "c": "membuat pos penjagaan",
      "d": "melakukan patroli lebih intensif"
    },
    "answer": "b"
  },
  {
    "id": 21,
    "question": "Apron adalah...",
    "options": {
      "a": "bagian dari bandar udara yang dipergunakan sebagai tempat pemeliharaan atau pekerjaan pembangunan/konstruksi yang sedang berjalan yang dapat membahayakan keselamatan operasi pesawat udara",
      "b": "suatu area bandar udara di darat yang telah ditentukan untuk mengakomodasi pesawat udara dengan tujuan naik turun penumpang, bongkar muat kargo, penumpang, surat, pengisian bahan bakar, parkir, atau pemeliharaan pesawat udara",
      "c": "bagian dari bandar udara yang digunakan untuk lepas landas (take - off), pendaratan (landing) dan taxiing pesawat udara",
      "d": "kawasan di daratan dan/atau perairan dengan batas - batas tertentu yang hanya digunakan sebagai tempat pesawat udara mendarat dan lepas landas"
    },
    "answer": "b"
  },
  {
    "id": 22,
    "question": "Fasilitas keamanan penerbangan mempunyai fungsi sebagai ...",
    "options": {
      "a": "Penundaan upaya tindakan melawan hukum",
      "b": "Alat pemeriksaan keamanan",
      "c": "Pemantauan keamanan",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 23,
    "question": "Prosedur penerimaan kargo dan pos harus memuat proses pemeriksaan terhadap dokumen, antara lain :",
    "options": {
      "a": "Known shipper",
      "b": "Pemberitahuan tentang isi/ PTI",
      "c": "Airway bill",
      "d": "Semua Jawaban benar"
    },
    "answer": "d"
  },
  {
    "id": 24,
    "question": "Berikut ini merupakan fungsi CCTV dalam Keamanan Penerbangan, Kecuali...",
    "options": {
      "a": "Memantau area - area tertentu yang tidak terjangkau oleh manusia",
      "b": "Semua Jawaban Salah",
      "c": "Memantau di access control di sisi udara yang tidak terjangkau oleh manusia",
      "d": "Memantau diarea pemeriksaan oleh personel keamanan penerbangan"
    },
    "answer": "b"
  },
  {
    "id": 25,
    "question": "Komando penanggulangan tindakan melawan hukum pada kondisi darurat (merah) tingkat Nasional :",
    "options": {
      "a": "Panglima TNI",
      "b": "Kapolri",
      "c": "Kapolres terdekat",
      "d": "Komandan Pangkalan"
    },
    "answer": "a"
  },
  {
    "id": 26,
    "question": "Yang disebut dengan Sertifikat Peralatan Keamanan Penerbangan adalah ?",
    "options": {
      "a": "Tanda bukti bahwa peralatan keamanan telah dilakukan pengujian dan memenuhi standar teknis operasional peralatan",
      "b": "Peralatan tersebut sudah dapat dipergunakan/operasikan",
      "c": "Tanda bukti bahwa peralatan keamanan telah dilakukan pengujian",
      "d": "Peralatan keamanan penerbangan yang dipergunakan di bandara"
    },
    "answer": "a"
  },
  {
    "id": 27,
    "question": "Dalam hal tindakan awal penanganan barang berbahaya/Emergency Dangerous Goods, beberapa langkah utama yang perlu diperhatikan antara lain sebagai berikut :",
    "options": {
      "a": "Paket tersebut dibuka",
      "b": "Disentuh paket tersebut",
      "c": "Dijaga resiko bahayanya",
      "d": "Isolasi daerah sekitar paket tersebut"
    },
    "answer": "d"
  },
  {
    "id": 28,
    "question": "Setiap personel pengamanan penerbangan harus mengikuti pendidikan dan pelatihan penyegaran (refreshing course) sesuai dengan tugas dan kewenangannya sekurang - kurangnya setiap...",
    "options": {
      "a": "1 (satu) kali per 6 (enam) bulan",
      "b": "2 (dua) kali per 1 (satu) tahun",
      "c": "1 (satu) kali per tahun",
      "d": "1 (satu) kali dalam 2 (dua) tahun"
    },
    "answer": "c"
  },
  {
    "id": 29,
    "question": "Perbuatan yang menggunakan kekerasan atau ancaman kekerasan yang menimbulkan suasana teror atau rasa takut secara meluas, yang dapat menimbulkan korban yang bersifat massal, dan/atau menimbulkan kerusakan atau kehancuran terhadap objek vital yang strategis , Iingkungan hidup, fasilitas publik, atau fasilitas internasional dengan motif ideologi, politik, atau gangguan keamanan merupakan definisi dari...",
    "options": {
      "a": "Radikalisme",
      "b": "Ancaman Bom",
      "c": "Terorisme",
      "d": "Tindakan melawan hukum"
    },
    "answer": "c"
  },
  {
    "id": 30,
    "question": "Dibawah ini adalah daftar barang dilarang (Prohibited item), kecuali :",
    "options": {
      "a": "Barang jinjingan berupa cairan, gas dan jeli",
      "b": "Perangkat yang dirancang khusus untuk membuat pingsan / melumpuhkan",
      "c": "Objek dengan ujung atau sisi yang tajam yang mampu digunakan untuk menyebabkan cedera serius",
      "d": "Alat kerja yang dapat digunakan untuk menyebabkan cedera serius atau mengancam keamanan pesawat udara"
    },
    "answer": "a"
  },
  {
    "id": 31,
    "question": "Persentase pemeriksaan manual secara random dapat ditingkatkan dalam kondisi :",
    "options": {
      "a": "WTMD rusak",
      "b": "Ancaman meningkat",
      "c": "Jumlah penumpang meningkat",
      "d": "Ada penumpang kehilangan barang"
    },
    "answer": "b"
  },
  {
    "id": 32,
    "question": "Label Sertifikat Peralatan Keamanan Penerbangan adalah ...",
    "options": {
      "a": "Tanda bukti yang dilekatkan pada peralatan keamanan penerbanganyang menunjukkan bahwa telah dilakukan pengujian kelaikan dan memenuhi standar kelaikan peralatan",
      "b": "Tanda bukti peralatan keamanan penerbangan yang sudah mendapatkan pengujian",
      "c": "Tanda bukti peralatan keamanan penerbangan yang layak digunakan untuk operasional",
      "d": "Tanda bukti peralatan keamanan penerbangan yang digunakan oleh personel kampen"
    },
    "answer": "a"
  },
  {
    "id": 33,
    "question": "Berikut ini merupakan personel yang tergolong ke dalam personel keamanan penerbangan, kecuali...",
    "options": {
      "a": "Personel bandar udara",
      "b": "Personel fasilitas keamanan penerbangan",
      "c": "Inspektur keamanan penerbangan",
      "d": "Instruktur keamanan penerbangan"
    },
    "answer": "a"
  },
  {
    "id": 34,
    "question": "Berikut ini adalah metode pengendalian jalan masuk (access control) ke daerah keamanan terbatas yaitu ...",
    "options": {
      "a": "melakukan pemeriksaan keamanan",
      "b": "melakukan pemeriksaan izin masuk",
      "c": "Jawaban A dan B benar",
      "d": "Jawaban A dan B salah"
    },
    "answer": "c"
  },
  {
    "id": 35,
    "question": "Tujuan pemeriksaan keamanan di SCP adalah...",
    "options": {
      "a": "Mencegah terangkutnya barang dilarang (prohibited item) ke dalam pesawat udara",
      "b": "Menemukan senjata tajam, peledak dan benda - benda yang dipergunakan sebagai alat perusak",
      "c": "Mencari peledak yang akan dipergunakan untuk mengancam keamanan penerbangan",
      "d": "Mengindentifikasi koper berbahaya melalui mesin X - Ray"
    },
    "answer": "d"
  },
  {
    "id": 36,
    "question": "Surat izin yang diberikan kepada seseorang yang telah memenuhi persyaratan tertentu untuk melakukan pekerjaan di bidang penerbangan dalam jangka waktu tertentu adalah...",
    "options": {
      "a": "Kartu Tanda Pengenal",
      "b": "Lisensi",
      "c": "Sertifikat Kompetensi",
      "d": "PAS Bandar Udara"
    },
    "answer": "b"
  },
  {
    "id": 37,
    "question": "The Safe Transport of Dangerous Goods by Air, merupakan suatu pedoman pengangkutan barang berbahaya menggunakan pesawat udara yang di keluarkan oleh ICAO di Annex ..",
    "options": {
      "a": "19",
      "b": "16",
      "c": "18",
      "d": "17"
    },
    "answer": "c"
  },
  {
    "id": 38,
    "question": "Berikut ini adalah salah satu tujuan disusunnya Program Keamanan Penerbangan Nasional adalah...",
    "options": {
      "a": "mencari siapa yang bertanggung jawab",
      "b": "mengidentifikasi tindakan melawan hukum yang terjadi",
      "c": "untuk mempertahankan tingkat keamanan bandar udara dan angkutan udara yang memberikan pelayanan penerbangan di Indonesia",
      "d": "merencanakan tindakan yang akan diambil untuk menanggulangi tindakan melawan hukum"
    },
    "answer": "c"
  },
  {
    "id": 39,
    "question": "Parameter peralatan yang harus dipenuhi oleh peralatan keamanan penerbangan untuk dapat dioperasikan adalah...",
    "options": {
      "a": "Standar kelaikan peralatan",
      "b": "Standar kelaikan navigasi udara",
      "c": "Standar kelaikan bandar udara",
      "d": "Standar kelaikan operasi"
    },
    "answer": "d"
  },
  {
    "id": 40,
    "question": "Kargo dan pos yang berisiko tinggi (high risk cargo) adalah kargo dan pos yang diterima dari pengirim yang tidak dikenal (unknown shipper) atau yang menunjukan tanda kerusakan dengan mempertimbangkan antara lain...",
    "options": {
      "a": "adanya informasi intelijen yang menyatakan bahwa kiriman kargo berpotensi mengancam keamanan penerbangan",
      "b": "menunjukan kejanggalan atau mencurigakan",
      "c": "merupakan jenis barang yang dapat membahayakan pesawat",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 41,
    "question": "Melakukan penerapan anti - virus, anti botnet dan anti malware di dalam perangkat Teknologi Informasi Komunikasi, merupakan salah satu bentuk pengendalian...",
    "options": {
      "a": "Dinamis",
      "b": "Fisik",
      "c": "Virtual dan logical",
      "d": "Administratif"
    },
    "answer": "c"
  },
  {
    "id": 42,
    "question": "Fasilitas pengosongan peluru senjata api di Bandar Udara harus dilengkapi wadah berisi pasir dengan ketebalan ... cm",
    "options": {
      "a": "50",
      "b": "60",
      "c": "40",
      "d": "30"
    },
    "answer": "a"
  },
  {
    "id": 43,
    "question": "Kecelakaan (accident) yang diakibatkan oleh barang berbahaya adalah",
    "options": {
      "a": "Semua Jawaban Benar",
      "b": "Setiap kejadian terkait dengan pengangkutan barang berbahaya yang mana secara serius membahayakan pesawat udara atau penumpang",
      "c": "Suatu kejadian yang terkait dengan pengangkutan barang berbahaya dengan pesawat udara yang menyebabkan kecelakaan fatal atau serius terhadap orang atau menyebabkan kerusakan parah terhadap harta benda",
      "d": "Suatu kejadian yang terkait dengan pengangkutan barang berbahaya yang tidak terjadi dalam pesawat udara yang mengakibatkan kerugian orang, kerusakan harta benda, kebakaran, patah, tumpahan kebocoran cairan yang tidak ditangani dengan benar"
    },
    "answer": "c"
  },
  {
    "id": 44,
    "question": "ICAO Document yang mengatur terkait dengan aviation security manual adalah...",
    "options": {
      "a": "Doc 9807",
      "b": "Doc 10108",
      "c": "Doc 10118",
      "d": "Doc 897 3"
    },
    "answer": "d"
  },
  {
    "id": 45,
    "question": "Berikut ini adalah ketentuan dalam membawa LAGs ke dalam kabin pesawat udara, Kecuali...",
    "options": {
      "a": "Cairan/gel dalam kemasan yang masih tersegel dan dibeli di duty free shop di bandara",
      "b": "Ditempatkan dalam plastik transparan",
      "c": "Maksimum 10 kemasan per kemasan 100 ml",
      "d": "Air Minum Kemasan 200 ml"
    },
    "answer": "d"
  },
  {
    "id": 46,
    "question": "Kondisi dimana terdapat peningkatan kondisi keamanan penerbangan yang memerlukan keamanan, kewaspadaan, atau kesiagaan disebut dengan kondisi..",
    "options": {
      "a": "Rawan (kuning)",
      "b": "Darurat (merah)",
      "c": "Siaga (hijau)",
      "d": "Darurat (emergency)"
    },
    "answer": "a"
  },
  {
    "id": 47,
    "question": "Berikut ini adalah pernyataan yang tepat terkait dengan perlindungan terkait serangan siber yang dapat membahayakan penerbangan, kecuali...",
    "options": {
      "a": "Badan hukum berbatasan langsung DKT Bandar Udara harus membuat langkah - langkah untuk melindungi kerahasiaan, keutuhan dan ketersediaan sistem teknologi informasi dan komunikasi serta data yang bersifat rawan penerbangan dari serangan siber yang dapat membahayakan keselamatan penerbangan",
      "b": "Bandar Udara harus membuat langkah - langkah perlindungan terhadap kerahasiaan, keutuhan dan ketersediaan sistem teknologi informasi dan komunikasi serta data yang bersifat rawan terkait penerbangan dari serangan siber yang dapat membahayakan keselamatan pen erbangan",
      "c": "Langkah - langkah perlindungan sistem untuk mencegah serangan siber adalah pengendalian administrative, pengendalian virtual dan logical, dan pengendalian fisik",
      "d": "Salah satu bentuk pengendalian administrative adalah memberikan pelatihan cyber awareness"
    },
    "answer": "d"
  },
  {
    "id": 48,
    "question": "Apa peran dan fungsi CCTV dalam Keamanan Penerbangan ?",
    "options": {
      "a": "Peralatan yang dapat memantau kejadian apapun selama 24 jam non stop",
      "b": "Peralatan yang digunakan untuk memantau kejadian dan ancaman di bandara",
      "c": "Peralatan yang digunakan untuk pemeriksaan dan memantau kegiatan dan kejadian di bandara",
      "d": "Peralatan yang dapat digunakan untuk mendeteksi barang/bahan berbahaya"
    },
    "answer": "a"
  },
  {
    "id": 49,
    "question": "Setiap orang yang memiliki kompetensi dibidang fasilitas keamanan penerbangan untuk melakukan pemeriksaan dan pengujian kelaikan peralatan keamanan penerbangan adalah :",
    "options": {
      "a": "Penguji dibidang personel PKP - PK",
      "b": "Instruktur di bidang keamanan penerbangan",
      "c": "Penguji dibidang kelaikan peralatan keamanan penerbangan",
      "d": "Penguji personel dibidang Dangerous Goods"
    },
    "answer": "c"
  },
  {
    "id": 50,
    "question": "Berikut ini adalah contoh - contoh serangan siber pada sistem kecuali...",
    "options": {
      "a": "Chatting",
      "b": "Carding",
      "c": "Data Forgery",
      "d": "Hacking"
    },
    "answer": "a"
  },
  {
    "id": 51,
    "question": "Berikut ini adalah pernyataan yang benar tentang pelatihan kepedulian keamanan penerbangan (aviation security awareness), kecuali...",
    "options": {
      "a": "Diberikan hanya kepada personel di bidang keamanan penerbangan",
      "b": "Diberikan kepada setiap orang yang telah menyelesaikan pelatihan kepedulian keamanan penerbangan (aviation security awareness) harus diberikan penyegaran (refreshing) setiap 1 (satu) tahun sekali",
      "c": "dapat menyelenggarakan pelatihan kepedulian keamanan penerbangan (aviation security awareness) kepada orang perseorangan selain personel di bidang keamanan penerbangan",
      "d": "diberikan kepada personel non keamanan penerbangan (non security staff) dalam rangka peningkatan kepedulian keamanan penerbangan"
    },
    "answer": "a"
  },
  {
    "id": 52,
    "question": "Tujuan dilakukan pengujian (test) adalah...",
    "options": {
      "a": "Menangkap basah dan mencari personel keamanan yang melanggar prosedur",
      "b": "Mengindentifikasi kekuatan suatu area obyek pengawasan Bandar udara",
      "c": "Mengetahui kemampuan dari kinerja personel dan fasilitas keamanan",
      "d": "Memberikan sanksi langsung kepada personel yang menggar aturan/prosedur"
    },
    "answer": "c"
  },
  {
    "id": 53,
    "question": "Suatu proses yang terencana, terpadu, sistematis, dan berkesinambungan yang dilaksanakan untuk menghilangkan atau mengurangi dan membalikkan pemahaman radikal Terorisme yang telah terjadi, disebut dengan...",
    "options": {
      "a": "Deradikalisasi",
      "b": "Kontra radilkalisasi",
      "c": "Anti radikalisasi",
      "d": "Kesiapsiagaan nasional"
    },
    "answer": "a"
  },
  {
    "id": 54,
    "question": "Keamanan Penerbangan Nasional diatur dalam...",
    "options": {
      "a": "Peraturan Menteri Perhubungan Nomor PM.83 Tahun 2017",
      "b": "Peraturan Menteri Perhubungan Nomor KM.25 Tahun 2005",
      "c": "Peraturan Menteri Perhubungan Nomor PM.2 Tahun 2020",
      "d": "Peraturan Menteri Perhubungan Nomor PM.9 Tahun 2024"
    },
    "answer": "d"
  },
  {
    "id": 55,
    "question": "Peralatan pendeteksi benda logam adalah :",
    "options": {
      "a": "Pendeteksi metal genggam",
      "b": "Liqiud Detector",
      "c": "Mirror Detector",
      "d": "CCTV"
    },
    "answer": "a"
  },
  {
    "id": 56,
    "question": "Latihan penanggulangan keadaan darurat keamanan penerbangan dibagi menjadi...",
    "options": {
      "a": "Table top exercise and Modular Exercise",
      "b": "Table top exercise and Full Scale Exercise",
      "c": "Table top exercise and Partial Exercise",
      "d": "Partial Exercise and Full Scale Exercise"
    },
    "answer": "b"
  },
  {
    "id": 57,
    "question": "Peralatan yang digunakan untuk mendeteksi bentuk atau isi bagasi adalah :",
    "options": {
      "a": "Hand Held Metal Detector (HHMD)",
      "b": "Walk Through Metal Detector",
      "c": "X - Ray Machine",
      "d": "Explosive Detector"
    },
    "answer": "c"
  },
  {
    "id": 58,
    "question": "Benda pada pilihan berikut ini yang memberikan tampilan warna oranye pada di monitor X - Ray ...",
    "options": {
      "a": "Timah",
      "b": "Kulit",
      "c": "Emas",
      "d": "Aluminium"
    },
    "answer": "b"
  },
  {
    "id": 59,
    "question": "Berikut ini yang bukan merupakan persyaratan dari Emergency Operation Center (EOC) adalah",
    "options": {
      "a": "Memiliki ruang rapat yang memadai",
      "b": "Berada di daerah sisi udara",
      "c": "Memiliki pandangan langsung ke daerah isolated parking area jika tidak dapat dilengkapi dengan CCTV",
      "d": "Memiliki peralatan komunikasi yang memadai"
    },
    "answer": "c"
  },
  {
    "id": 60,
    "question": "Berikut ini yang bukan merupakan pernyataan yang benar terkait perlindungan Daerah Keamanan Terbatas adalah:",
    "options": {
      "a": "Mengizinkan setiap orang masuk ke Daerah Keamanan Terbatas tanpa pemeriksaan",
      "b": "Mencegah orang yang tidak memiliki kepentingan masuk ke Daerah Keamanan Terbatas",
      "c": "Melaksanakan sistem perizinan untuk masuk ke Daerah Keamanan Terbatas",
      "d": "Mengawasi dan menjaga jalan menuju Daerah Keamanan Terbatas"
    },
    "answer": "a"
  },
  {
    "id": 61,
    "question": "Tekad dan kemampuan seseorang atau kelompok untuk mengakibatkan kerusakan atau kerugian pada organisasi atau masyarakat yang lebih luas merupakan definisi dari...",
    "options": {
      "a": "Ancaman",
      "b": "Kerentanan",
      "c": "Konsekwensi",
      "d": "Kemungkinan"
    },
    "answer": "a"
  },
  {
    "id": 62,
    "question": "Apa langkah - langkah dalam mengoptimalkan peran dan fungsi CCTV ?",
    "options": {
      "a": "Menempatkan fungsi pantau CCTV ke area - area yang memang berpotensi rawan terjadi tindakan melawan hukum",
      "b": "Semua Jawaban Benar",
      "c": "Melaporkan hasil checklist kondisi CCTV ke bagian teknisi",
      "d": "Melakukan pemeriksaan sesuai dengan check list setiap hari guna memastikan kondisi CCTV selalu beroperasi dan dalam keadaan baik"
    },
    "answer": "b"
  },
  {
    "id": 63,
    "question": "Barang Dilarang (prohibited items) meliputi :",
    "options": {
      "a": "Barang berbahaya (Dangerous Goods)",
      "b": "Peledak (explosives)",
      "c": "Senjata (Weapon)",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 64,
    "question": "Berikut ini yang bukan merupakan pernyataan yang tepat terkait pemeriksaan keamanan kargo dan pos menggunakan explosive trace detector adalah :",
    "options": {
      "a": "Pengiriman yang tidak dilengkapi dengan dokumen yang benar",
      "b": "Pengiriman yang dicurigai",
      "c": "Terindikasi mengandung bahan peledak",
      "d": "Langkah keamanan tambahan untuk high risk kargo"
    },
    "answer": "d"
  },
  {
    "id": 65,
    "question": "Langkah - langkah pengamanan yang tercantum pada Program Keamanan Angkutan Udara, meliputi :",
    "options": {
      "a": "Perlindungan pesawat udara",
      "b": "Pemeriksaan keamanan pesawat udara (aircraft security check) dan penyisiran keamanan pesawat udara (aircraft security search)",
      "c": "Pencocokan jumlah bagasi tercatat dengan jumlah penumpang",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 66,
    "question": "Berikut ini yang bukan termasuk ke dalam tindakan melawan hukum (Acts of Unlawful Interference) sesuai Program Keamanan Penerbangan Nasional adalah...",
    "options": {
      "a": "menyandera orang di dalam pesawat udara atau di bandar udara",
      "b": "pengerusakan/penghancuran pesawat udara di darat (in service)",
      "c": "menguasai pesawat udara secara melawan hukum",
      "d": "masuk ke dalam pesawat udara, bandar udara atau tempat - tempat aeronautika"
    },
    "answer": "d"
  },
  {
    "id": 67,
    "question": "Suatu keadaan yang memberikan perlindungan kepada penerbangan dari tindakan melawan hukum melalui keterpaduan pemanfaatan sumber daya manusia, fasilitas, dan prosedur disebut :",
    "options": {
      "a": "Navigasi Penerbangan",
      "b": "Aman dan Selamat",
      "c": "Keamanan Penerbangan",
      "d": "Keselamatan Penerbangan"
    },
    "answer": "c"
  },
  {
    "id": 68,
    "question": "Bila terjadi ancaman yang membahayakan keamanan penerbangan, berdasarkan penilaian, positif terjadi terhadap pesawat udara, bandar udara dan pelayanan navigasi penerbangan termasuk dalam kondisi",
    "options": {
      "a": "Hitam",
      "b": "Merah",
      "c": "Hijau",
      "d": "Kuning"
    },
    "answer": "b"
  },
  {
    "id": 69,
    "question": "Faktor - faktor yang mempengaruhi untuk mendapatkan hasil pemeriksaan X - Ray yang terbaik adalah :",
    "options": {
      "a": "Jarak penempatan tas dengan tas lainnya saling berdekatan dan posisi tas tertidur",
      "b": "Penempatan tas harus ditengah tengan mesin x - ray dan posisi tas berdiri",
      "c": "Memperhatikan setiap tayangan cukup lama",
      "d": "Jarak penempatan tas dengan tas lainnya tidak berdekatan dan posisi tas tertidur"
    },
    "answer": "d"
  },
  {
    "id": 70,
    "question": "Salah satu langkah dalam pemeriksaan bagasi penumpang adalah :",
    "options": {
      "a": "Periksa bagian luarnya saja",
      "b": "Periksa bagian luar dahulu baru bagian dalam",
      "c": "Periksa bagian dalam terdahulu baru bagian luar",
      "d": "Tidak dilakukan pemeriksaan"
    },
    "answer": "b"
  },
  {
    "id": 71,
    "question": "Pada prinsipnya pemeriksaan keamanan bertujuan untuk mencegah terangkutnya barang dan alat berbahaya ke dalam pesawat udara seperti pada pilihan di bawah ini, Kecuali...",
    "options": {
      "a": "binatang (animal)",
      "b": "senjata (weapons)",
      "c": "bahan peledak (explosive)",
      "d": "barang berbahaya (Dangerous Goods)"
    },
    "answer": "a"
  },
  {
    "id": 72,
    "question": "Label sertifikat keamanan penerbangan adalah",
    "options": {
      "a": "Tanda bukti peralatan yang telah di lakukan pengujian memenuhi standard operasional",
      "b": "Tanda bukti yang dilekatkan pada peralatan keamanan penerbangan yang telah dilakukan pengujian",
      "c": "Tanda bukti sudah yang dilekatkan peralatan keamanan penerbangan",
      "d": "Jawaban a dan b benar"
    },
    "answer": "d"
  },
  {
    "id": 73,
    "question": "Berikut ini adalah perbedaan Audit dan Survei kecuali ...",
    "options": {
      "a": "Area yang di amati pada saat audit lebih luas dibandingkan dengan survey",
      "b": "Audit dilakukan untuk mengetahui tingkat kepatuhan terhadap ketentuan dan peraturan yang berlaku sedangkan survey adalah evaluasi kebutuhan keamanan termasuk identifikasi terhadap kerentanan dan rekomendasi terhadap tindakan korektif",
      "c": "Ruang lingkup survey sama dengan audit",
      "d": "Waktu yang dibutuhkan untuk audit lebih lama dibandingkan dengan survey"
    },
    "answer": "c"
  },
  {
    "id": 74,
    "question": "Berikut ini adalah ketentuan dalam membawa senjata api dan peluru...",
    "options": {
      "a": "1000 butir peluru/penerbangan",
      "b": "100 butir peluru/penerbangan",
      "c": "Kaliber maksimal 9 mm",
      "d": "12 butir peluru/penumpang"
    },
    "answer": "d"
  },
  {
    "id": 75,
    "question": "Pengendalian Keamanan (Security Control) adalah :",
    "options": {
      "a": "Penerapan suatu tindakan terangkutnya barang/bahan berbahaya yang diangkut dengan pesawat udara sipil",
      "b": "Penerapan suatu tindakan melawan hukum",
      "c": "Penerapan suatu tindakan untuk mencegah tersusupnya Dengerous Goods",
      "d": "suatu cara untuk menemukenali Barang Dilarang (Prohibited Items)"
    },
    "answer": "d"
  },
  {
    "id": 76,
    "question": "Sesuai dengan Program Keamanan Penerbangan Nasional kategori identifikasi tampilan bagasi dan barang bawaan penumpang pada monitor mesin x - ray yaitu...",
    "options": {
      "a": "aman, mencurigakan, berbahaya",
      "b": "aman, periksa, bahaya",
      "c": "Periksa, tidak diperiksa",
      "d": "aman, tidak diperiksa, bahaya"
    },
    "answer": "a"
  },
  {
    "id": 77,
    "question": "Berikut ini adalah alasan mengapa dunia penerbangan menjadi target yang menarik bagi teroris, kecuali...",
    "options": {
      "a": "Aksi teror di bandara juga merupakan suatu peringatan keras yang ditujukan kepada rakyat di negara tersebut. Hal itu diyakini dapat menciptakan kepanikan yang diharapkan akan membuat perekonomian dan bisnis dalam negeri itu tidak stabil",
      "b": "Korban jiwa yang masif bila target ancaman berhasil dicapai",
      "c": "Dunia penerbangan merupakan dunia transportasi yang tidak menuntut teknologi yang tinggi sehingga mudah untuk menjadi sasaran",
      "d": "Bandara dianggap tidak pernah sepi, selalu dipenuhi lautan manusia dari berbagai macam negara dan tentunya merupakan 'pintu' masuk dan keluarnya individu - individu dari berbagai macam negara"
    },
    "answer": "c"
  },
  {
    "id": 78,
    "question": "Langkah - langkah perlindungan sistem teknologi informasi dan komunikasi dari cyber attack dilakukan oleh Bandar Udara, Angkutan Udara, Penyedia Layanan Navigasi Penerbangan, dan Badan hukum yang dibuat antara lain :",
    "options": {
      "a": "Security risk assessment, pengendalian virtual, pengendalian logical",
      "b": "Pengendalian administrative, pengendalian virtual & logical, pengendalian fisik, dan pengendalian mutu",
      "c": "Pengendalian administrative, pengendalian logical, security risk assessment",
      "d": "Pengendalian administrative, security risk assessment, pengendalian fisik"
    },
    "answer": "b"
  },
  {
    "id": 79,
    "question": "ICAO Annexis yang mengatur terkait dengan keamanan penerbangan adalah...",
    "options": {
      "a": "Annex 17",
      "b": "Annex 19",
      "c": "Annex 18",
      "d": "Annex 14"
    },
    "answer": "a"
  },
  {
    "id": 80,
    "question": "Berikut ini yang merupakan tindakan operator mesin X - Ray ketika tampilan di monitor X - Ray berwarna hitam pekat adalah...",
    "options": {
      "a": "Melakukan pemeriksaan sendiri tidak perlu memerintahkan kepada petugas pemeriksa barang",
      "b": "Dilakukan pemeriksaan secara random cek",
      "c": "Tidak perlu dilakukan pemeriksaan secara radom cek karena barang tersebut tidak berbahaya",
      "d": "Operator mesin X - Ray memerintahkan kepada pemeriksa barang untuk melakukan pemeriksaan"
    },
    "answer": "d"
  },
  {
    "id": 81,
    "question": "Berikut ini adalah klasifikasi Fasilitas Keamanan Penerbangan sesuai Program Keamanan Penerbangan Nasional, Kecuali...",
    "options": {
      "a": "pendeteksi bahan organik dan non organik",
      "b": "pendeteksi bahan peledak",
      "c": "penunda upaya kejahatan dan pembatas daerah terkendali",
      "d": "pendeteksi bahan cair"
    },
    "answer": "c"
  },
  {
    "id": 82,
    "question": "Berikut ini adalah benda yang memberikan tampilan warna hijau pada monitor x - ray adalah...",
    "options": {
      "a": "Kayu",
      "b": "Aluminium",
      "c": "Perak",
      "d": "Titanium"
    },
    "answer": "b"
  },
  {
    "id": 83,
    "question": "Proses deradikalisasi dilakukan kepada orang - orang berikut, kecuali...",
    "options": {
      "a": "Terdakwa",
      "b": "Tersangka",
      "c": "Narapidana",
      "d": "Masyarakat luas"
    },
    "answer": "d"
  },
  {
    "id": 84,
    "question": "Pemeriksaan dan pengendalian keamanan kargo dan pos bertujuan untuk ?",
    "options": {
      "a": "Mencegah disusupkannya bom dan barang berbahaya diangkut pesawat udara",
      "b": "Agar barang - barang kiriman tidak tertukar satu dengan yang lainnya",
      "c": "Pesawat Udara bisa terbang dengan selamat",
      "d": "Mengetahui apa isi barang kargo dan pos"
    },
    "answer": "a"
  },
  {
    "id": 85,
    "question": "Melakukan seleksi dan pemeriksaan latar belakang bagi karyawan maupun pihak ketiga yang menangani Teknologi Informasi Komunikasi, merupakan salah bentuk pengendalian ...",
    "options": {
      "a": "Fisik",
      "b": "Administrative",
      "c": "Logical",
      "d": "Virtual"
    },
    "answer": "b"
  },
  {
    "id": 86,
    "question": "Berikut ini adalah daerah keamanan terbatas pada bandar udara, Kecuali...",
    "options": {
      "a": "Halaman Parkir Kendaraan Bermotor",
      "b": "Apron",
      "c": "Hanggar",
      "d": "Runway End Safety Area"
    },
    "answer": "a"
  },
  {
    "id": 87,
    "question": "Bila terjadinya tindakan melawan hukum berupa ancaman bom, pembajakan, penyanderaan, sabotase dan penyerangan yang membahayakan keamanan terhadap pesawat udara, bandar udara dan pelayanan navigasi penerbangan termasuk dalam kondisi",
    "options": {
      "a": "Hitam",
      "b": "Kuning",
      "c": "Merah",
      "d": "Hijau"
    },
    "answer": "c"
  },
  {
    "id": 88,
    "question": "Program Keamanan Penerbangan Nasional diatur dalam...",
    "options": {
      "a": "SKEP/2765/VIII/2010",
      "b": "KM 39 Tahun 2024",
      "c": "PM.83 Tahun 2017",
      "d": "PM 9 Tahun 2024"
    },
    "answer": "b"
  },
  {
    "id": 89,
    "question": "Pemeriksaan tersendiri (private screening) untuk prosedur keamanan khusus dapat dilakukan berdasarkan permintaan penumpang dengan pertimbangan:",
    "options": {
      "a": "Benda benda berharga",
      "b": "Kondisi Kesehatan",
      "c": "Semua Jawaban Benar",
      "d": "Menggunakan Pakaian Keagamaan"
    },
    "answer": "c"
  },
  {
    "id": 90,
    "question": "Dokumen tertulis yang memuat prosedur dan langkah - langkah serta persyaratan yang wajib dilaksanakan oleh Badan Usaha Angkutan Udara untuk memenuhi ketentuan keamanan penerbangan di Indonesia, merupakan pengertian dari...",
    "options": {
      "a": "Program keselamatan dan keamanan angkutan udara",
      "b": "Program keamanan angkutan udara",
      "c": "Program keamanan penerbangan",
      "d": "Program keamanan penerbangan nasional"
    },
    "answer": "b"
  },
  {
    "id": 91,
    "question": "Surat muatan udara (Airway) adalah :",
    "options": {
      "a": "Dokumen tertulis yang membuat peraturan, prosedur dan langkah - langkah pengamanan yang diambil untuk melindungi penerbangan dari tindakan melawan hukum",
      "b": "Dokumen berbentuk cetak, melalui proses elektronik, atau bentuk lainnya yang merupakan salah satu bukti adanya perjanjian pengangkutan udara antara pengirim kargo dan pengangkut dan hak penerima kargo untuk mengambil kargo",
      "c": "Dokumen tertulis yang memuat peraturan, prosedur dan langkah - langkah serta persyaratan yang wajib dilaksanakan oleh unit penyelanggara Bandar Udara dan badan usaha untuk memenuhi ketentuan yang terkait dengan operasi penerbangan di Indonesia",
      "d": "Dokumen tertulis yang memuat peraturan, prosedur dan langkah - langkah serta persyaratan yang wajib dilaksanakan oleh unit badan usaha angkatan udara untuk memenuhi ketentuan yang terkait dengan operasi penerbangan di Indonesia"
    },
    "answer": "b"
  },
  {
    "id": 92,
    "question": "Barang berbahaya (Dangerous Goods) adalah :",
    "options": {
      "a": "Barang atau bahan yang dapat membahayakan kesehatan, keselamatan harta benda dan lingkungan",
      "b": "Barang yang tidak dijinkan di bawa oleh perusahaan angkutan udara",
      "c": "Penumpang dapat membawanya ke dalam kabin pesawat",
      "d": "Barang yang berbahaya bagi pengangkutan di atas pesawat udara"
    },
    "answer": "a"
  },
  {
    "id": 93,
    "question": "Yang termasuk dalam Dangerous Goods berikut ini adalah, kecuali :",
    "options": {
      "a": "Accu, mercury, thermometer, Poison",
      "b": "Buah Durian, bawang, madu, tuak",
      "c": "Cat kayu, Plitur, Pernish, Soda Api",
      "d": "Parfum Spray, Hair Spray, Alkohol 80%"
    },
    "answer": "b"
  },
  {
    "id": 94,
    "question": "Test adalah...",
    "options": {
      "a": "pemeriksaan yang terjadwal, sistematis dan mendalam terhadap prosedur, fasilitas, personel dan dokumentasi organisasi penyedia jasa penerbangan untuk mengetahui tingkat kepatuhan terhadap ketentuan dan peraturan yang berlaku",
      "b": "uji coba secara tertutup atau terbuka terhadap upaya keamanan penerbangan atau tindakan keamanan penerbangan dengan simulasi percobaan untuk tindakan melawan hukum",
      "c": "evaluasi kebutuhan keamanan termasuk identifikasi terhadap kerentanan yang dapat dimanfaatkan untuk melakukan tindakan melawan hukum, dan rekomendasi terhadap tindakan korektif",
      "d": "pemeriksaan sederhana terhadap pemenuhan standar suatu produk akhir objek tertentu"
    },
    "answer": "b"
  },
  {
    "id": 95,
    "question": "Radikalisme saat ini menjadi salah satu penyebab munculnya banyak teroris di Indonesia. Hal ini dikarenakan ...",
    "options": {
      "a": "Radikalisme merupakan suatu sikap yang mendambakan perubahan secara total dan bersifat revolusioner dengan menjungkirbalikkan nilai - nilai yang ada secara drastis lewat kekeraan (violence) dan aksi - aksi yang ekstrem",
      "b": "Inti dari tindakan radikalisme adalah sikap dan tindakan seseorang atau kelompok tertentu yang menggunakan cara - cara kekerasan dalam mengusung perubahan yang diinginkan",
      "c": "Radikalisme sering dikaitkan dengan terorisme karena kelompok radikal dapat melakukan cara apapun agar keinginannya tercapai, termasuk meneror pihak yang tidak sepaham dengan mereka",
      "d": "Semua Jawaban Benar"
    },
    "answer": "d"
  },
  {
    "id": 96,
    "question": "Tindakan apa yang harus dilakukan oleh petugas CCTV ketika melihat tayangan dicurigai",
    "options": {
      "a": "Melaporkan kepada Supervisior terhadap tayangan CCTV yang dicurigai",
      "b": "Petugas CCTV mendatangi lokasi yang dicurigai",
      "c": "Menyampaikan kepada Kepala Bandar Udara",
      "d": "Mengabaikan tayangan CCTV yang dicurigai"
    },
    "answer": "a"
  },
  {
    "id": 97,
    "question": "Salah satu dokumen yang wajib dilampirkan oleh petugas shipper (agent) di dalam proses pengangkutan / pengiriman dagerous goods, adalah :",
    "options": {
      "a": "Cargo manifest",
      "b": "Passanger manifest",
      "c": "General declaration form",
      "d": "Airway Bill"
    },
    "answer": "d"
  },
  {
    "id": 98,
    "question": "Berikut adalah persyaratan pembatas fisik pada perimeter untuk bandar udara domestik, Kecuali...",
    "options": {
      "a": "Tidak perlu diberi lampu penerangan",
      "b": "Tinggi minimal 2,44 meter dan dilengkapi dengan kawat berduri di atasnya",
      "c": "Tidak ada celah dari bawah sampai atas untuk disusupi orang",
      "d": "Dapat berupa pagar"
    },
    "answer": "a"
  },
  {
    "id": 99,
    "question": "Benda pada pilihan berikut ini yang memberikan tampilan warna biru pada monitor X - Ray adalah :",
    "options": {
      "a": "Makanan",
      "b": "Plastik",
      "c": "Kulit",
      "d": "Tembaga"
    },
    "answer": "d"
  },
  {
    "id": 100,
    "question": "Berikut ini yang merupakan pernyataan yang tidak tepat menurut Program Keamanan Penerbangan Nasional adalah..",
    "options": {
      "a": "Tiket atau pas masuk pesawat udara (boarding pass) dapat berupa cetak atau elektronik",
      "b": "Bagasi tercatat yang telah dilakukan pemeriksaan keamanan di tempat pemeriksaan keamanan sebelum area lapor diri (check in area) tidak boleh diserah terimakan kembali kepada pemiliknya",
      "c": "Pengecualian masuk ke ruang kendali Pesawat Udara adalah personil operasional pesawat udara, cabin crew dan orang perseorangan",
      "d": "Izin masuk bagi penumpang ke daerah keamanan terbatas berupa tiket atau pas masuk pesawat udara (boarding pass)"
    },
    "answer": "c"
  }
];

const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const questionCounterDisplay = document.getElementById('question-counter');
const skipButton = document.getElementById('skip-button');
const nextButton = document.getElementById('next-button');
const totalQuestionsResult = document.getElementById('total-questions-result');
const correctAnswersDisplay = document.getElementById('correct-answers');
const wrongAnswersDisplay = document.getElementById('wrong-answers');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let skippedQuestions = [];
let userAnswers = {}; // To store user's selected answers
let timer;
const TIME_PER_QUESTION = 35; // seconds
let timeLeft = TIME_PER_QUESTION;

// Function to switch screens
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Function to start the timer
function startTimer() {
    clearInterval(timer); // Clear any existing timer
    timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = `Waktu: ${timeLeft}`;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Waktu: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Automatically move to the next question if time runs out
            // Treat as skipped if no answer selected
            if (!userAnswers[questions[currentQuestionIndex].id]) {
                skippedQuestions.push(questions[currentQuestionIndex]);
            }
            moveToNextQuestion();
        }
    }, 1000);
}

// Function to load a question
function loadQuestion(question) {
    questionText.textContent = question.question;
    optionsContainer.innerHTML = ''; // Clear previous options

    // Update question counter
    questionCounterDisplay.textContent = `Soal: ${currentQuestionIndex + 1} / ${questions.length}`;

    for (const key in question.options) {
        const optionValue = question.options[key];
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = key;
        input.id = `option-${key}`;

        // Check if user already answered this question
        if (userAnswers[question.id] === key) {
            input.checked = true;
        }

        const span = document.createElement('span');
        span.textContent = optionValue;

        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);

        // Add event listener to save answer when an option is selected
        input.addEventListener('change', (event) => {
            userAnswers[question.id] = event.target.value;
        });
    }

    startTimer(); // Start timer for the new question
}

// Function to move to the next question
function moveToNextQuestion() {
    clearInterval(timer); // Stop current timer

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestion.id];

    // Check answer if not skipped
    if (selectedAnswer) {
        if (selectedAnswer === currentQuestion.answer) {
            score++;
        } else {
            wrongAnswers++;
        }
    } else {
        // If no answer selected and not explicitly skipped, it's considered wrong/unanswered
        // We already pushed to skippedQuestions if timer ran out and no answer.
        // For manual "Next" without selection, it's just unanswered (wrong).
        if (!skippedQuestions.includes(currentQuestion)) { // Avoid double counting if already skipped by timer
             wrongAnswers++;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(questions[currentQuestionIndex]);
    } else {
        // All initial questions answered, now load skipped questions
        if (skippedQuestions.length > 0) {
            // Filter out questions that were answered after being skipped
            const remainingSkipped = skippedQuestions.filter(q => !userAnswers[q.id]);
            if (remainingSkipped.length > 0) {
                questions.push(...remainingSkipped); // Add skipped questions to the end
                skippedQuestions = []; // Clear skipped list as they are now part of main flow
                currentQuestionIndex = questions.length - remainingSkipped.length; // Start from the first re-added skipped question
                loadQuestion(questions[currentQuestionIndex]);
                questionCounterDisplay.textContent = `Soal Lewatan: ${currentQuestionIndex - (questions.length - remainingSkipped.length) + 1} / ${remainingSkipped.length}`;
                return; // Don't show results yet
            }
        }
        showResults();
    }
}

// Function to handle "Lewati Saja" (Skip) button
skipButton.addEventListener('click', () => {
    const currentQuestion = questions[currentQuestionIndex];
    // Only add to skipped if not already answered
    if (!userAnswers[currentQuestion.id]) {
        skippedQuestions.push(currentQuestion);
    }
    moveToNextQuestion();
});

// Function to handle "Selanjutnya" (Next) button
nextButton.addEventListener('click', () => {
    moveToNextQuestion();
});

// Function to display results
function showResults() {
    showScreen('result-screen');
    totalQuestionsResult.textContent = questions.length;
    correctAnswersDisplay.textContent = score;
    wrongAnswersDisplay.textContent = questions.length - score; // Total questions - correct answers
}

// Event listener for Start Button
startButton.addEventListener('click', () => {
    // Shuffle questions before starting
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = 0;
    skippedQuestions = [];
    userAnswers = {};
    showScreen('exam-screen');
    loadQuestion(questions[currentQuestionIndex]);
});

// Event listener for Restart Button
restartButton.addEventListener('click', () => {
    showScreen('start-screen');
});

// Initial screen load
showScreen('start-screen');


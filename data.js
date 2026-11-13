const REGIONS = [
  {
    "id": "aceh",
    "name": "Aceh",
    "costume": "Ulee Balang",
    "lon": 95.32,
    "lat": 5.55,
    "mapX": 16.0,
    "mapY": 32.3,
    "photo": "assets/pakaian-adat/aceh.webp",
    "source": "Woman Indonesia",
    "description": "Ulee Balang dikenal sebagai pakaian kebesaran masyarakat Aceh. Pada masa Kesultanan Aceh, busana ini berkaitan dengan kedudukan raja, sultan, dan kalangan bangsawan. Saat ini, Ulee Balang lebih sering ditampilkan dalam upacara adat, pernikahan, dan perayaan kebudayaan."
  },
  {
    "id": "sumbar",
    "name": "Sumatra Barat",
    "costume": "Bundo Kanduang",
    "lon": 100.36,
    "lat": -0.95,
    "mapX": 24.0,
    "mapY": 48.3,
    "photo": "assets/pakaian-adat/sumbar.webp",
    "source": "Rukita",
    "description": "Bundo Kanduang merupakan busana kehormatan perempuan dalam kebudayaan Minangkabau. Nama Bundo Kanduang juga merujuk pada sosok ibu yang dihormati dalam keluarga dan adat. Bentuk busana dapat berbeda menurut nagari atau wilayah Minangkabau, sehingga tidak ada satu model yang sepenuhnya seragam untuk seluruh Sumatra Barat."
  },
  {
    "id": "sumsel",
    "name": "Sumatra Selatan",
    "costume": "Aesan Gede",
    "lon": 104.76,
    "lat": -2.99,
    "mapX": 29.5,
    "mapY": 62.3,
    "photo": "assets/pakaian-adat/sumsel.webp",
    "source": "Wikimedia Commons",
    "description": "Aesan Gede adalah busana pengantin tradisional Palembang, Sumatra Selatan. Busana ini dikenal karena tampilannya yang megah dan penggunaan kain songket serta perhiasan yang menonjol. Aesan Gede sering dikaitkan dengan gambaran kemegahan budaya Palembang dan warisan kejayaan Sriwijaya."
  },
  {
    "id": "babel",
    "name": "Bangka Belitung",
    "costume": "Paksian",
    "lon": 106.12,
    "lat": -2.13,
    "mapX": 36.7,
    "mapY": 58.2,
    "photo": "assets/pakaian-adat/babel.webp",
    "source": "VOI",
    "description": "Paksian dikenal sebagai busana pengantin adat Bangka, khususnya Pangkalpinang, dan menjadi salah satu ikon pakaian adat Kepulauan Bangka Belitung. Busana ini memperlihatkan percampuran unsur budaya Melayu, Tionghoa, dan Arab yang berkembang di Pulau Bangka."
  },
  {
    "id": "banyuwangi",
    "name": "Jawa Timur (Banyuwangi)",
    "costume": "Jebeng dan Thulik",
    "lon": 114.36,
    "lat": -8.22,
    "mapX": 50.2,
    "mapY": 79.7,
    "photo": "assets/pakaian-adat/banyuwangi.webp",
    "source": "detikJatim",
    "description": "Jebeng dan Thulik merupakan pasangan busana khas Banyuwangi yang lekat dengan identitas masyarakat Osing. Sebutan Jebeng digunakan untuk perempuan, sedangkan Thulik untuk laki-laki. Busana ini juga dikenal melalui kegiatan pemilihan duta wisata Jebeng-Thulik Banyuwangi."
  },
  {
    "id": "madura",
    "name": "Madura",
    "costume": "Pesa'an dan Kebaya Rancongan",
    "lon": 113.25,
    "lat": -7.05,
    "mapX": 46.9,
    "mapY": 75.8,
    "photo": "assets/pakaian-adat/madura.webp",
    "source": "IDN Times Jatim",
    "description": "Pesa'an dan kebaya rancongan merupakan pasangan busana tradisional Madura. Pesa'an dikenakan oleh laki-laki, sedangkan kebaya rancongan dikenakan oleh perempuan. Keduanya dikenal melalui bentuk yang tegas, warna yang kuat, dan paduan kain batik."
  },
  {
    "id": "jabar",
    "name": "Jawa Barat",
    "costume": "Kebaya Sunda",
    "lon": 107.60,
    "lat": -6.91,
    "mapX": 38.4,
    "mapY": 78.4,
    "photo": "assets/pakaian-adat/jabar.webp",
    "source": "Fairebelle",
    "description": "Kebaya Sunda merupakan salah satu bentuk busana tradisional perempuan dalam masyarakat Sunda di Jawa Barat. Kebaya ini biasanya dikenakan bersama kain kebat atau kain batik sebagai bawahan. Pakaian adat Sunda sebenarnya beragam menurut wilayah, acara, dan latar sosial; karena itu Kebaya Sunda tidak mewakili seluruh bentuk busana tradisional Jawa Barat."
  },
  {
    "id": "kalbar",
    "name": "Kalimantan Barat",
    "costume": "King Baba",
    "lon": 109.33,
    "lat": 0.02,
    "mapX": 46.8,
    "mapY": 54.4,
    "photo": "assets/pakaian-adat/kalbar.webp",
    "source": "kumparan",
    "description": "King Baba adalah pakaian tradisional laki-laki Dayak yang dikenal dalam dokumentasi pakaian adat Kalimantan Barat, khususnya masyarakat Dayak Taman. Istilah King merujuk pada pakaian, sedangkan Baba merujuk pada laki-laki. Pakaian perempuan yang menjadi pasangannya dikenal sebagai King Bibinge."
  },
  {
    "id": "sulsel",
    "name": "Sulawesi Selatan",
    "costume": "Baju Bodo",
    "lon": 119.41,
    "lat": -5.14,
    "mapX": 63.2,
    "mapY": 60.6,
    "photo": "assets/pakaian-adat/sulsel.webp",
    "source": "Dokumentasi Baju Bodo",
    "description": "Baju Bodo merupakan pakaian tradisional perempuan Bugis di Sulawesi Selatan. Busana ini dikenal dengan bentuknya yang sederhana, longgar, dan berlengan pendek. Dalam pemakaian adat, Baju Bodo biasanya dipadukan dengan sarung sutra Bugis."
  },
  {
    "id": "sulut",
    "name": "Sulawesi Utara",
    "costume": "Laku Tepu",
    "lon": 124.84,
    "lat": 1.49,
    "mapX": 67.8,
    "mapY": 49.0,
    "photo": "assets/pakaian-adat/sulut.webp",
    "source": "detikTravel",
    "description": "Laku Tepu merupakan pakaian tradisional masyarakat Sangihe-Talaud di Sulawesi Utara. Busana ini berbentuk pakaian panjang dan dikenakan oleh laki-laki maupun perempuan. Laku Tepu juga dikenal dalam pelaksanaan upacara adat Tulude."
  },
  {
    "id": "bali",
    "name": "Bali",
    "costume": "Payas Agung",
    "lon": 115.21,
    "lat": -8.65,
    "mapX": 52.7,
    "mapY": 82.2,
    "photo": "assets/pakaian-adat/bali.webp",
    "source": "V&Co Jewellery",
    "description": "Payas Agung merupakan tata busana adat Bali yang paling lengkap dan mewah. Busana ini umumnya digunakan dalam upacara penting, terutama perkawinan, serta beberapa upacara adat dan keagamaan. Pada masa lalu, pemakaiannya berkaitan dengan kalangan bangsawan, tetapi sekarang juga digunakan oleh masyarakat luas sesuai kebutuhan upacara."
  },
  {
    "id": "ntb",
    "name": "Nusa Tenggara Barat",
    "costume": "Baju Lambung",
    "lon": 116.10,
    "lat": -8.58,
    "mapX": 57.8,
    "mapY": 83.9,
    "photo": "assets/pakaian-adat/ntb.webp",
    "source": "instagram.com",
    "description": "Baju Lambung adalah pakaian tradisional perempuan suku Sasak di Pulau Lombok, Nusa Tenggara Barat. Busana ini dikenal dengan bentuknya yang sederhana dan warna hitam yang khas. Dalam catatan budaya Sasak, pakaian Lambung pernah digunakan sebagai pakaian harian perempuan di sejumlah wilayah Lombok bagian selatan."
  },
  {
    "id": "maluku",
    "name": "Maluku",
    "costume": "Baju Cele",
    "lon": 128.19,
    "lat": -3.69,
    "mapX": 76.1,
    "mapY": 61.1,
    "photo": "assets/pakaian-adat/maluku.webp",
    "source": "Indozone",
    "description": "Baju Cele merupakan salah satu busana tradisional masyarakat Maluku, terutama dikenal dalam tradisi Ambon. Pakaian ini digunakan dalam kegiatan adat dan budaya, baik oleh perempuan maupun laki-laki dengan kelengkapan yang berbeda."
  },
  {
    "id": "papuabarat",
    "name": "Papua Barat",
    "costume": "Baju Ewer",
    "lon": 134.06,
    "lat": -0.87,
    "mapX": 85.1,
    "mapY": 62.3,
    "photo": "assets/pakaian-adat/papuabarat.webp",
    "source": "Adat Tradisional",
    "description": "Baju Ewer dikenal sebagai salah satu pakaian adat yang mewakili Papua Barat dalam berbagai bahan pembelajaran dan publikasi kebudayaan. Pakaian ini memanfaatkan bahan alam, terutama serat tumbuhan yang dikeringkan. Perlu diingat bahwa Papua Barat memiliki banyak kelompok masyarakat dengan tradisi busana yang beragam, sehingga Ewer bukan satu-satunya bentuk pakaian adat di wilayah tersebut."
  },
  {
    "id": "ntt",
    "name": "Nusa Tenggara Timur (Rote)",
    "costume": "Ti'i Langga",
    "lon": 123.09,
    "lat": -10.74,
    "mapX": 69.4,
    "mapY": 91.1,
    "photo": "assets/pakaian-adat/ntt-rote.webp",
    "source": "Kompas.com",
    "description": "Ti'i Langga merupakan penutup kepala khas laki-laki Rote, Kabupaten Rote Ndao, Nusa Tenggara Timur. Walaupun sering disebut sebagai pakaian adat Rote, Ti'i Langga sebenarnya adalah salah satu aksesori paling menonjol dari satu kesatuan busana tradisional Rote."
  },
];

const QUIZ = [
  {
    "id": 1,
    "question": "Tari apakah ini?",
    "options": [
      "Tari Jaipong",
      "Tari Saman",
      "Tari Kecak",
      "Tari Pendet"
    ],
    "answer": 2,
    "explanation": "Tarian tersebut adalah Tari Kecak. Tari Kecak berasal dari Bali. Tarian ini biasanya dibawakan oleh banyak penari laki-laki yang duduk melingkar sambil mengucapkan suara \"cak, cak, cak\". Pertunjukannya mengangkat cerita Ramayana."
  },
  {
    "id": 2,
    "question": "Karapan Sapi merupakan tradisi perlombaan pacuan sapi yang berasal dari daerah mana?",
    "options": [
      "Bali",
      "Madura",
      "Sumatera Barat",
      "Jawa Barat"
    ],
    "answer": 1,
    "explanation": "Karapan Sapi berasal dari Madura, Jawa Timur. Tradisi ini merupakan perlombaan pacuan sapi yang menjadi salah satu kebudayaan khas masyarakat Madura. Karapan Sapi biasanya diselenggarakan sebagai hiburan dan bagian dari perayaan budaya masyarakat setempat."
  },
  {
    "id": 3,
    "question": "Tarian apakah yang memiliki gerakan tepuk tangan dan tepuk dada secara kompak seperti pada gambar?",
    "options": [
      "Tari Piring",
      "Tari Pendet",
      "Tari Jaipong",
      "Tari Saman"
    ],
    "answer": 3,
    "explanation": "Tarian tersebut adalah Tari Saman. Tari Saman berasal dari masyarakat Gayo, Aceh. Tarian ini memiliki ciri khas gerakan tangan, tepukan dada, dan gerakan tubuh yang dilakukan secara serempak. Tari Saman juga mengandung pesan kebersamaan dan kekompakan."
  },
  {
    "id": 4,
    "question": "Apa nama tradisi upacara adat yang berasal dari Bali dan berkaitan dengan penghormatan kepada orang yang telah meninggal?",
    "options": [
      "Ngaben",
      "Sekaten",
      "Rambu Solo",
      "Tabuik"
    ],
    "answer": 0,
    "explanation": "Tradisi tersebut adalah Upacara Ngaben. Ngaben berasal dari Bali dan merupakan upacara keagamaan Hindu yang berkaitan dengan proses kremasi atau pembakaran jenazah. Upacara ini memiliki makna penyucian dan penghormatan kepada orang yang telah meninggal."
  },
  {
    "id": 5,
    "question": "Tarian tradisional apakah yang menggunakan piring sebagai properti utama dalam pertunjukannya?",
    "options": [
      "Tari Kecak",
      "Tari Saman",
      "Tari Piring",
      "Tari Serimpi"
    ],
    "answer": 2,
    "explanation": "Tarian tersebut adalah Tari Piring. Tari Piring berasal dari Sumatera Barat, tepatnya dari kebudayaan Minangkabau. Tarian ini menggunakan piring sebagai properti yang dibawa oleh para penari dan awalnya berkaitan dengan ungkapan rasa syukur atas hasil panen."
  },
  {
    "id": 6,
    "question": "Tradisi apakah yang dilakukan dengan cara melompati susunan batu yang tinggi?",
    "options": [
      "Pasola",
      "Lompat Batu",
      "Karapan Sapi",
      "Pacu Jalur"
    ],
    "answer": 1,
    "explanation": "Tradisi tersebut adalah Lompat Batu. Tradisi ini berasal dari Pulau Nias, Sumatera Utara. Lompat Batu merupakan salah satu warisan budaya masyarakat Nias yang dilakukan dengan melompati susunan batu sebagai bagian dari tradisi setempat."
  },
  {
    "id": 7,
    "question": "Tarian tradisional apakah yang berasal dari Jawa Barat dan terkenal dengan gerakannya yang dinamis serta diiringi musik kendang?",
    "options": [
      "Tari Pendet",
      "Tari Saman",
      "Tari Kecak",
      "Tari Jaipong"
    ],
    "answer": 3,
    "explanation": "Tarian tersebut adalah Tari Jaipong. Tari Jaipong berasal dari Jawa Barat. Tarian ini memiliki gerakan yang dinamis dan ceria serta diiringi musik tradisional, terutama kendang. Tari Jaipong juga sering ditampilkan untuk menyambut tamu dan dalam acara hiburan masyarakat."
  },
  {
    "id": 8,
    "question": "Tradisi apakah yang berupa perlombaan perahu panjang dan melibatkan banyak pendayung?",
    "options": [
      "Pacu Jalur",
      "Karapan Sapi",
      "Lompat Batu",
      "Pasola"
    ],
    "answer": 0,
    "explanation": "Tradisi tersebut adalah Pacu Jalur. Pacu Jalur berasal dari Kabupaten Kuantan Singingi, Riau. Tradisi ini merupakan perlombaan perahu panjang yang didayung oleh banyak orang. Kegiatan ini menjadi salah satu budaya masyarakat Riau dan biasanya diselenggarakan sebagai perayaan budaya."
  },
  {
    "id": 9,
    "question": "Tradisi apakah yang diselenggarakan di Yogyakarta dan Surakarta untuk memperingati kelahiran Nabi Muhammad SAW?",
    "options": [
      "Ngaben",
      "Sekaten",
      "Karapan Sapi",
      "Rambu Solo"
    ],
    "answer": 1,
    "explanation": "Tradisi tersebut adalah Sekaten. Sekaten merupakan tradisi budaya yang berkembang di lingkungan Keraton Yogyakarta dan Surakarta. Tradisi ini diselenggarakan untuk memperingati kelahiran Nabi Muhammad SAW dan biasanya dimeriahkan dengan berbagai kegiatan budaya."
  },
  {
    "id": 10,
    "question": "Tarian tradisional apakah yang berasal dari masyarakat Batak, Sumatera Utara, dan biasanya diiringi musik gondang?",
    "options": [
      "Tari Piring",
      "Tari Jaipong",
      "Tari Tor-Tor",
      "Tari Kecak"
    ],
    "answer": 2,
    "explanation": "Tarian tersebut adalah Tari Tor-Tor. Tari Tor-Tor berasal dari masyarakat Batak, Sumatera Utara. Tarian ini biasanya ditampilkan dalam berbagai upacara adat, seperti pernikahan dan penyambutan tamu. Tari Tor-Tor diiringi musik tradisional gondang dan memiliki makna penghormatan serta rasa syukur."
  },
  {
    "id": 11,
    "question": "Tradisi apakah yang berasal dari Tana Toraja dan merupakan upacara adat untuk menghormati orang yang telah meninggal?",
    "options": [
      "Sekaten",
      "Rambu Solo",
      "Ngaben",
      "Tabuik"
    ],
    "answer": 1,
    "explanation": "Tradisi tersebut adalah Rambu Solo. Rambu Solo berasal dari Tana Toraja, Sulawesi Selatan. Tradisi ini merupakan upacara adat kematian yang dilakukan sebagai bentuk penghormatan terakhir kepada anggota keluarga yang telah meninggal."
  },
  {
    "id": 12,
    "question": "Tradisi perlombaan balap kerbau yang berasal dari Pulau Bali dikenal dengan nama apa?",
    "options": [
      "Karapan Sapi",
      "Pasola",
      "Makepung",
      "Pacu Jalur"
    ],
    "answer": 2,
    "explanation": "Tradisi tersebut adalah Makepung. Makepung berasal dari Kabupaten Jembrana, Bali. Tradisi ini merupakan perlombaan balap kerbau yang dilakukan oleh masyarakat setempat sebagai salah satu budaya khas Bali."
  },
  {
    "id": 13,
    "question": "Tradisi apakah yang berasal dari Pulau Sumba dan menampilkan permainan ketangkasan menunggang kuda?",
    "options": [
      "Lompat Batu",
      "Pacu Jalur",
      "Pasola",
      "Karapan Sapi"
    ],
    "answer": 2,
    "explanation": "Tradisi tersebut adalah Pasola. Pasola berasal dari Pulau Sumba, Nusa Tenggara Timur. Tradisi ini merupakan permainan adat yang melibatkan para penunggang kuda dan menjadi bagian dari kebudayaan serta kepercayaan masyarakat setempat."
  },
  {
    "id": 14,
    "question": "Tradisi apakah yang berasal dari Papua dan dilakukan dengan memasak makanan menggunakan batu yang dipanaskan?",
    "options": [
      "Ngaben",
      "Sekaten",
      "Rambu Solo",
      "Bakar Batu"
    ],
    "answer": 3,
    "explanation": "Tradisi tersebut adalah Bakar Batu. Tradisi Bakar Batu berasal dari Papua. Masyarakat melakukan kegiatan memasak bersama menggunakan batu yang dipanaskan. Tradisi ini memiliki makna kebersamaan, persaudaraan, dan rasa syukur."
  },
  {
    "id": 15,
    "question": "Kesenian tradisional apakah yang berasal dari Jawa Timur dan memiliki ciri khas topeng besar berbentuk kepala singa dengan hiasan bulu merak?",
    "options": [
      "Tari Piring",
      "Reog Ponorogo",
      "Tari Saman",
      "Tari Jaipong"
    ],
    "answer": 1,
    "explanation": "Kesenian tersebut adalah Reog Ponorogo. Reog Ponorogo berasal dari Kabupaten Ponorogo, Jawa Timur. Kesenian ini memiliki ciri khas dadak merak, yaitu topeng besar berbentuk kepala singa yang dihiasi bulu merak. Reog biasanya ditampilkan dalam acara budaya dan perayaan masyarakat."
  }
];

const SITUATIONS = [
  [
    {
      "original": "Saat kegiatan pentas budaya di sekolah, temanmu memakai pakaian adat dari daerah asalnya. Bagaimana sikapmu ketika melihat pakaian tersebut? Jelaskan alasannya!",
      "statement": "Aku sebaiknya menghargai pakaian adat yang dikenakan teman.",
      "answer": true,
      "explanation": "Menghargai pakaian adat teman membuat semua merasa diterima."
    },
    {
      "original": "Ada seorang teman yang menertawakan pakaian adat yang dikenakan temannya karena terlihat berbeda. Apa yang akan kamu lakukan?",
      "statement": "Menertawakan pakaian adat teman adalah tindakan yang baik.",
      "answer": false,
      "explanation": "Kita harus menegur dengan sopan dan mengajak teman saling menghargai."
    },
    {
      "original": "Mengapa setiap daerah di Indonesia memiliki pakaian adat yang berbeda-beda?",
      "statement": "Perbedaan pakaian adat menunjukkan kekayaan budaya Indonesia.",
      "answer": true,
      "explanation": "Budaya tiap daerah tumbuh dari sejarah dan lingkungan yang beragam."
    },
    {
      "original": "Jika kamu diminta memakai pakaian adat dari daerah lain, bagaimana perasaanmu dan bagaimana sikapmu?",
      "statement": "Aku harus malu jika diminta mencoba pakaian adat daerah lain.",
      "answer": false,
      "explanation": "Mencoba pakaian adat lain dengan hormat dapat menambah pengetahuan."
    },
    {
      "original": "Temanmu tidak mengetahui nama pakaian adat yang kamu kenakan. Bagaimana cara kamu memperkenalkan pakaian tersebut kepadanya?",
      "statement": "Aku boleh menjelaskan nama dan asal pakaian adatku dengan ramah.",
      "answer": true,
      "explanation": "Memperkenalkan budaya sendiri bisa menjadi kesempatan belajar bersama."
    },
    {
      "original": "Menurutmu, mengapa kita harus bangga terhadap pakaian adat yang berasal dari daerah kita sendiri?",
      "statement": "Kita tidak perlu bangga terhadap pakaian adat daerah sendiri.",
      "answer": false,
      "explanation": "Bangga dan merawat budaya tidak berarti merendahkan budaya lain."
    },
    {
      "original": "Saat melihat gambar pakaian adat yang belum pernah kamu temui, apa yang sebaiknya kamu lakukan agar bisa mengenalnya lebih jauh?",
      "statement": "Aku dapat bertanya atau membaca sumber yang baik untuk mengenal pakaian adat baru.",
      "answer": true,
      "explanation": "Rasa ingin tahu membantu kita belajar tentang budaya yang berbeda."
    },
    {
      "original": "Jika ada teman yang merasa malu memakai pakaian adat daerahnya karena dianggap kuno, bagaimana kamu memberikan semangat kepadanya?",
      "statement": "Aku sebaiknya ikut mengejek teman yang malu memakai pakaian adatnya.",
      "answer": false,
      "explanation": "Kita perlu menyemangati teman agar percaya diri."
    },
    {
      "original": "Apa yang bisa dilakukan siswa untuk ikut melestarikan pakaian adat Indonesia?",
      "statement": "Mempelajari dan mengenalkan pakaian adat adalah contoh menjaga budaya.",
      "answer": true,
      "explanation": "Anak-anak bisa melestarikan budaya dengan belajar serta berbagi pengetahuan."
    },
    {
      "original": "Menurutmu, apa yang akan terjadi jika masyarakat tidak mau menghargai pakaian adat dari daerah lain? Jelaskan!",
      "statement": "Tidak menghormati pakaian adat daerah lain dapat menyakiti perasaan orang.",
      "answer": true,
      "explanation": "Saling menghargai membantu menjaga persatuan dan persahabatan."
    }
  ],
  [
    {
      "original": "Kamu melihat sebuah tradisi dari daerah lain yang belum pernah kamu ketahui. Apa yang akan kamu lakukan untuk mengenal tradisi tersebut?",
      "statement": "Mempelajari tradisi baru dengan bertanya secara sopan adalah sikap yang baik.",
      "answer": true,
      "explanation": "Bersikap ingin tahu dengan hormat membantu kita memahami budaya lain."
    },
    {
      "original": "Temanmu bercerita tentang tradisi yang biasa dilakukan keluarganya di daerah asal. Bagaimana sikapmu saat mendengarkan cerita tersebut?",
      "statement": "Saat teman bercerita tentang tradisinya, aku boleh mengejeknya.",
      "answer": false,
      "explanation": "Dengarkan cerita teman dan hargai kebiasaan keluarganya."
    },
    {
      "original": "Mengapa setiap daerah di Indonesia memiliki tradisi yang berbeda-beda?",
      "statement": "Tradisi antardaerah bisa berbeda karena sejarah dan budaya masyarakatnya.",
      "answer": true,
      "explanation": "Keanekaragaman tradisi adalah bagian dari kekayaan Indonesia."
    },
    {
      "original": "Ada teman yang menganggap tradisi daerah lain aneh karena berbeda dengan tradisi di daerahnya. Bagaimana pendapatmu tentang sikap tersebut?",
      "statement": "Tradisi yang berbeda dari kebiasaanku pasti salah dan aneh.",
      "answer": false,
      "explanation": "Berbeda tidak berarti salah; kita perlu belajar tanpa merendahkan."
    },
    {
      "original": "Jika sekolah mengadakan kegiatan mengenal tradisi Nusantara, tradisi apa yang ingin kamu perkenalkan kepada teman-teman? Jelaskan!",
      "statement": "Memperkenalkan tradisi daerah dengan cara sopan dapat menambah pengetahuan teman.",
      "answer": true,
      "explanation": "Kegiatan sekolah dapat menjadi tempat berbagi budaya dengan saling menghormati."
    },
    {
      "original": "Menurutmu, mengapa tradisi daerah perlu dijaga dan dilestarikan oleh generasi muda?",
      "statement": "Generasi muda tidak perlu mengenal tradisi daerahnya.",
      "answer": false,
      "explanation": "Mempelajari tradisi membantu menjaga warisan budaya."
    },
    {
      "original": "Bagaimana cara kamu menunjukkan rasa hormat ketika menyaksikan tradisi dari daerah lain?",
      "statement": "Ketika menyaksikan tradisi daerah lain, aku harus menghormati aturan setempat.",
      "answer": true,
      "explanation": "Mengikuti arahan dan bersikap tertib adalah tanda menghargai."
    },
    {
      "original": "Jika temanmu mengajak berdiskusi tentang tradisi yang berbeda dengan kebiasaan keluargamu, bagaimana kamu menanggapi ajakan tersebut?",
      "statement": "Aku harus menolak berdiskusi dengan teman yang tradisinya berbeda.",
      "answer": false,
      "explanation": "Diskusi yang terbuka membantu kita saling memahami."
    },
    {
      "original": "Apa yang dapat dilakukan anak-anak seusiamu untuk membantu melestarikan tradisi daerah?",
      "statement": "Anak-anak dapat ikut melestarikan tradisi melalui kegiatan budaya sekolah.",
      "answer": true,
      "explanation": "Belajar, berkarya, dan berbagi informasi membantu pelestarian budaya."
    },
    {
      "original": "Menurutmu, bagaimana keberadaan tradisi yang berbeda-beda dapat memperkaya kebudayaan Indonesia?",
      "statement": "Banyaknya tradisi membuat budaya Indonesia semakin kaya.",
      "answer": true,
      "explanation": "Perbedaan tradisi justru memperluas pengetahuan dan kekayaan bangsa."
    }
  ],
  [
    {
      "original": "Kamu memiliki teman yang berbeda agama. Bagaimana cara kamu tetap menjalin persahabatan dengannya?",
      "statement": "Perbedaan agama tidak menghalangi kita untuk berteman dengan baik.",
      "answer": true,
      "explanation": "Persahabatan dibangun melalui saling menghormati dan kebaikan."
    },
    {
      "original": "Saat waktu istirahat, temanmu sedang menjalankan ibadah sesuai agamanya. Bagaimana sikapmu terhadap teman tersebut?",
      "statement": "Aku harus menghormati teman yang sedang menjalankan ibadah.",
      "answer": true,
      "explanation": "Berikan ruang dan ketenangan bagi teman untuk beribadah."
    },
    {
      "original": "Temanmu mengajakmu menghadiri kegiatan keagamaan yang berbeda dengan agamamu.",
      "statement": "Aku boleh menghargai ajakan teman tanpa harus mengikuti ibadah yang berbeda dari keyakinanku.",
      "answer": true,
      "explanation": "Kita dapat menanggapi dengan sopan dan menjaga keyakinan masing-masing."
    },
    {
      "original": "Bagaimana kamu menyikapinya dengan tetap menghormati keyakinan masing-masing? Ada teman yang mengejek agama temannya. Apa yang akan kamu lakukan jika melihat kejadian tersebut?",
      "statement": "Mengejek agama orang lain adalah perilaku yang dapat dibenarkan.",
      "answer": false,
      "explanation": "Ejekan dapat menyakiti orang lain dan bertentangan dengan sikap saling menghargai."
    },
    {
      "original": "Mengapa kita tidak boleh memaksakan agama atau kepercayaan kita kepada orang lain?",
      "statement": "Memaksakan agama atau keyakinan kepada orang lain adalah tindakan yang baik.",
      "answer": false,
      "explanation": "Setiap orang berhak dihargai dalam keyakinannya."
    },
    {
      "original": "Jika kamu sedang mengerjakan tugas kelompok bersama teman yang berbeda agama, bagaimana cara kalian bekerja sama?",
      "statement": "Teman yang berbeda agama tetap dapat bekerja sama dalam tugas kelompok.",
      "answer": true,
      "explanation": "Kerja sama dapat dilakukan dengan adil dan saling menghargai."
    },
    {
      "original": "Temanmu tidak dapat mengikuti kegiatan tertentu karena sedang menjalankan ibadah. Bagaimana kamu menunjukkan sikap menghargainya?",
      "statement": "Aku perlu menghormati teman yang tidak bisa hadir karena ibadahnya.",
      "answer": true,
      "explanation": "Berikan pengertian dan cari cara bekerja sama yang nyaman."
    },
    {
      "original": "Bagaimana perasaanmu jika ada teman yang tidak mau berteman denganmu hanya karena perbedaan agama? Apa yang sebaiknya dilakukan agar hal tersebut tidak terjadi?",
      "statement": "Menjauhi teman karena agamanya berbeda adalah sikap yang tepat.",
      "answer": false,
      "explanation": "Perbedaan keyakinan bukan alasan untuk mendiskriminasi."
    },
    {
      "original": "Menurutmu, apa saja contoh sikap toleransi beragama yang dapat dilakukan di lingkungan sekolah?",
      "statement": "Memberi kesempatan teman menjalankan ibadah adalah contoh toleransi di sekolah.",
      "answer": true,
      "explanation": "Toleransi diwujudkan melalui tindakan saling menghormati."
    },
    {
      "original": "Mengapa perbedaan agama tidak boleh menjadi alasan untuk saling bermusuhan?",
      "statement": "Perbedaan agama bukan alasan untuk saling bermusuhan.",
      "answer": true,
      "explanation": "Persatuan dan persahabatan dibangun melalui sikap damai."
    }
  ],
  [
    {
      "original": "Di kelasmu ada teman yang berasal dari suku yang berbeda dan memiliki logat bicara yang khas. Bagaimana sikapmu saat berbicara dengannya?",
      "statement": "Aku harus menghargai teman yang memiliki suku dan logat bicara yang berbeda.",
      "answer": true,
      "explanation": "Perbedaan suku dan logat adalah bagian dari kekayaan Indonesia yang perlu dihormati."
    },
    {
      "original": "Ada teman yang mengejek nama suku temannya karena dianggap lucu. Apa pendapatmu tentang sikap tersebut?",
      "statement": "Mengejek nama suku teman adalah hal yang wajar dan boleh dilakukan.",
      "answer": false,
      "explanation": "Mengejek identitas suku dapat menyakiti perasaan teman dan tidak menunjukkan sikap saling menghargai."
    },
    {
      "original": "Mengapa kita perlu mengenal suku-suku yang ada di Indonesia?",
      "statement": "Mengenal suku-suku di Indonesia membantu kita memahami keberagaman bangsa.",
      "answer": true,
      "explanation": "Semakin mengenal budaya dan suku lain, semakin mudah kita hidup rukun dalam perbedaan."
    },
    {
      "original": "Temanmu membawa makanan khas dari daerah asal keluarganya dan rasanya berbeda dari makanan yang biasa kamu makan. Bagaimana sebaiknya sikapmu?",
      "statement": "Aku boleh menolak sambil menghina makanan khas daerah teman karena rasanya berbeda.",
      "answer": false,
      "explanation": "Setiap makanan khas daerah memiliki ciri tersendiri dan perlu dihargai, meskipun rasanya berbeda dari kebiasaan kita."
    },
    {
      "original": "Saat kerja kelompok, anggota kelompokmu berasal dari latar budaya yang berbeda-beda. Apa yang sebaiknya dilakukan agar tugas berjalan baik?",
      "statement": "Kami harus bekerja sama dengan adil meskipun berasal dari latar budaya yang berbeda.",
      "answer": true,
      "explanation": "Kerja sama yang baik lahir dari sikap saling menghormati, mendengarkan, dan membantu satu sama lain."
    },
    {
      "original": "Apakah hanya budaya dari daerah sendiri yang boleh dianggap baik? Jelaskan pendapatmu.",
      "statement": "Hanya budaya dari daerah sendiri yang layak dihargai.",
      "answer": false,
      "explanation": "Semua budaya daerah di Indonesia layak dihargai karena masing-masing memiliki nilai dan keunikan tersendiri."
    },
    {
      "original": "Sekolahmu mengadakan hari budaya Nusantara. Bagaimana caramu menunjukkan rasa hormat kepada penampilan budaya dari daerah lain?",
      "statement": "Aku dapat menonton dengan tertib dan memberikan apresiasi pada penampilan budaya daerah lain.",
      "answer": true,
      "explanation": "Memberi apresiasi adalah cara sederhana untuk menunjukkan rasa hormat terhadap karya budaya orang lain."
    },
    {
      "original": "Jika ada teman yang belum pernah melihat rumah adat atau tarian dari suatu daerah, apa yang dapat kamu lakukan?",
      "statement": "Aku tidak perlu berbagi informasi tentang budaya daerah lain kepada teman.",
      "answer": false,
      "explanation": "Berbagi informasi budaya membantu teman belajar dan menumbuhkan rasa bangga terhadap Indonesia."
    },
    {
      "original": "Mengapa perbedaan suku dan budaya justru dapat memperkuat persatuan Indonesia?",
      "statement": "Keberagaman suku dan budaya dapat memperkuat persatuan jika kita saling menghargai.",
      "answer": true,
      "explanation": "Perbedaan membuat Indonesia kaya. Persatuan akan tumbuh jika keberagaman dijaga bersama."
    },
    {
      "original": "Apa yang sebaiknya kamu lakukan jika mendengar teman memberikan stereotip buruk kepada suku tertentu?",
      "statement": "Aku perlu menegur dengan sopan dan mengingatkan bahwa semua suku harus dihormati.",
      "answer": true,
      "explanation": "Menolak stereotip buruk adalah bagian dari sikap adil dan menghargai sesama."
    }
  ]
];

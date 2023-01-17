const getData = ()=>{
    return[
        {
            id: 1,
            title:'Kimetsu No Yaiba',
            body: 'Kimetsu no Yaiba: Mugen Train (bahasa Jepang: 鬼滅の刃 無限列車編, harfiah: Film Pedang Penghancur Iblis: Kereta tak terbatas) adalah film aksi periode fantasi gelap animasi Jepang 2020, berdasarkan serial manga shōnen Demon Slayer: Kimetsu no Yaiba oleh Koyoharu Gotōge.',
            // archived: false,
            createdAt: new Date().toISOString().slice(0, 10),
        },
        {
            id: 2,
            title: 'Spy x Family',
            body: 'Spy x Family merupakan anime bergenre aksi komedi yang mengisahkan kehidupan keluarga mata-mata dan pembunuh bayaran. Seorang mata-mata terampil dengan nama samaran Twilight memiliki keluarga palsu demi penyamaran dalam suatu misi penting',
            // archived: false,
            createdAt: new Date().toISOString().slice(0, 10),
        },
        {
            id:3,
            title:'Gojo Satoru',
            body:'alam manga dan anime, sosok Gojo Satoru merupakan sosok guru yang mengajari para murid di anime Jujutsu Kaisen dan film Jujutsu Kaisen 0 The Movie. Gojo Satoru merupakan salah satu protagonis utama dalam seri Jujutsu Kaisen ini dan juga merupakan karakter populer.',
            // archived: false,
            createdAt: new Date().toISOString().slice(0, 10),
        },
        {
            id:4,
            title:'Gojo Satoru',
            body:'alam manga dan anime, sosok Gojo Satoru merupakan sosok guru yang mengajari para murid di anime Jujutsu Kaisen dan film Jujutsu Kaisen 0 The Movie. Gojo Satoru merupakan salah satu protagonis utama dalam seri Jujutsu Kaisen ini dan juga merupakan karakter populer.',
            // archived: false,
            createdAt: new Date().toISOString().slice(0, 10),
        }
    ]
}

export { getData };
import Song from './Song';
export var listSong = [
    {
        id: 0,
        name: 'Năm Ấy',
        singer: 'Đức Phúc',
        color: 'purple',
        url: require('../Images/Albums/0.jpg'),
        content: new Song(require('../Musics/nam_ay.mp3')),
        image: require('../Images/BackDrop/nam_ay.jpg'),
        backgroundColor: '#2b2117'

    }, {
        id: 1,
        name: 'Người Yêu Cô Ấy',
        singer: 'Châu Khải Phong',
        color: 'green',
        url: require('../Images/Albums/1.jpg'),
        content: new Song(require('../Musics/nguoi_yeu_co_ay.mp3')),
        image: require('../Images/BackDrop/nguoi_yeu_co_ay.jpg'),
        backgroundColor: '#7eb5c9'

    }, {
        id: 2,
        name: 'Tophit 90-2000 Remix',
        singer: 'Nguyễn Hải Yến',
        color: 'orange',
        url: require('../Images/Albums/2.jpg'),
        content: new Song(require('../Musics/dem_lao_xao.mp3')),
        image: require('../Images/BackDrop/tophit_hai_yen.jpg'),
        backgroundColor: '#5a4a4a'

    }, {
        id: 3,
        name: 'Cánh Hoa Tàn',
        singer: 'Hương Tràm',
        color: 'gray',
        url: require('../Images/Albums/3.jpg'),
        content: new Song(require('../Musics/canh_hoa_tan.mp3')),
        image: require('../Images/BackDrop/canh_hoa_tan.jpg'),
        backgroundColor: '#521419'

    }, {
        id: 4,
        name: 'Let Me Know',
        singer: 'Bùi Anh Tú',
        color: 'gray',
        url: require('../Images/Albums/4.jpg'),
        content: new Song(require('../Musics/let_me_know.mp3')),
        image: require('../Images/BackDrop/let_me_know.jpg'),
        backgroundColor: '#626262'

    }
];

export var listAlbum = [
    {
        name: 'Năm Ấy',
        singer: 'Đức Phúc',
        url: require('../Images/Albums/0.jpg')
    }, {
        name: 'Người Yêu Cô Ấy',
        singer: 'Châu Khải Phong',
        url: require('../Images/Albums/1.jpg')
    }, {
        name: 'Tophit 90-2000 Remix',
        singer: 'Nguyễn Hải Yến',
        url: require('../Images/Albums/2.jpg')
    }, {
        name: 'Cánh Hoa Tàn (Mẹ Chồng OST)',
        singer: 'Hương Tràm',
        url: require('../Images/Albums/3.jpg')
    }, {
        name: 'Let Me Know',
        singer: 'Bùi Anh Tú',
        url: require('../Images/Albums/4.jpg')
    }, {
        name: 'Chẳng Là Gì Của Nhau',
        singer: 'Hồng Dương M4U',
        url: require('../Images/Albums/5.jpg')
    }
];
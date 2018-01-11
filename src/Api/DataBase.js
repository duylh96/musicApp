import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export var listSong = [
    {
        id: 0,
        name: 'Năm Ấy',
        singer: 'Đức Phúc',
        color: 'purple',
        url: require('../Images/Albums/0.jpg'),
        content: new Sound('nam_ay.mp3', Sound.MAIN_BUNDLE, (error) => {}),
        image: require('../Images/BackDrop/nam_ay.jpg'),
        backgroundColor: '#2b2117'

    }, {
        id: 1,
        name: 'Người Yêu Cô Ấy',
        singer: 'Châu Khải Phong',
        color: 'green',
        url: require('../Images/Albums/1.jpg'),
        content: new Sound('nguoi_yeu_co_ay.mp3', Sound.MAIN_BUNDLE, (error) => {}),
        image: require('../Images/BackDrop/nguoi_yeu_co_ay.jpg'),
        backgroundColor: '#7eb5c9'

    }, {
        id: 2,
        name: 'Tophit 90-2000 Remix',
        singer: 'Nguyễn Hải Yến',
        color: 'orange',
        url: require('../Images/Albums/2.jpg'),
        content: new Sound('dem_lao_xao.mp3', Sound.MAIN_BUNDLE, (error) => {}),
        image: require('../Images/BackDrop/tophit_hai_yen.jpg'),
        backgroundColor: '#5a4a4a'

    }, {
        id: 3,
        name: 'Cánh Hoa Tàn',
        singer: 'Hương Tràm',
        color: 'gray',
        url: require('../Images/Albums/3.jpg'),
        content: new Sound('canh_hoa_tan.mp3', Sound.MAIN_BUNDLE, (error) => {}),
        image: require('../Images/BackDrop/canh_hoa_tan.jpg'),
        backgroundColor: '#521419'

    }, {
        id: 4,
        name: 'Let Me Know',
        singer: 'Bùi Anh Tú',
        color: 'gray',
        url: require('../Images/Albums/4.jpg'),
        content: new Sound('let_me_know.mp3', Sound.MAIN_BUNDLE, (error) => {}),
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

export var listHotKey = [
    'nam ay',
    'nguoi yeu co ay',
    'let me know',
    'save me',
    'bao anh',
    'karik',
    'christmas',
    'despacito',
    'mr siro',
    'khoi my'
];

export function searchDeXuat(query) {
    switch (query) {
        case "nam ay":
            return [
                {
                    name: 'Năm Ấy',
                    singer: 'Đức Phúc',
                    type: 'song'
                }, {
                    name: 'Năm Ấy',
                    singer: 'Đức Phúc',
                    type: 'mv'
                }
            ];
        case "nguoi yeu co ay":
            return [
                {
                    name: 'Người Yêu Cô Ấy',
                    singer: 'Châu Khải Phong',
                    type: 'song'
                }, {
                    name: 'Người Yêu Cô Ấy',
                    singer: 'Châu Khải Phong',
                    type: 'mv'
                }
            ];
        case "let me know":
            return [
                {
                    name: 'Let Me Know',
                    singer: 'Bùi Anh Tú',
                    type: 'song'
                }
            ];
    }
}

export function searchBaiHat(query) {
    switch (query) {
        case "nam ay":
            return [
                {
                    name: 'Năm Ấy',
                    singer: 'Đức Phúc',
                    number: '1M'
                }, {
                    name: 'Năm Ấy',
                    singer: 'Mắt Ngọc',
                    number: '729'
                }, {
                    name: 'Năm Ấy',
                    singer: 'Dĩnh Nhi',
                    number: '822'
                }, {
                    name: 'Mùa Oải Hương Năm Ấy',
                    singer: 'Phạm Hồng Phước',
                    number: '1M'
                }
            ];
        case "nguoi yeu co ay":
            return [
                {
                    name: 'Người Ấy Yêu Em',
                    singer: 'Trương Tâm Nhi',
                    number: '1M'
                }, {
                    name: 'Người Ấy',
                    singer: 'Trịnh Thăng Bình',
                    number: '7M'
                }, {
                    name: 'Yêu Một Người Có Lẽ',
                    singer: 'Lou Hoàng, Miu Lê, Onl...',
                    number: '5M'
                }, {
                    name: 'Người Yêu Cô Ấy',
                    singer: 'Châu Khải Phong',
                    number: '1M'
                }
            ];
        case "let me know":
            return [
                {
                    name: 'Let Me Know',
                    singer: 'BTS (Bangtan Boys)',
                    number: '119K'
                }, {
                    name: 'Let Me Know',
                    singer: 'GOT7',
                    number: '15K'
                }, {
                    name: 'Let Me Know',
                    singer: 'CNBLUE',
                    number: '1K7'
                }, {
                    name: 'Let Me Know',
                    singer: 'Kiss',
                    number: '124'
                }
            ];
    }
}

export function searchPlaylist(query) {
    switch (query) {
        case "nam ay":
            return [
                {
                    name: 'Năm Ấy',
                    singer: 'Đức Phúc',
                    url: require('../Images/Posters/namay.jpg'),
                    number: '146K'
                }, {
                    name: 'Mùa Đông Năm Ấy',
                    singer: 'Đỗ Thiên Bình',
                    url: require('../Images/Posters/muadongnamay.jpg'),
                    number: '294'
                }, {
                    name: 'Chàng Trai Năm Ấy',
                    singer: 'Sơn Tùng MTP, V.A',
                    url: require('../Images/Posters/changtrainamay.jpg'),
                    number: '4M'
                }, {
                    name: 'Gió Mùa Đông Năm Ấy',
                    singer: 'Moon Nguyễn, John Lê, Tố Đoàn...',
                    url: require('../Images/Posters/giomuadongnamay.jpg'),
                    number: '1K'
                }, {
                    name: 'Năm Ấy Hoa Nở Trăng Vừa...',
                    singer: 'V.A',
                    url: require('../Images/Posters/namayhoanotrangvuatron.jpg'),
                    number: '830'
                }
            ];
    }
}
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [58.91990248330119, 39.13288152941068],
        zoom: 4,
        controls: [],
    });

    myMap.geoObjects
        .add(
            new ymaps.Placemark([56.32454606840529, 44.00575299999996], {
                balloonContent: 'Россия, Нижний Новгород, Алексеевская улица, 6',
                iconCaption: 'г. Нижний Новгород',
            })
        )
        .add(
            new ymaps.Placemark([47.228815574269746, 39.70726049999999], {
                balloonContent: 'Россия, Ростов-на-Дону, Соборный переулок, 62',
                iconCaption: 'г. Ростов-на-Дону',
            })
        )
        .add(
            new ymaps.Placemark([51.65807657231606, 39.19361249999998], {
                balloonContent: 'Россия, Воронеж, улица Куцыгина, 17',
                iconCaption: 'г. Воронеж',
            })
        )
        .add(
            new ymaps.Placemark([54.19442357042728, 37.61461699999999], {
                balloonContent: 'Россия, Тула, улица Фридриха Энгельса, 2',
                iconCaption: 'г. Тула',
            })
        );
}

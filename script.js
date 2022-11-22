let myMap;

const mockBackendRequest = [
    {
        "event_url": "https://kudago.com/spb/event/vyistavka-prodolzhenie/", 
        "title": "Выставка «Продолжение»", 
        "description": "Живопись Дмитрия Кустановича — это калейдоскоп ярких образов, которые увлекают зрителя в фантастическую авторскую вселенную.", 
        "dates": ["1 декабря 2021 – 27 ноября 2022"], 
        "days": ["ежедневно 12:00–20:00"], 
        "place_url": "https://kudago.com/spb/place/galareya-kustanovicha/", 
        "place_title": "Место проведения", 
        "place_address_coordinates": [59.939685, 30.323603], 
        "place_address": "ул. Б. Конюшенная, д. 11 (второй двор Капеллы)"
    },
    {
        "event_url": "https://kudago.com/spb/event/vyistavka-tri-istoricheskih-svyatyini/", 
        "title": "Выставка Светланы Мучновой «Три исторических святыни» в галерее «Тутти-Кванти»", 
        "description": "Персональная выставка Светланы Мучновой посвящена православным святым Иоанну Златоусту, Иоанну Предтече и Василиску Команскому.", 
        "dates": ["17 сентября – 17 декабря"], 
        "days": ["пн–пт 13:00–20:00", "сб, вс 14:00–18:00"], 
        "place_url": "https://kudago.com/spb/place/art-prostranstvo-tutti-kvanti/", 
        "place_title": "Место проведения", 
        "place_address_coordinates": [59.941416, 30.364045], 
        "place_address": "ул. Радищева, д. 37"
    },
    {
        "event_url": "https://kudago.com/spb/event/proekt-i-believe-angels/", 
        "title": "Проект I Believe in Angels Дмитрия Шорина", 
        "description": "В новом терминале аэропорта «Пулково» расположились четыре скульптуры из совместного проекта Эрарты и художника Дмитрия Шорина I Believe in Angels.", 
        "dates": ["Круглый год"], 
        "days": ["ежедневно весь день"], 
        "place_url": "https://kudago.com/spb/place/aeroport-pulkovo/", 
        "place_title": "Место проведения", 
        "place_address_coordinates": [59.798258, 30.268392], 
        "place_address": "Пулковское ш., д. 41"
},
    {
        "event_url": "https://kudago.com/spb/event/vyistavka-zhivopis-dmitriya-kustanovicha-167863/", 
        "title": "Выставка живописи Дмитрия Кустановича", 
        "description": "В Галерее Кустановича в постоянном режиме работает выставка картин мастера пространственного реализма, сумевшего вырваться за пределы ограниченной плоскости холста.", 
        "dates": ["Круглый год"], 
        "days": ["12:00–20:00"], 
        "place_url": "https://kudago.com/spb/place/galareya-kustanovicha/", 
        "place_title": "Место проведения", 
        "place_address_coordinates": [59.939685, 30.323603], 
        "place_address": "ул. Б. Конюшенная, д. 11 (второй двор Капеллы)"
    },
    {
        "event_url": "https://kudago.com/spb/event/vyistavka-oko/", 
        "title": "Выставка «ОКО»", 
        "description": "Выставка объединяет световую скульптуру, коллажи и цифровую графику в исполнении трёх художников. Посетители смогут погрузиться в тему взаимодействия видимой реальности, метафизического пространства и внутреннего мира человека.", 
        "dates": ["29 сентября – 27 ноября"], 
        "days": ["ежедневно 12:00–20:00"], 
        "place_url": null, 
        "place_title": "Галерея One’s Mind", 
        "place_address_coordinates": [59.938955, 30.325541], 
        "place_address": "Шведский пер., 2"
    },
    {
        "event_url": "https://kudago.com/spb/event/postoyannaya-vystavka-pticy-v-etazhah/", 
        "title": "Постоянная выставка «Птицы» в «Этажах»", 
        "description": "Туканы, попугаи и какаду, украшающие террасу петербургского лофт-проекта.", 
        "dates": ["Круглый год"], 
        "days": ["ежедневно 9:00–23:00"], 
        "place_url": "https://kudago.com/spb/place/loftprojectetagi/", 
        "place_title": "Лофт Проект Этажи", 
        "place_address_coordinates": [59.922025, 30.355520], 
        "place_address": "Лиговский просп., д. 74"
    },
    {
        "event_url": "https://kudago.com/spb/event/ekspoziciya-muzeya-kafedry-patologicheskoi-anatomi/", 
        "title": "Постоянная экспозиция Музея кафедры патологической анатомии", 
        "description": "Один из крупнейших музеев в Европе такого профиля — музей при Санкт-Петербургской Государственной Академии ветеринарной медицины — рассказывает о патологических изменениях организма животных.", 
        "dates": ["Круглый год"], 
        "days": ["пн–пт 9:00–17:00"], 
        "place_url": null, 
        "place_title": "Музей кафедры патологической анатомии", 
        "place_address_coordinates": [59.894112, 30.323800], 
        "place_address": "ул. Черниговская, д.5"
    },
    {
        "event_url": "https://kudago.com/spb/event/ekspoziciya-muzeya-nii-eksperimentalnoy-mediciny/", 
        "title": "Постоянная экспозиция Музея истории НИИ экспериментальной медицины", 
        "description": "Настоящая кладезь биологических и медицинских знаний, накопленных научно-исследовательским ИЭМ.", 
        "dates": ["Круглый год"], 
        "days": ["пн–пт 9:30–18:00"], 
        "place_url": null, 
        "place_title": "Музей истории НИИ экспериментальной медицины", 
        "place_address_coordinates": [59.975063, 30.311790], 
        "place_address": "ул. Академика Павлова, д.12"
    }
];

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.90, 30.32],
        zoom: 7
    });
    initBalloon();
}

function getBalloonHtmlTemplate(params) {
    const htmlTemplate = 
        `
            <div class="card">
                <div class="card-title">
                    ${params.title}
                </div>
                <div class="card-date">
                    Когда: ${params.dates}
                </div>
                <div class="card-time">
                Расписание: ${params.days}
                </div>
                <div class="card-description">
                    ${params.description}
                </div>
                <div class="card-place">
                    Место проведения: ${params.place_title}
                </div>
                <div class="card-address">
                    Aдрес: ${params.place_address}    
                </div>
            </div>
        `

    return htmlTemplate;
}

function initBalloon() {

    getLocation();

    const geoData = mockBackendRequest.map(data => {
       return new ymaps.Placemark(data.place_address_coordinates, {
            balloonContentBody: getBalloonHtmlTemplate(data)
       });
    })

    geoData.forEach(geo => {
        geo.events.add('click', function (e) {
            geo.balloon.open();
        });
        myMap.geoObjects.add(geo);
    })
}

async function getLocation() {
    try {
        const location = await ymaps.geolocation.get();
        myMap.geoObjects.add(location.geoObjects)
    }
    catch (err) {
       console.log(err);
    }
}

ymaps.ready(init);


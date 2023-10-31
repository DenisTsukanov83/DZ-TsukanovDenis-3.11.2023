
class News {
    constructor() {
        this.arrNews = [
            {
                type: 'теннис',
                subject: 'Соболенко обвинила WTA в неуважении на итоговом турнире',
                photo: 'images/photo1.jpg'
            },
            {
                type: 'баскетбол',
                subject: 'Мэджик Джонсон стал четвертым спортсменом, заработавшим миллиард долларов',
                photo: 'images/photo2.jpg'
            },
            {
                type: 'единоборства',
                subject: 'На чемпионате Европы по дзюдо выступят 16 российских спортсменов',
                photo: 'images/photo3.jpg'
            },
            {
                type: 'хоккей',
                subject: 'Хоккейный тренер назвал россиянина "медведем" и подарил ему краги: видео',
                photo: 'images/photo4.jpg'
            },
            {
                type: 'футбол',
                subject: 'СМИ узнали о намерении Жиру продлить контракт с "Миланом"',
                photo: 'images/photo5.jpg'
            },
            {
                type: 'теннис',
                subject: 'Российский теннисист Шевченко поднялся на 20 позиций в рейтинге ATP',
                photo: 'images/photo6.jpg'
            },
            {
                type: 'теннис',
                subject: 'Соболенко обыграла Саккари на старте итогового турнира WTA',
                photo: 'images/photo7.jpg'
            },
            {
                type: 'баскетбол',
                subject: 'Дабл-дабл Адетокунбо не спас "Милуоки" от поражения в матче с "Атлантой"',
                photo: 'images/photo8.jpg'
            },
            {
                type: 'киберспорт',
                subject: 'Российская команда Team Spirit стала двукратным чемпионом мира по Dota 2',
                photo: 'images/photo9.jpg'
            },
            {
                type: 'хоккей',
                subject: 'Гол Кузнецова и два паса Овечкина помогли "Вашингтону" обыграть "Сан-Хосе"',
                photo: 'images/photo10.png'
            },
        ];
        this.container = document.querySelector('.container');
    }

    addNews(i) {
        const message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML = `
        <div class="text">
            <div class="subtitle">${this.arrNews[i].type}</div>
            <div class="title">${this.arrNews[i].subject}</div>
        </div>
        <div class="photo">
            <img src="${this.arrNews[i].photo}" alt="images/photo1.jpg">
        </div>
        `;
        this.container.appendChild(message);
    }

    search() {
        let access = false;
        news.arrNews.forEach((el) => {
            if (el.type.indexOf(search.value.toLowerCase()) == 0 && search.value != '') {
                access = true;
            } else if (el.type.indexOf(search.value.toLowerCase()) < 0 && search.value != '') {
                this.container.innerHTML = 'Результаты не найдены';
            }
            else {
                this.container.innerHTML = '';
                this.arrNews.forEach((el, i) => {
                    news.addNews(i);
                });
            }
        });

        if (access) {
            this.container.innerHTML = '';
            news.arrNews.forEach((el, i) => {
                if (el.type.indexOf(search.value.toLowerCase()) == 0 && search.value != '') {
                    news.addNews(i);
                }
            });
        }
    }
}



const news = new News;
const search = document.querySelector('.search input');

news.arrNews.forEach((el, i) => {
    news.addNews(i);
});

search.addEventListener('input', () => {
    news.search();
});





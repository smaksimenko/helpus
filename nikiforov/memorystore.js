// The in-memory Store. Encapsulates logic to access wine data.
window.store = {

    persona: {},
    treatment: {},
    financeState: {},
    financeBank: {},
    webmoney: {},
    contact: {},
    social: {},
    foundations: {},
    advert: {},
    document:{},
    imageDocument:{},

    populate: function () {

        this.persona[5] = {
            id: 5,
            name: "Даниил",
            surname: "Никифоров",
            dateOfBirth: new Date(2013, 01, 27).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "Эмбриональная рабдомиосаркома предстательной железы с прорастанием в мочевой пузырь, III ст., группа высокого риска",
            treatmentId: 1,
            collectionState: COLLECTION_STATE.finished,
            message: "<p>Я, мама Данички, обращаюсь к вам потому, что знаю, сколько добрых дел за вами уже числится."+
                "<p>Умоляю, помогите и нашему ребенку!</p>"+
                "<p>Даниил родился 27 февраля 2013 г. Ему сейчас годик и 3 месяца. Рос нормальным, активным, любознательным и позитивным мальчиком. Черный день для нас наступил 23 февраля. Жизнь нашей семьи начала отсчитывать дни полные боли и страдания. Малыш уже прошел три курса химиотерапии в Одесской детской областной клинической больнице, отделение онкогематологии. Ему очень тяжело - высокая температура, тошнота и рвота, моча выходит через катетеры в емкости, которые он носит за собой, выпали волосики… Но Даничка держится молодцом, борется. В редкие минуты хорошего самочувствия улыбается, учится ходить на ослабевших подкашивающихся ножках, интересуется всем, что его окружает.</p>"+
                "<p>После химиотерапии Даниилу нужна сложная и дорогостоящая операция, которую могут сделать в Германии, где используют методы лечения, позволяющие сохранить пораженные органы, и мальчик сможет жить дальше полноценной жизнью. На операцию нужны средства, которых у нашей семьи нет.</p>"+
                "<p>Очень надеюсь, что Вы поможете остаться в живых и моему ребенку.</p>"+
                "<p><em>Я буду благодарна Вам всю жизнь.</br>"+
                "С уважением, Татьяна Никифорова</em></p>",
            helpNow: "<a href='http://www.pchelka.ua/news/pomogat-stalo-esche-legche'>Онлайн платеж через фонд Пчелка</a>",
            messageComment: "Текст обращения взят с Одесского форума (27.05.2014). Стилистика и орфография автора сохранена."
        };
        this.treatment[1] = {
            id: 1,
            personaId: 5,
            treatmentType: window.treatmentType.surgery,
            treatmentCountry: "Германия",
            treatmentCity: "Берлин",
            treatmentPlace: "Шарите",
            treatmentPrice: 150000,
            treatmentCurrency: 1,
            treatmentStart: new Date(2014, 09, 14).getTime()
        };
        this.financeState[1] = {
            id: 1,
            personaId: 5,
            currency: 1,
            total: 150000,
            collected: 92223.15,
            toDate: new Date(2014, 7, 29).getTime()
        };
        this.financeState[2] = {
            id: 2,
            personaId: 5,
            currency: 1,
            total: 150000,
            collected: 95754.92,
            toDate: new Date(2014, 8, 17).getTime()
        };
        this.financeState[3] = {
            id: 3,
            personaId: 5,
            currency: 1,
            total: 150000,
            collected: 99303.21,
            toDate: new Date(2014, 8, 28).getTime()
        };
        this.financeState[4] = {
            id: 4,
            personaId: 5,
            currency: 1,
            total: 150000,
            collected: 107315.8,
            toDate: new Date(2014, 9, 9).getTime()
        };
        this.financeState[5] = {
            id: 5,
            personaId: 5,
            currency: 1,
            total: 150000,
            collected: 116559.5,
            toDate: new Date(2014, 9, 19).getTime()
        };
        this.financeBank[1] = {
            id: 1,
            forCountry: "Украина",
            name: "ПриватБанк",
            organisation: "ЮГРУ ПриватБанк",
            MFO: 305299,
            OKPO: 14360570,
            accountNumber: 29244825509100,
            target: "5168 7572 3327 1289 на имя Никифоровой Т.П.",
            cardNumber: 5168757233271289 ,
            currency: window.CURRENCY.UAH,
            comment: "Возможен перевод прямо на карту в приемных терминалах ПриватБанка"
        };

        this.financeBank[2] = {
            id: 2,
            forCountry: "Украина",
            name: "Пивденный",
            organisation: " Акционерный Банк 'Південний'",
            MFO: 328209,
            OKPO: 2841808473,
            accountNumber: 26252001166095,
            target: "Никифоров Вячеслав Васильевич",
            currency: window.CURRENCY.UAH
        };
        this.webmoney[1] = {
            id: 1,
            name: "Webmoney",
            number: "Z310398545956",
            currency: window.CURRENCY.USD
        };
        this.webmoney[2] = {
            id: 2,
            name: "Webmoney",
            number: "E267109832380",
            currency: window.CURRENCY.EUR
        };
        this.webmoney[3] = {
            id: 3,
            name: "Webmoney",
            number: "R880260620035",
            currency: window.CURRENCY.RUR
        };
        this.webmoney[4] = {
            id: 4,
            name: "Webmoney",
            number: "U390327340647",
            currency: window.CURRENCY.UAH
        };
        this.webmoney[5] = {
            id: 5,
            name: "Webmoney",
            number: "B208484227667",
            currency: window.CURRENCY.BYR
        };
        this.webmoney[6] = {
            id: 6,
            name: "Yandex Деньги",
            number: "410012327320495"
        };
        this.contact[1] = {
            id: 1,
            personaId: 5,
            name: "Никифоров Вячеслав Васильевич",
            country: "Украина",
            city: "Одесса",
            phone: "+3 8067 265 68 32",
            relation: "отец"
        };
        this.contact[2] = {
            id: 2,
            personaId: 5,
            name: "Никифорова Татьяна Петровна",
            country: "Украина",
            city: "Одесса",
            phone: "+3 8067 365 47 10",
            relation: "мама"
        };
        this.social[1] = {
            id: 1,
            personaId: 5,
            name: "вКонтакте",
            link: "http://vk.com/danya_nikiforov_help"
        };
        this.social[2] = {
            id: 2,
            personaId: 5,
            name: "Одесский форум",
            link: "http://forumodua.com/showthread.php?t=2321367"
        };
        this.social[3] = {
            id: 3,
            personaId: 5,
            name: "Одноклассники",
            link: " http://www.odnoklassniki.ru/daniil.nikiforov.sos"
        };
        this.social[4] = {
            id: 4,
            personaId: 5,
            name: "facebook",
            link: "https://www.facebook.com/groups/759331190785376/"
        };

        this.foundations[1] = {
            id: 1,
            personaId: 5,
            name: "Благотворительный фонд 'Пчелка'",
            link: "http://www.pchelka.ua/kid/nikiforov-daniil",
            alias: "Перейти на сайт"
        };
        this.foundations[2] = {
            id: 2,
            personaId: 5,
            name: "Благотворительная организация 'Спасибо'",
            link: "http://spasibo.od.ua/%D0%B4%D0%B0%D0%BD%D0%B8%D0%B8%D0%BB-%D0%BD%D0%B8%D0%BA%D0%B8%D1%84%D0%BE%D1%80%D0%BE%D0%B2-15-%D0%BB%D0%B5%D1%82-%D1%81%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D1%81%D0%B1%D0%BE%D1%80-%D0%BD%D0%B0/",
            alias: "Перейти на сайт"
        };
        this.foundations[3] = {
            id: 3,
            personaId: 5,
            name: "Благотворительная организация 'Благовещение'",
            link: "http://blagovest.od.ua/actual/296-nikiforov-daniil.html",
            alias: "Перейти на сайт"
        };
        this.foundations[4] = {
            id: 4,
            personaId: 5,
            name: "Благотворительный фонд 'парус Надежды'",
            link: "http://pn.od.ua/index.php?mact=deti,cntnt01,default,0&cntnt01what=detki&cntnt01alias=nikiforov&cntnt01returnid=15",
            alias: "Перейти на сайт"
        };
        this.foundations[5] = {
            id: 5,
            personaId: 5,
            name: "Украинская биржа благотворительности",
            link: "https://ubb.org.ua/ru/project/1098/",
            alias: "Перейти на сайт"
        };

        this.advert[1] = {
            id: 1,
            actionDate: new Date(2014, 5, 28).getTime(),
            addDate: new Date(2014, 5, 28).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Благотворительная акция известного украинского дизайнера Ларисы Лобановой. С момента основания этой акции Дом моды Larisa Lobanova сотрудничает с Благотворительным фондом 'Пчёлка', который предоставляет информацию о том, какому ребёнку нужна помощь, в кратчайшие сроки. Суть показа заключается в том, что все вещи капсульной коллекции продаются во время Нolliday Fashion week, а средства, собранные от продажи вещей, идут на лечение конкретного ребенка.в этом году Лариса Лобанова и ее команда собирали деньги для помощи нашего Данички. " +
                "Нам передали на лечение Данички 3 900 дол. и 2200 грн.  Спасибо вам огромное! Спасибо всем участникам акции!!!Спасибо Ларисе Лобановой!!!",
            photo: "1.jpg",
            advertType: ADVERT_TYPES.news
        };

        this.advert[2] = {
            id: 2,
            actionDate: new Date(2014, 6, 11).getTime(),
            addDate: new Date(2014,6, 11).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Дорогие друзья! Вчера на счет фонда 'Пчелка' на имя Данички поступило 150 000 грн. СПАСИБО ОГРОМНОЕ!!!!!!!!!!!!!!!!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };


        this.advert[3] = {
            id: 3,
            actionDate: new Date(2014, 6, 27).getTime(),
            addDate: new Date(2014,6, 27).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Сегодня, на благотворительной акции 'Время добрых дел' в ТЦ Афина, было собрано 13 242 грн и 10 у.е. для Дани Никифорова. От всей души благодарим всех, кто принимал участие (позже перечислим поименно )" +
                "Спасибо!!!!!И пусть Данечка, который вместе с мамой мужественно провел акцию вместе с нами, побыстрее отправится на лечение, и побыстрее выздоровеет!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[4] = {
            id: 4,
            actionDate: new Date(2014, 6, 27).getTime(),
            addDate: new Date(2014,6, 27).getTime(),
            personaId: 5,
            caption: null,
            link: "http://forumodua.com/showthread.php?t=2321367",
            text: "Добрый день. Стартовала у нас акция: 'Берем домой': 220 за ВЕСЬ вот такой вкуснейший торт НАПОЛЕОН (2,800кг) Внимание!!!   Выручка за два тортика в неделю перечисляется на лечение больных деток, В данный момент помогаем Данечке. " +
                "Спешите творить добро!",
            photo: "4.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[5] = {
            id: 5,
            actionDate: new Date(2014, 8, 9).getTime(),
            addDate: new Date(2014,8, 9).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "БФ 'Парус Надежды' перевел на счет мамы 25.000грн.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[6] = {
            id: 6,
            actionDate: new Date(2014, 8, 10).getTime(),
            addDate: new Date(2014,8, 10).getTime(),
            personaId: 5,
            caption: null,
            link: "https://vk.com/club1658735",
            text: "Благодарим сеть зоомагазинов 'Мир природы' за размещение в четырех магазинах благотворительных ящиков для сбора средств в помощь Дане Никифорову! Спасибо лично директору Сергею за помощь детям!",
            photo: "6.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[7] = {
            id: 7,
            actionDate: new Date(2014, 8, 25).getTime(),
            addDate: new Date(2014,8, 25).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "<b>Мама Дани:</b> Мы в отделении уже 2 суток капаемся. Даничка чувствует себя нормально, очень активный, но схватки не прекращаются и сегодня анализ мочи почему то очень плохой, завтра перездадим, посмотрим.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[8] = {
            id: 8,
            actionDate: new Date(2014, 9, 12).getTime(),
            addDate: new Date(2014,8, 29).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Благотворительная акция (в мини-формате), 12 октября на детском празднике от Nadia's Studio для Данечки. Детский праздник 'Стильный Сезон', г. Одесса, Люстдорфская дорога 172/1, банкетный зал 'Ренессанс'. Вход свободный.",
            photo: "8.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[9] = {
            id: 9,
            actionDate: new Date(2014, 9, 28).getTime(),
            addDate: new Date(2014,8, 29).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "<strong>Мама Дани:</strong> Мы еще в отделении, заканчиваем капаться сегодня в 4 утра. Даничка чувствует себя хорошо, бегает по кровати, с трудом успеваем ловить. Боли были все дни, а последний день стали немного реже, не знаю с чем связано, очень надеюсь, что они прекратятся. Когда схватка, он весь сжимается и становится красный, но не плачет, терпит.            ХОЧУ СКАЗАТЬ ВСЕМ ОГРОМНОЕ СПАСИБО! МЫ БЕЗМЕРНО БЛАГОДАРНЫ ЗА ЛЮБУЮ ОКАЗАННУЮ ПОМОЩЬ, ЗА ПОДДЕРЖКУ И ЗА ТЕПЛЫЕ СЛОВА! С ВАШЕЙ ПОМОЩЬЮ МЫ ОБЯЗАТЕЛЬНО СПРАВИМСЯ С ЭТОЙ БЕДОЙ!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[10] = {
            id: 10,
            actionDate: new Date(2014, 9, 10).getTime(),
            addDate: new Date(2014,9, 1).getTime(),
            personaId: 5,
            caption: null,
            link: "http://www.pchelka.ua/kid/nikiforov-daniil",
            text: "10 октября 2014 года стартует новая ежемесячная благотворительная акция от БФ 'Пчёлка' - 10/25. Смысл акции прост – десятого числа ежемесячно, каждый из нас пожертвует на лечение больных детей всего 25 гривен. Математика проста - 10 000 человек по 25 гривен это уже 250 000!! Представьте, в один день мы сможем спасти жизнь тяжелобольному ребенку!!! Участвуйте в акции, приглашайте друзей, делайте репосты! Вместе, мы сможем многое! В октябре все собранные средства пойдут на счет Даниила Никифорова",
            photo: "10.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[11] = {
            id: 11,
            actionDate: new Date(2014, 9, 02).getTime(),
            addDate: new Date(2014,9, 02).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "В пятницу 26 сентября с 14.30 до 16.30 с карты ПриватБанка <b>было украдено 15 267,8 грн.</b> Слов нет. Выражений тоже. От себя добавлю случай не первый. Уважаемы волонтеры и родители когда вам хотят перевести большую сумму денег и для этого требуют каких то манипуляций с вашими счетами или банкоматом - просите перевести деньги на благотворительный фонд.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[12] = {
            id: 12,
            actionDate: new Date(2014, 9, 06).getTime(),
            addDate: new Date(2014,9, 10).getTime(),
            personaId: 5,
            caption: null,
            link: "http://forumodua.com/showthread.php?t=2321367",
            text: "Дорогие Друзья, Начинаем подготовку к Благотворительной Ярмарке, по сбору средств для Даниила Никифорова которая пройдет в Парке Победы 11 Октября мылышу Срочно требуется операция, времени уже нет, не оставайтесь равнодушными к чужой беде. Вместе мы сила! <br> Очень нуждаемся в разнообразной выпечке, Хенд Мейде, консервации и любой посильной помощи приглашаем к сотрудничеству Аниматоров, специалистов по Аквагриму и Плетению косичек не стесняемся, пишем в теме ОФ",
            photo: false,
            advertType: ADVERT_TYPES.action
        };
        this.advert[13] = {
            id: 13,
            actionDate: new Date(2014, 9, 11).getTime(),
            addDate: new Date(2014,9, 06).getTime(),
            personaId: 5,
            caption: null,
            link: "http://vk.com/album-48939397_169143585",
            text: "Кто хочет в пожарную часть на экскурсию? Приглашаем всех, на благотворительную экскурсию по пожарной части (Прохоровская, 6)" +
                " Экскурсия состоится 11 октября в 10.00. Вы сможете увидеть изнутри быт пожарных, посмотреть, как выглядит боевая тревога, полазить по боевым машинам, узнать в чем состоит суть работы пожарных!" +
                "Один родитель + ЕГО дети 50 грн. Каждый дополнительный взрослый +25 грн. " +
                "Все средства полученные на экскурсии поступят в помощь Дане Никифорову<br /> Записаться можно по телефону 096-107-75-70 Люда ",
            photo: "13.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[14] = {
            id: 14,
            actionDate: new Date(2014, 9, 11).getTime(),
            addDate: new Date(2014,9, 09).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Получите прекрасные фото и помогите спасти жизнь Дани! Место встречи- цент парка Горького, справа у фонтана. Фотозона будет работать с 10-00. Спешите успеть! Цена фотосета- благотворительный взнос в опечатаный бокс от 40 гр.",
            photo: "14.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[15] = {
            id: 15,
            actionDate: new Date(2014, 9, 11).getTime(),
            addDate: new Date(2014,9, 09).getTime(),
            personaId: 5,
            caption: null,
            link: "http://forumodua.com/showthread.php?t=2295049&p=51288743&viewfull=1#post51288743",
            text: "11 октября в парке Горького на Черемушках пройдет благотворительная ярмарка по сбору средств для Дани Никифорова.",
            photo: "15.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[16] = {
            id: 16,
            actionDate: new Date(2014, 9, 13).getTime(),
            addDate: new Date(2014,9, 13).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "11 октября в парке Горького на Черемушках прошла благотворительная ярмарка по сбору средств для Дани Никифорова. Собрано <strong>14 130 гривен!</strong>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[17] = {
            id: 17,
            actionDate: new Date(2014, 9, 13).getTime(),
            addDate: new Date(2014,9, 13).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "11 октября прошла экускурсия по пожарной части, в ходе которой собиралсиь средства для Дани Никифорова. Собрано <strong>1500 гривен!</strong>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[18] = {
            id: 18,
            actionDate: new Date(2014, 9, 13).getTime(),
            addDate: new Date(2014,9, 13).getTime(),
            personaId: 5,
            caption: null,
            link: "http://nadiastudio.com/",
            text: "12 октября был проведен детский праздник 'Стильный сезон', в ходе которого собиралсиь средства для Дани Никифорова. Собрано <strong>4 000 грн гривен!</strong>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[19] = {
            id: 19,
            actionDate: new Date(2014, 9, 13).getTime(),
            addDate: new Date(2014,9, 13).getTime(),
            personaId: 5,
            caption: null,
            link: "http://pchelka.ua/finance/otchet-o-postupleniyah,-oktyabr-2014-g",
            text: "По предварительным оценкам акция Благотворительного фонда 'Пчелка' <strong>10/25</strong> принесла в копилку Дане <strong> 8396,50  грн</strong>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[20] = {
            id: 20,
            actionDate: new Date(2014, 9, 16).getTime(),
            addDate: new Date(2014,9, 20).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "<p>Сегодня подвели итоги благотворительной акции <strong>'КЛАССная благотворительность'</strong>, которую проводил фонд <a href='http://www.pchelka.ua/'>'Пчелка'</a> в лицее №53 (Одесса). Акция организована в помощь Никифорову Даниилу. В этой школе учится старший брат Даника.</p>" +
                "<p>По условиям акции, для класса, который собрал наибольшее количество благотворительных средств, будет организован на выбор: поход в МакДональсд; зоопарк; театр; торжественный запуск гелиевых шаров и т.д.</p>" +
                "<table class='table'>" +
                "<tr><td>7-В</td><td> 3105 грн </td></tr>" +
                "<tr><td>4-А  </td><td>   577 грн </td></tr>" +
                "<tr><td>8-АФ </td><td>   530 грн </td></tr>" +
                "<tr><td>7-Б  </td><td>   500 грн </td></tr>" +
                "<tr><td>2-Б  </td><td>   470 грн </td></tr>" +
                "<tr><td>5-А  </td><td>   405 грн</td></tr>" +
                "<tr><td>5-Б  </td><td>   375 грн</td></tr>" +
                "<tr><td>5-В  </td><td>   350 грн</td></tr>" +
                "<tr><td>9-IМ1</td><td>   251 грн</td></tr>" +
                "<tr><td>1-Б  </td><td>   300 грн</td></tr>" +
                "<tr><td>6-В  </td><td>   300 грн</td></tr>" +
                "<tr><td>10-IМ1</td><td>  251 грн</td></tr>" +
                "<tr><td>9-IT2</td><td>   248 грн</td></tr>" +
                "<tr><td>9-AФ</td><td>    244 грн</td></tr>" +
                "<tr><td>8-Е</td><td>     242 грн</td></tr>" +
                "<tr><td>8-IT</td><td>    233 грн</td></tr>" +
                "<tr><td>4-Б</td><td>     200 грн</td></tr>" +
                "<tr><td>10-ФМ</td><td>   160 грн</td></tr>" +
                "<tr><td>1-А</td><td>     160 грн</td></tr>" +
                "<tr><td>6-А</td><td>     156 грн</td></tr>" +
                "<tr><td>7-А</td><td>     148 грн</td></tr>" +
                "<tr><td>2-А   </td><td>  145 грн</td></tr>" +
                "<tr><td>10-IМ2</td><td>  142 грн</td></tr>" +
                "<tr><td>6-Б</td><td>     138 грн</td></tr>" +
                "<tr><td>6-Г</td><td>     106 грн</td></tr>" +
                "<tr><td>3-А</td><td>     50  грн</td></tr>" +
                "<summary><tr><td colspan='2'><strong>Итоги акции: 9835 грн.</strong></tr>" +
                "</table><p>" +
                "Огромное спасибо Изольде Александровне, которая входит в состав родительского комитета 7 В класса и помогла организовать акцию. Огромное спасибо директору лицея №53 - Телищак Ирине Александровне. Спасибо учителям, детям и родителям за неравнодушие и помощь маленькому мальчику.</p>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[21] = {
            id: 21,
            actionDate: new Date(2014, 9, 17).getTime(),
            addDate: new Date(2014,9, 17).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Даню выписали из больницы, он чувствует себя нормальною. Катетер мочевой поставили новый в тот же день, когда выпал старый, было больно Даничке, но он молодец. Температура больше не поднималась, антибиотики прокапали три дня",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[22] = {
            id: 22,
            actionDate: new Date(2014, 10, 2).getTime(),
            addDate: new Date(2014,9, 20).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "ВДД приглашает отпраздновать своё 2-х летие с пользой для жизни!! Принимаем подарки в виде вкусностей, ХМ изделий и другой помощи",
            photo: "22.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[23] = {
            id: 23,
            actionDate: new Date(2014, 10, 29).getTime(),
            addDate: new Date(2014,9, 29).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Вчера пришло приглашение на обследование в клинику Дюссельдорф в Германии! 3 ноября Даня с родителями должны быть в клинике. На протяжении сбора они не переставали искать альтернативную клинику и примерно месяц назад предложили Дюссельдорф. Они отправили туда все заключения сделанные в Украине, но они ответили, что для их заключения надо провести обследование у них. В этой клинике проходил лечение Шкурко Даниил, он заканчивает лечение, осталась сумма денег, которую можно потратить на другого ребенка, за счет этого Дане предложили пройти обследование. Стоимость 10 000 евро, визовые расходы и перелет на нашей стороне. Так как для того, что бы начать лечение в Шарите нам на сегодняшний день денег не хватает, а времени ждать нет, родители Дани согласились пройти это обследование, возможно это шанс спасти ребенка, скорее всего опухоль начинает прогрессировать и надо использовать любую возможность Если клиника сможет провести органосохраняющую операцию, то лечение будет продолженно у них, возможно они пойдут на встречу и начнут лечение с той суммой, которую уже собрали.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[24] = {
            id: 24,
            actionDate: new Date(2014, 11, 5).getTime(),
            addDate: new Date(2014,11, 5).getTime(),
            personaId: 5,
            caption: null,
            link: null,
            text: "Сбор закрыт, Даня уже в Германии!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.document[1] ={
            id: 1,
            personaId: 1,
            name: "Выписка из медицинской карты",
            text: "Никифоров Даниил Вячеславович: Эмбриональная рабдомиосаркома предстательной железы с прорастанием в мочевой пузырь, III ст., группа высокого риска",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[1] = {
            id: 1,
            personaId: 1,
            name: "Диагноз",
            text: "",
            documentId:1,
            url: "../images/5/docs/1.jpg"
        };
        this.imageDocument[2] = {
            id: 2,
            personaId: 5,
            name: "Диагноз стр. 2",
            text: "",
            documentId:1,
            url: "../images/5/docs/2.jpg"
        };

        this.document[2] ={
            id: 2,
            personaId: 5,
            name: "Счет клиники Шарите",
            text: "Сумма предоплаты: 150 000 евро",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[3] = {
            id: 3,
            personaId: 5,
            name: "Счет, стр. 1",
            text: "",
            documentId:2,
            url: "../images/5/docs/3.jpg"
        };
        this.imageDocument[4] = {
            id: 4,
            personaId: 5,
            name: "Счет, стр. 2",
            text: "",
            documentId:2,
            url: "../images/5/docs/4.jpg"
        };
        this.document[3] ={
            id: 3,
            personaId: 5,
            name: "Свидетельство о рождении",
            text: "",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[5] = {
            id: 5,
            personaId: 5,
            name: "Свидетельство о рождении",
            text: "",
            documentId:3,
            url: "../images/5/docs/5.jpg"
        };




        this.lastId = 24;
    },

    find: function (model, table) {
        return this[table][model.id];
    },

    findAll: function (table) {
        return _.values(this[table]);
    },

    create: function (model) {
        this.lastId++;
        model.set('id', this.lastId);
        this.wines[this.lastId] = model;
        return model;
    },

    update: function (model) {
        this.wines[model.id] = model;
        return model;
    },

    destroy: function (model) {
        delete this.wines[model.id];
        return model;
    }

};

store.populate();

// Overriding Backbone's sync method. Replace the default RESTful services-based implementation
// with a simple in-memory approach.
Backbone.sync = function (method, model, options) {

    var resp;
    switch (method) {
        case "read":
            if (model instanceof personaModel) {
                resp = model.id ? store.find(model, "persona") : store.findAll("persona");
            } else if (model instanceof treatmentCollection) {
                resp = model.id ? store.find(model, "treatment") : store.findAll("treatment");
            } else if (model instanceof financeStateCollection) {
                resp = model.id ? store.find(model, "financeState") : store.findAll("financeState");
            } else if (model instanceof financeBanktCollection) {
                resp = model.id ? store.find(model, "financeBank") : store.findAll("financeBank");
            } else if (model instanceof webMoneyCollection) {
                resp = model.id ? store.find(model, "webmoney") : store.findAll("webmoney");
            } else if (model instanceof contactCollection) {
                resp = model.id ? store.find(model, "contact") : store.findAll("contact");
            } else if (model instanceof socialCollection) {
                resp = model.id ? store.find(model, "social") : store.findAll("social");
            } else if (model instanceof charityFoundationsCollection) {
                resp = model.id ? store.find(model, "foundations") : store.findAll("foundations");
            } else if (model instanceof advertCollection) {
                resp = model.id ? store.find(model, "advert") : store.findAll("advert");
            } else if (model instanceof documentCollection) {
                resp = model.id ? store.find(model, "document") : store.findAll("document");
            }else if (model instanceof imageDocumentCollection) {
                resp = model.id ? store.find(model, "imageDocument") : store.findAll("imageDocument");
            }else {
                console.log(model)
            }
            // resp = model.id ? store.find(model) : store.findAll();
            break;
        case "create":
            resp = store.create(model);
            break;
        case "update":
            resp = store.update(model);
            break;
        case "delete":
            resp = store.destroy(model);
            break;
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error("Record not found");
    }
};
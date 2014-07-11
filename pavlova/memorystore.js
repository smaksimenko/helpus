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
        this.persona[3] = {
            id: 4,
            name: "Даша",
            surname: "Павлова",
            dateOfBirth: new Date(2012, 07, 18).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "Краниофарингиома (опухоль головного мозга), порок сердца",
            treatmentId: 1,
            collectionState: COLLECTION_STATE.opened,
            message: "<p>Здравствуйте! Меня зовут Марина Павлова. </p>"+
                "<p>Я долго думала, как же начать нашу историю...Наверно начну как и все мамы, с самого первого дня.</p>"+
                "<p>Итак: Теплым августовским вечером 2001 года появилась на свет девочка, с сильным именем- Дарья.</p>"+
                "<p>За свои 12 лет, она перенесла много операций, много болезней свалилось на ее хрупкие плечи. Кому- то и за всю жизнь не выпадает столько испытаний, сколько выпало Даше. Не каждый взрослый может выдержать все то, что вынесла Даша."+
                "И это еще не конец нашим мытарствам. </p>"+
                "<p>В 1 месяц мы прошли плановое обследование и у дочки обнаружили много маленьких кист в головном мозге. Начали лечение и постепенно у нас все прошло. Примерно в 6 месяцев, мы заметили, что у Даши одна сторона черепа как то странно деформируется. Пошли к хирургу, и он сказал, что это из- за того, что мы ложили ребенка слишком часто на один бочек. В 1 год шишка на голове была уже значительной, все те же походы к хирургу нам не давали разъяснений, пока я не поехала в центр Резника и, там даже без рентгена нам сказали, что это остеофиброз.</p>"+
                "<p>В 2003 г. Даше удалили шишку вместе с куском черепа. Дырку закрыли полимером.</p>"+
                "<p>Как только Даша открыла глазки после операции, на правом глазу офтальмолог увидел дермоидную кисту(наркоз дал толчок к росту). Уже на плановом обследовании у нас обнаружили левостороннюю кривошею, сколиоз ,плоскостопие."+
                "В четыре года Даше уменьшили миндалины и аденоиды.</p>"+
                "<p>После удаления шишки, остеофиброз начал снова расти и теперь он заполз даже на полимер (не живую ткань) ,а так же стал опускаться ниже-на лицо. И в 2006 г. мы едем в Киев инст. им. Ромаданова. Там нам 'чистят' череп ."+
                "Через год в Одессе ,в нейрохирургии, Даше удалили дермоид коньюктивы правого глаза и остеому внутреннего угла глаза."+
                "Все это время мы занимались лечением сколиоза, и внутричерепным давлением (носили мягкие корсеты, делали массажи, проходили курсы лечения)."+
                "В 2008 году мы едем в Харьков в инст. им. Ситенко ,консультации у Королькова А.И. и Мезенцева А.А. Нам ставят S-образ.сколиоз, тела позвонков Th1-Th7 деформированы, левосторонняя кривошея. Назначают ношение корсета Шено 22 часа в сутки."+
                "С тех пор в Харьков мы ездили каждые полгода. Там же и делали корсеты 'Шено' - в 'Ортоспайн'. "+
                "В 2010 г. были в ОХМАТДЕТE. Из их выписки: Факоматоз. Множественные стигмы дизэмбриогенеза. Врожденный S-обр.сколиоз 4 ст. Нарушение сигментации позвонков. Болезнь Клиппеля-Фейля. Дермоид коньюктивы (снова),деформация костей орбиты. Добавочная доля селезенки....Рекомендации :ношение корсета.</p>"+
                "<p>Были еще операции: на правом ухе, оно заросло из- за остеофиброзной дисплазии. Но так как средств на лечение у нас было не много, нам его полностью не открыли, а просто убрали те наросты которые они видели и отправили на гистологию. Сейчас ухо у Даши почти не слышит (в дальнейшем планируем операцию по его открытию).</p>"+
                "<p>По уменьшению миндалины и аденоидов(2 операции).</p>"+
                "<p>Удаление наростов (фибромы) на ногах.</p>"+
                "<p>Удаление кистомы правого яичника.</p>"+
                "<p>Еще много операций ждет нас впереди, но на данный момент,самая главная, сложная, и дорогостоящая операция для нас, это операция по исправлению Сколиоза.</p>"+
                "<p>Дашеньке Павловой 12 лет .Сколиоз 4 степени, факоматоз, левостороняя кровошея и остеофиброзная дисплазия(состояние после аллопластики).</p>"+
                "<p>За свою жизнь она перенесла уже 9 операций. Сейчас перед Дашей стоит новая цель-операция на позвоночнике!"+
                "В декабре 2013 года .благодаря добрым людям, мы были на консультации у проф. Хармса в клинке 'Этианум', и он согласился оперировать Дашу!"+
                "Операция будет проходить в немецкой клинике 'Esslingen'</p>"+
                "<p>Сумма всех расходов составляет: <b>64,798 евро.</b></p>"+
                "<h3>Калькуляция расходов:</h3>"+
                "<ol><li> Счет на операцию: 56 805 (чуть округлила) евро</li>"+
                "<li> Счет на перевод: 3 213 евро</li>"+
                "<li> Билеты : 1000 евро (приблизительно)</li>"+
                "<li> В Прокредит Банк: 42 дня х 90 евро= 3780 евро</li>"+
                "</ol>"+
                "<p>Операцию нужно провести как можно быстрее, иначе, в результате дальнейшего прогрессирования болезни, можно ожидать"+
                "наступление спонтанного паралича, вследствие сжатия позвоночного канала в шейно-грудном переходе!"+
                "Дашу мучают боли в спине и ножках. Так же из- за того, что ребенок уже 6 лет в корсете, присутствуют боли от самого корсета. Без него никак, и с ним тяжело. Натираются ранки и остаются синяки на спине и копчике."+
                "Дашенька уже не может долго ходить- из- за сильной разницы в длине ног. Любая поездка превращается для нас в муку. Дочке приходится останавливаться и приседать на корточки,чтоб утихомирить боль в ногах, и спине."+
                "Из-за кривошеи, Даше тяжело дышать, и она старается тогда сама выровнять сильнее голову в правый бок, и освободить дыхание."+
                "</p>"+
                "<p>Мы очень просим помощи у добрых людей-<b>ПОМОГИТЕ ДАШЕНЬКЕ СТАТЬ ЗДОРОВОЙ!</b></p>"+
                "<p>ПРОСИМ ВАШИХ МОЛИТВ О ЗДРАВИИ ДАШЕНЬКИ!</p>"+
                "<p>Заранее спасибо всем!!!</p>",
                helpNow: "" ,
            messageComment: "Автор сообщения мама Даши - Марина. Стилистика и орфография автора сохранена."
        };
        this.treatment[1] = {
            id: 1,
            personaId: 4,
            treatmentType: window.treatmentType.surgery,
            treatmentCountry: "Германия",
            treatmentCity: "Берлин",
            treatmentPlace: "Esslingen",
            treatmentPrice: 64798,
            treatmentCurrency: 1,
            treatmentStart: new Date(2014, 09, 07).getTime()
        };

        this.financeState[1] = {
            id: 1,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 42589,
            toDate: new Date(2014, 6, 10).getTime()
        };



        this.financeBank[1] = {
            id: 1,
            forCountry: "Украина",
            name: "ПриватБанк",
            organisation: "ЮГРУ ПриватБанк",
            MFO: 305299,
            OKPO: 14360570,
            accountNumber: 29244825509100,
            target: "пополнение карточки № 5168 7572 1331 0727 Марина Павлова",
            cardNumber: 5168757213310727 ,
            currency: window.CURRENCY.UAH,
            comment: "Возможен перевод прямо на карту в терминалах ПриватБанка"
        };

        this.financeBank[2] = {
            id: 2,
            forCountry: "Россия",
            name: "Сбербанк России",
            organisation: "Сбербанк России",
            // MFO: 305299,
            //OKPO: 14360570,
            accountNumber: null,
            target: "№ карты Maestro 63900249 9010424759 Дроздова Юлия Александровна",
            cardNumber: 639002499010424759 ,
            currency: window.CURRENCY.RUR,
            comment: null
        };

        this.webmoney[1] = {
            id: 1,
            name: "Webmoney",
            number: "Z318141590898",
            currency: window.CURRENCY.USD
        };
        this.webmoney[2] = {
            id: 2,
            name: "Webmoney",
            number: "E457251904397",
            currency: window.CURRENCY.EUR
        };
        this.webmoney[3] = {
            id: 3,
            name: "Webmoney",
            number: "R329085492314",
            currency: window.CURRENCY.RUR
        };
        this.webmoney[4] = {
            id: 4,
            name: "Webmoney",
            number: "U271137732976",
            currency: window.CURRENCY.UAH
        };

        this.webmoney[6] = {
            id: 6,
            name: "QIWI - КОШЕЛЕК",
            number: "+7 966 791 34 01"
        };
        this.webmoney[7] = {
            id: 7,
            name: "PayPal",
            number: "helpmychildplease@gmail.com"
        };
        this.webmoney[7] = {
            id: 8,
            name: "Билайн",
            number: "+7 966 791 34 01"
        };

        this.contact[1] = {
            id: 1,
            personaId: 3,
            name: "Ляшкевич Юлия",
            country: "Украина",
            city: "Одесса",
            phone: "+3 093 456 60 62 ",
            relation: "мама"
        };

        this.social[1] = {
            id: 1,
            personaId: 3,
            name: "вКонтакте",
            link: "http://vk.com/club62803195"
        };
        this.social[2] = {
            id: 2,
            personaId: 3,
            name: "Одесский форум",
            link: "http://forumodua.com/showthread.php?t=2267529&page=1"
        };
        this.social[3] = {
            id: 3,
            personaId: 3,
            name: "FaceBook",
            link: "https://www.facebook.com/groups/378477915621953/"
        };
        this.social[4] = {
            id: 4,
            personaId: 3,
            name: "Одноклассники",
            link: "http://www.odnoklassniki.ru/group51771257913494"
        };
//        this.foundations[3] = {
//            id: 3,
//            personaId: 3,
//            name: "Благотворительная организация 'Благовещение'",
//            link: "http://blagovest.od.ua/actual/209-ameliya-slizkaya-billiarnaya-atreziya.html",
//            alias: "Перейти на сайт"
//        };
//        this.foundations[4] = {
//            id: 4,
//            personaId: 3,
//            name: "Благотворительный фонд 'Пчелка'",
//            link: "http://www.pchelka.ua/kids/slizkaya-ameliya",
//            alias: "Перейти на сайт"
//        };

        this.document[1] ={
            id: 1,
            personaId: 3,
            name: "Свидетельство о рождении",
            text: "Ляшкевич Далимир Михайлович, родился 20-го ноября 2012 года в г. Одесса",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[1] = {
            id: 1,
            personaId: 3,
            name: "Свидетельство о рождении",
            text: "",
            documentId: 1,
            url: "../images/3/docs/1.jpg"
        };

        this.document[2] ={
            id: 2,
            personaId: 3,
            name: "Счет - Калькуляция затрат на лечение (Шарите) ",
            text: "",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[2] = {
            id: 2,
            personaId: 3,
            name: "",
            text: "",
            documentId:2,
            url: "../images/3/docs/2.jpg"
        };
        this.imageDocument[3] = {
            id: 3,
            personaId: 3,
            name: "",
            text: "",
            documentId:2,
            url: "../images/3/docs/3.jpg"
        };

        this.document[3] ={
            id: 3,
            personaId: 3,
            name: "Обследование МРТ 06.03.2014 (повторное)",
            text: "Вероятный диагноз: краниофарингиома",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[4] = {
            id: 4,
            personaId: 3,
            name: "",
            text: "",
            documentId: 3,
            url: "../images/3/docs/4.jpg"
        };
        this.document[4] ={
            id: 4,
            personaId: 3,
            name: "Апостиль инвойса Шарите",
            text: "",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[5] = {
            id: 5,
            personaId: 3,
            name: "Стр 1",
            text: "",
            documentId: 4,
            url: "../images/3/docs/5.jpg"
        };
        this.imageDocument[6] = {
            id: 6,
            personaId: 3,
            name: "Стр 2",
            text: "",
            documentId: 4,
            url: "../images/3/docs/6.jpg"
        };
        this.document[5] ={
            id: 5,
            personaId: 3,
            name: "Диагноз",
            text: "Рекомендация на операционное удаление опухоли в головном мозге. Институт Нейрохирургии г. Киев 27.11.2013г.",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[7] = {
            id: 7,
            personaId: 3,
            name: "",
            text: "",
            documentId: 5,
            url: "../images/3/docs/7.jpg"
        };
        this.document[6] ={
            id: 6,
            personaId: 3,
            name: "Диагноз",
            text: "МРТ головного мозга, Институт Нейрохирургии г.Киев 27.11.2013",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[8] = {
            id: 8,
            personaId: 3,
            name: "",
            text: "",
            documentId: 6,
            url: "../images/3/docs/8.jpg"
        };
        this.document[7] ={
            id: 7,
            personaId: 3,
            name: "Гарантия фонда 'Ein Herz fur Kinder'",
            text: "Немецкий фонд 'Ein Herz fur Kinder' гарантирует оплату 12420 евро на лечение Далимира",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[9] = {
            id: 9,
            personaId: 3,
            name: "",
            text: "",
            documentId: 7,
            url: "../images/3/docs/9.jpg"
        };

//        this.imageDocument[4] = {
//            id: 4,
//            personaId: 3,
//            name: "",
//            text: "",
//            documentId:3,
//            url: "../images/2/docs/4.jpg"
//        };
//        this.document[4] ={
//            id: 4,
//            personaId: 3,
//            name: "Счет клиники Сент Люк",
//            text: "Сумма к оплате 103 000 евро НЕ включает в себя медикаменты поддержки, контроли, проживание и питание",
//            documentType: DOCUMENTS_TYPES.financeDocs
//        };
//        this.imageDocument[5] = {
//            id: 5,
//            personaId: 3,
//            name: "",
//            text: "",
//            documentId:4,
//            url: "../images/2/docs/5.jpg"
//        };
//        this.document[5] ={
//            id: 5,
//            personaId: 3,
//            name: "Переводы",
//            text: "Перевод денег из России от волонтера и из Одессы, от отца.",
//            documentType: DOCUMENTS_TYPES.reportDocs
//        };
//        this.imageDocument[6] = {
//            id: 6,
//            personaId: 3,
//            name: "",
//            text: "",
//            documentId:5,
//            url: "../images/2/docs/6.jpg"
//        };
//        this.imageDocument[7] = {
//            id: 7,
//            personaId: 3,
//            name: "",
//            text: "",
//            documentId:5,
//            url: "../images/2/docs/7.jpg"
//        };
//        this.imageDocument[8] = {
//            id: 8,
//            personaId: 3,
//            name: "",
//            text: "",
//            documentId:5,
//            url: "../images/2/docs/8.jpg"
//        };

        this.advert[1] = {
            id: 1,
            actionDate: new Date(2014, 3, 30).getTime(),
            addDate: new Date(2014, 3, 30).getTime(),
            personaId: 1,
            caption: null,
            link: "http://ru.tsn.ua/dopomoga/malenkiy-dalimir-nuzhdaetsya-v-pomoschi-362988.html",
            text: "Информацию о Далимире разместили на ТСН! Огромнейшее спасибо ТСН и каналу 1+1 за размещение, а также огромное спасибо всем, кто нам помог в размещении!!!!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[2] = {
            id: 2,
            actionDate: new Date(2014, 4, 18).getTime(),
            addDate: new Date(2014, 4, 7).getTime(),
            personaId: 1,
            caption: null,
            link: "http://vk.com/event70574175",
            text: "<p>Дорогие Одесситы, приглашаем Вас и Ваших близких на акцию 'Время Добрых Дел' у стен храма Св. Марии Магдалины по адресу: ул. Красные Зори, 4/б.</p><p> На акции, в благодарность за Ваши пожертвования мы угостим Вас домашней выпечкой, сделанной руками хозяюшек Одесского форума, а также вас ждет ярмарка изделий ручной работы</p>",
            photo: "2.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[3] = {
            id: 3,
            actionDate: new Date(2014, 4, 16).getTime(),
            addDate: new Date(2014, 4, 16).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Вчера прошла ярмарка в помощь Далимиру, участникам ВДД удалось собрать 9100 грн, 135$ и 50 евро. Огромное спасибо организаторам и участникам",
            photo: false,
            advertType: ADVERT_TYPES.news
        };

        this.advert[4] = {
            id: 4,
            actionDate: new Date(2014, 4, 31).getTime(),
            addDate: new Date(2014, 4, 31).getTime(),
            personaId: 1,
            caption: null,
            link: "https://www.youtube.com/watch?feature=player_embedded&v=uBOx8vSygC0",
            text: "Далимир стал зведой Одесского ТВ, спасибо неравнодушным друзьям - на канале Град показали сюжет про Далимира",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[5] = {
            id: 5,
            actionDate: new Date(2014, 5, 1).getTime(),
            addDate: new Date(2014, 5, 1).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "На день защиты детей ВДД провели очереную чудесную ярмарку. В результате было собрано 27082 грн, 320 $ и 20 евро! Всем огромное спасибо!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[6] = {
            id: 6,
            actionDate: new Date(2014, 5, 6).getTime(),
            addDate: new Date(2014, 5, 6).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Хотелось бы отдельно поблагодарить родителей и волонтеров Дани Шкурка, которые перевели деньги собранные сверх выставленного счета для Далимирки (14822 грн)." +
                " Поистине, это очень трогательно, видеть, как родители больного ребенка, помогают таким же родителям. " +
                "Спасибо Вам и низкий поклон! Пускай у Данечки, в самом ближайшем будущем все будет хорошо, и чтоб он кк можно быстрее выздоровел!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[7] = {
            id: 7,
            actionDate: new Date(2014, 5, 12).getTime(),
            addDate: new Date(2014, 5, 12).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Немецкий фонд 'Ein Herz fur Kinder' дает нам гарантию, в которой обязуется перечислить клинике <b>12 420</b> евро после операции Далимира.!",
            photo: "7.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[8] = {
            id: 8,
            actionDate: new Date(2014, 6, 4).getTime(),
            addDate: new Date(2014, 6, 4).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Благотворительный фонд Пчелка перечислил 25 000 грн, таким образом, с учетом немецкой гарантии сбор закрыт!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[9] = {
            id: 9,
            actionDate: new Date(2014, 6, 6).getTime(),
            addDate: new Date(2014, 6, 6).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Далимир с мамой уже в Берлине. Операция назначена на 11.07.2014",
            photo: false,
            advertType: ADVERT_TYPES.news
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
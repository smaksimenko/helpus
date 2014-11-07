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
        this.persona[4] = {
            id: 4,
            name: "Даша",
            surname: "Павлова",
            dateOfBirth: new Date(2001, 07, 18).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "Сколиоз 4 степени, факоматоз, левосторонняя кривошея и остеофиброзная дисплазия(состояние после аллопластики)",
            treatmentId: 1,
            collectionState: COLLECTION_STATE.finished,
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
                helpNow: "Билайн +7 961 715 49 20" ,
            messageComment: "Автор сообщения мама Даши - Марина. Стилистика и орфография автора сохранена."
        };
        this.treatment[1] = {
            id: 1,
            personaId: 4,
            treatmentType: window.treatmentType.surgery,
            treatmentCountry: "Германия",
            treatmentCity: "Штутгарт",
            treatmentPlace: "Esslingen",
            treatmentPrice:  61518,
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

        this.financeState[2] = {
            id: 2,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 42693,
            toDate: new Date(2014, 6, 12).getTime()
        };

        this.financeState[3] = {
            id: 3,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 42752,
            toDate: new Date(2014, 6, 13).getTime()
        };
        this.financeState[4] = {
            id: 4,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 42793,
            toDate: new Date(2014, 6, 14).getTime()
        };
        this.financeState[5] = {
            id: 5,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 42956,
            toDate: new Date(2014, 6, 15).getTime()
        };
        this.financeState[6] = {
            id: 6,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 43022,
            toDate: new Date(2014, 6, 16).getTime()
        };
        this.financeState[7] = {
            id: 7,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 43056,
            toDate: new Date(2014, 6, 17).getTime()
        };
        this.financeState[8] = {
            id: 8,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 43761,
            toDate: new Date(2014, 6, 20).getTime()
        };
        this.financeState[9] = {
            id: 9,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 43979,
            toDate: new Date(2014, 6, 23).getTime()
        };
        this.financeState[10] = {
            id: 10,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 44108,
            toDate: new Date(2014, 6, 24).getTime()
        };
        this.financeState[11] = {
            id: 11,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected: 44180,
            toDate: new Date(2014, 6, 27).getTime()
        };
        this.financeState[12] = {
            id: 12,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected:  53165,
            toDate: new Date(2014, 6, 29).getTime()
        };
        this.financeState[13] = {
            id: 13,
            personaId: 4,
            currency: 1,
            total: 64798,
            collected:  53459,
            toDate: new Date(2014, 6, 30).getTime()
        };
        this.financeState[14] = {
            id: 14,
            personaId: 4,
            currency: 1,
            total: 61518,
            collected:  55112,
            toDate: new Date(2014, 7, 4).getTime()
        };
        this.financeState[15] = {
            id: 15,
            personaId: 4,
            currency: 1,
            total: 61518,
            collected:  56721,
            toDate: new Date(2014, 7, 10).getTime()
        };
        this.financeState[16] = {
            id: 16,
            personaId: 4,
            currency: 1,
            total: 61518,
            collected:  56767,
            toDate: new Date(2014, 7, 11).getTime()
        };
        this.financeState[17] = {
            id: 17,
            personaId: 4,
            currency: 1,
            total: 61518,
            collected:  57490,
            toDate: new Date(2014, 7, 15).getTime()
        };
        this.financeState[18] = {
            id: 18,
            personaId: 4,
            currency: 1,
            total: 61518,
            collected:  57868,
            toDate: new Date(2014, 7, 16).getTime()
        };
        this.financeState[18] = {
            id: 18,
            personaId: 4,
            currency: 1,
            total: 61518,
            collected:  61518,
            toDate: new Date(2014, 7, 16).getTime()
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
            forCountry: "Украина",
            name: "Сбербанк России",
            organisation: "Сбербанк России",
            // MFO: 305299,
            //OKPO: 14360570,
            accountNumber: null,
            target: "№ карты   67619 6000 21195 7270  Павлов Сергей",
            cardNumber: "676196000211957270",
            currency: window.CURRENCY.RUR,
            comment: null
        };
//        this.financeBank[3] = {
//            id: 3,
//            forCountry: "Украина",
//            name: "Сбербанк России",
//            organisation: "Сбербанк России",
//            // MFO: 305299,
//            //OKPO: 14360570,
//            accountNumber: 26203000767099,
//            target: "Павлова Марина Валерьевна",
//            //cardNumber: 676196000211957270 ,
//            currency: window.CURRENCY.UAH,
//            comment: null
//        };

        this.webmoney[1] = {
            id: 1,
            name: "Webmoney",
            number: "Z199341864912",
            currency: window.CURRENCY.USD
        };
        this.webmoney[2] = {
            id: 2,
            name: "Webmoney",
            number: "E467539175188",
            currency: window.CURRENCY.EUR
        };
        this.webmoney[3] = {
            id: 3,
            name: "Webmoney",
            number: "R198299923381",
            currency: window.CURRENCY.RUR
        };
        this.webmoney[4] = {
            id: 4,
            name: "Webmoney",
            number: "U264943567475",
            currency: window.CURRENCY.UAH
        };
        this.webmoney[5] = {
            id: 5,
            name: "Webmoney",
            number: "B779522524464",
            currency: window.CURRENCY.BYR
        };


        this.webmoney[6] = {
            id: 6,
            name: "QIWI - КОШЕЛЕК",
            number: "+380988844273"
        };
        this.webmoney[7] = {
            id: 7,
            name: "PayPal",
            number: "a.deschner@mail.ru"
        };
        this.webmoney[8] = {
            id: 8,
            name: "Билайн",
            number: "+7 961 715 49 20",
            currency: window.CURRENCY.RUR
        };
        this.webmoney[9] = {
            id: 9,
            name: "Яндекс",
            number: "410012001390078"
        };

        this.contact[1] = {
            id: 1,
            personaId: 4,
            name: "Павлова Марина",
            country: "Украина",
            city: "Одесса",
            phone: "+3 063 725 57 70",
            relation: "мама"
        };

        this.social[1] = {
            id: 1,
            personaId: 4,
            name: "вКонтакте",
            link: "http://vk.com/pomogitespastidashu"
        };
        this.social[2] = {
            id: 2,
            personaId: 4,
            name: "Одесский форум",
            link: "http://forumodua.com/showthread.php?t=2065160"
        };
        this.social[3] = {
            id: 3,
            personaId: 4,
            name: "FaceBook",
            link: "https://www.facebook.com/permalink.php?story_fbid=1508957002671602&id=1508239649410004"
        };
        this.social[4] = {
            id: 4,
            personaId: 4,
            name: "Одноклассники",
            link: "http://www.odnoklassniki.ru/vremennoza"
        };
        this.social[5] = {
            id: 5,
            personaId: 4,
            name: "Кидстафф",
            link: "http://www.kidstaff.com.ua/forum/viewtopic.php?t=59296"
        };
        this.foundations[1] = {
            id: 1,
            personaId: 4,
            name: "Благотворительная организация 'Благовещение'",
            link: "http://blagovest.od.ua/actual/208-dasha-pavlova-12-let-borby.html",
            alias: "Перейти на сайт"
        };
        this.foundations[2] = {
            id: 2,
            personaId: 4,
            name: "Благотворительная организация 'Спасибо'",
            link: "http://spasibo.od.ua/%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0-%D0%B4%D0%B0%D1%88%D0%B0-12-%D0%BB%D0%B5%D1%82-%D0%B2%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B3%D0%B5%D0%BD%D0%B5%D1%82%D0%B8%D1%87/",
            alias: "Перейти на сайт"
        };
        this.foundations[3] = {
            id: 3,
            personaId: 4,
            name: "Благотворительный фонд 'Пчелка'",
            link: "http://www.pchelka.ua/ru/kids/pavlova-dasha",
            alias: "Перейти на сайт"
        };
        this.foundations[4] = {
            id: 4,
            personaId: 4,
            name: "Украинская биржа благотворительности",
            link: "https://ubb.org.ua/ru/project/973/",
            alias: "Перейти на сайт"
        };

        this.document[1] ={
            id: 1,
            personaId: 3,
            name: "Медицинское заключение ЦРБ",
            text: "деформация позвоночника, левостороння кривошея, остеома лобно-темянного участка, состояние после краниопластики.",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[1] = {
            id: 1,
            personaId: 4,
            name: "Заключение стр. 1",
            text: "",
            documentId: 1,
            url: "../images/4/docs/1.jpg"
        };
        this.imageDocument[2] = {
            id: 2,
            personaId: 4,
            name: "Заключение стр. 2",
            text: "",
            documentId: 1,
            url: "../images/4/docs/2.jpg"
        };

        this.document[2] ={
            id: 2,
            personaId: 4,
            name: "Выписка из медицинской карты клиника Охмадет",
            text: "",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[3] = {
            id: 3,
            personaId: 4,
            name: "",
            text: "",
            documentId:2,
            url: "../images/4/docs/3.jpg"
        };
        this.imageDocument[4] = {
            id: 4,
            personaId: 4,
            name: "",
            text: "",
            documentId:2,
            url: "../images/4/docs/4.jpg"
        };
        this.document[3] ={
            id: 3,
            personaId: 4,
            name: "Калькуляция клиники Эсслинген",
            text: "перевод калькуляции клиники Эсслинген",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[5] = {
            id: 5,
            personaId: 4,
            name: "стр 1",
            text: "",
            documentId: 3,
            url: "../images/4/docs/5.jpg"
        };
        this.imageDocument[6] = {
            id: 6,
            personaId: 4,
            name: "стр 2",
            text: "",
            documentId: 3,
            url: "../images/4/docs/6.jpg"
        };
        this.document[4] ={
            id: 4,
            personaId: 4,
            name: "Счет на услуги переводчиков",
            text: "Сумма услуг 3 213 евро",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[7] = {
            id: 7,
            personaId: 4,
            name: "",
            text: "",
            documentId: 4,
            url: "../images/4/docs/7.jpg"
        };

        this.document[5] ={
            id: 5,
            personaId: 3,
            name: "Счет клиники Esslingen (факс)",
            text: "Сумма услуг: 56 804 евро",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[8] = {
            id: 8,
            personaId: 4,
            name: "",
            text: "",
            documentId: 5,
            url: "../images/4/docs/8.jpg"
        };
        this.document[6] ={
            id: 6,
            personaId: 4,
            name: "План лечения",
            text: "План лечения разработанный профессором Хармсом",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[9] = {
            id: 9,
            personaId: 4,
            name: "Шаг 1",
            text: "",
            documentId: 6,
            url: "../images/4/docs/9.jpg"
        };
        this.imageDocument[10] = {
            id: 10,
            personaId: 4,
            name: "Шаг 2",
            text: "",
            documentId: 6,
            url: "../images/4/docs/10.jpg"
        };
        this.imageDocument[11] = {
            id: 11,
            personaId: 4,
            name: "Шаг 3",
            text: "",
            documentId: 6,
            url: "../images/4/docs/11.jpg"
        };

        this.document[7] ={
            id: 7,
            personaId: 4,
            name: "Гарантия фонда 'Ein herz fur kinder'",
            text: "Гарантия фонда 'Ein herz fur kinder' на 20 000 евро ",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[12] = {
            id: 12,
            personaId: 4,
            name: "",
            text: "",
            documentId: 7,
            url: "../images/4/docs/12.jpg"
        };
        this.document[8] ={
            id: 8,
            personaId: 4,
            name: "Свидетельство о рождении",
            text: "",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[13] = {
            id: 13,
            personaId: 4,
            name: "",
            text: "",
            documentId: 8,
            url: "../images/4/docs/13.jpg"
        };
        this.document[9] ={
            id: 9,
            personaId: 4,
            name: "Пенсионное удостоверение",
            text: "",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[14] = {
            id: 14,
            personaId: 4,
            name: "",
            text: "",
            documentId: 9,
            url: "../images/4/docs/14.jpg"
        };


        this.advert[1] = {
            id: 1,
            actionDate: new Date(2014, 6, 7).getTime(),
            addDate: new Date(2014, 6, 7).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Фонд 'Ein Herz fur Kinder' выделяет Дашуле на лечение 20 000 тысяч евро! Огромное спасибо тем, кто неустанно помогает Дашуле на ее нелегком пути к выздоровлению! ",
            photo: "1.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[2] = {
            id: 2,
            actionDate: new Date(2014, 6, 21).getTime(),
            addDate: new Date(2014, 6, 21).getTime(),
            personaId: 4,
            caption: null,
            link: "https://ubb.org.ua/ru/project/973/#tabs-7",
            text: "На Украинской Бирже Благотворительности по просьбе БО 'СПАСИБО' уменьшили сумму необходимую к сбору по той причине, что Даше осталось собрать 203 000 грн. При перерасчете получилось, что сумма сбора сейчас на УББ 348 156 грн. из которых уже собрано на УББ 145 356 грн.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[3] = {
            id: 3,
            actionDate: new Date(2014, 6, 29).getTime(),
            addDate: new Date(2014, 6, 29).getTime(),
            personaId: 4,
            caption: null,
            link: "https://ubb.org.ua/ru/project/973/#tabs-7",
            text: "Принято решение учитывать сумму сбора УББ в общей сумме - поэтому остаток сильно уменьшился за сегодня",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[4] = {
            id: 4,
            actionDate: new Date(2014, 6, 29).getTime(),
            addDate: new Date(2014, 6, 29).getTime(),
            personaId: 4,
            caption: null,
            link: false,
            text: "Общая сумма сбора уменьшена в связи с пересмотром залоговой суммы для получения визы.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[5] = {
            id: 5,
            actionDate: new Date(2014, 7, 16).getTime(),
            addDate: new Date(2014, 7, 16).getTime(),
            personaId: 4,
            caption: null,
            link: false,
            text: "Сбор закрыт благодаря ДОБРОЙ ВОЛШЕБНИЦЕ, которая сможет дать нашей Дашутке недостающую сумму!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[6] = {
            id: 6,
            actionDate: new Date(2014, 8, 19).getTime(),
            addDate: new Date(2014, 8, 19).getTime(),
            personaId: 4,
            caption: null,
            link: false,
            text: "Нового у нас к сожалению ничего нет. Пока все еще ждем оригинал счета. Переводчики говорят,что звонили в клинику и им тоже сказали,что надо подождать. Ну ничего, самое тяжелое мы уже прошли, а сейчас мы еще потерпим. Так как прошел уже месяц после закрытия сбора,то я надеюсь,что клиника вот вот уже пришлет документ) Набираемся терпения и ждем)",
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
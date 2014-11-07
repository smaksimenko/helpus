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
            id: 3,
            name: "Далимир",
            surname: "Ляшкевич",
            dateOfBirth: new Date(2012, 10, 23).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "Краниофарингиома (опухоль головного мозга), порок сердца",
            treatmentId: 1,
            collectionState: COLLECTION_STATE.finished,
            message: "<p>В моей маленькой семье произошло чудо, я очень хотела ребенка и вот это случилось - я забеременела, и ощущения счастья не покидало меня, несмотря на разные трудности и огорчения. Отец ребенка, услышав о моей беременности, исчез в одночасье, но я его не виню - это мое счастье, мое солнце и мой малыш!</p>" +
                "<p>Беременность протекала хорошо, но на восьмом месяце пошел какой-то сбой, и я легла на сохранение.</p>" +
                "<p>После выписки я сразу уехала в роддом. Далимирчик родился 23.10.12 г. в Одессе здоровым ребенком, правда, с маленьким весом. Врачи сказали, что это не страшно, на первых месяцах набирал вес хорошо.</p>" +
                "<p>Дни пролетали очень быстро, сыночек рос и развивался, но все же был очень беспокойным, часто капризничал и очень мало спал. Мы проходили все плановые осмотры, все было в порядке, без отклонений.</p>" +
                "<p>Ближе к 4 месяцев я стала замечать, что ребенок не набирает вес обратилась к врачам, но врачи сказали, что худенький ребенок это тоже норма . Сердце не успокоилось, продолжила бег по врачам...</p>" +
                "<p>Время шло, Дамирчик подрастал, а проблемы нас не покидали, в конце июня он заболел и мы попали в больницу. Там в очередной раз делали обследование и нашли у него устрашающий диагноз: <b>порок сердца</b></p>" +
                "<p>Операцию отложили, но и тут было не все... меня направили к невропатологу в Одессе и по результатом томограммы головного мозга, выяснилось что у Далимирчика, у моего сыночка!!! опухоль в голове. Отчаявшись, я поехала в Киев, на консультацию к нейрохирургам. Но и там на основание МРТ диагноз подтвердили - Краниофарингиома (опухоль головного мозга, размером 4.см.)  Врачи во все голоса твердят: нужна срочно операция, но в Киеве ее не сделать, без последствий инвалидности для ребенка и посоветовали найти клинику за границей.</p>" +
                "<p>Мы долго искали подходящую клинику, обращались в Израиль, Германию, Чехию и Бельгию. В клинике Ихилов, Израиль, нам выставили счет в 6 225 долларов, только за обследование. Нас смущало то, что с таким диагнозом, как у Далимира, европейские клиники просили прислать кучу дополнительных исследований, а израильская согласилась сразу. Это насторожило. Ведь мы не имели право поехать на обследование, которое возможно не привело бы, к лечению. И мы продолжили поиск. Параллельно, мы открыли сбор на лечение Далимира в соцсетях. Время утекало сквозь пальцы, а опухоль росла(с 4,1 см до 5,1 см) Было понятно, что без медицинского вмешательства, опухоль будет только прогрессировать.</p>" +
                "<p><strong>И наконец нашли. Клиника 'Шарите' в Берлине, готова нас принять за 35 000 евро - это стало почти приговором! Возможностей собрать такую сумму в моей семье нет я одна воспитываю сына и очень ПРОШУ ВАС О ПОМОЩИ!            Помогите спасти ребенка! Ведь он у меня единственный и он должен жить! Времени мало,я очень надеюсь на Вас добрые люди!</strong></p>" +
                "<h3>Калькуляция</h3>" +
                "<ul>" +
                "<li>35 000 евро - дооперационное обследование + операция</li>" +
                "<li>3 000 евро - дополнительные расходы. К сожалению, я мать одиночка, и доходом, кроме детских у меня нет.</li>" +
                "<UL>" +
                "<li>стоимость перелета 1 взр (мама) + 1 ребенок (инф.) круговой 380 евро Одесса-Вена-Берлин-Вена-Одесса</li>" +
                "<li>Услуги посредника сопровождения и оформления документов 1500 евро</li>" +
                "<li>Переводчик 50 евро в час*2 часа в день * 10 дней=1000 евро.</li>" +
                "<li>Ежедневные расходы 10-15 евро/день=150-200 евро.</li>" +
                "<UL>" +
                "</ul>",
                helpNow: "БИЛАЙН : +7 966 791 34 01 <br />" ,
            messageComment: "Автор сообщения мама Далимира - Юлия. Стилистика и орфография автора сохранена."
        };
        this.treatment[1] = {
            id: 1,
            personaId: 3,
            treatmentType: window.treatmentType.surgery,
            treatmentCountry: "Германия",
            treatmentCity: "Берлин",
            treatmentPlace: "Шарите",
            treatmentPrice: 38000,
            treatmentCurrency: 1,
            treatmentStart: new Date(2014, 06, 04).getTime()
        };

        this.financeState[1] = {
            id: 1,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 9422,
            toDate: new Date(2014, 2, 27).getTime()
        };

        this.financeState[2] = {
            id: 2,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 9849,
            toDate: new Date(2014, 3, 4).getTime()

        };
        this.financeState[3] = {
            id: 3,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 10243,
            toDate: new Date(2014, 3, 11).getTime()
        };
        this.financeState[4] = {
            id: 4,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 10868.5,
            toDate: new Date(2014, 3, 18).getTime()
        };

        this.financeState[5] = {
            id: 5,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 11614.35,
            toDate: new Date(2014, 3, 25).getTime()
        };
        this.financeState[6] = {
            id: 6,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 12580.49,
            toDate: new Date(2014, 4, 3).getTime()
        };

        this.financeState[7] = {
            id: 7,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 13932.49,
            toDate: new Date(2014, 4, 9).getTime()
        };
        this.financeState[8] = {
            id: 8,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 15285,
            toDate: new Date(2014, 4, 16).getTime()
        };
        this.financeState[9] = {
            id: 9,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 17335,
            toDate: new Date(2014, 4, 23).getTime()
        };
        this.financeState[10] = {
            id: 10,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 21208,
            toDate: new Date(2014, 5, 6).getTime()
        };
        this.financeState[11] = {
            id: 11,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 21329 ,
            toDate: new Date(2014, 5, 13).getTime()
        };
        this.financeState[12] = {
            id: 12,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 24372.84,
            toDate: new Date(2014, 5, 27).getTime()
        };
        this.financeState[13] = {
            id: 13,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 22489.84,
            toDate: new Date(2014, 5, 20).getTime()
        };
        this.financeState[14] = {
            id: 14,
            personaId: 3,
            currency: 1,
            total: 38000,
            collected: 26777.77,
            toDate: new Date(2014, 6, 04).getTime()
        };

        this.financeBank[1] = {
            id: 1,
            forCountry: "Украина",
            name: "ПриватБанк",
            organisation: "ЮГРУ ПриватБанк",
            MFO: 305299,
            OKPO: 14360570,
            accountNumber: 29244825509100,
            target: "пополнение карточки № 5211 5373 3695 2838 Ляшкевич Юлия Владимировна",
            cardNumber: 5211537336952838 ,
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
        this.webmoney[8] = {
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
        this.advert[10] = {
            id: 10,
            actionDate: new Date(2014, 6, 14).getTime(),
            addDate: new Date(2014, 6, 14).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: " Далимир перенес операцию очень хорошо, и уже пришел в себя. Сейчас и еще 2 дня будет в реанимации, к сожалению опухоль удалили не всю, поэтому будет требоваться повторная операция",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[11] = {
            id: 11,
            actionDate: new Date(2014, 6, 19).getTime(),
            addDate: new Date(2014, 6, 19).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Далька еще в реанимации и как скоро нас смогут перевести в нормальную палату одному Богу известно, врачи не знают как объяснить его состояние во время операции был задет нерв отвечающий за температуру тела и пока не известно восстановится все обратно или нет. Каждый день у него берут кровь на анализы венки все исколоты.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[12] = {
            id: 12,
            actionDate: new Date(2014, 6, 20).getTime(),
            addDate: new Date(2014, 6, 20).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Дамирушка все еще в нестабильном состоянии температура прыгает от 37.4 до 39.3, но есть и положительный результат он за неделю набрал 1 кг у него появились щечки и пропал впалый животик и теперь мы весим 8 600.",
            photo: "12.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[13] = {
            id: 13,
            actionDate: new Date(2014, 6, 24).getTime(),
            addDate: new Date(2014, 6, 24).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Температура у Далимирчика начала потихоньку спадать , поставили катетор в центральную артерию , он умничка держится молодцом",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[14] = {
            id: 14,
            actionDate: new Date(2014, 6, 30).getTime(),
            addDate: new Date(2014, 6, 30).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "По результатам операции выявлено что у Далимира раковая опухоль в начальной стадии, так что ему еще предстоит пройти курс химии.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[15] = {
            id: 15,
            actionDate: new Date(2014, 6, 30).getTime(),
            addDate: new Date(2014, 6, 30).getTime(),
            personaId: 1,
            caption: null,
            link: false,
            text: "Далимир по прежнему находиться в реанимации, опять поднялась высокая температуры утром была 39.8, его выводят с препаратов он очень тяжело это переносит врачи сравнивают это состояние с ломкой у наркоманов, малыш весь день не спал все время кричал и плакал ему трижды давали снотворное но оно его не брало уснул он сам от усталости, отечность потихоньку сходит, не смотря на высокую температуру он хорошо кушает. Каждый день реанимации стоит 1900 евро. " +
                "Учитывая этот факт и предстоящую химию скорее всего сбор будет возобновлен в ближайшее время.",
            photo: false,
            advertType: ADVERT_TYPES.news
        },
            this.advert[16] = {
                id: 16,
                actionDate: new Date(2014, 7, 4).getTime(),
                addDate: new Date(2014, 7, 4).getTime(),
                personaId: 1,
                caption: null,
                link: false,
                text: " Дамирушка потерял зрение на одном глазу второй глазик на свет реагирует но очень слабо , темп опять поднялась сейчас 39.9, нас уже перевели с реанимации в другое отделение тоже интенсивной терапии.",
                photo: false,
                advertType: ADVERT_TYPES.news
            },
            this.advert[17] = {
                id: 17,
                actionDate: new Date(2014, 7, 5).getTime(),
                addDate: new Date(2014, 7, 5).getTime(),
                personaId: 1,
                caption: null,
                link: false,
                text: "Далимира завтра переводят в онкологию, будут делать химию. Это все затянется на 1.5 года. Один глаз, как говорят врачи уже не вернуть, второй видит очертания, будут спасать его...",
                photo: false,
                advertType: ADVERT_TYPES.news
            },
            this.advert[18] = {
                id: 18,
                actionDate: new Date(2014, 7, 10).getTime(),
                addDate: new Date(2014, 7, 10).getTime(),
                personaId: 1,
                caption: null,
                link: false,
                text: "Сейчас Далимирчик в стабильно тяжелом состоянии, ждет химии терапии. Врачи борются за его жизнь и делают все возможное, но пока улучшений нет... температура, частичная потеря зрения, слабость...",
                photo: false,
                advertType: ADVERT_TYPES.news
            },
            this.advert[19] = {
                id: 19,
                actionDate: new Date(2014, 8, 20).getTime(),
                addDate: new Date(2014, 8, 20).getTime(),
                personaId: 1,
                caption: null,
                link: false,
                text: "Мама пишет: Добрый день наши любимые друзья, простите что так долго не писала. У Дамирушке все хорошо зрение потихоньку восстанавливается он хорошо кушает и набирает вес стал лентяем не хочет ходить ему тяжело и непривычно в таком весе, по ночам очень плохо спит каждые два часа просыпается приходится с ним выходить на улицу там он быстро усыпает, ночью тоже кушает если не даю начинает истерить ((( врачи говорят что это будет продолжаться пока он не повзрослеет и сам не начнет это контролировать, так же продолжает принимать гормоны без них он теперь ни как (((((( живем мы пока в общежитии тау много деток и Дамирушка с ними играет. В октябре бдет первое МРТ после операции будут смотреть динамику опухоли оперировать его больше не будут так как до остатка опухол просто не добраться она лежит прямо на глазных нервах если на протяжении она не будет расти есть вероятность того что она больше не вырастит.... а пока каждые три месяца будут делать МРТ",
                photo: "19.jpg",
                advertType: ADVERT_TYPES.news
            },
            this.advert[20] = {
                id: 20,
                actionDate: new Date(2014, 9, 30).getTime(),
                addDate: new Date(2014, 9, 30).getTime(),
                personaId: 1,
                caption: null,
                link: false,
                text: "Мама Далимира: Доброй ночи всем, мы с Дамирулькой опять в больнице попали сюда с большой температурой 40.6 врачи говорят это вирус, но какой сказать не могут от большой температуры у него опять упало зрение но не совсем , сейчас ему уже лучше но ему продолжают капать антибиотики ...<br/ > да (температуру) сбили, сейчас нормально только они не спешат нас выписывать нашли какую то бактерию в крови",
                photo: null,
                advertType: ADVERT_TYPES.news
            }




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
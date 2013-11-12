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

        this.persona[2] = {
            id: 2,
            name: "Амелия",
            surname: "Слизкая",
            dateOfBirth: new Date(2013, 1, 5).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "Биллиарная атрезия (не корригируемый тип)",
            treatmentId: 1,
            collectionState: COLLECTION_STATE.opened,
            message: "<p>Летом 2012 года узнав о беременности мы,  как и любая молодая семья, обрадовались и, казалось, попали на то самое «Седьмое небо».</p><p>Уже в 2013 году начали готовиться к родам и определяться с роддомом, остановились на 7-м, заранее договорились  с врачом, оценили все расходы. Так и появилась на свет наша принцесса – Амелия,  случилось это 5 февраля 2013 года. Роды прошли  хорошо, как и вся  беременность и на 4-й  день  мы попали полноценной семьей домой, хотя  желтизна ребёнка и вызывал сомнения, но врачи убедили, что через неделю всё пройдёт.</p><p>Началась семейная жизнь, которая  довольно быстро омрачилась, на 12 день жизни  мы попали в детскую Областную больницу, основанием  был синяк на крестце и ранка на нёбе, дальше, оказалось, что у малышки не сворачивалась кровь. Но это быстро исправили в реанимации, и перевели ребёнка в патологию новорожденных, где собственно говоря мы и столкнулись  с   нашей Медициной.</p><p>Диагнозы нам ставили  разные: гепатит, Муковисцидоз, гепатит инфекционный, гепатит врождённый, Цитомегаловирус  и опять гепатит. Хотя все анализы с первого дня  не подтверждали таких инфекций.</p>" +
                "<p>В общем  'ЛЕЧИЛИ ' нас.....</p><p>Спустя месяц ежедневных капельниц и уколов отправили в Киев, в «Охматдит», а там после простого обследования поставили  окончательный диагноз---«Биллиарная атрезия»(не корригируемый тип) и направили в институт Шалимова.</p><p>Там сказали, что малышке нужно делать операцию - <strong>трансплантация печени!</strong></p><p>И поскольку  в нашем государстве медицина «Бесплатная», счёт нам выставить не могут и никаких финансовых документов с печатями  дать не могут,  за исключением Выписки Эпикриза. Но не официально предупредили, что деньги готовить нужно и показали  счёт из Белоруской клиники, в котором итоговая сумма составила 121 тысячу долларов. " +
                "Оценив   по форумам,  какие задачи  становятся перед нами, мы понимаем, что  никаких кредитов нам не  хватит  на  такую операцию, ещё и на работе, узнав о болезни ребёнка ...- меня  просто уволили....." +
                "Так началась наша борьба с прогрессирующей болезнью, которую вылечить невозможно. Не описать нашу боль, когда каждый день мы видим, как наша маленькая доченька по-взрослому  терпит боль и борется за свою жизнь. По словам врачей,- оперировать нужно как можно скорее! Ведь с таким диагнозом  жизнь находится уже на волоске. </p>" +
                "<p> Нам очень хочется, чтобы  наша маленькая Амеличка выздоровела…и росла рядом с нами.</p>" +
                "<p>Вот и боясь опускать руки, просим помощи у всех, кто в состоянии нас понять....</p>" +
                "<p>Просим помочь нашей малышке ощутить прелести первых шагов, первого слова «Мама»….</p>" +
                "<p>Просим вас не быть равнодушными и не пройти мимо  нашего ребёнка, ведь её жизнь только начинается и нам так хочется показать ей этот мир добрым!</p>",
            helpNow: "Отправьте СМС-сообщение на номер 10060 следующего содержания:<br /> " +
                "SEND50UAH+1111+ 5168 7572 1498 7390 <br />" +
                "где 50 сумма перевода, может быть любой,<br  />" +
                "UAH - гривны, можно также USD, EUR, RUR <br />" +
                "1111 - последние четыре цифры карты, с которой будет осуществлен перевод",
            messageComment: "Автор сообщения отец Амелии - Cергей. Стилистика и орфография автора сохранена."
        };
        this.treatment[1] = {
            id: 1,
            personaId: 2,
            treatmentType: window.treatmentType.liverTransplantation,
            treatmentCountry: "Бельгия",
            treatmentCity: "Брюсель",
            treatmentPlace: "Клиника Сент Люк",
            treatmentPrice: 120500,
            treatmentCurrency: 1,
            treatmentStart: new Date(2013, 10, 25).getTime()
        };
        this.financeState[1] = {
            id: 1,
            personaId: 2,
            currency: 1,
            total: 120500,
            collected: 44634,
            toDate: new Date(2013, 10, 4).getTime()
        };
        this.financeState[2] = {
            id: 2,
            personaId: 2,
            currency: 1,
            total: 120500,
            collected: 48719,
            toDate: new Date(2013, 10, 7).getTime()
        };
        this.financeState[3] = {
            id: 3,
            personaId: 2,
            currency: 1,
            total: 120500,
            collected: 48859,
            toDate: new Date(2013, 10, 9).getTime()
        };

        this.financeBank[1] = {
            id: 1,
            forCountry: "Украина",
            name: "ПриватБанк",
            organisation: "ЮГРУ ПриватБанк",
            MFO: 305299,
            OKPO: 14360570,
            accountNumber: 29244825509100,
            target: "Благотворительная помощь на лечение Слизкой Амелии, пополнение карточки №5168757214987390 Слизкая Екатерина Евгеньевна ",
            cardNumber: 5168757214987390,
            currency: window.CURRENCY.UAH,
            comment: "Возможен перевод прямо на карту в терминалах ПриватБанка"
        };

        this.financeBank[2] = {
            id: 2,
            forCountry: "Россия",
            name: "СБЕРБАНК",
            organisation: " ОАО 'СБЕРБАНК РОССИИ'  Москва, РФ",
            currency: window.CURRENCY.RUR,
            preset: "Получатель: Слизкий Сергей Александрович (папа Амелии) \n Карта Сбербанка России: 4276 3800 4574 5366 " +
                "\n БИК 044525225 \n" +
                " ИНН 7707083893 \n р/с 40817810938052122369 \n " +
                "Получатель: Овчинникова Гульнара Марселевна (волонтер)"
        };

        this.financeBank[3] = {
            id: 3,
            forCountry: "Европа, Америка",
            name: "ARGENTA SA (международные переводы)",
            organisation: "ARGENTA SA",
            currency: window.CURRENCY.EUR,
            preset: "979-2396117-28 на имя Association Rogalevich - благотворительное общество. " +
                "\n Банк: ARGENTA SA  " +
                "\n Адрес: Belgielei 49-53 " +
                "\n 2018 ANVERS BELGIUM " +
                "\n Коды для международных переводов: " +
                "\n IBAN: BE37 9792 3961 1728 " +
                "\n BIC (SWIFT): ARSPBE 22 (обязательно указать Slizkaya Amelia)"
        };

        this.webmoney[1] = {
            id: 1,
            name: "Webmoney",
            number: "Z461940225183",
            currency: window.CURRENCY.USD
        };
        this.webmoney[2] = {
            id: 2,
            name: "Webmoney",
            number: "E242680709860",
            currency: window.CURRENCY.EUR
        };
        this.webmoney[3] = {
            id: 3,
            name: "Webmoney",
            number: "R168500979620",
            currency: window.CURRENCY.RUR
        };
        this.webmoney[4] = {
            id: 4,
            name: "Webmoney",
            number: "U168184094819",
            currency: window.CURRENCY.UAH
        };
        this.webmoney[5] = {
            id: 5,
            name: "Webmoney",
            number: "B255984584203",
            currency: window.CURRENCY.BYR
        };
        this.webmoney[6] = {
            id: 6,
            name: "QIWI - КОШЕЛЕК",
            number: "+7-912-957-86-00"
        };
        this.webmoney[7] = {
            id: 7,
            name: "Яндекс - Деньги:",
            number: "41001780759150"
        };

        this.contact[1] = {
            id: 1,
            personaId: 2,
            name: "Слизкий Сергей",
            country: "Украина",
            city: "Одесса",
            phone: "+3 066 761 54 85",
            relation: "отец"
        };
        this.contact[2] = {
            id: 2,
            personaId: 2,
            name: "Слизкая Екатерина",
            country: "Украина",
            city: "Одесса",
            phone: "+3 093 52 83 250",
            relation: "мать"
        };
        this.social[1] = {
            id: 1,
            personaId: 2,
            name: "вКонтакте",
            link: "http://vk.com/club57707284"
        };
        this.social[2] = {
            id: 2,
            personaId: 2,
            name: "Одесский форум",
            link: "http://forum.od.ua/showthread.php?t=2113717"
        };
        this.social[3] = {
            id: 5,
            personaId: 2,
            name: "Kidstaff",
            link: "http://www.kidstaff.com.ua/forum/viewtopic.php?t=58639"
        };
        this.foundations[3] = {
            id: 3,
            personaId: 2,
            name: "Благотворительная организация 'Благовещение'",
            link: "http://blagovest.od.ua/actual/209-ameliya-slizkaya-billiarnaya-atreziya.html",
            alias: "Перейти на сайт"
        };
        this.advert[1] = {
            id: 1,
            actionDate: new Date(2013, 10, 10).getTime(),
            addDate: new Date(2013, 10, 10).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Благотворительный фотопикник в рамках фотопроекта 'Подарим жизнь Амелии'. <br /> " +
                "Продолжительность: 1 час. <br />" +
                "Стоимость: 250грн.  <br />" +
                "Место проведения: лесопосадка аэропорта (дубовая роща). " +
                "Дата проведения: 10.11.2013 <br />" +
                "Время: с 11.00 до 16.00" +
                "Все финансы, собранные на проекте, будут переданы родителям Амелии и направлены на ее лечение." +
                "Вопросы в ЛС или по телефонам: 063 06 42 245 или 096 38 96 208",
            photo: "1.jpg",
            advertType: ADVERT_TYPES.action
        };
        this.advert[2] = {
            id: 2,
            actionDate: new Date(2013, 10, 10).getTime(),
            addDate: new Date(2013, 10, 11).getTime(),
            personaId: 1,
            caption: "Спасибо Черноморцу",
            link: null,
            text: "Выражаем огромную благодарность футбольному клубу 'Черноморец' за содействие в сборе средств на лечение Амелии! Также низкий поклон болельщикам, которые поддержали не только любимую команду, но и родителей малышки, оказавшихся в трудной ситуации. Отдельное спасибо группе инициативных волонтеров, собравших на вчерашнем футбольном матче <strong>12685 грн</strong>!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[3] = {
            id: 3,
            actionDate: new Date(2013, 10, 12).getTime(),
            addDate: new Date(2013, 10, 12).getTime(),
            personaId: 1,
            caption: "Телеканал Град",
            link: "http://grad.ua/10-%D0%BC%D0%B5%D1%81%D1%8F%D1%87%D0%BD%D0%BE%D0%B9-%D0%B0%D0%BC%D0%B5%D0%BB%D0%B8%D0%B8-%D1%81%D1%80%D0%BE%D1%87%D0%BD%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C/",
            text: "Спасибо телеканалу 'Град' за оперативный выпуск сюжета!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };

this.advert[4] = {
            id: 4,
            actionDate: new Date(2013, 10, 12).getTime(),
            addDate: new Date(2013, 10, 12).getTime(),
            personaId: 1,
            caption: "Перезд во Львов",
            link: null,
            text: "У Амелечки очень плохие результаты анализов. Сильная билирубинемия, билирубин в крови превышает норму в 40 раз, уровень белка и гемоглобина также оставляют желать лучшего. Состояние Амельки нужно срочно стабилизировать и делать это будут во ЛЬвове. Почему едут во Львов? Потому что там в одной из городских больниц работает хороший квалифицированный гепатолог Галина Курило, которая постоянно проходит стажировки в Польше и Бельгии.. она успешно довела до трансплантации не одного ребенка с подобной проблемой, как у Амелии. Так что очень надеемся, что Амелечке она тоже поможет, облегчив ее состояние..",
            photo: false,
            advertType: ADVERT_TYPES.news
        };


        this.document[1] ={
            id: 1,
            personaId: 2,
            name: "Свидетельство о рождении",
            text: "Слизкая Амелия Сергеевна, родилась 5-го февраля 2013 года в г. Одесса",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[1] = {
            id: 1,
            personaId: 2,
            name: "Свидетельство о рождении",
            text: "",
            documentId: 1,
            url: "../images/2/docs/1.jpg"
        };
        this.document[2] ={
            id: 2,
            personaId: 2,
            name: "Документ о инвалидности",
            text: "",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[2] = {
            id: 2,
            personaId: 2,
            name: "",
            text: "",
            documentId: 2,
            url: "../images/2/docs/2.jpg"
        };

        this.document[3] ={
            id: 3,
            personaId: 2,
            name: "Эпикриз",
            text: "",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[3] = {
            id: 3,
            personaId: 2,
            name: "",
            text: "",
            documentId:3,
            url: "../images/2/docs/3.jpg"
        };
        this.imageDocument[4] = {
            id: 4,
            personaId: 2,
            name: "",
            text: "",
            documentId:3,
            url: "../images/2/docs/4.jpg"
        };
        this.document[4] ={
            id: 4,
            personaId: 2,
            name: "Счет клиники Сент Люк",
            text: "Сумма к оплате 103 000 евро НЕ включает в себя медикаменты поддержки, контроли, проживание и питание",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[5] = {
            id: 5,
            personaId: 2,
            name: "",
            text: "",
            documentId:4,
            url: "../images/2/docs/5.jpg"
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
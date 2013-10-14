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
    populate: function () {

        this.persona[1] = {
            id: 1,
            name: "Тимофей",
            surname: "Салтановский",
            dateOfBirth: new Date(2012, 10, 3).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "болезнь Гиршпрунга, тотальной формы (рабочего кишечника всего 50 см). Илеостома. синдром короткой кишки. Носитель кишечных свищей. Белково-энергетическая недостаточность 2 степени. Перитонит. Некроз восходящей ободочной кишки",
            treatmentId: 1
        };
        this.treatment[1] = {
            id: 1,
            personaId: 1,
            treatmentType: window.treatmentType.surgery,
            treatmentCountry: "Германия",
            treatmentCity: "Маннхейм",
            treatmentPlace: "Университетская Клиника Маннхейма",
            treatmentPrice: 120000,
            treatmentCurrency: 1,
            treatmentStart: new Date(2013, 10, 13).getTime()
        };
        this.financeState[1] = {
            id: 1,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 19678.42,
            toDate: new Date(2013, 8, 23).getTime()
        };
        this.financeState[2] = {
            id: 2,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 34030.62,
            toDate: new Date(2013, 8, 30).getTime()
        };
        this.financeState[3] = {
            id: 3,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 34995.94,
            toDate: new Date(2013, 9, 2).getTime()
        };
        this.financeState[4] = {
            id: 4,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 36911.71,
            toDate: new Date(2013, 9, 6).getTime()
        };
        this.financeState[5] = {
            id: 5,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 42213.57,
            toDate: new Date(2013, 9, 11).getTime()
        };
        this.financeBank[1] = {
            id: 1,
            forCountry: "Украина",
            name: "ПриватБанк",
            organisation: "ЮГРУ ПриватБанк",
            MFO: 305299,
            OKPO: 14360570,
            accountNumber: 26258000453411,
            target: "пополнение карточки №4149437744067222, Салтановский Максим Владимирович",
            cardNumber: 4149437744067222,
            currency: window.CURRENCY.UAH,
            comment: "Возможен перевод прямо на карту в приемных аппаратах ПриватБанка"
        };
        this.financeBank[2] = {
            id: 2,
            forCountry: "Украина",
            name: "СБЕРБАНК",
            organisation: " АО 'СБЕРБАНК РОССИИ'",
            MFO: 320627,
            OKPO: 14360570,
            accountNumber: 26258000453411,
            target: "Салтановская Елена Олеговна",
            currency: window.CURRENCY.UAH
        };
        this.financeBank[3] = {
            id: 3,
            forCountry: "Европа/Америка",
            name: "Для валютных поступлений",
            organisation: "DEUTSCHE BANK TRUST COMPANY AMERICAS NEW YORK, USA",
            currency: window.CURRENCY.USD,
            preset: "56A: Account with Institution, BIC: BKTRUS33 \n DEUTSCHE BANK TRUST \n COMPANY AMERICAS \n NEW YORK, USA \n 57A: Beneficiary Bank, BIC: SABRUAUK \n SBERBANK OF RUSSIA JSC \n Kyiv, Ukraine \n CORRESPONDENT ACCOUNT NUMBER: 04421742 \n 59D: Beneficiary: 26203000453411 SALTANOVSKA OLENA"
        };
        this.financeBank[4] = {
            id: 4,
            forCountry: "Россия",
            name: "СБЕРБАНК",
            organisation: " ОАО 'СБЕРБАНК РОССИИ'  Москва, РФ",
            currency: window.CURRENCY.RUR,
            preset: "ОАО 'Сбербанк России', Москва, РФ \n БИК 044525225, \n К/C 30101810400000000225 \n   ИНН 7707083893 \n СВИФТ; SABRRUMM \n /30111810100000000540 \n АО 'СБЕРБАНК РОССИИ' /n Киев, Украина 26203000453411 Салтановская Елена Олеговна",
            comment: "На данный счёт,пополнить можно рубли, только с карточки на карточку, в любом банке России"
        };


        this.financeBank[5] = {
            id: 5,
            forCountry: "Украина",
            name: "Пивденный",
            organisation: " Акционерній Банк 'Південний'",
            MFO: 328209,
            accountNumber: 26250000276535,
            target: "Салтановская Елена Олеговна",
            currency: window.CURRENCY.UAH
        };
        this.webmoney[1] = {
            id: 1,
            name: "Webmoney",
            number: "Z204400171934",
            currency: window.CURRENCY.USD
        };
        this.webmoney[2] = {
            id: 2,
            name: "Webmoney",
            number: "E205104290022",
            currency: window.CURRENCY.EUR
        };
        this.webmoney[3] = {
            id: 3,
            name: "Webmoney",
            number: "R202647357458",
            currency: window.CURRENCY.RUR
        };
        this.webmoney[4] = {
            id: 4,
            name: "Webmoney",
            number: "U701874816819",
            currency: window.CURRENCY.UAH
        };
        this.webmoney[5] = {
            id: 5,
            name: "Webmoney",
            number: "B506763209534",
            currency: window.CURRENCY.BYR
        };
        this.webmoney[6] = {
            id: 6,
            name: "Kiwi",
            number: "+3800631653928"
        };
        this.contact[1] = {
            id: 1,
            personaId: 1,
            name: "Салтановский Максим",
            country: "Украина",
            city: "Одесса",
            phone: "+3 8063 165 39 29",
            relation: "отец"
        };
        this.contact[2] = {
            id: 2,
            personaId: 1,
            name: "Антон Шепелев",
            country: "Россия",
            phone: "+7 925 710 27 07",
            relation: "дядя"
        };
        this.social[1] = {
            id: 1,
            personaId: 1,
            name: "вКонтакте",
            link: "http://vk.com/club47805682"
        };
        this.social[2] = {
            id: 2,
            personaId: 1,
            name: "Одесский форум",
            link: "http://forum.od.ua/showthread.php?t=2029026"
        };
        this.social[3] = {
            id: 3,
            personaId: 1,
            name: "Одноклассники",
            link: "http://www.odnoklassniki.ru/timoshkakh"
        };
        this.social[4] = {
            id: 4,
            personaId: 1,
            name: "facebook",
            link: "	https://www.facebook.com/timofei.saltanovsky"
        };
        this.social[5] = {
            id: 5,
            personaId: 1,
            name: "Kidstaff",
            link: "http://www.kidstaff.com.ua/forum/viewtopic.php?t=58650"
        };
        this.foundations[1] = {
            id: 1,
            personaId: 1,
            name: "Благотворительный фонд 'Пчелка'",
            link: "http://pchelka.ua/kids/saltanovskii-timofei",
            alias: "Перейти на сайт"
        };
        this.foundations[2] = {
            id: 2,
            personaId: 1,
            name: "Благотворительная организация 'Спасибо'",
            link: "http://spasibo.od.ua/sos-%D0%BC%D0%BB%D0%B0%D0%B4%D0%B5%D0%BD%D0%B5%D1%86-%D1%82%D0%B8%D0%BC%D0%BE%D1%84%D0%B5%D0%B9-%D1%81%D0%B0%D0%BB%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%B2-%D0%B1%D0%BE%D1%80/",
            alias: "Перейти на сайт"
        };
        this.advert[1] = {
            id: 1,
            actionDate: new Date(2013, 9, 6).getTime(),
            addDate: new Date(2013, 9, 4).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "С 6.30 до 17.00 возле Храма Владимирской иконы Божией Матери на поселке Котовского </strong> (Одесса, пр. Добровольского, 110) состоится акция в помощь Тимофею Салтановскому. Вы сможете отведать вкусной  домашней выпечки, солений или преобрести Hand Maid сувениры. Все вырученные средтва будут перечислены на лечение Тимофея",
            photo: false,
            advertType: ADVERT_TYPES.action
        };
        this.advert[2] = {
            id: 2,
            actionDate: new Date(2013, 9, 6).getTime(),
            addDate: new Date(2013, 9, 4).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Корпорация клоунов 'Оранжевое настроение' проводит БЛАГОТВОРИТЕЛЬНЫЙ детский клоун-концерт 'ДЛЯ ТИМОШКИ'. Цену билета каждый зритель определяет сам. Все средства, собранные в ходе мероприятия будут переданы на лечение Салтановского Тимошки.</p> <p>Мероприятие состоится <strong>6 октября в 12:00 по адресу: Екатериниская площадь, 6, театр-кабаре 'Буффон'</strong>",
            photo: false,
            advertType: ADVERT_TYPES.action
        };
        this.advert[3] = {
            id: 3,
            actionDate: new Date(2013, 9, 7).getTime(),
            addDate: new Date(2013, 9, 7).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: 'Благотворительная акция "СпасиБо, Одесса!" принесла Тимоше 6599 грн. Спасибо всем, кто участвовал в акции и кто помогал ей состояться!',
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[4] = {
            id: 4,
            actionDate: new Date(2013, 9, 9).getTime(),
            addDate: new Date(2013, 9, 9).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: 'Клоун-концерт собрал для Тимоши 1523 гривны, включая деньги, которые пожертвовали взамен на выпечку, её предлагали после концерта.!',
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[5] = {
            id: 5,
            actionDate: new Date(2013, 9, 13, 12, 0).getTime(),
            addDate: new Date(2013, 9, 13).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Корпорация клоунов 'Оранжевое настроение' проводит ЕЩЕ ОДИН БЛАГОТВОРИТЕЛЬНЫЙ детский клоун-концерт 'ДЛЯ ТИМОШКИ'. Цену билета каждый зритель определяет сам. Все средства, собранные в ходе мероприятия будут переданы на лечение Салтановского Тимошки.</p> <p>Мероприятие состоится <strong>13 октября в 12:00 по адресу: Екатериниская площадь, 6, театр-кабаре 'Буффон'</strong>",
            photo: false,
            advertType: ADVERT_TYPES.action
        };
        this.advert[6] = {
            id: 6,
            actionDate: new Date(2013, 9, 10).getTime(),
            addDate: new Date(2013, 9, 10).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Сегодня в Свято-Успенском монастыре  БО 'СПАСИБО' инкассировала из ящичков Тимоши вместе с батюшкой Лонгином <strong>4000 грн</strong>.<br />Благодарим Владыку Агафангела и всю братию Успенского монастыря , что помогают собирать денежку для малыша. ",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[7] = {
            id: 7,
            actionDate: new Date(2013, 9, 12).getTime(),
            addDate: new Date(2013, 9, 12).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Волонтерами БФ 'Благовещение' 2 и 5 октября проведен ряд инкассаций боксов для Тимофея Салтановского: в Спасо-Преображенском соборе, Соборе Святой Троицы, Пантелеимоновском, Иверском и Свято-Ильинском монастырях. Сумма пожертвований составила: <strong>16837 грн., 216 долл., 5 евро, 1010 рублей.</strong>",
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
            } else {
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
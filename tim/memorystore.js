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

        this.persona[1] = {
            id: 1,
            name: "Тимофей",
            surname: "Салтановский",
            dateOfBirth: new Date(2012, 10, 3).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "болезнь Гиршпрунга, тотальной формы (рабочего кишечника всего 50 см). Илеостома. синдром короткой кишки. Носитель кишечных свищей. Белково-энергетическая недостаточность 2 степени. Перитонит. Некроз восходящей ободочной кишки",
            treatmentId: 1,
            collectionState: COLLECTION_STATE.finished,
            message: "<p>За первые 10 дней своей жизни Тимоша перенёс 3 операции, 48 дней реанимации...</p>" +
                "<p> В свои 11 месяцев мальчишка весит всего 5 кг 200 гр, кишечник ребенка практически не усваивает еду, поскольку рабочая его часть намного меньше необходимой, всего около 50 см. Малыш борется за жизнь изо всех сил, он многое пережил, но и впереди ребёнку предстоит перенести немало!</p>" +
                "<p>У украинских и российских врачей, которые неоднократно обследовали, консультировали и первыми операциями смогли спасти ребёнка, нет практики в лечении таких тяжёлых форм болезни Гиршпрунга, они только поддерживают ослабевший организм, поскольку оперировать возможно при весе не менее 10 кг, но ни технически, ни практически не удалось помочь Тимофею достичь этой массы тела на протяжении первого года. В дальнейшем из-за отставания в физических параметрах прогнозируется отставание и в других сферах развития и навыках.</p>" +
                "<p>Родители Тимофея - обычные люди, в семью которых вместе с рождением долгожданного ребеночка пришла БЕДА... За 10 месяцев борьбы за своего сыночка они истратили все сбережения и теперь того, что зарабатывает отец Тимошки, с трудом хватает на уход и лечение... Родные и близкие люди оказывают максимальную поддержку и помощь, но этого, к сожалению, недостаточно...</p>" +
                "<p>Тимофею не справиться без материальной помощи неравнодушных людей, ведь его жизнь оценили в 120 000 евро. Одна надежда на опыт и многолетнюю практику немецких врачей!</p>" +
                "<p>У каждого должен быть шанс быть счастливым и здоровым, у Тимоши этот шанс есть. Помогите победить этот страшный диагноз!!!</p>",
            helpNow: "<strong>Россия:</strong> можно править отправить СМС на номер 3116 с текстом 'meg&nbsp;9257102707&nbsp;сумма'",
            messageComment: "Текст обращения отредактирован волонтером Одесского форума (14.10.2013). Стилистика и орфография автора сохранена."
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
        this.financeState[6] = {
            id: 6,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 45946.18,
            toDate: new Date(2013, 9, 13).getTime()
        };
        this.financeState[7] = {
            id: 7,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 58628.35,
            toDate: new Date(2013, 9, 16).getTime()
    };
        this.financeState[8] = {
            id: 8,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 124023.4,
            toDate: new Date(2013, 9, 21).getTime()
        };
        this.financeState[9] = {
            id: 9,
            personaId: 1,
            currency: 1,
            total: 120000,
            collected: 136246,
            toDate: new Date(2013, 9, 20).getTime()
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
        this.foundations[3] = {
            id: 3,
            personaId: 1,
            name: "Благотворительная организация 'Благовещение'",
            link: "http://blagovest.od.ua/actual/207-saltanovskiy-timofey.html",
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
            actionDate: new Date(2013, 9, 6, 12,0).getTime(),
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
        this.advert[8] = {
            id: 8,
            actionDate: new Date(2013, 9, 19, 12, 00).getTime(),
            addDate: new Date(2013, 9, 14).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "<strong>19 октября, парк им. Горького, День открытия фонтана,стартуем в 12.00</strong><p>Акция 'Время Добрых Дел' в поддержку очаровательного малыша, Тимофея Салтановского!!!</p><p>В программе как всегда домашние вкусности, хенд-мейд, шоу программа для деток от наших замечательных друзей 'Фантазеркины', так же у вас будет возможность сфотографироваться с героями шоу на память!</p><p>Будем рады видеть всех желающих!!!! Обещаем будет весело! </p><small>Очень ждем помощи от наших кулинаров и мастериц! <a href='http://forum.od.ua/showthread.php?t=1621593&p=42362778#post42362778'>Подробнее здесь</a></small>",
            photo: false,
            advertType: ADVERT_TYPES.action
        };

        this.advert[9] = {
            id: 9,
            actionDate: new Date(2013, 9, 17).getTime(),
            addDate: new Date(2013, 9, 17).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Немецкий фонд Ein Herz fur Kinder выделил для Тимоши <strong>10 000 евро</strong>, которые будут перечислены при наличии остальной суммы! Гранд уже отправлен в клинику.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[10] = {
            id: 10,
            actionDate: new Date(2013, 9, 17).getTime(),
            addDate: new Date(2013, 9, 17).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "БО 'Спасибо' проинкассированла 2 ящичка на Тимошу в Свято-Успенском мужском монастыре. В них было <strong>1774</strong> грн. Спасибо всем жертвователям за помощь!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };

        this.advert[11] = {
            id: 11,
            actionDate: new Date(2013, 9, 17).getTime(),
            addDate: new Date(2013, 9, 17).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "БО 'Благовещение' проинкассированла ящики в Спасо-Преображенском соборе. Собранная сумма составила: <strong>9649 грн, 105 $; 1250 рублей и 15 евро</strong>. Спаси Господи всех пожертвовавших для Тимофея Салтановского!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[12] = {
            id: 12,
            actionDate: new Date(2013, 9, 19).getTime(),
            addDate: new Date(2013, 9, 19).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "На канале 1+1 в новостях ТСН вышел сюжет про Тимофея, посмотреть можно здесь: <a href='http://ru.tsn.ua/video/video-novini/dlya-togo-chtoby-spasti-zhizn-godovalomu-timofeyu-ne-hvataet-tolko-neravnodushiya-lyudey.html?type=1560'>перейти на страницу ТСН</a>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[13] = {
            id: 13,
            actionDate: new Date(2013, 9, 19).getTime(),
            addDate: new Date(2013, 9, 19).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Сегодня в парке Горького состоялась Благотворительная акция 'Время добрых дел' в помощь Тимофею Салтановскому. Собрали и передали папе Тимоши (он тоже присутствовал на акции) - <strong>13600грн</strong>!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[14] = {
            id: 14,
            actionDate: new Date(2013, 9, 21).getTime(),
            addDate: new Date(2013, 9, 21).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Добрый волшебник для Тимоши нашелся и откликнулся на мольбу матери помочь!!!<strong>650 000</strong> грн " +
                "были переведены в помощь Тимоше Салтановскому! <strong>(шестьсот пятьдесят тысяч гривен)</strong> " +
                "От участников сбора и всех родных и близких Тимоши благодарим этого человека за проявленное милосердие и такой огромный вклад в жизнь этого маленького мальчика! " +
                "Мы будем молиться за этого человека, чтобы Господь Бог восполнил его доброту и сердечность. Желаем этому волшебнику и его близким здоровья и пусть добрые дела вернутся к нему сторицей!",
            photo: "14.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[15] = {
            id: 15,
            actionDate: new Date(2013, 9, 28).getTime(),
            addDate: new Date(2013, 10, 6).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "У БО 'СПАСИБО' от снятых на Тимошу ящиков из храмов есть <strong>3733</strong>. Эти деньги будут храниться на счету БО для Тимоши. Если они не понадобятся, то будут перечислены в помощь другому ребенку.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[16] = {
            id: 16,
            actionDate: new Date(2013, 9, 31).getTime(),
            addDate: new Date(2013, 10, 6).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Проинкассированы боксы БО 'Благовещение', поставленные для Тимошки Салтановского в Спасо-Преображенском соборе на <strong>6604 грн и 25$</strong>, в Храме Св. Виктора в Авангарде на <strong>4557 грн и 60$</strong>. Валюта передана родителям, гривны будут перечислены на счет. Спаси Господи благослови людей, которые не прошли мимо беды нашего Тимофея!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[17] = {
            id: 17,
            actionDate: new Date(2013, 9, 31).getTime(),
            addDate: new Date(2013, 10, 6).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Была произведена инкассация копилочек от БФ 'Пчёлка',  сумма <strong>17 057 грн. ( с 44 копилок)</strong>. Большое спасибо руководителям и всему замечательному коллективу сети аптек 'Гаевского' и 'Фармации'!!! Сумма с копилок, пожертвования добрых людей и фонда составили <strong>32 943 грн.</strong> Итого: общая сумма,которая будет переведена в клинику БФ 'Пчёлка':  <strong>50 000 грн.</strong> Спасибо БФ ' Пчёлке'!",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[18] = {
            id: 18,
            actionDate: new Date(2013, 10, 02).getTime(),
            addDate: new Date(2013, 10, 6).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Вышел сюжет на телеканале канале 'ГЛАС'(Одесса), посмотреть его можно по ссылке <a href='http://glasweb.com/cpasibo-chto-zhivoy/'>http://glasweb.com/cpasibo-chto-zhivoy/</strong>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[19] = {
            id: 19,
            actionDate: new Date(2013, 10, 03).getTime(),
            addDate: new Date(2013, 10, 6).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "С днем рождения малыш! Здоровья, здоровья и еще раз здоровья тебе!",
            photo: "19.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[20] = {
            id: 20,
            actionDate: new Date(2013, 10, 13).getTime(),
            addDate: new Date(2013, 10, 13).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Клиника наконец подтвердила поступление оплаты и визы выданы. Сегодня Тимофей вылетает в Германию и к 14.00 на нашему времени должен уже быть в клинике",
            photo: "20.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[21] = {
            id: 21,
            actionDate: new Date(2013, 10, 14).getTime(),
            addDate: new Date(2013, 10, 14).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "После очень тяжелого перелета, Тимофей наконец оказался в клинике. Начался сбор анализов и, надеемся, скоро будет уже лечение.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[22] = {
            id: 22,
            actionDate: new Date(2013, 10, 27).getTime(),
            addDate: new Date(2013, 10, 28).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Сегодня у Тимофея важный и сложный день - полное обследование желудочно-кишечного тракта и установка центрального катетера, который даст возможность с помощью капельниц вводить необходимое в/в питание и набрать нужный вес для операции по удлинению кишечника, все манипуляции под общим наркозом. Желаем малышу как можно легче перенести все эти неприятные, но необходимые процедуры, мамочке - сил и уверенности, что всё будет хорошо и Тимофей будет здоровым малышом, без трубочек и больниц.",
            photo: "22.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[23] = {
            id: 23,
            actionDate: new Date(2013, 10, 2).getTime(),
            addDate: new Date(2013, 10, 2).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Тимофею вшили долгосрочный катетер, сделали гастроскопию (всё нормально) и колоноскопию. Взяли частичку толстой кишки на анализ, ещё раз проверить, прежде чем удалять. Исследования будут делать в Швейцарии и через 3 недели должен быть ответ",
            photo: "23.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[24] = {
            id: 24,
            actionDate: new Date(2014, 0,13).getTime(),
            addDate: new Date(2014, 0, 13).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "К сожалению, порадовать хорошими новостями не получается: стул с кровью, метиоризм, боль в животике после еды, 1-2 раза в день рвота, есть ничего не хочет, потеряли 300 гр веса. Сегодня дважды брали кровь - электролиты в норме и всё остальное, тоже. Делали узи внутренних органов,тоже всё в порядке. Думают,что подхватил какую-то инфекцию, ведь всё тянет в рот, облизывает, грызёт. Прорезался один клык (зубик), с другой стороны пока никак. <b>Операцию назначили на 15 января, но если так будет продолжаться, то её придётся переносить на другое число.</b>",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[25] = {
            id: 25,
            actionDate: new Date(2014, 0,15).getTime(),
            addDate: new Date(2014, 0, 15).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Операцию отложили, т. к. нет мест в реанимации. Теперь только на следующей неделе, если всё будет хорошо и в реанимации появятся места. Состояние Тимофея стабилизировалось: прыгает, смеётся, перестало рвать, стул без крови",
            photo: "25.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[26] = {
            id: 26,
            actionDate: new Date(2014, 0,24).getTime(),
            addDate: new Date(2014, 0, 24).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Вчера была произведена операция по удлинению кишечника и заодно - поменяли бровиак (катетер)." +
                " Тима в 9-25 утра уже был в операционной и только в 19-00 вышел профессор и я смогла с ним поговорить. Операция была чуть больше 7 часов, а остальное время ушло на подготовку: наркоз общий и эпидуральный, постановка катетеров в ножки и ручки и т.д. Перед этим, Тимке ввели успокоительную свечку, т. к. он за день всё чувствовал и плакал, не слазил с рук. В операционную он поехал, как настоящий мужчина - без слёз, но с любимой игрушкой Тузиком, которую очень крепко прижимал к груди." +
                "В целом, операция прошла хорошо, без кровотечения. Была взята биопсия тонкой кишки - ганглиев (нервных окончаний) не обнаружено. К счастью, функция всасывания сохранена и её удлинили и дали нам надежду! После операции длина кишки - 1,40. " +
                "К большому сожалению, профессору пришлось подключить 2 стомы и закрыть одну, которая была выведена раньше. Две стомы, потому что огромный участок кишки без ганглиев и врачи опасаются, чтобы всё было хорошо, чтоб избежать непроходимости и т. п. " +
                "После операции мы сутки провели в реанимации, т. к. состояние было очень тяжёлым: температура 40 и давление 200. Это был очень тяжёлый день и ночь, они мне показались бесконечностью... Сейчас, мы уже в палате, хотя Тимошка весь в трубочках, зондах и аппаратах, но всё равно легче. Температура и давление снизились. Кушать и пить нельзя будет несколько дней, питаемся инфузиями. Дышит самостоятельно, но очень ослаблен.",
            photo: false,
            advertType: ADVERT_TYPES.news
        };
        this.advert[27] = {
            id: 27,
            actionDate: new Date(2014, 1,5).getTime(),
            addDate: new Date(2014, 1, 5).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Антибиотики уже отменили... Вчера инфузию отключали на 2 часа и Тимка с Мамой ходили на прогулку - счастью не было предела, наш любимчик очень соскучился за уличкой.            Понемногу вводят прикорм: пюрешку и йогурт натуральный... Правда болит животик, но профессор сказал, что ничего страшного - так должно быть.  Также Тимку измеряли по приезду в клинику - рост был 68 см, а сейчас 75 см, а вес достиг долгожданных 8 кг!!!",
            photo: "27.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[28] = {
            id: 28,
            actionDate: new Date(2014, 6,3).getTime(),
            addDate: new Date(2014, 6, 3).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Вчера были на проверке у профессора, сдали кровь, взвесились, обсудили питание. Операцию хотят делать на конец июля, но счёт пока не выставлен. <br />            Говорила о уменьшение инфузии, но пока и речи не может быть, к сожалению. Вес мы помаленьку стали прибавлять, но всё равно этого ещё мало. Тима не сидит ни минуты, на приёме умудрился играть со всеми мячом и профессор подарил ему надувной мяч и отметил его активность, что вот куда уходят все калории...!",
            photo: "28.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[29] = {
            id: 29,
            actionDate: new Date(2014, 6,25).getTime(),
            addDate: new Date(2014, 6, 25).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "6-ая операция позади, ещё один шажок Тимофея к здоровому будущему, о котором мы все так мечтаем!!!",
            photo: "29.jpg",
            advertType: ADVERT_TYPES.news
        };

        this.advert[30] = {
            id: 30,
            actionDate: new Date(2014, 6,31).getTime(),
            addDate: new Date(2014, 6, 31).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Эпидуральный и мочевой катетер сняли, вчера вытащили трубочку со стомы, остался только зонд, от которого мы пока избавиться не можем. Вся неделя сопровождалась рвотой, хотя мы пили только воду, в очень маленьких количествах. Сделано 5 рентгенов и с контрастом и без - непроходимости, слава Богу, нет! Кишечник очень плохо запускается... Сегодня ввели неосигмин для стимуляции кишечника. Капают два антибиотика, новолгин, парацетамол и инфузию для питания. Сбросили 50 грамм.",
            photo: "30.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[31] = {
            id: 31,
            actionDate: new Date(2014, 7,8).getTime(),
            addDate: new Date(2014, 7, 8).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Тима стал кушать, анализ крови хороший, в связи с этим вчера отменили антибиотики, обезболивающие, неосигмин. Вчера был перерыв от инфузии 4 часа, а сегодня - 6 часов, наконец-то гуляли без инфузии! Тимошкиной радости не было предела, что он только не делал: хлопал в ладоши, танцевал, всем встречным давал приветик и воздушный поцелуйчик, люди не проходили без улыбки.",
            photo: "31.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[32] = {
            id: 32,
            actionDate: new Date(2014, 7,17).getTime(),
            addDate: new Date(2014, 7, 17).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Вот уже прошла неделя, как нас выписали из больницы. Не писала сразу, т. к. Тима не очень хорошо себя чувствовал: была рвота пару дней, животик болел, очень жидкий стул, пища многая не переваривалась. Профессор сказал,что всё нормально, нужно время для восстановления! Перед выпиской сделали узи - слава Богу, всё хорошо! Просила профессора, чтоб уменьшил нам инфузию, но он сказал, что ещё рано об этом говорить и мы остались на том же объёме. Расширил нам рацион: разрешил Тиме дыню, грушу, кашу, сыр, 10% творог, чаи. Творог нам не пошёл, а вот сыр едим. Честно говоря, с одной стомой проще, чем с двумя.",
            photo: "32.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[33] = {
            id: 33,
            actionDate: new Date(2014, 8,27).getTime(),
            addDate: new Date(2014, 8, 27).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "Были мы на приёме у профессора, он вышел на один день, чтоб проконтролировать тяжёлых пациентов. Слава Богу, у Тимы всё хорошо - анализ кала и мочи нормальный, анализом крови, профессор и мы, тоже остались довольны. Подняли гемоглобин до 10, пришёл в норму селен,цинк и витамин D. Печёночные нормальные, завышен только витамин B12. Таблетки, вит. D по 500 мг в сутки , профессор сказал принимать ещё 3 месяца, витамины в инфузию - ежедневно. <br />За лето мы даже немножко подросли, хотя вес так и не наверстали, потеряли целый кг, когда болели. Всё равно, профессор похвалил Тиму и я успокоилась. Кушает с переменными успехами - день хорошо, а два не заставишь никак. Что только не делаешь, чтоб поел...))) Есть хочет только сам, как хрюша, всё вокруг потом нужно вымывать. Но я на всё согласна, лишь бы только кушал нормально!!! <br />             Очень активный, вот куда уходят все наши калории. Сейчас хобби у него - машинки, от маленьких до больших, стал рисовать, правда ничего там не разобрать, но зато старается и хочет сам ))). Стал сейчас каштаны собирать, листья с деревьев разноцветные. Любит качели, горки, мультики.<br/> Наши русские друзья возили нас в горы, набирали воду родниковую. Когда поднимались вверх, у меня уши заложило, как в самолёте, а Тима, начал плакать, видимо перепады давления. Когда доехали до места, всё прошло. Там очень красиво, много сёл и очень чистый воздух. Тима увидел лошадок и овечек, был в восторге! Спасибо Богу, что у нас есть такие замечательные люди, которые помогают и поддерживают нас в чужой стране, где всё так не просто, очень тяжело не зная языка и т. д. Погода тут очень переменчивая, день холодно и идёт дождь, что не знаешь, что надеть на Тиму, а на другой день - тепло, что в шортах бегает. Нашли тут голубику, уже трижды собирали. Тиме она очень нравится, ест с удовольствием. Никогда бы не подумала, что она тут есть, прежде я её в Тверской обл. собирала, когда к родным ездила...",
            photo: "33.jpg",
            advertType: ADVERT_TYPES.news
        };
        this.advert[34] = {
            id: 34,
            actionDate: new Date(2014, 9,28).getTime(),
            addDate: new Date(2014, 9, 28).getTime(),
            personaId: 1,
            caption: null,
            link: null,
            text: "ДОБРОГО ВРЕМЕНИ СУТОК, ДОРОГИЕ НАШИ ДРУЗЬЯ! Этот месяц был для нас очень тяжёлым. У Тимы наконец-то прорезались два верхних коренных зуба. Пожалуй, эти зубы для нас самые тяжёлые!!! Тима месяц отказывался кушать, температура 37,5 - 38,0, капризный, с ручек не слазил, спал урывками, мы потеряли целый кг веса, а как долго мы его набирали... Были у профессора, обсуждали стоит ли на этот период увеличить инфузию, т. к. Тима ничего не ест, решили,что нет, всё осталось как прежде. В этом месяце только было больше жиров на два дня, а так всё без изменений. Спасались нурофеном в свечах и мазью для дёсен на лидокаине, и то, это помогало лишь на пару часов, а потом снова 'караул'!!! Теперь мы зубастики, они прорезались, думаю,что расти будут полегче, по крайней мере ОЧЕНЬ СИЛЬНО НА ЭТО НАДЕЮСЬ! Аппетит пока не возобновился, едим, но всё с такими уговорами и мизерными дозами, но пока я и этому рада. Лучше чем ничего!!! Также этот месяц у нас была рвота, когда заставляли кушать, хоть пару ложек в день. Анализы пойдём сдавать 11 ноября, очень надеюсь, что они нас не подведут, профессор сейчас в отъезде.             Очень много сил потерял наш мальчик, вялый, ничего ему не хочется. Из-за сильной слабости, стали спать два раза в день, по часику. Ночью спим плохо и только с нами, часто просыпаемся, плачем, пьём элеотранс, смесь отказываемся кушать! Вот наказание эти коренные зубы, первые и то легче шли.",
            photo: "34.jpg",
            advertType: ADVERT_TYPES.news
        };


        this.document[1] ={
            id: 1,
            personaId: 1,
            name: "Паспорт матери",
            text: "Салтановская Олена Олеговна, родилась 20 апреля 1981 года, г. Одесса, Украина",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[1] = {
            id: 1,
            personaId: 1,
            name: "Паспорт",
            text: "",
            documentId:1,
            url: "../images/1/docs/1.jpg"
        }
        this.document[2] ={
            id: 2,
            personaId: 1,
            name: "Свидетельство о рождении",
            text: "Салтановский Тимофей Максимович, родился 3-го ноября 2012 года в г. Одесса",
            documentType: DOCUMENTS_TYPES.mainDocs
        };
        this.imageDocument[2] = {
            id: 2,
            personaId: 1,
            name: "Свидетельство о рождении",
            text: "",
            documentId:2,
            url: "../images/1/docs/2.jpg"
        };
        this.document[3] ={
            id: 3,
            personaId: 1,
            name: "Выписка из истории болезни",
            text: "",
            documentType: DOCUMENTS_TYPES.medicalDocs
        };
        this.imageDocument[3] = {
            id: 3,
            personaId: 1,
            name: "",
            text: "",
            documentId:3,
            url: "../images/1/docs/3.jpg"
        };
        this.imageDocument[4] = {
            id: 4,
            personaId: 1,
            name: "",
            text: "",
            documentId:3,
            url: "../images/1/docs/4.jpg"
        };
        this.document[4] ={
            id: 4,
            personaId: 1,
            name: "Счет из клиники",
            text: "",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[5] = {
            id: 5,
            personaId: 1,
            name: "",
            text: "",
            documentId:4,
            url: "../images/1/docs/5.jpg"
        };
        this.document[5] ={
            id: 5,
            personaId: 1,
            name: "Гарантия фонда Ein Herz fur Kinder",
            text: "Немецкий фонд обязуется оплатить 10 000 евро на счет клиники про условии предоплаты 110 000 евро",
            documentType: DOCUMENTS_TYPES.financeDocs
        };
        this.imageDocument[6] = {
            id: 6,
            personaId: 1,
            name: "",
            text: "",
            documentId:5,
            url: "../images/1/docs/6.png"
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
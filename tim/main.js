var AppRouter = Backbone.Router.extend({

    routes: {
        "": "facepageRoute",
        "help": "helpPage",
        "contacts": "contactsPageF",
        "documents": "documentsPage"
    },

    initialize: function () {

        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false};


        window.personaId = 1
        $.datepicker.setDefaults($.datepicker.regional[ "ru" ]);
        this.persona = new personaModel();
        this.persona.set({id: window.personaId});
        var _self = this;
        this.persona.fetch({success: function () {
            _self.headerView = new navigation({model: _self.persona});
            $('#header').html(_self.headerView.el);
            document.title = _self.persona.get("name") + " " + _self.persona.get("surname");
            //document.title;
        }});

    },

    facepageRoute: function () {
        this.pageData = {};
        this.persona = new personaModel({id: window.personaId});
        var _self = this;
        $(".nav li").removeClass('active');

        this.persona.fetch({success: function () {
            _self.pageData.treatmentCollection = new treatmentCollection();
            _self.pageData.financeStateCollection = new financeStateCollection();
            _self.pageData.adverts = new advertCollection();
            utils.fetchAll({toFetch: _self.pageData, success: function () {
                _self.pageData.persona = _self.persona;
                _self.mainPageView = new facePage(_self.pageData);
                $("#main_container").html(_self.mainPageView.el);
            }})
//            _self.pageData.treatmentCollection.fetch({success: function () {
//
//            }})
        }})
    },
    helpPage: function () {
            $(".nav li").removeClass('active');
            $('#nav_help').addClass("active");

        this.pageData = {};
        var _self = this;
        this.pageData.banks = new financeBanktCollection();
        this.pageData.webmoney = new webMoneyCollection();
        utils.fetchAll({toFetch: this.pageData, success: function () {
            var helpPageView = new helpPage(_self.pageData);
            $("#main_container").html(helpPageView.el)
        }})
    },
    contactsPageF: function () {
        $(".nav li").removeClass('active');
        $('#nav_contacts').addClass("active");

        this.pageData = {};
        this.pageData.contacts = new contactCollection();
        this.pageData.social = new socialCollection();
        this.pageData.foundations = new charityFoundationsCollection();
        var _self = this;
        utils.fetchAll({toFetch: this.pageData,success: function(){
            $("#main_container").html(new contactspage(_self.pageData).el)
        }})

    },
    documentsPage: function () {
        $(".nav li").removeClass('active');
        $('#nav_documents').addClass("active");

        $("#main_container").html("<div class='alert alert-info'>Мы работаем над этой страницей. Ознакомиться с документами Вы можете перейдя по ссылкам из раздела <a href='#contacts'> контакты</a>, или сразу на соответствующий <a href='http://forum.od.ua/showthread.php?t=2029026&p=41559180&viewfull=1#post41559180'>раздел Одесского форума</a></div>")
    }

});

utils.loadTemplate(['navigation',
    'facePage',
    'helpPage',
    'bankDetailsPanel',
    'bankDetailsPanelRow',
    'webmoneyDetailsPanel',
    'webmoneyDetailsRow',
    'contactspage',
    //'panelDefault',
    'contactsTable',
    'socialTable',
    'advertsView',
    'panelView'

], function () {

    app = new AppRouter();
    Backbone.history.start();
});
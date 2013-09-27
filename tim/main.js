var AppRouter = Backbone.Router.extend({

    routes: {
        "": "facepageRoute",
        "second": "second"
    },

    initialize: function () {

        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false};


        window.personaId = 1
        $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
        this.persona = new personaModel();
        this.persona.set({id: window.personaId});
        var _self = this;
        this.persona.fetch({success: function () {
            _self.headerView = new navigation({model: _self.persona});
            $('#header').html(_self.headerView.el);
            document.title = _self.persona.get("name") + _self.persona.get("surname");
            //document.title;
        }});

    },

    facepageRoute: function () {
        this.pageData = {};
        this.pageData.persona = new personaModel({id: window.personaId});
        var _self = this;

        this.pageData.persona.fetch({success: function () {
            _self.pageData.treatmentCollection = new treatmentCollection({personaId: _self.pageData.persona.treatmentId});
            _self.pageData.treatmentCollection.fetch({success: function () {
                _self.mainPageView = new facePage(_self.pageData);
                $("#main_container").html(_self.mainPageView.el);
            }})
        }})


    },
    second: function () {

        $("#main_container").html("second")

    }


});

utils.loadTemplate(['navigation', 'facePage'], function () {

    app = new AppRouter();
    Backbone.history.start();
});
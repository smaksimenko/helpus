window.facePage = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options));
        if (this.options.adverts.length != 0) {
            this.$el.find("#greeting").addClass("col-md-9");
            this.$el.find("#greeting").before(new advertsView({adverts: this.options.adverts}).el);
        } else {
            this.$el.find("#greeting").addClass("col-md-12");
        }
    }
})

window.advertsView = Backbone.View.extend({
    tagName: "div",
    className: "col-md-3",
    initialize: function () {
        this.render();
    },
    events: {
        "click #showActionsBtn": "switchAdvertsPanelToAction",
        "click #showNewsBtn": "switchAdvertsPanelToNews"
    },
    render: function () {


        var _self = this;
        this.$el.html(this.template(this.options));
        this.actions = this.options.adverts.where({advertType: ADVERT_TYPES.action}).reverse();
        this.news = this.options.adverts.where({advertType: ADVERT_TYPES.news}).reverse();
        var _panelBody;
        if (this.actions.length != 0) {
            for (var _i = 0; _i < (this.actions.length < 5 ? this.actions.length : 5); _i++) {
                var DO = new Date(this.actions[_i].get('actionDate'))
                var date = $.datepicker.formatDate("dd/mm/yy", DO);

                if (this.actions[_i].get('photo')){
                    //   _panelBody = "<img width='80px', src='../images/"+ window.personaId +"/"+"adverts/" +this.news[_i].id+".jpg'>";
                    _panelBody = "<div class='col-sm-8 col-md-8'><a href='../images/"+ window.personaId +"/"+"adverts/" +this.actions[_i].get('photo')+"' class='thumbnail'><img src='../images/"+ window.personaId +"/"+"adverts/" +this.actions[_i].id+".jpg' /></a></div>"
                    _panelBody += "<p>" + this.actions[_i].get('text') + "</p>"
                } else {
                    _panelBody = "<p>" + this.actions[_i].get('text') + "</p>"
                }
                if (this.actions[_i].get('link')){
                    _panelBody += "<a href='"+this.actions[_i].get('link')+"'>Перейти к источнику</a>";
                }


                _self.$el.find("#advertsRow").append(new panelWarning({title: "Акции: " + date, body: _panelBody}).el)
            }
        } else {
            this.$el.find("#showActionsBtn").attr("disabled", "disabled");
        }

        if (this.news.length != 0) {
            for (var _i = 0; _i < (this.news.length < QUANTITY_OF_SHOWN_NEWS ? this.news.length : QUANTITY_OF_SHOWN_NEWS); _i++) {
                var date = $.datepicker.formatDate("dd/mm/yy", new Date(this.news[_i].get('actionDate')));


                if (this.news[_i].get('photo')){
                 //   _panelBody = "<img width='80px', src='../images/"+ window.personaId +"/"+"adverts/" +this.news[_i].id+".jpg'>";
                    _panelBody = "<div class='col-sm-8 col-md-8'><a href='../images/"+ window.personaId +"/"+"adverts/" +this.news[_i].get('photo')+"' class='thumbnail'><img src='../images/"+ window.personaId +"/"+"adverts/" +this.news[_i].id+".jpg' /></a></div>"
                    _panelBody += "<p>" + this.news[_i].get('text') + "</p>"
                } else {
                    _panelBody = "<p>" + this.news[_i].get('text') + "</p>"
                }
                if (this.news[_i].get('link')){
                    _panelBody += "<a href='" + this.news[_i].get('link') +"'>Перейти к источнику</a>";
                }

                _self.$el.find("#advertsRow").append(new panelInfo({title: "Новости: " + date, body:_panelBody}).el)
            }
        } else {
            this.$el.find("#showNewsBtn").attr("disabled", "disabled");
        }
        if (localStorage.getItem('lastNews')) {
            if (localStorage.getItem('lastNews') != this.news.length) {
                this.$el.find("#showNewsBtn span").removeClass('hide');
                utils.blink("showNewsBtn span");
            }
        } else {
            localStorage.setItem('lastNews', 1);
            this.$el.find("#showNewsBtn span").removeClass('hide');
            utils.blink("showNewsBtn span");
        }
        if (localStorage.getItem('lastAction')) {
            if (localStorage.getItem('lastAction') != this.actions.length) {
                this.$el.find("#showActionsBtn span").removeClass('hide');
                utils.blink("showActionsBtn span");
            }
        } else {
            localStorage.setItem('lastAction', 1);
            this.$el.find("#showActionsBtn span").removeClass('hide');
            utils.blink("showActionsBtn span");
        }


        if (this.news.length == 0) {

        } else if (this.actions.length == 0) {

        } else {
            var lastAction = _.max(this.actions, function (m) {
                return m.get('actionDate')
            })
            var delta = (new Date().getTime() - lastAction.get('actionDate'));
            if (delta > ADVERTS_EXPIRED_HOURS) {
                this.switchAdvertsPanelToNews();

            } else {
                this.switchAdvertsPanelToAction();

            }
        }
        _self.$el.find('.thumbnail').fancybox();
    },
    switchAdvertsPanelToAction: function () {
        this.$el.find('.panel-info').each(function (i, el) {
            $(el).hide();
        })
        this.$el.find('.panel-warning').each(function (i, el) {
            $(el).show();
        })
        this.$el.find("#showActionsBtn").addClass("btn-default").removeClass("btn-warning");
        this.$el.find("#showNewsBtn").removeClass("btn-default").addClass("btn-info");

        localStorage.setItem('lastAction', this.actions.length);


    },
    switchAdvertsPanelToNews: function () {
        this.$el.find('.panel-warning').each(function (i, el) {
            $(el).hide();
        })
        this.$el.find('.panel-info').each(function (i, el) {
            $(el).show();
        })
        this.$el.find("#showActionsBtn").removeClass("btn-default").addClass("btn-warning");
        this.$el.find("#showNewsBtn").addClass("btn-default").removeClass("btn-info");

        localStorage.setItem('lastNews', this.news.length);

    }
})
window.advert = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options));
    }
})


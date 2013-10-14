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
        var actions = this.options.adverts.where({advertType: ADVERT_TYPES.action}).reverse();
        var news = this.options.adverts.where({advertType: ADVERT_TYPES.news}).reverse();
        if (actions.length != 0) {
            for (var _i=0; _i<(actions.length<5?actions.length:5); _i++){
                    var DO = new Date(actions[_i].get('actionDate'))
                    var date = $.datepicker.formatDate("dd/mm/yy", DO);
                    _self.$el.find("#advertsRow").append(new panelWarning({title: "Акции: " + date, body: actions[_i].get('text')}).el)

            }
        } else {
            this.$el.find("#showActionsBtn").attr("disabled", "disabled");
        }
        if (news.length != 0) {
            for (var _i=0; _i<(news.length<QUANTITY_OF_SHOWN_NEWS?news.length:QUANTITY_OF_SHOWN_NEWS); _i++){
                    var date = $.datepicker.formatDate("dd/mm/yy", new Date(news[_i].get('actionDate')));
                    _self.$el.find("#advertsRow").append(new panelInfo({title: "Новости: " + date, body: news[_i].get('text')}).el)
            }
        } else {
            this.$el.find("#showNewsBtn").attr("disabled", "disabled");
        }

        if (news.length==0){

        } else if (actions.length==0){

        } else {
            var lastAction = _.max(actions, function(m){
               return m.get('actionDate')
            })
            var delta = (new Date().getTime() - lastAction.get('actionDate'));
            if (delta > ADVERTS_EXPIRED_HOURS){
                this.switchAdvertsPanelToNews();
            } else {
                this.switchAdvertsPanelToAction();
            }


        }
    },
    switchAdvertsPanelToAction: function(){
        this.$el.find('.panel-info').each(function(i,el){
            $(el).hide();
        })
        this.$el.find('.panel-warning').each(function(i,el){
            $(el).show();
                })
        this.$el.find("#showActionsBtn").addClass("btn-default").removeClass("btn-warning");
        this.$el.find("#showNewsBtn").removeClass("btn-default").addClass("btn-info");
    },
    switchAdvertsPanelToNews: function(){
            this.$el.find('.panel-warning').each(function(i,el){
                $(el).hide();
            })
            this.$el.find('.panel-info').each(function(i,el){
                $(el).show();
                    })
        this.$el.find("#showActionsBtn").removeClass("btn-default").addClass("btn-warning");
                this.$el.find("#showNewsBtn").addClass("btn-default").removeClass("btn-info");
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


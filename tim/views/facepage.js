window.facePage = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options));
        if (this.options.adverts.length != 0) {
            this.$el.find("#greeting").addClass("col-md-9");
            this.$el.find("#greeting").before(new advertsView({adverts:this.options.adverts}).el);
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
    render: function () {
        var _self = this;
        this.$el.html(this.template(this.options));
        this.options.adverts.each(function(model){
            if (model.get("advertType")==ADVERT_TYPES.action){
                var date = $.datepicker.formatDate("dd/mm/yy", new Date(model.get('actionDate')));
            _self.$el.find("#advertsRow").append(new panelWarning({title: "Акции: " + date, body: model.get('text')}).el)
            }})
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


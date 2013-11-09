window.helpPage = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options));
        var id;
        var _self = this;
        this.options.banks.each(function (model, i) {
            if (i % 2 == 0) {
                id = "#banksListLeft";
            } else {
                id = "#banksListRight";
            }
            _self.$el.find(id).append(new bankDetailsPanel({model: model}).el);
        })
        var _k;
        if (this.options.banks.length % 2 == 0) {
            id = "#banksListLeft";
        } else {
            id = "#banksListRight";
        };
        _self.$el.find(id).append(new webmoneyDetailsPanel({coll: this.options.webmoney}).el);

    }

})

window.bankDetailsPanel = panelSuccess.extend({
        initialize: function () {
        this.render()
    },
    render: function () {
        this.$el.html(this.template(this.options))

        if (this.model.get("comment")) {
            this.$el.find('.panel-heading').after("<div class='panel-body'><em class='text-info' s>" + this.model.get("comment") + "</em></div>")
        }
        if (this.model.get('preset')) {
            if (this.model.get("comment")) {
                this.$el.find('.panel-body').append("<blockquote>" + this.model.get('preset').replace(new RegExp("\n", 'g'), "<br />") + "</blockquote>")
            } else {
                this.$el.find('.panel-heading').after("<div class='panel-body'><blockquote>" + this.model.get("preset").replace(new RegExp("\n", 'g'), "<br />") + "</blockquote></div>")
            }

        } else {
            if (this.model.get("name")) {
                this.$el.find('table').append((new bankDetailsPanelRow({name: "Наименование", value: this.model.get('organisation')}).el))
            }
            if (this.model.get("MFO")) {
                this.$el.find('table').append((new bankDetailsPanelRow({name: "МФО", value: this.model.get('MFO')}).el))
            }
            if (this.model.get("OKPO")) {
                this.$el.find('table').append((new bankDetailsPanelRow({name: "ОКПО", value: this.model.get('OKPO')}).el))
            }
            if (this.model.get("accountNumber")) {
                this.$el.find('table').append((new bankDetailsPanelRow({name: "Рассчетный счет", value: this.model.get('accountNumber')}).el))
            }
            if (this.model.get("target")) {
                this.$el.find('table').append((new bankDetailsPanelRow({name: "Назначение", value: this.model.get('target')}).el))
            }
            if (this.model.get("cardNumber")) {
                this.$el.find('table').append((new bankDetailsPanelRow({name: "Номер карты", value: this.model.get('cardNumber')}).el))
            }
        }
    }
})
window.bankDetailsPanelRow = Backbone.View.extend({
    tagName: "tr",
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options));

    }
})

window.webmoneyDetailsPanel = panelInfo.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options));
        var _self = this;

        this.options.coll.each(function(m){
            _self.$el.find("table").append(new webmoneyDetailsRow({model: m}).el)
        });

    }
})

window.webmoneyDetailsRow = Backbone.View.extend({
    tagName: "tr",
    initialize: function () {
        this.render();
    },
    render: function () {

        this.$el.html(this.template(this.options));
    }
})

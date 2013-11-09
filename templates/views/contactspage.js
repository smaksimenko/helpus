window.contactspage = Backbone.View.extend({
    className: "row",
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template());
        if (this.options.contacts.length > 0) {
            var panel = new panelDefault({title: "Контакты родственников"});
            panel.$el.append((new contactsTable({contacts: this.options.contacts})).el);
            this.$el.find('#panelsPlaceholder').append(panel.el);
        }
        if (this.options.social.length > 0) {
            var panelSocial = new panelDefault({title: "Социальные сети"});
            panelSocial.$el.append((new socialTable({social: this.options.social})).el);
            this.$el.find('#panelsPlaceholder').append(panelSocial.el);
        }
        if (this.options.foundations.length > 0) {
            var panelFoundations = new panelDefault({title: "Благотворительные организации"});
            panelFoundations.$el.append((new socialTable({social: this.options.foundations})).el);
            this.$el.find('#panelsPlaceholder').append(panelFoundations.el);
        }
    }
})


window.contactsTable = Backbone.View.extend({
    tagName: "table",
    className: "table",
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options))
    }
})
window.socialTable = Backbone.View.extend({
    tagName: "table",
    className: "table",
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.options))
    }
})

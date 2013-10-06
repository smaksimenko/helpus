window.panelView = Backbone.View.extend({
    initialize: function () {
            this.render();
        },
        render: function () {
            if (!this.options.body){
                this.options.body="";
            }
            this.$el.html(this.template(this.options));
        }
})

window.panelWarning = panelView.extend({
    className: "panel panel-warning"

})

window.panelDefault = panelView.extend({
    className: "panel panel-default"

})

window.panelInfo = panelView.extend({
    className: "panel panel-info"

})

window.panelDanger = panelView.extend({
    className: "panel panel-danger"
})

window.panelSuccess = panelView.extend({
    className: "panel panel-success"
})



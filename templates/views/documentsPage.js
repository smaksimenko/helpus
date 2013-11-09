window.documentsPage = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    render: function () {
        var _self = this;
        this.$el.html(this.template(this.options));
        for (var _i in DOCUMENTS_TYPES) {
            this.createTab(DOCUMENTS_TYPES[_i],_i=="mainDocs"?true:false)
        }
    },
    events: {
        "click #docsTab a": "tabSwitching"
    },
    tabSwitching: function (event) {
        $(event.currentTarget).tab('show');
        event.preventDefault();

    },
    createTab: function (type, active) {
        this.$el.find(".tab-content").append(new tabPanelView({active: active, elementId: DOCUMENTS_TABS[type].tabId}).el);
        if (this.options.documents.length > 0) {
            var _self = this;
            var docs = this.options.documents.where({documentType: type});
            if (docs.length > 0) {

                _.each(docs, function (m) {
                    var images = _self.options.documentsImages.where({documentId: m.id});
                    _self.$el.find("#"  + DOCUMENTS_TABS[type].tabId).append(new documentView({model: m, images: images}).el);
                })
            }
        }
    }
})

window.tabPanelView = Backbone.View.extend({
    className: "tab-pane",
    initialize: function () {
        if (this.options.active) {
            this.$el.addClass("active");
        }
        if (this.options.elementId) {
            this.$el.attr('id', this.options.elementId);
        }
        this.render();
    },
    render: function () {
        this.$el.html();
    }
})

window.documentView = panelDefault.extend({
    render: function () {
        this.options.body = "<div class='row'><p class='pad-h-l'>"+this.model.get('text')+"</p></div>";
        this.options.title = this.model.get('name');
        this.$el.html(this.template(this.options));
        var _self = this;
        _.each(this.options.images, function (m) {
            var offset="";
            switch (_self.options.images.length){
                case 1:
                    offset = "col-sm-offset-4 col-md-offset-4";
                    break;

            }
            _self.$el.find(".row").append("<div class='col-sm-6 col-md-3 "+offset+"'><a href='"+m.get("url")+"' class='thumbnail'><img src='" + m.get("url") + "' /></a></div>");
            _self.$el.find('.thumbnail').fancybox();
        })

    }
})
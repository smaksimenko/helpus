var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "main",
        "second"                  : "second"
    },

    initialize: function () {

        this.persona = new personaModel();
        this.persona.set({id:1});
        var _self = this;
        this.persona.fetch({success:function(){
            _self.headerView = new navigation({model:_self.persona});
            $('#header').html(_self.headerView.el);
            document.title = _self.persona.get("name") + _self.persona.get("surname") ;
            //document.title;
        }});

    },

	main: function() {
    var mainPageView =  new mainpage();
    $("#main_container").html();

    },
    second: function() {

        $("#main_container").html("second")

    }


});

utils.loadTemplate(['navigation','mainpage'], function() {

    app = new AppRouter();
    Backbone.history.start();
});
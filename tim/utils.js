window.utils = {

    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];
        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    },

    fetchAll: function (obj) {
        var counter = 0;

        for (var i in obj.toFetch) {
            obj.toFetch[i].fetch({success: function () {
                counter++;
                if (counter == Object.keys(obj.toFetch).length) {
                    obj.success();
                }
            }})
        }
    },
    formatNumber: function(num){
       return $.formatNumber(parseInt(num), {format: "#,###,###", locale: "ru"})
    }


//TODO age counter

};
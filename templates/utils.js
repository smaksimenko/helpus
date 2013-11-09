window.utils = {

    // Asynchronously load templates located in separate .html files
    loadTemplate: function (views, callback) {

        var deferreds = [];
        $.each(views, function (index, view) {
            if (window[view]) {
                deferreds.push($.get('../templates/tpl/' + view + '.html', function (data) {
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
    blink: (function () {
        var blinkList = [];
        return function (id) {
            if (blinkList.indexOf(id) == -1) {
                blinkList.push(id);
                setInterval(function () {
                    //$("#" + id).toggle();
                    $("#" + id).toggleClass('invisible');
                }, 1000)
            }
        }
    })(),
    formatNumber: function (num) {
        if (!num) {return 0};
        return $.formatNumber(parseInt(num), {format: "#,###,###", locale: "ru"})
    },
    millisecToSec: function (ms) {
        return ms / (1000);
    },
    millisecToMin: function (ms) {
        return ms / (1000 * 60);
    },
    millisecToHour: function (ms) {
        return ms / (1000 * 60 * 60);
    }



//TODO age counter

};
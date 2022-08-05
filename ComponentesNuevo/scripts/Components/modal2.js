define(['knockout'], function (ko) {
    function MyComponentViewModel(data) {
        var me = this;
        me.Model = ko.observable(data);

        me.CallBack = function () {
            if (me.Model().callback)
                me.Model().callback();
        };

        me.Icono = ko.computed(function () {
            return config.ImageURL + data.imagen;
        }, this);
    }
    return MyComponentViewModel;
});
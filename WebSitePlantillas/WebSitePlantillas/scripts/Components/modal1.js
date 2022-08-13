define(['knockout'], function (ko) {
    function MyComponentViewModel(data) {
        var me = this;
        me.Titulo = "Ejemplo uno";
        me.Contenido = "prueba de contenido";

    }
    return MyComponentViewModel;
});
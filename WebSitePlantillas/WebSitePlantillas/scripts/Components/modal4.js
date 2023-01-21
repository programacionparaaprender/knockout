define(['knockout'], function (ko) {
    function MyComponentViewModel(data) {
        var me = this;
        me.Titulo = "Ejemplo cuatro";
        me.Contenido = "prueba de contenido cuatro";
        me.firstname = data.firstname;
        me.lastname = data.lastname;
    }
    return MyComponentViewModel;
});
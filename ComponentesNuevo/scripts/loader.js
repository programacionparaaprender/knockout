
define(['jquery', 
'knockout',
"scripts/Components/modal1",
"scripts/Components/modal1.html"
], function ($, ko,
    modal1, modal1_html
    )
    
{
    
        ko.components.register('modal1', {
            viewModel: modal1,
            template: modal1_html
        });
        ko.components.register('modal2', {
            viewModel: { require: "scripts/Components/modal2" },
            template: { require: "scripts/Components/modal2.html" }
        });
        ko.applyBindings();
    
});

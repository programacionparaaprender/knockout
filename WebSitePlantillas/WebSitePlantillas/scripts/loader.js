
define(['jquery', 
'knockout',
    'scripts/Components/modal1',
    'text!scripts/Components/modal1.html',
    'scripts/Components/modal2',
    'text!scripts/Components/modal2.html'
], function ($, ko,
    modal1, modal1_html,
    modal2, modal2_html
    )
    
{    
    
    ko.components.register('modal1', {
            viewModel: modal1,
            template: modal1_html
        });

    ko.components.register('modal2', {
            viewModel: { require: "scripts/Components/modal2" },
        template: { require: "text!scripts/Components/modal2.html" }
        });
    ko.components.register('modal3', {
        viewModel: modal2,
        template: modal2_html
    });
    ko.components.register('modal4', {
        viewModel: { require: "scripts/Components/modal4" },
        template: { require: "text!scripts/Components/modal4.html" }
    });


    ko.applyBindings();
    
});

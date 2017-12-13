$(document).ready(
    function(){
        $('div.city a:first').fancybox(
            {
                width: 710,
                height: 260,
                autoCenter: true,
                titleShow: false,
                closeBtn: true,
                type: 'ajax',
                padding: 0,
                margin: 0,
                autoSize: false,
                scrolling: 'no',
                ajax: {dataType: 'html'},
                helpers:  {
                    overlay : null
                },
                opacity: 1
            }
        );
    }
);
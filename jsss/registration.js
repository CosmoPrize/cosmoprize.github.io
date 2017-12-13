function registerHandler(){
    $('#fast-reg form').submit(
        function(){
            var formData = {};
            $(this).find('input').each(
                function(){
                    var name = $(this).attr('name');
                    var val = $(this).val();
                    var type = $(this).attr('type');
                    if(name){
                        if(('checkbox' != type) || (('checkbox' == type) && $(this).prop("checked"))){
                            formData[name] = val;
                        }
                    }
                }
            )
            var url = $(this).attr('action');
            $.post(
                url,
                formData,
                function(data){
                    $('#fast-reg').parent().html(data);
                    registerHandler();
                },
                'html'
            );
            return false;
        }
    );

    $('.div-select').hover(
        function(){
            $(this).find('.list').stop().slideDown(300);
        },
        function(){
            $(this).find('.list').stop().slideUp(300);
        }
    )

    initDivSelect();

    $('#find-out').click(
        function(){
            $('.finded').toggle('fast');
        }
    )

    $('#country').parent().find('a').click(
        function(){
            var country = $('#country').val();
            if('' != country){
                var ulCities = $('#city').parent().find('ul').eq(0);
                var ulUsers = $('#referal').parent().find('ul').eq(0);
                ulCities.empty();
                $('#city').parent().find('.cur-value').text('Город');
                ulUsers.empty();
                $('#referal').parent().find('.cur-value').text('Пользователь');
                $.post(
                    '/users/' + country + '/cities/',
                    {},
                    function(data){
                        ulCities.html(data);
                        initDivSelect();
                        $('#city').val('');
                        ulCities.find('a').click(
                            function(){
                                var city = $('#city').val();
                                $('#referal').parent().find('.cur-value').text('Пользователь');
                                ulUsers.empty();
                                $.post(
                                    '/users/' + country + '/' + city + '/users/',
                                    {},
                                    function(data){
                                        ulUsers.html(data);
                                        initDivSelect();
                                        $('#referal').val('');
                                        ulUsers.find('a').click(
                                            function(){
                                                var id = $(this).attr('value');
                                                $('#fos_user_registration_form_referal').val(id);
                                            }
                                        )
                                    },
                                    'html'
                                )
                            }
                        )
                    },
                    'html'
                )
            }
        }
    );
}

$(document).ready(
    function(){
        $('#_registration').fancybox(
            {
                'width': 357,
                'height': 600,
                'centerOnScroll': true,
                'titleShow': false,
                'closeBtn': true,
                'type': 'ajax',
                'padding': 0,
                'margin': 0,
                'autoSize': false,
                'scrolling': 'no',
                'ajax': {'dataType' : 'html'},
                'helpers':  {
                    'overlay' : null
                },
                'beforeShow': function(){
                    registerHandler();
                }
            }
        );


    }
)

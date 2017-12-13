function initDivSelect(){
  $('.div-select a').click(function(){
        var select = $(this).parent().parent().parent();

        select.children('input').val($(this).attr('value'));
        select.find('.cur-value').text($(this).text());

        select.find('.list').css('display', 'none');

        return false;
    });
}

$.preloadImages = function(preload){
    $(document.createElement('img')).bind('load', function(){
        if(preload[0]) this.src = preload.shift();
    }).trigger('load');
}

$(document).ready(function(){
    $('#nav td').hover(
        function(){
            $(this).find('ul').stop().slideDown(200);
        },
        function(){
            $(this).find('ul').stop().slideUp(200);
        }
    )

    initDivSelect();
    
    $('.div-select').hover(
        function(){
            $(this).find('.list').stop().slideDown(300);
        },
        function(){
            $(this).find('.list').stop().slideUp(300);
        }
    )

    $('#player-btn').hover(
        function() {
            $(this).stop().animate({
                left: 0
            });
        },
        function() {
            $(this).stop().animate({
                left: -253
            });
        }
    );

    player.init();

    $('#player-btn').click(function(){
        player.openPlayer();
    });

    $("#top").scrollToTop({speed:500,start:500});

    $('#referal-id').fancybox(
        {
            autoSize: true,
            autoCenter: true,
            content: '<div class="referal-info">Ваша реферальная ссылка:<br/> ' + window.location.protocol + '//'
                + (!/^\d+\..+$/.test(window.location.hostname) ? $('#referal-id').text() + '.' : '')
                + window.location.hostname + ' <a href="'+ window.location.protocol + '//'
                + (!/^\d+\..+$/.test(window.location.hostname) ? $('#referal-id').text() + '.' : '')
                + window.location.hostname +'" target="_blank" class="referal-link"></a></div>',
            helpers:  {
                overlay : null
            },
            openEffect: 'elastic',
            closeEffect: 'elastic'
        }
    )

});

var player = {
    fog: null,
    player: null,

    init: function() {
        this.fog = $('#fog');
        this.fog.click(function(){
            player.closePlayer();
        });

        this.player = $('#player');

        this.setPlayerPosition();
    },
    openPlayer: function() {
        this.fog.fadeIn(200);
        this.player.fadeIn(400);
    },
    closePlayer: function() {

        this.player.fadeOut(400);
        this.fog.fadeOut(200);
    },
    setPlayerPosition: function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        var playerWidth = this.player.width();
        var playerHeight = this.player.height();

        this.player.css('left', ((windowWidth - playerWidth) * 0.5));
//        this.player.css('top', ((windowHeight - playerHeight) * 0.4));
        this.player.css('top', 130);

    }


}


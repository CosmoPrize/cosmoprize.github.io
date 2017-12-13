function alerts(content, autoclose){
    this.content = content;
    this.autoclose = autoclose;

    this.init = function(){
        var self = this;
        $.fancybox(
            {
                'width' : 'auto',
                'height' : 80,
                'content': '<div class="alert">' + self.content + '</div>',
                'centerOnScroll': true,
                'titleShow': false,
                'closeBtn': false,
                'type': 'html',
                'padding': 10,
                'margin': 0,
                'autoSize': false,
                'autoHeight': false,
                'autoWidth': true,
                'scrolling': 'no',
                'helpers':  {
                    'overlay' : null
                }
            }
        )

        if(this.autoclose){
            setTimeout(function(){$.fancybox.close(); },this.autoclose * 1000);
        }
    }

    this.init();
}
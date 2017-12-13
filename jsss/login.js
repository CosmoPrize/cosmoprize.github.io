$(document).ready(
    function(){
        var username = $('#_username');
        var password = $('#_password');
        var remember = $('#_remember_me');
        if(username.size() && password.size() && remember.size()){
            var form = username.parent();
            $('#_username, #_password').keypress(function(e) {
                if(e.which == 13) {
                    if(('' != $.trim(username.val())) && ('' != $.trim(password.val()))){
                        form.submit();
                    }
                }
            });
        }
    }
);

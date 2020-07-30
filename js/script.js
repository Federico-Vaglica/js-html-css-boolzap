$(document).ready(function(){
    $('#myMsg').keypress(function(){
        if(event.which == 13) {
            invioMessaggio();

            setTimeout(myFunction, 3000);
                function myFunction() {
                    var clone = $('.template1 .container-msg').clone();
                    
                    $('.container-chat').append(clone);
            }
        }
    })
    $('#send1').on('click',function(){
        invioMessaggio();

        setTimeout(myFunction, 3000);
        function myFunction() {
            var clone = $('.template .container-msg').clone();
            clone.find('.messaggio').addClass('fleft ricevuto');
            clone.find('.clone-msg').text('OK');
            $('.right-conversation.active').append(clone);
    }
    })

    /*FUNZIONI */
    function invioMessaggio() {
        var valoreInput = $('#myMsg').val();
                var clone = $('.template .container-msg').clone();
                clone.find('.messaggio').addClass('fright inviato');
                clone.find('.clone-msg').text(valoreInput);
                console.log(clone.children('.clone-msg'));
                
                $('.right-conversation.active').append(clone);    
    }
});



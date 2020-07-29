$(document).ready(function(){
    $('#myMsg').keypress(function(event){
        if(event.which == 13) {
            var valoreInput = $('#myMsg').val();
            var clone = $('.template .container-msg').clone();
            var x = clone.children('.messaggio');
            x.children('.clone-msg').text(valoreInput);
            console.log(clone.children('.clone-msg'));
            
            $('.container-chat').append(clone);

            setTimeout(myFunction, 3000);
                function myFunction() {
                    var clone = $('.template1 .container-msg').clone();
                    
                    $('.container-chat').append(clone);
            }
        }
    })
});



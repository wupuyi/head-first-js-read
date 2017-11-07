// $(document).ready(function(){

var trigger = $('#trigger');
var card = $('#card');
var loaded = false;
trigger.on('click',
    function() {
        // if(card.is(':visible')){
        //     card.hide();
        // }
        // console.log(card);
        if(!loaded) {
            card.load('card.html');
            loaded = true;
        }
        
        card.toggle();

    });
// });
$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        
    
        switch ($(".code").index(this)){
            case 0 :
                $('.mr-auto').data("Product", "Chef Anton's Italian Seasoning");
                $('#code').data("CODE", "1234");
                break;

            case 1 :
                $('.mr-auto').data("Product", "Genen Shouyu");
                $('#code').data("CODE", "GR33N");
                break;

            case 2 :
                $('.mr-auto').data("Product", "Schoggi Schokolade");
                $('#code').data("CODE", "H4LF50");
                break;
                
        }
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        var product = $( '.mr-auto' ).data( "Product" );
        var code = $( '#code' ).data( "CODE" );

        $( ".mr-auto" ).text( "" + product );
        $( "#code" ).text( "" + code );
        $('#liveToast').toast({ autohide: false }).toast('show');

        
    });

    $(document).keydown(function(keyPressed) {
        if (keyPressed.keyCode == 27) {
            $('#liveToast').toast({ autohide: true }).toast('hide');
        }
       });
});
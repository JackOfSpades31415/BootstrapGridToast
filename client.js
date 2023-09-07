$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        
        $('#name').html($(this).data('name'));
        $('#code').html($(this).data('code'));
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');

        
    });

    $(document).keydown(function(keyPressed) {
        if (keyPressed.keyCode == 27) {
            $('#liveToast').toast({ autohide: true }).toast('hide');
        }
       });
});
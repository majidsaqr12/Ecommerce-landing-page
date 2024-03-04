$(document).ready(function(){
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // Adjust this value according to your needs
            $('#scrollTopBtn').fadeIn(200);
            
        } else {
            $('#scrollTopBtn').fadeOut(200);
            
        }
    });
    
    // Animate the scroll to top
    $('#scrollTopBtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
    

});

// whatsapp button
document.getElementById('whatsappOrderBtn').addEventListener('click', function() {
    var phone = '+212770351416'; // Replace with your phone number
    var message = encodeURIComponent("Your custom message here");
    var whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp chat in a new tab/window
});

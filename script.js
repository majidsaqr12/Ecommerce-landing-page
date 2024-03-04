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


let showTimes = 5; // Number of times to show the message
let count = 0; // Counter for the toggle action

// Function to toggle the visibility of the message
function toggleMessageVisibility() {
    let message = document.getElementById('whatsappMessage');
    message.style.display = (message.style.display === 'none') ? 'block' : 'none';
    count++;

    if (count >= showTimes * 2) { // Each toggle consists of show and hide, hence multiplied by 2
        clearInterval(toggleInterval); // Stop toggling after showing and hiding five times
        message.style.display === 'none';
    }
}

// Start toggling the message visibility every second
let toggleInterval = setInterval(toggleMessageVisibility, 1000);


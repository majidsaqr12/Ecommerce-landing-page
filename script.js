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


// emailjs.init("YrXM6xr1JcO4UQCA3"); // Replace 'user_xxxxxx' with your user ID

// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Use emailjs.sendForm to submit form data
//     emailjs.sendForm('service_uehodo8', 'template_n13ol5f', this)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
            
//             // Show success message to the user
//             alert('تم استلام طلبك بنجاح سنتواصل معك');

//             // Clear the form fields
//             document.getElementById('myForm').reset();
            
//         }, function(error) {
//             console.log('FAILED...', error);

//             // Optionally, show an error message to the user
//             alert('Failed to send your form. Please try again.');
//         });
// });

document.getElementById('whatsappOrderBtn').addEventListener('click', function() {
    var phone = '+212770351416'; // Replace with your phone number
    var message = encodeURIComponent("Your custom message here");
    var whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp chat in a new tab/window
});

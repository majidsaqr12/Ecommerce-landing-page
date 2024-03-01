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



// function sendEmail(){
//     Email.send({
//         SecureToken : "c6bddf06-1ad0-45d4-b841-192b2f1a1e9e",
//         To : 'majidsakr86@gmail.com',
//         From : "smagedmohamed@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//     message => alert(message)
//     );
// }


// emailjs.init("FrkbxhlNhEhQj0U7q"); // Replace 'user_xxxxxx' with your user ID

// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Use emailjs.sendForm to submit form data
//     emailjs.sendForm('service_8odva1k', 'template_39rpw8k', this)
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

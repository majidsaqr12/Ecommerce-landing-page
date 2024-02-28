window.onscroll = function() {
    var header = document.querySelector('nav');
    if (window.scrollY > 50) {
        header.classList.add('bg-dark'); // Change to desired class on scroll
        header.classList.remove('bg-light');
    } else {
        header.classList.remove('bg-dark');
        header.classList.add('bg-light');
    }
};

emailjs.init("YrXM6xr1JcO4UQCA3"); // Replace 'user_xxxxxx' with your user ID

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        fullname: this.fullname.value,
        email: this.email.value,
        phone: this.phone.value,
    };

    // These are the parameters that will be passed to your email template
    emailjs.sendForm('service_uehodo8', 'template_n13ol5f', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // You can add your success message or redirection here
        }, function(error) {
            console.log('FAILED...', error);
            // You can add your failure message here
        });
});

document.getElementById('whatsappOrderBtn').addEventListener('click', function() {
    var phone = '+212770351416'; // Replace with your phone number
    // var fullname = document.querySelector('input[name="fullname"]').value;
    // var email = document.querySelector('input[name="email"]').value;
    // var phoneUser = document.querySelector('input[name="phone"]').value;
    
    var message = encodeURIComponent("");
    var whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp chat in a new tab/window
});
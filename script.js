$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollTopBtn').fadeIn(200);
        } else {
            $('#scrollTopBtn').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('#scrollTopBtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    // Handle add-to-cart clicks to update form and scroll
    $('.add-to-cart').click(function(event) {
        event.preventDefault();

        var productId = $(this).data('product-id');
        $('#productSelection').val(productId);
        selectedProductImageUrl = $(this).closest('.product-item').find('img').attr('src');

        $('html, body').animate({
            scrollTop: $("#_form").offset().top
        }, 1000);
    });
});

// WhatsApp button functionality
document.getElementById('whatsappOrderBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submit action

    // Initially assume all fields are filled
    let allFieldsFilled = true;

    // List of all input fields
    const fields = [
        document.getElementById('fullname'),
        document.getElementById('phone'),
        document.getElementById('address'),
        document.getElementById('productSelection'),
        document.getElementById('quantity'),
    ];

    // Check each field and apply red border if empty
    fields.forEach(field => {
        if (!field.value.trim()) {
            field.style.border = '2px solid red'; // Highlight empty fields
            allFieldsFilled = false;
        } else {
            field.style.border = ''; // Reset the border for filled fields
        }
    });

    // Stop the function if any field is empty
    if (!allFieldsFilled) return;

    // If all fields are filled, construct the custom message
    var fullname = document.getElementById('fullname').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var address = document.getElementById('address').value.trim();
    var productSelection = document.getElementById('productSelection').options[document.getElementById('productSelection').selectedIndex].text;
    var quantity = document.getElementById('quantity').value.trim();

    var customMessage = encodeURIComponent(`مرحبا بكم في متجرنا.\n\nFull Name: ${fullname}\nPhone: ${phone}\nAddress: ${address}\nProduct: ${productSelection}\nQuantity: ${quantity}`);

    // WhatsApp number
    var whatsappPhone = '+201095504278'; // Your WhatsApp business phone number

    // Generate WhatsApp URL
    var whatsappUrl = `https://wa.me/${whatsappPhone}?text=${customMessage}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
});

// Don't Requiring

// document.getElementById('whatsappOrderBtn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default form submit action

//     // Gather form values
//     var fullname = document.getElementById('fullname').value;
//     var phone = document.getElementById('phone').value;
//     var address = document.getElementById('address').value;
//     var productSelection = document.getElementById('productSelection').options[document.getElementById('productSelection').selectedIndex].text;
//     var quantity = document.getElementById('quantity').value;

//     // Construct the message
//     var customMessage = encodeURIComponent(`Hello! I would like to place an order.\n\nFull Name: ${fullname}\nPhone: ${phone}\nAddress: ${address}\nProduct: ${productSelection}\nQuantity: ${quantity}`);

//     // WhatsApp number
//     var whatsappPhone = '+2201095504278'; // This should be your WhatsApp business phone number

//     // Generate WhatsApp URL
//     var whatsappUrl = `https://wa.me/${whatsappPhone}?text=${customMessage}`;

//     // Open WhatsApp URL
//     window.open(whatsappUrl, '_blank');
// });


let showTimes = 5;
let count = 0;

// Toggle WhatsApp message visibility
function toggleMessageVisibility() {
    let message = document.getElementById('whatsappMessage');
    message.style.display = (message.style.display === 'none') ? 'block' : 'none';
    count++;

    if (count >= showTimes * 2) {
        clearInterval(toggleInterval);
        message.style.display === 'none';
    }
}

let toggleInterval = setInterval(toggleMessageVisibility, 1000);

document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icons = this.querySelector('.product-icons');
        icons.classList.add('show');
    });
    item.addEventListener('mouseleave', function() {
        const icons = this.querySelector('.product-icons');
        icons.classList.remove('show');
    });
});
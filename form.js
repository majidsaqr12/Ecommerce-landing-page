// Accessing the form and input elements
const contactForm = document.querySelector(".php-email-form");
const fullNameInput = document.querySelector("#fullname");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const formMessageDiv = document.querySelector("#formMessage"); // Accessing the message div

// Function to construct the email message
const getEmailMessage = ({ name, phone, address } = {}) => {
    return `
        <p>You Have Received A New Message From Bionimaroc Measuring Devices:</p>
        <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
            <p style="margin: 0;">Name: ${name}</p>
            <p style="margin: 12px 0;">Phone: ${phone}</p>
            <p style="margin: 12px 0;">Address: ${address}</p>
        </div>
    `;
};

// Event listener for the form submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailMessage = getEmailMessage({
        name: fullNameInput.value,
        phone: phone.value,
        address: address.value,
    });

    // Fetch API to send the form data
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        // headers: {
        //     'Content-Type': 'application/json', // Specifying the content type
        // },
        body: JSON.stringify({
            to: "contact@bionimaroc.com", // Replace with your email address
            subject: "Message From Bionimaroc Measuring Devices (Leading)",
            message: emailMessage,
        }),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // Resetting the form inputs is now handled by reset() method
        contactForm.reset();
        // Displaying success message
        formMessageDiv.innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
        // Message disappears after 3 seconds
        setTimeout(() => {
            formMessageDiv.innerHTML = '';
        }, 5000); // 3000 milliseconds = 3 seconds
    })
    .catch(error => {
        console.error('Error:', error);
        // Displaying error message
        formMessageDiv.innerHTML = '<p style="color: red;">There was a problem sending your message.</p>';
        // Error message disappears after 3 seconds
        setTimeout(() => {
            formMessageDiv.innerHTML = '';
        }, 5000); // 3000 milliseconds = 3 seconds
    });
});

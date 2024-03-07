function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = service_uzfrp42;
  const templateID = template_kfjxwzg;

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      console.log("Email sent successfully:", response);
      alert("Message sent successfully!");
    },
    function (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    }
  );
}

/* ================= CONTACT MEDIA ================= */

const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "Phone",
    value: "+91 6370457678",
    href: "tel:+916370457678",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "E-Mail",
    value: "mona.2005.lisha@gmail.com",
    href: "mailto:mona.2005.lisha@gmail.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Country",
    value: "India",
    href: "#",
  },
];

if (media) {
  media.innerHTML = contactList
    .map(
      (ele) => `
      <div class="media">
        <span><i class="${ele.icon}"></i></span>
        <div class="contact-value">
          <p>${ele.name}</p>
          <a href="${ele.href}" target="_blank">${ele.value}</a>
        </div>
      </div>
    `
    )
    .join("");
}

/* ================= EMAIL SEND ================= */

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("⚠️ All fields are mandatory!");
      return;
    }

    emailjs
      .send("service_9kb7fn7", "template_cj6c7nn", {
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Please try again!");
      });
  });
}

const BUSINESS_WHATSAPP = "254796910834";
const BUSINESS_EMAIL = "cooganelias@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

const serviceCards = document.querySelectorAll(".service-card");
const serviceSelect = document.getElementById("serviceType");
const bookSection = document.getElementById("book");

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const selected = card.getAttribute("data-service");
    serviceSelect.value = selected;
    bookSection.scrollIntoView({ behavior: "smooth" });
    document.getElementById("deviceModel").focus();
  });
});

document.getElementById("repairForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const service = serviceSelect.value;
  const details = document.getElementById("deviceModel").value.trim();

  const message =
    `Hello! My name is ${name}.\n` +
    `Service needed: ${service}\n` +
    `Device & Issue: ${details}`;

  const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
});

document.getElementById("emailBtn").addEventListener("click", () => {
  const name = document.getElementById("customerName").value.trim() || "Customer";
  const service = serviceSelect.value;
  const details = document.getElementById("deviceModel").value.trim() || "Please advise on repair.";

  const subject = `Repair Inquiry: ${service} - ${name}`;
  const body = `Name: ${name}\nService: ${service}\nDetails: ${details}`;

  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

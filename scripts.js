// scripts.js - JavaScript for OnyXLuxe Tickets homepage

document.addEventListener("DOMContentLoaded", function () {
  // Get all preview buttons
  const previewButtons = document.querySelectorAll(".preview-button");
  previewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const ticketCard = this.closest(".ticket-card");
      const title = ticketCard.querySelector(".ticket-title").textContent;
      const description = ticketCard.querySelector(
        ".ticket-description"
      ).textContent;
      const details = ticketCard.querySelector(
        ".ticket-preview-details"
      ).innerHTML;

      alert(
        `Event: ${title}\n\n${description}\n\nDetails:\n${details
          .replace(/<strong>/g, "")
          .replace(/<\/strong>/g, "")
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "\n")}`
      );
    });
  });

  // Get all buy ticket buttons
  const buyButtons = document.querySelectorAll(".buy-ticket-button");
  buyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const ticketCard = this.closest(".ticket-card");
      const title = encodeURIComponent(
        ticketCard.querySelector(".ticket-title").textContent
      );
      const description = encodeURIComponent(
        ticketCard.querySelector(".ticket-description").textContent
      );
      const details = ticketCard.querySelector(
        ".ticket-preview-details"
      ).innerHTML;

      // Extract date, location, time, host from details
      const dateMatch = details.match(
        /<p><strong>Date:<\/strong> ([^<]+)<\/p>/
      );
      const locationMatch = details.match(
        /<p><strong>Location:<\/strong> ([^<]+)<\/p>/
      );
      const timeMatch = details.match(
        /<p><strong>Time:<\/strong> ([^<]+)<\/p>/
      );
      const hostMatch = details.match(
        /<p><strong>Host:<\/strong> ([^<]+)<\/p>/
      );

      const date = encodeURIComponent(dateMatch ? dateMatch[1] : "");
      const location = encodeURIComponent(
        locationMatch ? locationMatch[1] : ""
      );
      const time = encodeURIComponent(timeMatch ? timeMatch[1] : "");
      const host = encodeURIComponent(hostMatch ? hostMatch[1] : "");

      // Redirect to purchase page with event details
      window.location.href = `purchase.html?title=${title}&desc=${description}&date=${date}&location=${location}&time=${time}&host=${host}`;
    });
  });
});

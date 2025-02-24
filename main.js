document.addEventListener("DOMContentLoaded", function () {
  // Function to animate progress bars based on the data-percent attribute
  const progressBars = document.querySelectorAll(".progress-bar");
  const skillSections = document.querySelectorAll(".flex-col.items-center");

  // Show percentage inside progress bar
  progressBars.forEach((progressBar) => {
    const percentage = progressBar.getAttribute("data-percent");
    const percentageText = document.createElement("span"); // Create a span for percentage text
    percentageText.classList.add("percentage-text"); // Add a class for styling

    // Set the width of the progress bar according to the percentage
    progressBar.style.width = `${percentage}%`;

    // Insert the percentage text into the progress bar
    percentageText.innerText = `${percentage}%`;
    progressBar.appendChild(percentageText);

    // Optionally, animate the progress bar with a delay
    progressBar.style.transition = "width 1s ease-in-out";
  });

  // Create an Intersection Observer to detect when skill sections are in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the progress bars when in view
          const progressBar = entry.target.querySelector(".progress-bar");
          const percentage = progressBar.getAttribute("data-percent");
          progressBar.style.width = `${percentage}%`;

          // Optionally, add a class for more animations
          entry.target.classList.add("animate-skill");

          // Stop observing once animation is triggered
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when 50% of the skill section is in view
    }
  );

  // Observe each skill section
  skillSections.forEach((skillSection) => {
    observer.observe(skillSection);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");

  // Email Regex pattern for validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Reset error messages
    document
      .querySelectorAll(".error-message")
      .forEach((msg) => msg.classList.add("hidden"));
    emailField.classList.remove("error");
    messageField.classList.remove("error");

    const email = emailField.value.trim();
    const message = messageField.value.trim();

    // Check email validation
    if (!emailPattern.test(email)) {
      showError(emailField, "Please enter a valid email address!");
      isValid = false;
    }

    // Check if message is empty
    if (!message) {
      showError(messageField, "Please enter a message!");
      isValid = false;
    }

    if (isValid) {
      form.reset();
      alert("Thank you for your message! We will get back to you soon.");
    }
  });

  function showError(input, message) {
    const errorMessage = input.parentElement.querySelector(".error-message");
    errorMessage.innerText = message;
    errorMessage.classList.remove("hidden");
    input.classList.add("error");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".edu-exp-box");

  boxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.2}s`;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Get the target section ID and the element
    const targetId = this.getAttribute("href").substring(1); // Remove the "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 120; // Adjust for the height of your fixed header
      const targetPosition = targetElement.offsetTop - headerOffset; // Subtract the offset

      // Use window.scrollTo with smooth behavior
      window.scrollTo({
        top: targetPosition, // Position to scroll to
        behavior: "smooth", // Enable smooth scrolling
      });
    }
  });
});

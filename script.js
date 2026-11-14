const quote = document.getElementById("quote-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      quote.classList.remove("opacity-0", "translate-y-6");
    }
  });
});

observer.observe(quote);
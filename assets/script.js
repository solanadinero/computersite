const launchDate = new Date("2025-11-10");
const currentDate = new Date();

const diffTime = currentDate - launchDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const buyDays = Math.floor((diffDays) / 7) + 1;
document.getElementById("age").textContent = `for ${diffDays} days`;
document.getElementById("fridays").textContent = `${buyDays}`;

if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  document.getElementById("mobile-hidden").style.opacity = "1";
}
    
function copyMint() {
     const mint = document.getElementById("mint-id").innerText;
     navigator.clipboard.writeText(mint).then(() => {
     alert("mint address copied!");
  });
 }
  document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
        observer.unobserve(entry.target); // Optional: stop observing once visible
      }
    });
  }, {
    threshold: 0.12 // Trigger when 12% of the card is visible
  });

  cards.forEach((card) => {
    card.classList.add("hidden"); // Initial hidden state
    observer.observe(card);
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    // Get all items and the controls
    const items = carousel.querySelectorAll('.carousel-inner .carousel-item');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');
    let currentIndex = 0;

    // Function to update the active item
    function updateCarousel(newIndex) {
        // Remove 'active' class from current item
        items[currentIndex].classList.remove('active');

        // Calculate the new index, ensuring it wraps around
        if (newIndex >= items.length) {
            currentIndex = 0;
        } else if (newIndex < 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex = newIndex;
        }

        // Add 'active' class to the new item
        items[currentIndex].classList.add('active');
    }

    // Set the initial active item (in case the HTML is missing it)
    if (items.length > 0) {
        // Ensure only one item is active on load
        items.forEach(item => item.classList.remove('active'));
        items[0].classList.add('active');
    }


    // Add event listeners to buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            updateCarousel(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            updateCarousel(currentIndex + 1);
        });
    }
});

    

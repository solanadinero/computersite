const launchDate = new Date("2025-08-11");
const currentDate = new Date();

const diffTime = currentDate - launchDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const buyDays = Math.floor((diffDays - 32) / 7);
document.getElementById("age").textContent = `We're ${diffDays} days old!`;
document.getElementById("fridays").textContent = `${buyDays}`;
    
function copyMint() {
     const mint = document.getElementById("mint-id").innerText;
     navigator.clipboard.writeText(mint).then(() => {
     alert("Mint address copied!");
  });
 }

fetch('../data/price.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById("liquidity").textContent = `Current Liquidity: $ ${Number(data.liquidity_usd).toLocaleString()}`;
  })
  .catch(err => {
    console.error('Error loading price data:', err);
  });

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
    threshold: 0.12 // Trigger when 10% of the card is visible
  });

  cards.forEach((card) => {
    card.classList.add("hidden"); // Initial hidden state
    observer.observe(card);
  });
});

    

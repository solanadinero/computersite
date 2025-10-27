const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const API_URL = 'https://api.geckoterminal.com/api/v2/networks/solana/pools/CxwBwuE6dGKFti7AeLW8Dx7W4411t8moeCsTp4rbpmCP';

async function fetchPrice() {
  try {
    const res = await fetch(API_URL);
    const json = await res.json();

    const priceData = {
      fetched_at: new Date().toISOString(),
      price_usd: json.data.attributes.base_token_price_usd,
      volume_usd_24h: json.data.attributes.volume_usd.h24,
      liquidity_usd: json.data.attributes.reserve_in_usd,
      price_change_24h: json.data.attributes.price_change_percentage.h24,
    };

    const outputPath = path.join(__dirname, 'data');
    if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

    fs.writeFileSync(
      path.join(outputPath, 'data/price.json'),
      JSON.stringify(priceData, null, 2)
    );

    console.log('Price data saved:', priceData);
  } catch (err) {
    console.error('Error fetching price data:', err);
    process.exit(1);
  }
}

fetchPrice();

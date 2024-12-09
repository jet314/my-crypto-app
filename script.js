const btcPriceElement = document.getElementById('btc-price-value');
const xrpPriceElement = document.getElementById('xrp-price-value');

async function getCryptoPrices() {
    try {
        // Mengambil data harga BTC dari API Binance
        const btcResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const btcData = await btcResponse.json();
        btcPriceElement.textContent = `$${parseFloat(btcData.price).toFixed(2)}`;

        // Mengambil data harga XRP dari API Binance
        const xrpResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT');
        const xrpData = await xrpResponse.json();
        xrpPriceElement.textContent = `$${parseFloat(xrpData.price).toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        btcPriceElement.textContent = 'Error';
        xrpPriceElement.textContent = 'Error';
    }
}

// Panggil fungsi untuk mendapatkan harga
getCryptoPrices();

// Refresh data setiap 30 detik
setInterval(getCryptoPrices, 30000);

# Crypto Price Tracker - Complete Documentation

## **Project Overview**
This is a **Crypto Price Tracker** built using **Next.js** with API integration, state management, and Bootstrap for styling. It fetches real-time cryptocurrency prices from the CoinGecko API, allowing users to search for specific cryptocurrencies, refresh prices, and view a polished, professional UI.

## **Tech Stack Used**
- **Next.js** (React framework for SSR & CSR)
- **Bootstrap** (For styling & responsiveness)
- **React Query (TanStack Query)** (For state management & API calls)
- **Axios** (For making HTTP requests)
- **React Icons** (For icons used in the UI)

---

## **Installation & Setup**
Follow these steps to clone and run the project on your system.

### **1. Clone the Repository**
```sh
 git clone <your-repo-link>
 cd crypto-price-tracker/web
```

### **2. Install Dependencies**
Ensure you have **Node.js** installed (preferably Latest version). Then, install the required dependencies:
```sh
 npm install
```

### **3. Start the Development Server**
Run the following command to start the project in development mode:
```sh
 npm run dev
```
Now, open **http://localhost:3000** in your browser to see the app.

### **4. Building for Production**
If you want to build the project for production:
```sh
 npm run build
 npm start
```
---

## **API Integration**
- The app fetches data from **CoinGecko API** using **Axios**.
- Data is managed using **React Query**, which enables caching & auto-updates.
- Fetching logic is inside `/hooks/useCryptoPrices.js`.

### **API Endpoint Used**
```sh
 https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false
```

### **Example API Response**
```json
[
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "current_price": 58484.00,
        "symbol": "btc"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "current_price": 2113.76,
        "symbol": "eth"
    }
]
```

---

## **State Management**
- The project uses **React Query** for efficient data fetching.
- Queries automatically update and cache results.
- The custom hook **`useCryptoPrices.js`** handles fetching logic.

---

## **Features & Functionality**
**Live Cryptocurrency Prices** (Top 5 Cryptos from CoinGecko)
**Search Bar** (Filters results based on user input)
**Refresh Button** (Fetches latest price data)
**Loading & Error Handling** (Spinner and alert messages for better UX)
**Responsive Design** (Bootstrap ensures mobile-friendly UI)
**Professional Look** (Dark mode, modern UI, icons for better readability)

---

## **Troubleshooting & Common Issues**
### **1. `Module Not Found: react-icons`**
Run:
```sh
 npm install react-icons
```

### **2. `Error: Could not find a production build`**
You need to build the app before running in production:
```sh
 npm run build
 npm start
```
---

## **Contact Information**
For any queries, feel free to reach out:

**Name:** Abhiram Gelle  
**Email:** abhiramgelle738@gmail.com  
**Phone:** +1 678-480-4408  



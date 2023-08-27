import { useEffect, useState } from "react";
import "../styles/App.css";
import Coin from "./Coin";

function App() {

    const change24StyleRed = {
        color: "red",
        margin: 0
    }
    const change24StyleGreen = {
        color: "green",
        margin: 0
    }

    const url = "https://api.coincap.io/v2/assets"
    let [list, setList] = useState([])
    let [search, setSearch] = useState("")

    async function fetchText() {
        const response = await fetch(url);
        const res = await response.json();
        setList(res.data)
    }

    useEffect(() => {

        setTimeout(() => {
            fetchText()
        }, 1000)

    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = list.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="content">
            <div className="search-container">
                <input type="text" placeholder="search for a currency..." onChange={handleSearch} />
                <span className="material-symbols-outlined">search</span>
            </div>
            <div>
                {
                    filteredCoins.map(coin => {
                        return <Coin symbol={coin.symbol} name={coin.name} price={parseFloat(coin.priceUsd).toFixed(4)} change24={parseFloat(coin.changePercent24Hr).toFixed(4)} mkt_capital={parseFloat(coin.marketCapUsd).toFixed(4)} volume24={parseFloat(coin.volumeUsd24Hr).toFixed(4)} change24Style={coin.changePercent24Hr < 0 ? change24StyleRed : change24StyleGreen} />
                    })
                }
            </div>
        </div>
    )
}
export default App;
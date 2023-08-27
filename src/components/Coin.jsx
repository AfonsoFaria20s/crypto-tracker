import "../styles/Coin.css"

function Coin(props) {
    return (
        <div className="coin-content">
            <div className="name">
                <span id="symbol">{props.symbol}</span>
                <span id="name">{props.name}</span>
            </div>
            <div className="price_per-change">
                <span>Price: {props.price}<span id="dest">USD</span></span>
                <span>Change 24h: <span style={props.change24Style}>{props.change24}</span>%</span>
            </div>
            <div className="Mkt-Cap_Vol-Usd-24h">
                <span>Market Cap: {props.mkt_capital}<span id="dest">USD</span></span>
                <span>Volume 24h: {props.volume24}<span id="dest">USD</span></span>
            </div>
        </div>
    )
}
export default Coin;
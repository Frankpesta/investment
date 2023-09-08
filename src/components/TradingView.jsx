import React from "react";
import { SymbolOverview } from "react-ts-tradingview-widgets";

const TradingView = () => {
  return (
    <div className="h-screen mb-2">
    <SymbolOverview
      colorTheme="dark"
      autosize
      chartType="area"
      downColor="#800080"
      borderDownColor="#800080"
      wickDownColor="#800080"
      symbols={[
        [
            "BINANCE:BTCUSDT|All"
          ],
          [
            "BINANCE:ETHUSDT|All"
          ],
          [
            "BINANCE:XRPUSDT|All"
          ]
      ]}
    />
    </div>
  );
};

export default TradingView;

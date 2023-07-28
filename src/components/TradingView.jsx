import React from 'react';
import TickerTape from 'react-tradingview-components';

const TradingView = () => {
  return (
    <div className=''>
        <TickerTape widgetProps={{ 'colorTheme': "light" }} />
    </div>
  )
}

export default TradingView
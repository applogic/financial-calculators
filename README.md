# @archerjessop/financial-calculations

Comprehensive financial calculation utilities for real estate and business applications.

## Installation

```bash
npm install @archerjessop/financial-calculations
```

## Usage

```javascript
const {
  calculatePMT,
  formatCurrency,
  calculateCOCR15,
  calculateNetToBuyer,
  calculateROI
} = require('@archerjessop/financial-calculations');

// Calculate monthly payment
const payment = calculatePMT(300000, 0.0675, 30);
console.log(formatCurrency(payment, true)); // $1,956

// Calculate 15% down COCR
const cocr = calculateCOCR15(1000000, 90000);
console.log(`COCR: ${(cocr * 100).toFixed(1)}%`);

// Calculate costs
const costs = calculateNetToBuyer(1000000, 0.25);
console.log(`Net to buyer: ${formatCurrency(costs.netToBuyer)}`);
```

## API Reference

### Core Functions
- `calculatePMT(principal, annualRate, years)` - Calculate monthly loan payment
- `formatCurrency(amount, isMonthly)` - Format currency with K/M notation
- `formatPercentage(value, decimals)` - Format percentage values

### Real Estate Functions
- `calculateCOCR15(price, noi, rate, years)` - Cash-on-cash return for 15% down
- `calculateCOCR30(price, noi, rate, years)` - Cash-on-cash return for 30% down
- `calculateNetToBuyer(price, downPercent, constants)` - Total buyer costs
- `calculateAppreciation(price, rate, years, balloon, dscr)` - Appreciation scenarios

### Business Functions
- `calculateROI(gain, cost)` - Return on investment
- `calculateROE(netIncome, equity)` - Return on equity
- `calculateNPV(cashFlows, discountRate, investment)` - Net present value

### Aliases
- `calculateBalloonBalance()` - Alias for calculateRemainingBalance
- `calculateDSCRPayment()` - Calculate DSCR payment (70% of price)
- `calculateJVPayment()` - Calculate JV payment based on down payment

## License

MIT
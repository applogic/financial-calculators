/**
 * Main entry point for @archerjessop/financial-calculations
 */

// Core utilities
const { formatCurrency, formatPercentage, formatNumber, formatPriceValue } = require('./lib/core/formatting');
const { calculatePMT, calculateRemainingBalance, calculateInterestOverTime } = require('./lib/core/loan-calculations');

// Real estate calculations
const { calculateCashFlow, calculateCashFlowYield, calculateCapRate } = require('./lib/real-estate/cash-flow');
const { calculateCOCR, calculateCOCRScenario, calculateCOCR15, calculateCOCR30 } = require('./lib/real-estate/returns');
const { calculateAppreciation } = require('./lib/real-estate/appreciation');
const { calculateNetToBuyer } = require('./lib/real-estate/costs');

// Business calculations  
const { calculateROI, calculateROE, calculateCurrentRatio } = require('./lib/business/ratios');
const { calculateCompoundGrowth, calculatePresentValue, calculateNPV } = require('./lib/business/projections');

// Export everything
module.exports = {
  // Core
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatPriceValue,
  calculatePMT,
  calculateRemainingBalance,
  calculateInterestOverTime,

  // Real Estate
  calculateCashFlow,
  calculateCashFlowYield,
  calculateCapRate,
  calculateCOCR,
  calculateCOCRScenario,
  calculateCOCR15,
  calculateCOCR30,
  calculateAppreciation,
  calculateNetToBuyer,

  // Business
  calculateROI,
  calculateROE,
  calculateCurrentRatio,
  calculateCompoundGrowth,
  calculatePresentValue,
  calculateNPV,

  // Aliases for backwards compatibility
  calculateBalloonBalance: calculateRemainingBalance,
  calculateSellerFinancePayment: calculatePMT,
  calculateDSCRPayment: (price, rate = 0.075, years = 30) => calculatePMT(price * 0.70, rate, years),
  calculateJVPayment: (price, downPercent, rate = 0.075, years = 30) => calculatePMT(price * (1 - downPercent), rate, years)
};
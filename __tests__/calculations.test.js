const {
  calculatePMT,
  formatCurrency,
  formatPercentage,
  calculateCOCR15,
  calculateCOCR30,
  calculateNetToBuyer,
  calculateAppreciation,
  calculateROI,
  calculateBalloonBalance,
  calculateDSCRPayment
} = require('../index');

describe('Financial Calculations', () => {
  describe('Core Functions', () => {
    test('calculatePMT should work correctly', () => {
      const result = calculatePMT(280000, 0.075, 30);
      expect(result).toBeCloseTo(1957.80, 2);
    });

    test('formatCurrency should format correctly', () => {
      expect(formatCurrency(1500000)).toBe('$1.5M');
      expect(formatCurrency(75000)).toBe('$75K');
      expect(formatCurrency(999)).toBe('$999');
      expect(formatCurrency(2500, true)).toBe('$2,500');
      expect(formatCurrency(-50000)).toBe('-$50K');
    });

    test('formatPercentage should work correctly', () => {
      expect(formatPercentage(0.065)).toBe('6.5%');
      expect(formatPercentage(0.15, 0)).toBe('15%');
      expect(formatPercentage(0.0675, 2)).toBe('6.75%');
    });
  });

  describe('Real Estate Functions', () => {
    test('calculateCOCR15 should work correctly', () => {
      const result = calculateCOCR15(1000000, 100000, 0.075, 30);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1); // Should be reasonable percentage
    });

    test('calculateCOCR30 should work correctly', () => {
      const result = calculateCOCR30(1000000, 100000, 0.075, 30);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1);
      // 30% down should have higher COCR than 15% down
      const cocr15 = calculateCOCR15(1000000, 100000, 0.075, 30);
      expect(result).toBeLessThan(cocr15);
    });

    test('calculateNetToBuyer should return proper breakdown', () => {
      const result = calculateNetToBuyer(1000000, 0.25);
      expect(result).toHaveProperty('downPayment');
      expect(result).toHaveProperty('netToBuyer');
      expect(result).toHaveProperty('breakdown');
      expect(result.downPayment).toBe(250000);
      expect(result.netToBuyer).toBeGreaterThan(250000); // Should include costs
    });

    test('calculateAppreciation should work correctly', () => {
      const result = calculateAppreciation(1000000, 0.03, 5, 100000, 50000);
      expect(result).toHaveProperty('futureValue');
      expect(result).toHaveProperty('cashOutAfterRefi');
      expect(result.futureValue).toBeGreaterThan(1000000);
      expect(result.totalOwing).toBe(150000);
    });

    test('calculateBalloonBalance alias should work', () => {
      const result = calculateBalloonBalance(300000, 0.06, 30, 5);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(300000);
    });

    test('calculateDSCRPayment should work correctly', () => {
      const result = calculateDSCRPayment(1000000, 0.075, 30);
      const expected = calculatePMT(700000, 0.075, 30); // 70% of 1M
      expect(result).toBeCloseTo(expected, 2);
    });
  });

  describe('Business Functions', () => {
    test('calculateROI should work correctly', () => {
      const result = calculateROI(150000, 100000);
      expect(result).toBe(0.5); // 50% ROI
    });

    test('calculateROI should handle zero cost', () => {
      const result = calculateROI(150000, 0);
      expect(result).toBe(0);
    });
  });

  describe('Edge Cases', () => {
    test('should handle zero interest rates', () => {
      const result = calculatePMT(360000, 0, 30);
      expect(result).toBe(1000); // 360k / (30*12) = 1000
    });

    test('should handle invalid currency amounts', () => {
      expect(formatCurrency(NaN)).toBe('N/A');
      expect(formatCurrency(Infinity)).toBe('N/A');
    });

    test('should handle invalid percentage values', () => {
      expect(formatPercentage(NaN)).toBe('N/A');
      expect(formatPercentage(Infinity)).toBe('N/A');
    });
  });
});
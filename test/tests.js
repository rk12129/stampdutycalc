QUnit.test('Amounts under £125,001 have 0 SDLT', function(assert) {
  assert.strictEqual(calcStampDuty(1), 0, '1 should give 0 SDLT');
  assert.strictEqual(calcStampDuty(79635), 0, '79635 should give 0 SDLT');
  assert.strictEqual(calcStampDuty(125000), 0, '125000 should give 0 SDLT');
});

QUnit.test('Amounts between £125,001 and £250k (allowing for rounding)', function(assert) {
  assert.strictEqual(calcStampDuty(125001), 0, '125,001 should give 0 SDLT');
  assert.strictEqual(calcStampDuty(125049), 0, '125,049 should give 0 SDLT');
  assert.strictEqual(calcStampDuty(125050), 1, '125,050 should give 1 SDLT');
  assert.strictEqual(calcStampDuty(250000), 2500, '250,000 should give 2,500 SDLT');
});

QUnit.test('Amounts between £250,001 and £925k ', function(assert) {
  assert.strictEqual(calcStampDuty(250001), 2500, '£250,001 should give £2500 SDLT');
  assert.strictEqual(calcStampDuty(925000), 36250, '£925,000 should give £36,250 SDLT');
});

QUnit.test('Amounts between £925,001 and £1.5m', function(assert) {
  assert.strictEqual(calcStampDuty(925001), 36250, '£925,001 should give £36,250 SDLT');
  assert.strictEqual(calcStampDuty(1500000), 93750, '£1,500,000 should give £93,750 SDLT');
});

QUnit.test('Amounts over £1.5m', function(assert) {
  assert.strictEqual(calcStampDuty(1500001), 93750, '£1500001 should give £93,750 SDLT');
  assert.strictEqual(calcStampDuty(99000000), 11793750, '£99,000,000 should give £11,793,750 SDLT');
});
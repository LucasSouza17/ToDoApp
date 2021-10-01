describe('Teste de exemplo', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome'))).toBeVisible();
  });
  it('should have Compliments text', async () => {
    await expect(element(by.text('How are you'))).toBeVisible();
  });
});

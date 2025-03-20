import { expect, test } from '@playwright/test';

test.describe('Checkly tests', () => {
  test('Visit Checkly HQ home page @checkly', async ({ page }) => {
    const response = await page.goto('https://checklyhq.com');
    expect(response).not.toBeNull();

    if (response === null) {
      return;
    }

    expect(response.status()).toBeLessThan(400);
  });

  test('Visit Checkly HQ docs page @checkly', async ({ page }) => {
    const response = await page.goto('https://www.checklyhq.com/docs/');

    expect(response).not.toBeNull();

    if (response === null) {
      return;
    }

    expect(response.status()).toBeLessThan(400);
  });
});

import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('Amazon login', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();

  await page
    .getByRole('textbox', { name: 'Enter mobile number or email' })
    .fill(process.env.AMAZON_EMAIL!);

  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForLoadState('domcontentloaded');

  await page.locator('#ap_password').waitFor({
    state: 'visible',
    timeout: 30000
  });

  await page.locator('#ap_password').fill(process.env.AMAZON_PASSWORD!);

  await page.getByRole('button', { name: 'Sign in' }).click();
});

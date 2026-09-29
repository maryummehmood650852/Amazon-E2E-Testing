import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('laptop');
  await page.goto('https://www.amazon.com/s?k=laptop+computer&crid=PD0031JBJ4N1&sprefix=laptop%2Caps%2C516&ref=nb_sb_ss_p13n-expert-pd-ops-ranker_ci_hl-bn-left_9_6');
});

 
  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://www.amazon.com/s?k=laptop+computer&crid=Q1MQ6YO2G25R&sprefix=laptop%2Caps%2C424&ref=nb_sb_ss_p13n-expert-pd-ops-ranker_ci_hl-bn-left_9_6');

  
  const addtocartbtn = page.locator('#add-to-cart-button').click();
  await page.goto('https://www.amazon.com/MELIUNA-15-6-Laptop-Office-128GB/dp/B0HG9P3CJT/ref=sr_1_1_sspa?crid=Q1MQ6YO2G25R&dib=eyJ2IjoiMSJ9.uz6rSYOQSXrp005Dz8AO2ypNQ50uRQiTl98AbcdL9bO7zcnhj84rNTEOsqNGF0autI01OLiuyPS7rh3UhBKBK3FWr0_ULupII9kHhzo6q533F3SgGL_lu7X1engH1scYloFM0z31gCq_1xmscwkSCdXFGCUaQWVV-AHAjpIfuqie0hRcFVE_3EQ1ya3xUQMYZIL4yBtcxkGTUGrmAl96VD_TkFb-rpC5nbPXRsBiWYU.9w_q9fIzbg0RMdNx4dQveg6esKx6_JVM6xIBF1xDrEU&dib_tag=se&keywords=laptop%2Bcomputer&qid=1789502363&sprefix=laptop%2Caps%2C424&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');

  
});

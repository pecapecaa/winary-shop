const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const files = ['sto1', 'sto2', 'sto3', 'seating'];

  for (const name of files) {
    const page = await browser.newPage();
    const filePath = 'file://' + path.resolve(__dirname, name + '.html');

    if (name === 'seating') {
      await page.setViewportSize({ width: 1200, height: 900 });
    } else {
      await page.setViewportSize({ width: 900, height: 1200 });
    }

    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.resolve(__dirname, name + '.png'), fullPage: true });
    console.log('Done: ' + name + '.png');
    await page.close();
  }

  await browser.close();
})();

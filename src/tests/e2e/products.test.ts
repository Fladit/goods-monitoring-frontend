
import 'expect-puppeteer';

const DOMAIN = 'http://localhost:8080';

const PRODUCTS = [
  { route: 'products/milk', product: 'Пастеризованное' },
  { route: 'products/vegetables', product: 'Лук' },
];

describe('Категории и продукты к ним отрисованы', () => {
  PRODUCTS.forEach(({ product, route }) => {
    it(`Продукт ${product} отрисован`, async () => {
      await page.goto(`${DOMAIN}/${route}`);
      await expect(page).toMatchTextContent(product);
    });
  });
});

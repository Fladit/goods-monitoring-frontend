/**
 * @jest-environment jsdom
 */

import React from 'react';
import { generateImage } from 'jsdom-screenshot';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore } from './mock';
import { createStore } from '../../../store/store';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { MemoryRouter } from 'react-router';
import App from '../../../App';

expect.extend({ toMatchImageSnapshot });

const wait = (timeout: number) => new Promise(resolve => { setTimeout(() => { resolve(true); }, timeout); });

it('has no visual regressions', async () => {
  const store = createStore(mockStore);
  const currentUrl = '/products/milk';

  render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[currentUrl]}>
          <App/>
        </MemoryRouter>
      </Provider>,
      {},
  );

  await wait(1000);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});

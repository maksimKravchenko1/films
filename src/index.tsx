import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/components/app';

import { GlobalStyles } from './styles/global-styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
);

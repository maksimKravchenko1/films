import { HomePage } from '@/pages/home/index';

import { ErrorBoundary } from '../error-boundary';

export function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

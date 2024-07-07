// src/pages/_app.tsx
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import i18n from '../../i18n'; // Path relatif ke i18n.ts
import '../styles/globals.css'; // Path relatif ke globals.css
import { Suspense } from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("Navigator language:", navigator.language);
    console.log("i18n instance:", i18n);
    console.log("i18n detected language:", i18n.language);
    console.log("i18n functions available:", Object.keys(i18n));
  }, []);

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <Component {...pageProps} />
    </Suspense>
  );
}

export default appWithTranslation(MyApp);

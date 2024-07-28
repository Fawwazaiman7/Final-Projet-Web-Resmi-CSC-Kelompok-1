import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import i18n from "../../i18n";
import "../styles/globals.css";
import { Suspense } from "react";
import type { AppProps } from "next/app";
import NavBar from '../components/NavigationBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Tambahkan ini

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("Navigator language:", navigator.language);
    console.log("i18n instance:", i18n);
    console.log("i18n detected language:", i18n.language);
    console.log("i18n functions available:", Object.keys(i18n));
  }, []);

  return (
    <>
      <NavBar
        brandName="CSC PNJ"
        imageSrcPath="/csc-logo.png"
        navItems={[
          { name: 'Home', path: '/' },
          { name: 'Join Us', path: '/join-us' },
          { name: 'About Us', path: '/about' },
          { name: 'Contact Us', path: '/contact' },
          { name: 'FAQ', path: '/faq' },
          { name: 'Activities', path: '/activities' }
        ]}
      />

      <Suspense fallback={<div>Loading translations...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}

export default appWithTranslation(MyApp);

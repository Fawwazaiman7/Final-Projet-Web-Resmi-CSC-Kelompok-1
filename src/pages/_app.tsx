import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import i18n from "../../i18n";
import "../styles/globals.css";
import NavBar from '../components/NavigationBar/NavBar';
import Footer from "../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("Navigator language:", navigator.language);
    console.log("i18n detected language:", i18n.language);
    console.log('Available translations:', i18n.getResourceBundle(i18n.language, 'common'));


  }, []);

  return (
    <>
      <NavBar
        brandName="CSC PNJ"
        imageSrcPath="/csc-logo.png"
        navItems={[
          { name: 'Home', path: '/' },
          { name: 'Join Us', path: '/join_us' },
          { name: 'About Us', path: '/about' },
          { name: 'Contact Us', path: '/contact' },
          { name: 'Activities', path: '/activities' },
          { name: 'FAQ', path: '/FAQ' }
        ]}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import DarkModeToggle from '../../components/DarkModeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const Contact = () => {
  const { t, i18n } = useTranslation('common');
  console.log('Translation function ready:', !!t);
  console.log('Current language:', i18n.language);
  console.log('i18n instance:', i18n);
  console.log('Available translations:', i18n.getResourceBundle(i18n.language, 'common'));

  
  return (
    <div>
      <DarkModeToggle />
      <LanguageSwitcher />
        <h1>{t('contact_us_at')}</h1>
        <ul>
          <li>
            <a href="https://www.instagram.com/cscpnj/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://chat.whatsapp.com/LqzdLnBJDeuFfkvabIriSU" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:csc.pnj@gmail.com">Email: csc.pnj@gmail.com</a>
          </li>
        </ul>
        <p>{t('contact_description')}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default Contact;

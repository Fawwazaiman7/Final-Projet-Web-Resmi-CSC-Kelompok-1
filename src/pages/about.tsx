import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import DarkModeToggle from '../components/DarkModeToggle';

const About = () => {
  const { t, i18n } = useTranslation('common');
  console.log('Translation function ready:', !!t);
  console.log('Current language:', i18n.language);
  console.log('i18n instance:', i18n);
  console.log('Available translations:', i18n.getResourceBundle(i18n.language, 'common'));

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <DarkModeToggle />
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('id')}>Bahasa Indonesia</button>
      <h1>{t('about_us')}</h1>
      <p>{t('about_description')}</p>
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

export default About;

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
  const { t, i18n } = useTranslation('common');
  console.log('Translation function ready:', !!t);
  console.log('Current language:', i18n.language);
  console.log('i18n instance:', i18n);
  console.log('Available translations:', i18n.getResourceBundle(i18n.language, 'common'));

  return (
    <div>
      <LanguageSwitcher />
      <DarkModeToggle />
      <h1>{t('welcome')}</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              {t('about_us')}
            </Link>
          </li>
          <li>
            <Link href="/contact">
              {t('contact_us')}
            </Link>
          </li>
        </ul>
      </nav>
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

export default Home;

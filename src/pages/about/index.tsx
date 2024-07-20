import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import DarkModeToggle from "../../components/DarkModeToggle";
import LanguageSwitcher from '../../components/LanguageSwitcher';
import AboutSectionOne from "./AboutSectionOne";
import AboutSectionTwo from "./AboutSectionTwo";
import Breadcrumb from "../common/Breadcrumb";

const AboutPage = () => {
  const { t, i18n } = useTranslation("common");
  console.log('Translation function ready:', !!t);
  console.log('Current language:', i18n.language);
  console.log('i18n instance:', i18n);
  console.log('Available translations:', i18n.getResourceBundle(i18n.language, 'common'));

  return (
    <>
      <DarkModeToggle />
      <LanguageSwitcher />
      <Breadcrumb
        pageName={t('about_page_title')}
        description={t('about_page_description')}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default AboutPage;

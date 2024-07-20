import { useTranslation } from 'react-i18next';

const AboutSectionOne = () => {
  const { t } = useTranslation('common');

  return (
    <section>
      <h2>{t('about_section_one_title')}</h2>
      <p>{t('about_section_one_content')}</p>
    </section>
  );
};

export default AboutSectionOne;

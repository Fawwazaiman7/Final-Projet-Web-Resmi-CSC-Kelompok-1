import { useTranslation } from 'react-i18next';

const AboutSectionTwo = () => {
  const { t } = useTranslation('common');

  return (
    <section>
      <h2>{t('about_section_two_title')}</h2>
      <p>{t('about_section_two_content')}</p>
    </section>
  );
};

export default AboutSectionTwo;

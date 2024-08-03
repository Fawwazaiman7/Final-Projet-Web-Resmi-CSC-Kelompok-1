import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import styles from '../../styles/Contact_us/Contact.module.css';
import { useEffect, useState } from 'react';

const Contact = () => {
  const { t } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Atau bisa menampilkan loading spinner
  }

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>{t('contact_us_at')}</h1>

      <div className={styles.contactContent}>
        <div className={styles.contactItem}>
          <Image
            src="/instagram-logo.png"
            alt="Instagram"
            width={200}
            height={200}
            className={styles.contactIcon}
          />
          <a href="https://www.instagram.com/cscpnj/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <p>{t('contact_instagram')}</p>
          </a>
          <p>@CSCPNJ</p>
        </div>

        <div className={styles.contactItem}>
          <Image
            src="/whatsapp-logo.png"
            alt="WhatsApp"
            width={200}
            height={200}
            className={styles.contactIcon}
          />
          <a href="https://chat.whatsapp.com/LqzdLnBJDeuFfkvabIriSU" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <p>{t('contact_whatsapp_group')}</p>
          </a>
          <p>{t('contact_whatsapp_description')}</p>
        </div>

        <div className={styles.contactItem}>
          <Image
            src="/email-logo.png"
            alt="Email"
            width={200}
            height={200}
            className={styles.contactIcon}
          />
          <a href="mailto:csc.pnj@gmail.com" className={styles.contactLink}>
            <p>{t('contact_email')}</p>
          </a>
          <p>csc.pnj@gmail.com</p>
        </div>
      </div>
      <p className={styles.contactDescription}>{t('contact_description')}</p>
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

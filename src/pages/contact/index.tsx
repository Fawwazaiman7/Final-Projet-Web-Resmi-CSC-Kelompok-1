import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Image from 'next/image';

const Contact = () => {
  const { t, i18n } = useTranslation('common');
  
  console.log('Translation function ready:', !!t);
  console.log('Current language:', i18n.language);
  console.log('i18n instance:', i18n);
  console.log('Available translations:', i18n.getResourceBundle(i18n.language, 'common'));

  return (
    <div>
      <h1>{t('contact_us_at')}</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image 
            src="/instagram-logo.png" 
            alt="Instagram" 
            width={200} 
            height={200} 
            style={{ marginBottom: '10px' }} 
          />
          <a href="https://www.instagram.com/cscpnj/" target="_blank" rel="noopener noreferrer">
            <p>DM via Instagram</p>
          </a>
          <p>@CSCPNJ</p>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image 
            src="/whatsapp-logo.png" 
            alt="WhatsApp" 
            width={200} 
            height={200} 
            style={{ marginBottom: '10px' }} 
          />
          <a href="https://chat.whatsapp.com/LqzdLnBJDeuFfkvabIriSU" target="_blank" rel="noopener noreferrer">
            <p>Grup WA Diskusi MABA 2023</p>
          </a>
          <p>DISKUSI CSC 2023</p>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image 
            src="/email-logo.png" 
            alt="Email" 
            width={200} 
            height={200} 
            style={{ marginBottom: '10px' }} 
          />
          <a href="mailto:csc.pnj@gmail.com">
            <p>Partnership via Email</p>
          </a>
          <p>csc.pnj@gmail.com</p>
        </div>
        
      </div>
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

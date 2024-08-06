import { useState, useEffect } from "react";
import styles from "../../styles/Activities/Activities.module.css";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Activities = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);
  const [activityData, setActivityData] = useState<{ header: string | JSX.Element; text: string | JSX.Element; }[]>([]);

  useEffect(() => {
    setIsMounted(true);
    setActivityData([
      {
        header: <div><Image src="/ospf.jpg" alt="Activity 0" width={500} height={500} /> <h2 className={styles.headertxt}>OSPF</h2></div>,
        text: <div>{t("activity_0_text")}</div>,
      },
      {
        header: <div><Image src="/cscgtp.png" alt="Activity 0" width={500} height={500} /><h2 className={styles.headertxt}>GTP (Goes to Pesantren)</h2></div>,
        text: <div>{t("activity_1_text")}</div>,
      },
      {
        header: <div><Image src="/kmipn.png" alt="Activity 0" width={500} height={500} /><h2 className={styles.headertxt}>KMIPN VI</h2></div>,
        text: <div>{t("activity_2_text")}</div>,
      },
      {
        header: <div><Image src="/lion.jpg" alt="Activity 0" width={500} height={500} /><h2 className={styles.headertxt}>LION PARCEL </h2></div>,
        text: <div>{t("activity_3_text")}</div>,
      },
      {
        header: <div><Image src="/gebyar.png" alt="Activity 0" width={500} height={500} /><h2 className={styles.headertxt}>GEBYAR ORMAWA</h2></div>,
        text: <div>{t("activity_4_text")}</div>,
      },
    ]);
  }, [t]);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  if (!isMounted) {
    return null; 
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{t('activity_title')}</span>
        </div>

        <div className={styles.accordionGrid}>
          {activityData.map((activity, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""}`}
            >
              <button className={styles.accordionButton} onClick={() => handleToggle(index)}>
                {activity.header}
              </button>
              {activeIndex === index && (
                <div className={styles.accordionContent}>
                  <p>{activity.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default Activities;

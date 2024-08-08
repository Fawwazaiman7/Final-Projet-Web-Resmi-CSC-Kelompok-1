import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import styles from "../styles/Beranda/Beranda.module.css";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.bannerBg} dark-banner`}>
        <div className={styles.container}>
          <h1 className={styles.headingBanner}>Selamat datang di kelompok studi kami</h1>
        </div>
      </div>
      <section className={styles.contentSection}>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image src="" alt="Tentang CSC" width={200} height={200} />
          </div>
          <div className={styles.textContainer}>
            <h2>Tentang CSC</h2>
            <p>Computer Student Club (CSC) adalah kelompok studi mahasiswa di Politeknik Negeri Jakarta yang berfokus pada ranah keamanan siber, pengembangan perangkat lunak, dan IoT. Kami bertujuan untuk mengembangkan minat dan bakat mahasiswa serta meningkatkan prestasi mereka dalam bidang teknologi.</p>
            <div className={styles.buttonContainer}>
              <a href="/about" className={styles.button}>Ketahui lebih lanjut </a>
            </div>
          </div>
        </div>
        <div className={styles.spacing}></div>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image src="" alt="Ngapain aja sih di CSC?" width={200} height={200} />
          </div>
          <div className={styles.textContainer}>
            <h2>Ngapain aja sih di CSC?</h2>
            <p>Di Computer Student Club (CSC), kami aktif membimbing mahasiswa setiap pekan melalui kelas interaktif dan praktek secara langsung yang membahas berbagai aspek teknologi. Kelas yang kami adakan bertujuan untuk membantu memperluas pemahaman mahasiswa tentang keamanan siber, pengembangan perangkat lunak, dan perangkat IoT.</p>
            <div className={styles.buttonContainer}>
              <a href="/faq" className={styles.button}>Halaman FAQ </a>
            </div>
          </div>
        </div>
        <div className={styles.spacing}></div>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image src="" alt="Boleh tanya-tanya dulu?" width={200} height={200} />
          </div>
          <div className={styles.textContainer}>
            <h2>Boleh tanya-tanya dulu?</h2>
            <p>Boleh banget! Kami selalu siap untuk menjawab pertanyaan dari anggota, non-anggota, atau siapa pun yang tertarik. Anda dapat menghubungi kami melalui Whatsapp atau Instagram kami. Kami berkomitmen untuk memberikan jawaban informatif dan membantu menjawab apapun pertanyaan yang anda miliki. Jangan ragu untuk bertanya atau berdiskusi dengan kami!</p>
            <div className={styles.buttonContainer}>
              <a href="/contact" className={styles.button}>Hubungi kami </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;

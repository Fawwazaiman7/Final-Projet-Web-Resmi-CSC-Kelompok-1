import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home/Home.module.css";
import Carousel from "../components/Carousel/Carousel";

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
          <h1 className={styles.headingBanner}>
            Selamat datang di kelompok studi kami
          </h1>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image src="" alt="Tentang CSC" width={200} height={200} />
          </div>
          <div className={styles.textContainer}>
            <h2>Tentang CSC</h2>
            <p>
              Computer Student Club (CSC) adalah kelompok studi mahasiswa di
              Politeknik Negeri Jakarta yang berfokus pada ranah keamanan siber,
              pengembangan perangkat lunak, dan IoT. Kami bertujuan untuk
              mengembangkan minat dan bakat mahasiswa serta meningkatkan
              prestasi mereka dalam bidang teknologi.
            </p>
            <div className={styles.buttonContainer}>
              <a href="/about" className={styles.button}>
                Ketahui lebih lanjut
              </a>
            </div>
          </div>
        </div>

        <div className={styles.spacing}></div>

        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image
              src=""
              alt="Ngapain aja sih di CSC?"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>Ngapain aja sih di CSC?</h2>
            <p>
              Di Computer Student Club (CSC), kami aktif membimbing mahasiswa
              setiap pekan melalui kelas interaktif dan praktek secara langsung
              yang membahas berbagai aspek teknologi. Kelas yang kami adakan
              bertujuan untuk membantu memperluas pemahaman mahasiswa tentang
              keamanan siber, pengembangan perangkat lunak, dan perangkat IoT.
            </p>
            <div className={styles.buttonContainer}>
              <a href="/faq" className={styles.button}>
                Halaman FAQ
              </a>
            </div>
          </div>
        </div>

        <div className={styles.spacing}></div>
        <div className={styles.contentItem}>
          <div className={styles.imageContainer}>
            <Image
              src=""
              alt="Boleh tanya-tanya dulu?"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>Boleh tanya-tanya dulu?</h2>
            <p>
              Boleh banget! Kami selalu siap untuk menjawab pertanyaan dari
              anggota, non-anggota, atau siapa pun yang tertarik. Anda dapat
              menghubungi kami melalui Whatsapp atau Instagram kami. Kami
              berkomitmen untuk memberikan jawaban informatif dan membantu
              menjawab apapun pertanyaan yang anda miliki. Jangan ragu untuk
              bertanya atau berdiskusi dengan kami!
            </p>
            <div className={styles.buttonContainer}>
              <a href="/contact" className={styles.button}>
                Hubungi kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divisionContainer}>
        <h1 className={styles.divisionTitle}>Divisi CSC</h1>

        <div className={styles.divisionContentItem}>
          <div className={styles.divisionImageContainer}>
            <Image src="" alt="Cyber Security" width={200} height={200} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>Cyber Security</h2>
            <p>
              Divisi Cyber Security adalah wadah bagi mereka yang tertarik dalam
              dunia hacking. Di sini, kami memahami konsep-konsep esensial
              tentang keamanan jaringan, eksplorasi sistem operasi Linux, dan
              penetration testing untuk mengidentifikasi potensi kerentanan.
            </p>
            <div className={styles.divisionButtonContainer}>
              <a href="/CyberSec" className={styles.button}>
                Ketahui lebih lanjut
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divisionContentItem}>
          <div className={styles.divisionImageContainer}>
            <Image src="" alt="Software Development" width={200} height={200} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>Software Development</h2>
            <p>
              Divisi Software Development adalah lingkungan yang tepat untuk
              membangun dasar kuat dalam pemrograman. Kami menjelaskan konsep
              dasar pemrograman yang penting, memandu Anda dalam pengembangan
              perangkat lunak dari awal hingga akhir, dan mendalam ke dalam
              konsep Pemrograman Berorientasi Objek (OOP).
            </p>
            <div className={styles.divisionButtonContainer}>
              <a href="/Softdev" className={styles.button}>
                Ketahui lebih lanjut
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divisionContentItem}>
          <div className={styles.divisionImageContainer}>
            <Image src="" alt="Explore" width={200} height={200} />
          </div>
          <div className={styles.divisionTextContainer}>
            <h2>Explore</h2>
            <p>
              Divisi Explore memiliki fokus pada Internet of Things (IoT), yang
              merupakan konsep teknologi yang sedang berkembang. Di sini, kami
              membantu Anda memahami komponen-komponen komputer dan memberikan
              kesempatan untuk menggunakan platform Arduino. Kami ingin
              memperluas pengetahuan teknologi Anda dan mendorong inovasi dalam
              menciptakan solusi berbasis IoT yang bermanfaat.
            </p>
            <div className={styles.divisionButtonContainer}>
              <a href="/Explore" className={styles.button}>
                Ketahui lebih lanjut
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from "../../styles/Carousel/Carousel.module.css";
import { useTranslation } from 'react-i18next';

const Carousel = () => {
  const images = [
    { src: '/kmipn.png', alt: 'KMIPN(1)' },
    { src: '/lion.jpg', alt: 'Lion' },
    { src: '/lionparcel.png', alt: 'Lion Parcel' },
    { src: '/ospf.jpg', alt: 'OSPF(1)' },
    { src: '/ospf.png', alt: 'OSPF(2)' },
    { src: '/cscgtp.png', alt: 'CSC GTP' },
    { src: '/KMIPN CSC.jpeg', alt: 'KMIPN(2)' },
    { src: '/gebyar.png', alt: 'Gebyar' },
  ];

  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const totalSlides = images.length * 2; // Gandakan gambar untuk ilusi loop tak terbatas

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isAnimating]);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      handleNext();
    }, 1500); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Sesuaikan durasi animasi ini dengan CSS

    // Jika sudah mencapai gambar terakhir dalam kumpulan (asumsi sudah menggandakan), segera pindahkan ke indeks awal tanpa animasi
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(currentIndex % images.length); // Reset index tanpa animasi
      }, 500); // Sesuaikan durasi animasi ini dengan CSS
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, images.length, totalSlides]);

  if (!isMounted) return null;

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>{t("carousel_title")}</h2>
      <button className={styles.leftArrow} onClick={handlePrev}>&#8249;</button>
      <div className={styles.carouselWrapper} style={{ transform: `translateX(-${(currentIndex % images.length) * 100 / images.length}%)` }}>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={styles.carouselSlide}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            <div className={styles.imageOverlay}>
              <span>{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.rightArrow} onClick={handleNext}>&#8250;</button>
    </div>
  );
};

export default Carousel;

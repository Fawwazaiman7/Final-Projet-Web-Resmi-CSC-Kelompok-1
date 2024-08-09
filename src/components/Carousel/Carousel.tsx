import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from "../../styles/Carousel/Carousel.module.css";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Kegiatan Kami</h2>
      <button className={styles.leftArrow} onClick={handlePrev}>&#8249;</button>
      <div className={styles.carouselWrapper} style={{ transform: `translateX(calc(-${currentIndex * 100 / images.length}%))` }}>
        {images.concat(images).map((image, index) => (
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

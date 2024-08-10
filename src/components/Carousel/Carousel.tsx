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
  ]; // Daftar gambar yang akan ditampilkan di dalam carousel

  const { t } = useTranslation('common'); // Hook untuk melakukan translasi teks
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks gambar yang saat ini ditampilkan
  const [isAnimating, setIsAnimating] = useState(false); // Status apakah animasi sedang berjalan
  const [isMounted, setIsMounted] = useState(false); // State untuk memeriksa apakah komponen telah di-mount

  const totalSlides = images.length * 2; // Gandakan jumlah gambar untuk membuat ilusi loop tak terbatas

  const handlePrev = useCallback(() => {
    if (isAnimating) return; // Jika animasi sedang berlangsung, abaikan event klik
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1); // Pindah ke slide sebelumnya
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return; // Jika animasi sedang berlangsung, abaikan event klik
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1); // Pindah ke slide berikutnya
  }, [isAnimating]);

  useEffect(() => {
    setIsMounted(true); // Menandakan bahwa komponen telah di-mount
    const interval = setInterval(() => {
      handleNext(); // Otomatis berpindah ke slide berikutnya setiap 1,5 detik
    }, 1500);

    return () => clearInterval(interval); // Bersihkan interval saat komponen tidak lagi digunakan
  }, [handleNext]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false); // Menghentikan animasi setelah durasi tertentu
    }, 500); // Durasi animasi

    // Jika sudah mencapai slide terakhir dalam kumpulan (karena gambar digandakan), reset ke indeks awal tanpa animasi
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(currentIndex % images.length); // Reset indeks tanpa animasi
      }, 500);
    }

    return () => clearTimeout(timeout); // Bersihkan timeout saat komponen tidak lagi digunakan
  }, [currentIndex, images.length, totalSlides]);

  if (!isMounted) return null; // Mencegah rendering jika komponen belum di-mount

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>{t("carousel_title")}</h2> {/* Judul carousel yang dapat diubah bahasa */}
      <button className={styles.leftArrow} onClick={handlePrev}>&#8249;</button> {/* Tombol untuk slide ke kiri */}
      <div className={styles.carouselWrapper} style={{ transform: `translateX(-${(currentIndex % images.length) * 100 / images.length}%)` }}>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={styles.carouselSlide}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" /> {/* Gambar dalam carousel */}
            <div className={styles.imageOverlay}>
              <span>{image.alt}</span> {/* Overlay teks pada gambar */}
            </div>
          </div>
        ))}
      </div>
      <button className={styles.rightArrow} onClick={handleNext}>&#8250;</button> {/* Tombol untuk slide ke kanan */}
    </div>
  );
};

export default Carousel; // Mengekspor komponen Carousel sebagai default

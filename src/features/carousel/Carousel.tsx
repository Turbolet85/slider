import { useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import styles from './carousel.module.css';
import { selectCurrentPerson } from './carouselSelector';
import { setCurrentPerson } from './carouselSlice';

const Carousel = () => {
  const people = useSelector((state: RootState) => state.data);
  const currentPerson = useSelector(selectCurrentPerson).currentPerson;
  const dispatch = useDispatch();

  const prevSlide = () => {
    dispatch(setCurrentPerson((currentPerson - 1 + people.length) % people.length));
  };
  const nextSlide = () => {
    dispatch(setCurrentPerson((currentPerson + 1) % people.length));
  };
  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 20000);
    return () => clearInterval(sliderId);
  }, [currentPerson]);

  return (
    <section className={styles.sliderContainer}>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className={styles.slide}
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: currentPerson === personIndex ? 1 : 0,
              visibility: currentPerson === personIndex ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className={styles.personImg} />
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{quote}</p>
            <FaQuoteRight className={styles.icon} />
          </article>
        );
      })}
      <button type={'button'} className={styles.prev} onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type={'button'} className={styles.next} onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;

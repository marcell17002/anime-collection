/** @jsxImportSource @emotion/react */
import Card from '../Card';
import { Gap } from '../../atoms';
import { styles } from './styles';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const breakpointCarousel = {
    1024: {
        slidesPerView: 5,
        spaceBetween: 150,
        slidesPerGroup: 4
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 60,
        slidesPerGroup: 2
    },
    300: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1
    },

}
const Caoursel = ({ label, to }) => {
    return (
        <div css={styles.bundleCollection}>
            <div css={styles.headerList}>
                <div css={styles.mainTitle}>
                    <h1 css={styles.textTitle}>{label}</h1>
                    <NavLink to={to} css={styles.buttonExplore}>
                        <h3 >Explore All</h3>
                    </NavLink>
                </div>
                <div css={styles.mainAction}>
                    <button css={styles.buttonAction}>
                        <FontAwesomeIcon icon="pen" css={styles.iconPen} />
                    </button>
                    <Gap width={10}></Gap>
                    <button css={styles.buttonAction}>
                        <FontAwesomeIcon icon="trash" css={styles.iconTrash} />
                    </button>
                </div>
            </div>
            <Gap height={20}></Gap>
            <Swiper breakpoints={breakpointCarousel}>
                <SwiperSlide><Card title="asdasd" to="/" image="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg"></Card></SwiperSlide>
                <SwiperSlide><Card title="asdasd" to="/" image="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg"></Card></SwiperSlide>
                <SwiperSlide><Card title="asdasd" to="/" image="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg"></Card></SwiperSlide>
                <SwiperSlide><Card title="asdasd" to="/" image="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg"></Card></SwiperSlide>
                <SwiperSlide><Card title="asdasd" to="/" image="https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg"></Card></SwiperSlide>
            </Swiper>
        </div>

    )
}

export default Caoursel
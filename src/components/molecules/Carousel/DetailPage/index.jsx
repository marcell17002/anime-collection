/** @jsxImportSource @emotion/react */
import Card from '../../Card';
import { Gap } from '../../../atoms';
import { styles } from './styles';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";

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
const CarouselDetailPage = ({ items }) => {
    return (
        <div>
            <div css={styles.mainTitle}>
                <h1 css={styles.textTitle}>Recommendation For You</h1>
            </div>
            <Gap height={20}></Gap>
            <Swiper breakpoints={breakpointCarousel}
                speed={6000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {items.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Card
                            title={item.title.userPreferred}
                            episodes={item.episodes}
                            duration={item.duration}
                            image={item.coverImage.extraLarge}
                            to={`/detail/${item.id}`}
                        ></Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default CarouselDetailPage
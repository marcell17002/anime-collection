/** @jsxImportSource @emotion/react */
import Card from '../../Card';
import { Gap } from '../../../atoms';
import styles from './styles';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import Error from '../../Error';
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


const CarouselDetailPage = ({ label, to, items, onClickEdit, onClickDelete }) => {
    return (
        <div css={styles.bundleCollection}>
            <div css={styles.headerList}>
                <div css={styles.mainTitle}>
                    <h1 css={styles.textTitle}>{label}</h1>
                    <NavLink to={to} css={styles.buttonExplore}>
                        <h3>Explore All</h3>
                    </NavLink>
                </div>
                <div css={styles.mainAction}>
                    <button css={styles.buttonAction} onClick={onClickEdit}>
                        <FontAwesomeIcon icon="pen" css={styles.iconPen} />
                    </button>
                    <button css={styles.buttonAction} onClick={onClickDelete}>
                        <FontAwesomeIcon icon="trash" css={styles.iconTrash} />
                    </button>
                </div>
            </div>
            <Gap height={20} />
            {items.length === 0 && <Error />}
            <Swiper breakpoints={breakpointCarousel}>
                {items.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Card
                            title={item.title.userPreferred}
                            to={`/detail/${item.id}`}
                            image={item.coverImage.extraLarge}
                            episodes={item.episodes}
                            duration={item.duration}
                        >
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default CarouselDetailPage
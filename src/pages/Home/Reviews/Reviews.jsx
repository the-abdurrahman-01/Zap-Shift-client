import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    
    return (
        <div className='my-24'>
            <div className='text-center mb-13'>
                <h3 className='text-3xl text-center font-bold my-8'>Review</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae perferendis iusto odio ut quasi non sequi autem tenetur, dolores voluptate. Quis eos impedit illum possimus minus maiores vitae totam.
                </p>
            </div>

          
                  <Swiper 
                        loop={true}
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                   autoplay={{
        delay:800,
        disableOnInteraction:false,
      }}
                  coverflowEffect={{
                    rotate:30,
                    stretch:'50%',
                    depth:200,
                    modifier:1,
                    scale: 0.75,
                    slideShadows:true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]} className='mySwiper'
                  >

                        {
                            reviews.map(review => <SwiperSlide key={review.id}>
    <ReviewCard reviews={review}></ReviewCard>
</SwiperSlide>)
                        }

                  </Swiper>

        </div>
    );
};

export default Reviews;
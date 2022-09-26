import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
function CarouselFadeExample() {
    return (
        <div className='carousel'>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://alrasheed-sa.com/wp-content/uploads/2018/01/Pronto-Delivery_How-Trucking-Companies-Are-Efficient_Image-1-min-2500x1560.jpeg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://alandilsih.com/wp-content/uploads/2022/01/%D8%B4%D8%B1%D9%83%D8%A9-%D8%AA%D9%86%D8%B8%D9%8A%D9%81-%D9%85%D9%86%D8%A7%D8%B2%D9%84-%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://1.bp.blogspot.com/-tM_jYyfBZ-Y/YGFJ-rkw1HI/AAAAAAAAAHI/L14RhbOY2noRskJSIQWE7_qyYi14Hpp5gCLcBGAsYHQ/s626/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3618.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel >
        </div >
    );
}

export default CarouselFadeExample;
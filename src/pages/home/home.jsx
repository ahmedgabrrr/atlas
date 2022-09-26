import React from 'react';
import Navbarr from '../../components/navs/nav';
import './home.css';
import CarouselFadeExample from './../../components/testimonial/testimonial';



import endPhoto from './../../images/headerafter.png';

import mobile from './../../images/mobile.png';
import girl2 from './../../images/women.png';
import heart from './../../images/heart.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMobilePhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <React.Fragment>
            <div className='home'>
                <Navbarr />
                <header>
                    <div id='header' className="container">
                        <div className="row">
                            <div className='col-lg-7 col-md-6 col-sm-7'>
                                <div className="text">
                                    <h3>شركة اطلس العالمية</h3>
                                    <p > لخدمات نقل الاثاث والتنظيف وصيانة التكييف</p>
                                </div>
                                <div className='call-btn' ><a data-testid="linkElement" href="tel:+966 56 908 6887" className="_12Dtc" aria-disabled="false"><button > <FontAwesomeIcon className='arrowIcon' icon={faPhoneAlt} />    اتصل بنا</button></a></div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-sm-5'>
                                <img src='https://bashaierelkher.com/wp-content/uploads/2022/02/%D8%B4%D8%B1%D9%83%D8%A9-%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D8%A8%D8%AE%D9%85%D9%8A%D8%B3-%D9%85%D8%B4%D9%8A%D8%B7.jpeg' alt="" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="endPhoto">
                    <img src={endPhoto} alt="" />
                </div>
                <div id='about' className="about">
                    <div className="container">
                        <div className="row">
                            <div className='col-lg-7 col-md-6 col-sm-7'>
                                <div className="aboutPhotos">
                                    <ul>
                                        <li><img className='imageArea1' src="https://www.masa7.com/wp-content/uploads/%D8%B4%D8%B1%D9%83%D8%A9-%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D8%A8%D8%AC%D8%AF%D8%A9.png" alt="" /></li>
                                        <li><img className='imageArea2' src="https://shadygulf.com/images/logo.svg" alt="" /></li>
                                        <li><img className='imageArea3' src="https://el-bostan.com/wp-content/uploads/2021/02/%D8%B1%D9%82%D9%85-%D8%B4%D8%B1%D9%83%D8%A9-%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB.jpg" alt="" /></li>
                                        <li className='exp'>
                                            <h3>20</h3>
                                            <p>سنة من الخبرة</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-6 col-sm-5'>
                                <div className="text">

                                    <h4>من نحن ؟</h4>
                                    <h2>شركة اطلس لخدمات نقل الأثاث والنظافة وصيانة التكييف</h2>
                                    <p >شركة اطلس لنقل الاثاث وأعمال التنظيف وصيانة التكييف ، من أوائل الشركات الرائدة فى نقل العفش بأحدث المعدات وباحترافية شديدة داخل المملكة ، ومن أوائل شركات النظافة التى تستخدم أحدث الوسائل والطرق والمواد فى تنظيف المنازل والفلل والمكاتب والشركات ونستخدم أحدث الآليات في النقل لضمان أفضل خدمة النقل في اقل وقت واقل تكاليف . نستخدم أفضل الاوناش بأحجامها المختلفة ليصل الى اعلى الادوار لدينا أفضل عمالة وفنين بالسعودية ، ولدينا عمالة متخصصين فى نقل العفش وتغليف الاثاث وفك وتركيب الاثاث باحترافية وأيضا لدينا أفضل عمالة متخصصة فى أعمال النظافة وتنظيف المنازل والفلل والشركات بطرق حديثة ومواد ومنظفات عالية الجودة .</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <section id='workProcess' className='workProcess'>
                    <div className="container">
                        <div className="head">
                            <h4 id='phone-number'><FontAwesomeIcon className='icon' icon={faPhoneAlt} /> <span>966569086887+</span></h4>
                            <h2> <FontAwesomeIcon className='icon' icon={faCar} />  لكي نصلك   </h2>
                        </div>
                        <div className="row">
                            <div className="workProcess-boxes">
                                <div className='col-lg-4 col-sm-6 mb-30'>
                                    <div className="box-1">
                                        <h5 >01</h5>
                                        <h3>تواصل معنا من خلال واتس اب او بالاتصال علي الرقم التالي</h3>

                                        <div><a data-testid="linkElement" href="tel:+966 56 908 6887" className="_12Dtc" aria-disabled="false"><button > <FontAwesomeIcon className='arrowIcon' icon={faPhoneAlt} />    للاتصال </button></a></div>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-sm-6 mb-30'>
                                    <div className="box-2-active">
                                        <h5 >02</h5>
                                        <h3>ابلغنا بعنوانك من خلال الواتس اب او من خلال الاتصال تلفونيا</h3>
                                        <div ><a aria-label="Contact Us In WhatsUp " href="https://wa.me/+966507395849"> <button ><FontAwesomeIcon className='arrowIcon' icon={faMobilePhone} />    واتس اب</button>  </a> </div>


                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-6 mb-30'>
                                    <div className="box-3">
                                        <h5>03</h5>
                                        <h3>ناتي علي العنوان في اسرع وقت ممكن</h3>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='booking'>
                    <div className="container">
                        <div className="row">
                            <div className='col-xl-5 col-lg-6 col-md-6'>
                                <div className="book-form">

                                    <img src="https://static.wixstatic.com/media/11062b_d048555df3194d6493e075ad92b20613~mv2.jpg/v1/fill/w_884,h_822,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d048555df3194d6493e075ad92b20613~mv2.jpg" alt="" />
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-6 col-md-6'>
                                <div className="content">
                                    <div className="main-photo">
                                        <img src={mobile} alt="" />
                                    </div>
                                    <div className="photos-group">
                                        <img className='img1' src={girl2} alt="" />
                                        <img className='img2' src={heart} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id='services' className="services">
                    <div className="container">
                        <div className="row">
                            <div className='col-xl-4 col-lg-7 mb-30'>
                                <div className="service-text">
                                    <h6>الخدمات</h6>
                                    <h3>فريق جاهز مدرب لخدمتك علي مدار اليوم</h3>
                                    <p>نقدم لك افضل خدمة باقل سعر</p>

                                </div>
                            </div>
                            <div className='col-xl-8 mb-15'>
                                <div className="service-boxes">
                                    <div className="treatment">
                                        <div >


                                        </div>
                                        <h3>فك وتركيب الاثاث</h3>
                                        <p>نقدم لك افضل خدمة فك وتركيب الاثاث علي مستوي المملكة بافضل جودة واقل سعر</p>


                                    </div>
                                    <div className="surgery">
                                        <div>

                                        </div>
                                        <h3>النظافة</h3>
                                        <p>لدينا أفضل عمالة متخصصة فى أعمال النظافة وتنظيف المنازل والفلل والشركات بطرق حديثة ومواد ومنظفات عالية الجودة</p>


                                    </div>
                                    <div className="vaccine">
                                        <div>


                                        </div>
                                        <h3>صيانة التكييف</h3>
                                        <p>فك وتركيب وتصليح التكييف مع ضمان جودة الصيانة</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="container">
                        <div className="testimonial-text">

                        </div>
                        <div id='carousel-row' className="row">

                            <div className='col-lg-10'>

                                <CarouselFadeExample />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment>
    );
}

export default Home;
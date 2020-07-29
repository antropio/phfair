import React, {Component} from 'react';
import './Exhibitor.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Exhibitor extends Component {

    constructor(props) {
        super(props);
        this.handleShowGallery = this.handleShowGallery.bind(this)
        this.handleHideGallery = this.handleHideGallery.bind(this)
        this.handleShowDocuments = this.handleShowDocuments.bind(this)
        this.handleHideDocuments = this.handleHideDocuments.bind(this)
        this.handleShowServices = this.handleShowServices.bind(this)
        this.handleHideServices = this.handleHideServices.bind(this)
        this.handleShowInfo = this.handleShowInfo.bind(this)
        this.handleHideInfo = this.handleHideInfo.bind(this)
        this.handleShowVideo = this.handleShowVideo.bind(this)
        this.handleHideVideo = this.handleHideVideo.bind(this)
        this.state = {
            showGallery: false,
            showDocuments: false,
            showServices: false,
            showInfo: false,
            showVideo: false,
        }
    }

    handleShowGallery() {
        this.setState({ showGallery: true })
    }

    handleHideGallery() {
        this.setState({ showGallery: false })
    }

    handleShowDocuments() {
        this.setState({ showDocuments: true })
    }

    handleHideDocuments() {
        this.setState({ showDocuments: false })
    }

    handleShowServices() {
        this.setState({ showServices: true })
    }

    handleHideServices() {
        this.setState({ showServices: false })
    }

    handleShowInfo() {
        this.setState({ showInfo: true })
    }

    handleHideInfo() {
        this.setState({ showInfo: false })
    }

    handleShowVideo() {
        this.setState({ showVideo: true })
    }

    handleHideVideo() {
        this.setState({ showVideo: false })
    }

    render() {
        let exhibitorData = {
            webpage: "https://hey-agency.com",
            video_url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
            stand_type: "silver", // gold,silver,bronze
            contact_info: {
                description: "Para nosotros prestarte el mejor servicio es lo más importante\n" +
                    "\n" +
                    "Address: CARRERA 68B No. 10A - 97\n" +
                    "\n" +
                    "Phone: +571 290-6077\n" +
                    "\n" +
                    "Email: servicioalcliente@company.com\n" +
                    "\n" +
                    "Working Hours: Lun - Vie : 7am - 7pm\n" +
                    "Sab : 8am - 1pm",
                image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2Fgallery-test.png?alt=media&token=999146ad-f841-4d6c-9d96-c8b0985d24d3"
            },
            services: [
                {
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f",
                },
                {
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f",
                },
                {
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f",
                },
                {
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f",
                },
            ],
            advisor: {
                image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f",
                name: "Edgar Izquierdo",
                phone_number: "573204135596"
            },
            gallery: [
                {
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2Fgallery-test.png?alt=media&token=999146ad-f841-4d6c-9d96-c8b0985d24d3",
                },
                {
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2Fgallery-test.png?alt=media&token=999146ad-f841-4d6c-9d96-c8b0985d24d3",
                },
                {
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2Fgallery-test.png?alt=media&token=999146ad-f841-4d6c-9d96-c8b0985d24d3",
                },
                {
                    image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2Fgallery-test.png?alt=media&token=999146ad-f841-4d6c-9d96-c8b0985d24d3",
                },
            ],
            "social_networks": [
                {
                    "url": "https://monoe.co",
                    "network": "facebook"
                },
                {
                    "url": "https://monoe.co",
                    "network": "instagram"
                },
                {
                    "url": "https://monoe.co",
                    "network": "twitter"
                },
            ],
            // gold
            // stand_image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FSTAND_ORO%20(1).png?alt=media&token=1f1e3de9-f75a-45f9-88f1-6b934ca3f4a4",
            // Bronce/Plata
            stand_image: "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FSTAND_PLATA%20(1).png?alt=media&token=b6543477-a252-47de-858e-0427e95ff60d",
        };
        return (
            <div className={`main-stand main-stand-${exhibitorData.stand_type}`}>
                <Link to="/exhibitors" className="main-stand-goback">
                    <img src="/exhibitors/icons/baseline_arrow_back_white_18dp.png" alt=""/>
                    Regresar
                </Link>
                <div className="main-stand-social-networks">
                    {exhibitorData.social_networks.map((item, index) => (
                        <a href={item.url} className={`main-stand-social-networks-item ${item.network}`} key={index} target="_blank">
                            <img src={`/exhibitors/icons/${item.network}.svg`} alt=""/>
                        </a>
                    ))}
                </div>
                <div className="main-stand-navigation">
                    <div className="main-stand-navigation-item" onClick={this.handleShowInfo}>
                        <div className="main-stand-navigation-item-icon">
                            <img src="/exhibitors/icons/ic_domain_24px.png" alt=""/>
                        </div>
                        <div className="main-stand-navigation-item-label">CONTACTO</div>
                    </div>
                    <div className="main-stand-navigation-item" onClick={this.handleShowGallery}>
                        <div className="main-stand-navigation-item-icon">
                            <img src="/exhibitors/icons/ic_perm_media_24px.png" alt=""/>
                        </div>
                        <div className="main-stand-navigation-item-label">GALERÍA</div>
                    </div>
                    <div className="main-stand-navigation-item" onClick={this.handleShowServices}>
                        <div className="main-stand-navigation-item-icon">
                            <img src="/exhibitors/icons/ic_card_travel_24px.png" alt=""/>
                        </div>
                        <div className="main-stand-navigation-item-label">SERVICIOS</div>
                    </div>
                    <div className="main-stand-navigation-item" onClick={this.handleShowDocuments}>
                        <div className="main-stand-navigation-item-icon">
                            <img src="/exhibitors/icons/ic_library_books_24px.png" alt=""/>
                        </div>
                        <div className="main-stand-navigation-item-label">CATÁLOGOS</div>
                    </div>
                    <a href={exhibitorData.webpage} className="main-stand-navigation-item" target="_blank">
                        <div className="main-stand-navigation-item-icon">
                            <img src="/exhibitors/icons/ic_public_24px.png" alt=""/>
                        </div>
                        <div className="main-stand-navigation-item-label">SITIO WEB</div>
                    </a>
                </div>
                <a className="main-stand-chat"
                   href={"https://api.whatsapp.com/send?phone=" + exhibitorData.advisor.phone_number} target="_blank">
                    <img className="chat-image" src={exhibitorData.advisor.image} alt=""/>
                    <div className="chat-message">
                        Hola soy {exhibitorData.advisor.name},<br/>
                        Te puedo ayudar en algo?
                    </div>
                </a>
                <div className="main-stand-module">
                    <div className="main-stand-module-wrap">
                        <img className="stand-image" src={exhibitorData.stand_image} alt=""/>
                        <div className="main-stand-play-btn" onClick={this.handleShowVideo} />
                    </div>
                </div>
                <div className={`main-stand-gallery ${this.state.showGallery ? 'active' : ''}`}>
                    <div className="main-stand-gallery-overlay" />
                    <div className="main-stand-gallery-close-window" onClick={this.handleHideGallery}>
                        <img src="/exhibitors/icons/ic_close_24px.png" alt=""/>
                    </div>
                    <div className="main-stand-gallery-container">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {exhibitorData.gallery.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="main-stand-gallery-slide">
                                        <img className="main-stand-gallery-slide-image" src={slide.image} alt=""/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                {/*<div className={`main-stand-modal ${this.state.showDocuments ? 'active' : ''}`}>
                    <div className="main-stand-modal-overlay" onClick={this.handleHideDocuments} />
                    <div className={`main-stand-modal-container`}>
                        <div className="main-stand-modal-header">
                            <div className="main-stand-modal-header-title">Catálogos</div>
                            <div className="main-stand-modal-close-window" onClick={this.handleHideDocuments}>
                                <img src="/exhibitors/icons/ic_close_24px.png" alt=""/>
                            </div>
                        </div>
                        <div className="main-stand-modal-content">
                            <div className="main-stand-documents-item" key={index}>
                                <div>{doc.name}</div>
                                <a href={doc.url} target="_blank" className="main-stand-documents-item-btn">
                                    <img src="/exhibitors/icons/ic_dowload.png" alt=""/>
                                    <span>Descargar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div className={`main-stand-modal ${this.state.showServices ? 'active' : ''}`}>
                    <div className="main-stand-modal-overlay" onClick={this.handleHideServices} />
                    <div className={`main-stand-modal-container`}>
                        <div className="main-stand-modal-header">
                            <div className="main-stand-modal-header-title">Servicios</div>
                            <div className="main-stand-modal-close-window" onClick={this.handleHideServices}>
                                <img src="/exhibitors/icons/ic_close_24px.png" alt=""/>
                            </div>
                        </div>
                        <div className="main-stand-modal-content">
                            {exhibitorData.services.map((service, index) => (
                                <div className="main-stand-services-item" key={index}>
                                    <div className="main-stand-services-item-image">
                                        <img src={service.image} alt=""/>
                                    </div>
                                    <div className="main-stand-services-item-info">
                                        <div>{service.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`main-stand-modal main-stand-modal-contact-info ${this.state.showInfo ? 'active' : ''}`}>
                    <div className="main-stand-modal-overlay" onClick={this.handleHideInfo} />
                    <div className={`main-stand-modal-container`}>
                        <div className="main-stand-modal-header">
                            <div className="main-stand-modal-header-title">Información de contacto</div>
                            <div className="main-stand-modal-close-window" onClick={this.handleHideInfo}>
                                <img src="/exhibitors/icons/ic_close_24px.png" alt=""/>
                            </div>
                        </div>
                        <div className="main-stand-modal-content">
                            <div className="main-stand-contact-info">
                                <div className="main-stand-contact-info-image">
                                    <img src={exhibitorData.contact_info.image} alt=""/>
                                </div>
                                <div className="main-stand-contact-info-info">
                                    <div className="main-stand-contact-info-title">Contáctenos</div>
                                    <div className="main-stand-contact-info-description">
                                        <div>{exhibitorData.contact_info.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`main-stand-modal main-stand-modal-video ${this.state.showVideo ? 'active' : ''}`}>
                    <div className="main-stand-modal-overlay" onClick={this.handleHideVideo} />
                    <div className="main-stand-modal-video-wrap">
                        <ReactPlayer url={exhibitorData.video_url} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Exhibitor;

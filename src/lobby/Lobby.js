import React, { Component } from 'react'
import './Lobby.css'
import { Link } from 'react-router-dom'
import fachadaImg from './assets/AFUERA_PH_2021.png'
import logoImg from './assets/LOGO_PH.png'
import logoFeriaImg from './assets/TITULO_MOBILE.png'

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.handleHideIntro = this.handleHideIntro.bind(this)
    this.state = {
      showIntro: false
    }
  }

  handleHideIntro() {
    this.setState({ showIntro: true })
  }

  render() {
    let lobby_data = {
      info: {
        date: '12.07.20',
        time_from: '07:00',
        time_to: '19:00',
        city: 'Bogotá',
        type: 'EVENTO VIRTUAL',
        organizer: 'Adriana Medina',
        logo: logoImg,
        logoFeria: logoFeriaImg,
        bgImage:
          'https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FLOBBY_FINAL_FONDO%20(1).png?alt=media&token=0c816125-5f72-4c6a-a158-4a73fa431958',
        bgIntroImage: fachadaImg
      },
      virtual_events: [
        {
          name: 'Nombre Evento',
          date: 'Junio 19',
          hour_from: '6:00AM',
          hour_to: '9:00AM',
          speaker: {
            name: 'Pablo Perez',
            image:
              'https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f'
          }
        },
        {
          name: 'Nombre Evento',
          date: 'Junio 19',
          hour_from: '6:00AM',
          hour_to: '9:00AM',
          speaker: {
            name: 'Juan Lopez',
            image:
              'https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FchatImage%20(1).png?alt=media&token=8b0577e2-72c8-4aa6-979c-3da53e25227f'
          }
        }
      ]
    }
    return (
      <div className='the-lobby' style={{ backgroundImage: `url("${lobby_data.info.bgImage}")` }}>
        <div
          className={`the-intro ${this.state.showIntro ? 'active' : ''}`}
          style={{ backgroundImage: `url("${lobby_data.info.bgIntroImage}")` }}>
          <div className='the-intro-access-btn' onClick={this.handleHideIntro}>
            VIVE LA EXPERIENCIA
          </div>
        </div>
        <div className='the-lobby-header'>
          <div className='the-lobby-header-col-left'>
            <img src={lobby_data.info.logo} alt='' />
          </div>
          <div className='the-lobby-header-col-center'>
            <img src={lobby_data.info.logoFeria} alt='' />
          </div>
          <div className='the-lobby-header-col-right'>
            <div className='the-lobby-header-general-info'>
              <div className='the-lobby-header-general-info-wrap'>
                <div className='the-lobby-header-general-info-group'>

                  <div className='the-lobby-header-general-info-group-item'>
                    <div className='the-lobby-header-general-info-group-item-icon'>
                      <img src='/lobby/ICONO_RELOJ.png' alt='' />
                    </div>
                    <div>
                      <div className='the-lobby-header-general-info-group-item-label'>DESDE</div>
                      {lobby_data.info.time_from} a {lobby_data.info.time_to}
                    </div>
                  </div>
                  <div className='the-lobby-header-general-info-group-item'>
                    <div className='the-lobby-header-general-info-group-item-icon'>
                      <img src='/lobby/ICONO_LUGAR.png' alt='' />
                    </div>
                    <div>
                      <div className='the-lobby-header-general-info-group-item-label'>{lobby_data.info.city}</div>
                    </div>
                  </div>
                  <div className='the-lobby-header-general-info-group-item'>
                    <div>
                    <div>{lobby_data.info.date}</div>
                    <div>{lobby_data.info.type}</div>
                    <div>Organizador: {lobby_data.info.organizer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='the-lobby-video'>
          <div className='the-lobby-video-wrap-holder'>
            <div className='the-lobby-video-holder'>
              <img src='/lobby/TIRA_PANTALLA.png' alt='' />
            </div>
            <div className='the-lobby-video-holder'>
              <img src='/lobby/TIRA_PANTALLA.png' alt='' />
            </div>
          </div>
          <div className='the-lobby-video-wrap'>
            <div className='the-lobby-video-container'>
              <iframe
                title="Congreso PH"
                width='560'
                height='315'
                src='https://www.youtube.com/embed/RaXVD8dI5Js'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className='the-lobby-events'>
          <div className='the-lobby-events-title'>ESPACIOS VIRTUALES</div>
          <div className='the-lobby-events-list'>
            {lobby_data.virtual_events.map((item, id) => (
              <div className='the-lobby-events-list-item' key={id}>
                <div className='the-lobby-events-list-item-speaker-image'>
                  <img src={item.speaker.image} alt='' />
                </div>
                <div className='the-lobby-events-list-item-content'>
                  <div className='the-lobby-events-list-item-speaker'>
                    <div className='the-lobby-events-list-item-speaker-name'>{item.speaker.name}</div>
                  </div>
                  <div className='the-lobby-events-list-item-name'>{item.name}</div>
                  <div className='the-lobby-events-list-item-info'>
                    {item.date} {item.hour_from} - {item.hour_to}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to='/exhibitors' className='the-lobby-exhibitors-btn'>
          <img src='/lobby/BOTON_STANDS.png' alt='' />
        </Link>
      </div>
    )
  }
}
export default Lobby

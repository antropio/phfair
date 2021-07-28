import React, {Component} from 'react';
import './Exhibitors.css'

class Exhibitors extends Component {
    render() {
         return(
            <iframe
            title="Congreso PH"
            src='https://standy.club/#/stand-list'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        );
    }
}

export default Exhibitors;

import React, {Component} from 'react';
import './Exhibitors.css'
import { Link } from 'react-router-dom';

class Exhibitors extends Component {
    render() {
        let standImage = "https://firebasestorage.googleapis.com/v0/b/hey-48c29.appspot.com/o/events%2FScreen%20Shot%202020-07-10%20at%203.54.51%20PM%20(1).png?alt=media&token=31afe6c9-f35a-4423-9f7b-ef8eaed2a6b6"
        return(
            <div className="main-exhibitor-list">
                <div className="iso-exhibitor-list">
                    <div className="iso-exhibitor-list-wrap">

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                        <Link to="/exhibitor" className="iso-exhibitor-list-item">
                            <div className="iso-exhibitor-list-item-image">
                                <img src={standImage} alt=""/>
                            </div>
                            <div className="iso-exhibitor-list-item-description">
                                <span></span> TEXTO DE PRUEBA DE CATEGORIA
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        );
    }
}

export default Exhibitors;

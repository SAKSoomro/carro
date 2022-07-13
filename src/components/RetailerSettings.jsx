import '../index.css'
import React, { useState } from 'react';
import icon from '../icons/christmas-stars.png'
import priceTag from '../icons/price-tag.png'
import nodejs from '../icons/node-js.png'
import handshake from '../icons/hand-shake.png'
import chat from '../icons/chat-bubbles-with-ellipsis.png'
import bulb from '../icons/bulb.png'
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import { Footer } from './Suppliers';
import dotsIcon from '../icons/braille.png'
import cardImg from '../img/card.png'
import gearBlack from '../icons/setting-black.png'
import { Link } from "react-router-dom"
import arrowLeft from '../icons/left.png'
import arrowRight from '../icons/right.png'

function CollapsibleSidebar(){

    const [show, setShow] = useState(false)

    return (
       <main className={    show ? null : 'space-toggle'}>
        
        <aside className={`c-sidebar ${show ? 'show' : null}`}>
            <nav className="nav">
                <div>
                    <Link to="/" className="nav-logo">
                        <i className="nav-logo-icon"><img className='avatar' src={icon} /></i>
                        <span className="nav-logo-name">Brand<br/>Parterships</span>
                    </Link>
                    <div className="nav-list show">
                    <Link to="/" className="nav-link">
                        <div className="nav-link-item ">
                        <img className='avatar avatar-link' src={priceTag} />
                        <span className="nav-link-name">Directory</span>
                        </div>
                       
                    </Link>
                    
                    <Link to="/suppliers" className="nav-link">
                        <i className="nav-link-icon"><img className='avatar avatar-link ' src={handshake} /></i>
                        <span className="nav-link-name">Partners</span>
                    </Link>
                    
                    <Link to="#" className="nav-link">
            
                        <i className="nav-link-icon"><img className='avatar avatar-link' src={chat} /></i>
                        <span className="nav-link-name">Request</span>
                    </Link>
                    <Link to="#" className="nav-link">
                        <i className="nav-link-icon"><img className='avatar avatar-link ' src={nodejs} /></i>
                        <span className="nav-link-name">Bundles</span>
                    </Link>
                   <br/>
            

                    <Link to="#" className="nav-link ">
                        <i className="nav-link-icon"><img className='avatar avatar-link al-b' src={bulb} /></i>
                        <span className="nav-link-name">Send Feedback</span>
                    </Link>
                    <Link to="/profile-settings" className="nav-link">
                        <div className="nav-link-item nav-link-item-active">
                        <img className='avatar avatar-link' src={gearBlack} />
                        <span className="nav-link-name">Settings</span>
                        </div>
                       
                    </Link>
                    <Link to="#" className='nav-link'>
                        <i className="nav-link-icon" onClick={()=>setShow(!show)}><img className='avatar avatar-link al-b' src={`${show ? arrowRight : arrowLeft}`} /></i>
                        <span className="nav-link-name">Hide</span>
                    </Link>
                    </div>
                </div>
                
            </nav>
        </aside>
       </main>
       
        )
}

function RetailerSettingsCard(){
    return (
        <div className='directory-settings-card retailer-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>payment to suppliers</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>This card will pay suppliers their revenue split.</p>
                </div>
                </div>
            </div>
            <div className='ds-card-body'>
            <div className='ds-body-card'>
            <img src={cardImg} />
            </div>
                <div className='ds-card-action update-card-action'>
                    <a href='#'>update card</a>
                </div>
            </div>
        </div>
    )
}


function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='header-section'>
                <p className='logo'>carro</p>
              </div>
              <div className='setting-page-title'>
              <p>Settings</p>
              </div>
              <div className='settings-header-nav'>
                <ul>
                    <li><a href='profile-settings'>Profile</a></li>
                    <li><a href='supplier-settings'>supplier</a></li>
                    <li><a id='active' href='retailer-settings'>retailer</a></li>
                    <li><a href='#'>subscription & fee</a></li>
                </ul>
              </div>
            <div className='retailer-settings-content  '>
                <RetailerSettingsCard />
            </div>
            <div className='footer-bar'>
                <Footer />
            </div>
        </div>
    )
}

export default function RetailerSettings(){
    return (
        <div className='container'>
            <div className='horizontal-content'>
                <CollapsibleSidebar />
            </div>
            <div className='verticle-content'>
            <VerticleContent />
            </div>
        </div>
    )
}
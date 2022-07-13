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

function ContactCard(){
    return (
        <div className='contact-card'>
            <div className='cc-info'>
                <p className='info-title'>Point of contact</p>
                <p>Requests for partnerships and general questions about your account</p>
            </div>
            <div className='cc-name'>
                <p>Steven Graf</p>
            </div>
            <div className='cc-email'>
                <p>steven@gmail.com</p>
            </div>
            <div className='cc-no'>
                <p>2014774488</p>
            </div>
            <div className='action-edit'>
                <a href='#'>Edit</a>
            </div>
        </div>
    )
}

function AddCard(props){
    return(
        <div className='add-card'>
            <div className='cc-info'>
                <p className='info-title'>{props.Title}</p>
                <p>{props.Info}</p>
            </div>
            <div className='action-add'>
                <a href='#'>Add</a>
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
                    <li><a id='active' href='#'>Profile</a></li>
                    <li><a href='supplier-settings'>supplier</a></li>
                    <li><a href='retailer-settings'>retailer</a></li>
                    <li><a href='#'>subscription & fee</a></li>
                </ul>
              </div>
              <div className='profile-content-title'>
              <p>your contact information</p>
              </div>
            <div className='profile-content  '>
                <ContactCard />
                <AddCard 
                    Title='brand partnerships'
                    Info='Questions about partnership requests and active partners'
                />
                <AddCard 
                    Title='customer service'
                    Info='Questions about refunds and returns.'
                />
                <AddCard 
                    Title='Marketing'
                    Info='Questions about running campaign to promote network products'
                />
                <AddCard 
                    Title='Another Questions'
                    Info='Detail of another questions'
                />
            </div>
            <div className='footer-bar'>
                <Footer />
            </div>
        </div>
    )
}

export default function ProfileSettings(){
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
import '../index.css'
import { ChevronRight, InfoCircle } from 'react-bootstrap-icons'
import React, { useState } from 'react';
import icon from '../icons/christmas-stars.png'
import priceTag from '../icons/price-tag.png'
import nodejs from '../icons/node-js.png'
import handshake from '../icons/hand-shake.png'
import chat from '../icons/chat-bubbles-with-ellipsis.png'
import bulb from '../icons/bulb.png'
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from './Homepage';
import dotsIcon from '../icons/braille.png'
import gearBlack from '../icons/setting-black.png'
import { Link } from "react-router-dom"
import arrowLeft from '../icons/left.png'
import arrowRight from '../icons/right.png'
import ReactRangeSlider from './RangeSlider';
import Modal from "react-modal";

Modal.setAppElement("#root");

function ReactModal() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
  
  return (
    <>
     <button className='modal-button' onClick={toggleModal}>Save</button>

    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        >
        <div className='modal-body'>
            <h2>Revenue Spilit Updated!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus quis illo eveniet voluptatibus. Fugit, placeat? Veritatis facilis eum accusamus.</p>
        </div>
        <button className='modal-button modal-button-okay' onClick={toggleModal}>Okay</button>
        </Modal>
    </>
  );
}


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

function DirectorySettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>directory listings</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>Your brand card shows your best-selling products available to Carro</p>
                </div>
                </div>
            </div>
            <div className='ds-card-body'>
                <div className='ds-card-body-title'>
                    <p>your brand card is visible to all in the directory</p>
                </div>
                <div className='ds-card-body-showcase'>
                    <ProductCard />
                </div>
                <div className='ds-card-action'>
                    <a href='#'>change visibility</a>
                </div>
            </div>
        </div>
    )
}

function PartnershipSettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>revenue split</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>Set the percentage you share with retailer partners</p>
                </div>
                </div>
            </div>
            <div className='ds-card-body'>
                <div className="body-range-slider">
                <ReactRangeSlider />
                </div>
                <div className='body-range-paragraph'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, eveniet!</p>
                    <a href='#'>How carro's 5% work!</a>
                </div>
                <div className='body-bottom-button'>
                    <ReactModal />
                </div>
            </div>
        </div>
    )
}

function RetailerAccessSettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>Retailer access</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>Determine retailer's access to your products.</p>
                </div>
                </div>
            </div>
            <p className='ab-card-title'>Can Carro auto-approve retailers to sell your products?</p>
            <div className='ds-card-body'>
                <div className='access-body-cards'>
                    <div className='ab-card'>
                       <div className='ab-card-icon'><InfoCircle color='#aaa' size={'16px'} /></div>
                        <div className='ab-card-text'>
                        <p>Yes!</p>
                        <p>Turn on auto-approve.</p>
                        </div>
                    </div>
                    <div className='ab-card'>
                    <div className='ab-card-icon'><InfoCircle color='#aaa' size={'16px'} /></div>
                        <div className='ab-card-text'>
                        <p>No.</p>
                        <p>I want to approve each partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function BrandSettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>brand categories</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>brand categories your brand according to your product catalog</p>
                </div>
                </div>
            </div>
            <p className='bc-card-body-title'>Your brand listed in the following categories</p>
            <div className='bc-card-body'>
                
                <p>Outdoor <ChevronRight size={'11px'} /> Cycling <ChevronRight size={'11px'} /> Accessories <ChevronRight size={'11px'} /> hats</p>
                <p>clothing & fashion <ChevronRight size={'11px'} /> mens <ChevronRight size={'11px'} /> Accessories</p>
                <p>clothing & fashion <ChevronRight size={'11px'} /> mens <ChevronRight size={'11px'} /> outerwear</p>
                <p>automotive <ChevronRight size={'11px'} /> exterior Accessories</p>
            </div>
            <p className='last-element'>clothing & fashion <ChevronRight size={'11px'} /> mens <ChevronRight size={'11px'} /> shirts & tops <ChevronRight size={'11px'} /> sweatschirts & hoodies</p>
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
                    <li><a id='active' href='#'>supplier</a></li>
                    <li><a href='retailer-settings'>retailer</a></li>
                    <li><a href='#'>subscription & fee</a></li>
                </ul>
              </div>
            <div className='supplier-settings-content  '>
            <div>
            <DirectorySettingsCard />
            </div>
            <div>
            <BrandSettingsCard />
            </div>
            <div>
            <PartnershipSettingsCard />
            </div>
            <div>
            <RetailerAccessSettingsCard />
            </div>
            </div>
        </div>
    )
}

export default function SupplierSettings(){
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
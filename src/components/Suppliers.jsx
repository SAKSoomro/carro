import '../index.css'
import React, { useState } from 'react';
import icon from '../icons/christmas-stars.png'
import priceTag from '../icons/price-tag.png'
import nodejs from '../icons/node-js.png'
import handshake from '../icons/hand-shake.png'
import chat from '../icons/chat-bubbles-with-ellipsis.png'
import gear from '../icons/gear.png'
import bulb from '../icons/bulb.png'
import exLink from '../icons/external-link.png'
import verified from '../icons/verified.png'
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import product1 from '../icons/product1.png'
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
                        <div className="nav-link-item nav-link-item-active">
                        <img className='avatar avatar-link' src={handshake} />
                        <span className="nav-link-name">Partners</span>
                        </div>
                       
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
                   <br/>

                    <Link to="#" className="nav-link ">
                        <i className="nav-link-icon"><img className='avatar avatar-link al-b' src={bulb} /></i>
                        <span className="nav-link-name">Send Feedback</span>
                    </Link>
                    <Link to="/supplier-settings" className="nav-link">
                        <i className="nav-link-icon"><img className='avatar avatar-link al-b' src={gear} /></i>
                        <span className="nav-link-name">Settings</span>
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
function ProductCatalog(props){

    return (
        <div className='product-catalog'>
            <div className='product-catalog-img'>
                <img src={product1} />
                </div>
                <div className='product-catalog-info'>
                <div className='product-catalog-title'>
                    BlendJet 2
                </div>
                <div className='product-price-second'>
                  <span>
                    <p>Retail</p>
                    <p>$49.95-$87.65</p>
                  </span>
                  <span className='earn-span'>
                    <p>Earn</p>
                    <p>$25.65-$48.21</p>
                  </span>
                </div>
                <div className='button-bottom partners-bb'>
                    <a href='#' className='view-products'>View product</a>
                </div>
                <div className='purchases'>
                    <p>Purchases:</p>
                    <p>4</p>
                </div>
                <div className='revenue'>
                    <p>Your Revenue:</p>
                    <p>$177.69</p>
                </div>
                <div className='push-button'>
                    <div>Pushed to store</div>
                    <div className='switch-buttons'>
                    <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                    </label>
                    </div>
                </div>
                <div className='remove-product'>
                    <a href='#' >Remove Product</a>
                </div>
                </div>
            </div>
    )
}

function Allbranditems(){
    return (
        <div className='product-catalog-items'>
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
        </div>
    )
}

export function Footer(){
    return (
        <div className='footer'>
        <p>terms & conditions | additional terms for brands | privacy policy | cookie policy | contact us</p>
        <p className='powered-by'>powered by <span className='copyright-brand'>vyrl</span>2022</p>
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='header-section'>
                <p className='logo'>carro</p>
              </div>
              <div className='header-nav'>
                <p className='header-nav-title'>Your Partners</p>
                <a className='active-nav' href='#'>suppliers</a>
                <a href='retailers'>retailers</a>
              </div>
              <div className='top-header partners'>
              <span className='logo-section partners-logo'>
              <p className='secondary-logo partners-sec-logo'>Blendjet</p>
              <img src={verified} />
              </span>
              <div className='exlink'>
              <a href='#'>shop.blendjet.com</a>
                <img src={exLink} />
              </div>
              </div>
              <div className='page-title'>
                <p className='earnings'>earn 15%</p>
              </div>
            <div className='suppliers-content  '>
            <Allbranditems />
            </div>
            <div className='footer-bar'>
                <Footer />
            </div>
        </div>
    )
}

export default function Suppliers(){
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
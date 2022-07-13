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
                        <div className="nav-link-item nav-link-item-active">
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


function ProductCard(props){

    return (
        <div className='product-card-second'>
            <div className='card-image-second'>
                <img src={product1} />
                <div className='product-title-second'>
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
                <div className='button-bottom'>
                    <a href='#' className='view-products'>View product</a>
                </div>
            </div>
        </div>
    )
}

function Allbranditems(){
    return (
        <div className='all-brand-products'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='header-section'>
                <p className='logo'>carro</p>
              </div>
              <div className='top-header'>
              <span className='logo-section'>
              <p className='secondary-logo'>Blendjet</p>
              <img src={verified} />
              </span>
              <div className='request-link'>
              <a href='#' >Request access to products</a>
              </div>
              <div className='exlink'>
              <a href='#'>shop.blendjet.com</a>
                <img src={exLink} />
              </div>
              </div>
              <div className='page-title'>
                <p className='earnings'>earn 15%</p>
                <p className='content-title'>
                    All products(A-Z)
                </p>
              </div>
            <div className='all-brands-content  '>
            <Allbranditems />
            </div>
        </div>
    )
}

export default function AllProducts(){
    return (
        <div className='container'>
            <div>
            <CollapsibleSidebar />
            </div>
            
            <div className='verticle-content'>
            <VerticleContent />
            </div>
        </div>
    )
}
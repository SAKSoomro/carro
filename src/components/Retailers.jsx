import '../index.css'
import { ChevronDown } from 'react-bootstrap-icons'
import useCollapse from 'react-collapsed'
import React, { useState } from 'react';
import icon from '../icons/christmas-stars.png'
import priceTag from '../icons/price-tag.png'
import nodejs from '../icons/node-js.png'
import handshake from '../icons/hand-shake.png'
import chat from '../icons/chat-bubbles-with-ellipsis.png'
import gear from '../icons/gear.png'
import bulb from '../icons/bulb.png'
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import sunstrip from '../img/sunstrip.png'
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


function RenderProductCollapse(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-products" {...getToggleProps()}>
        <CollapseProductsHeader />
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-products-content">
                <CollapseProductsBody />
                <CollapseProductsBody />
                <CollapseProductsBody />
            </div>
        </div>
    </div>
    )

}

function CollapseProductsHeader(){
    return (
        <div className='collapse-products-header'>
            <div className='cp-arrow'>
                <ChevronDown />
            </div>
            <div className='cp-email'>
                <p>saksoomro@gmail.com</p>
            </div>
            <div className='cp-store'>
                <p>my shopify store</p>
            </div>
            <div className='cp-products'>
                <p>4</p>
            </div>
            <div className='cp-sales'>
                <p>5</p>
            </div>
            <div className='cp-revenue'>
                <p>$873.28</p>
            </div>
            <div className='cp-actions'>
                <a href='#'>Message</a>
                <a href='#'>Rem</a>
            </div>
        </div>
    )
}

function CollapseProductsBody(){
    return (
        <div className='collapse-products-body'>
            <div className='cp-body-products'>
                <img src={sunstrip} />
                <p>Sunstrip</p>
            </div>
            <div className='cp-body-sales'>
                <p>3</p>
            </div>
            <div className='cp-body-revenue'>
                <p>$78.178</p>
            </div>
            <div className='cp-body-actions'>
                <a href='#'>Rem</a>
            </div>
        </div>
    )
}


function CollapseProducts(){
    return (
        <div className='collapse-products'>
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
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
                <a className='active-nav' href='suppliers'>suppliers</a>
                <a href='retailers'>retailers</a>
              </div>
              <div className='top-header retailers-header'>
                <ul className='list'>
                   <span className='email'><li>email</li></span>
                    <li>shopify.store</li>
                   <span className='products'><li>products</li> </span>
                    <li>sales</li>
                   <span className='revenue' > <li>revenue</li> </span>
                    <li>actions</li>
                </ul>
              </div>
            <div className='retailers-content  '>
           <CollapseProducts />
            </div>
        </div>
    )
}

export default function Retailers(){
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
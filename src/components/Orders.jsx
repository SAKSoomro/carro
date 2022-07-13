import '../index.css'
import { PersonCircle } from 'react-bootstrap-icons'
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

function OrdersCard(){
    return (
        <div className='orders-card'>
        <div className='order-no'>
            <p>00001</p>
        </div>
        <div className='order-date'>
            <p>2022-06-30</p>
        </div>
        <div className='source-shop'>
            <p>mystore.shopify.com</p>
        </div>
        <div className='customer-name'>
            <p>john doe</p>
        </div>
        <div className='total'>
            <p>$98.53</p>
        </div>
        <div className='quantity'>
            <p>2</p>
        </div>
        <div className='status'>
            <p>failure</p>
        </div>
        <div className='actions-btn'>
            <a href='#'>View</a>
        </div>
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='top-header-orders'>
            <div className='searchbar-orders'>
                <input type='text' placeholder='Search for products by title or SKU' />
            </div>
            <div className='user-welcome'>
                <p>welcome,alex</p>
                <img src={PersonCircle} />
            </div>
            </div>
            <div className='top-nav-header'>
                <ul>
                    <li>order</li>
                    <li>order date</li>
                    <li>source shop</li>
                    <li>customer name</li>
                    <li>total</li>
                    <li>quantity</li>
                    <li>status</li>
                    <li>actions</li>
                </ul>
            </div>
            <div className='orders-content'>
           <OrdersCard />
           <OrdersCard />
           <OrdersCard />
           <OrdersCard />
            </div>
        </div>
    )
}

export default function Orders(){
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
import React, {useState} from 'react';
import NavBar from './nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Footer from './footer';
import './css/pricing.css';

function Pricing(){
    const [selectedOption, setSelectedOption] = useState('Pay yearly upto 55% off');
    
    const options = [
        'Pay yearly upto 55% off',
        'Pay every two years upto 65% off',
        'Pay every three years upto 69% off'
    ]
    const handleSelect=(eventkey)=>{
        setSelectedOption(eventkey);
    };

    const deals = [
        {
            title: 'Starter',
            price: '$4',
            description:'Create your home on the web with a custom domain name.'
        },
        {
            title: 'Explorer',
            price: '$8',
            description:'Build a unique website with powerful design tools.'
        },
        {
            title: 'Creator',
            price: '$25',
            description:'Unlock the power of WordPress with the managed hosting platform built by WordPress experts.'
        },
        {
            title: 'Entrepreneur',
            price: '$45',
            description:'Create a powerful online store with built-in premium extensions'
        },
        {
            title: 'Cloud',
            price: '$65',
            description:'The power of WP Cloud combined with Bluehost expertise.'
        },
        {
            title: 'Enterprise',
            price: '$4',
            description:'Deliver an unmatched performance with the highest security standards on our enterprise content platform.'
        }
    ]
    const policies =[
        {
            img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dollar_sign_in_circle.svg/1024px-Dollar_sign_in_circle.svg.png",
            title: <h1>Stress‑free<br></br> refund policy</h1>,
            description: "If you change your mind, our no‑questions‑asked refund policy has your back."
        },
        {
            img_url:"https://static-00.iconduck.com/assets.00/question-mark-circled-icon-512x512-wsm5hkwj.png",
            title: <h1>Superlative<br></br> support</h1>,
            description: "If you change your mind, our no‑questions‑asked refund policy has your back."
        },
        {
            img_url:"https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/lock-circle-512.png",
            title: <h1>End-to-<br></br>end security</h1>,
            description: "If you change your mind, our no‑questions‑asked refund policy has your back."
        },
        {
            img_url:"https://cdn-icons-png.flaticon.com/512/0/924.png",
            title: <h1>The speed <br></br>you need</h1>,
            description: "If you change your mind, our no‑questions‑asked refund policy has your back."
        }
    ]
    return(
        <div>
            <NavBar/>
            <div className='pricing'>
                <div className='container'>
                    <h1 className='main-h1'>There is a plan for you</h1>
                    <p className='main-p'>Choose a plan today and unlock a powerful bundle of features. Or start with our free plan.</p>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={selectedOption}
                        onSelect={handleSelect}
                        >
                        {options.map((option) => (
                            <Dropdown.Item key={option} eventKey={option}>
                            {option}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <div className="deal-container">
                            {deals.map((deal) => (
                                <div key={deal.title} className="deal-card">
                                    <h2 className="deal-title">{deal.title}</h2>
                                    <p className="deal-description">{deal.description}</p>
                                    <p className="deal-price">{deal.price}</p>
                                    <button className='deal-button'>Get {deal.title}</button>
                                </div>
                            ))}
                    </div>
                    <button className='deal-button'>compare plans</button>
                </div>
            </div>
            <div className='main-3'>
                <div className='container'>
                    <h2 className='main-3-h2'>Built By WordGram</h2>
                    <h1 className='main-3-h1'>Your site. Built by us.</h1>
                    <p className='main-3-p'>Let our team of experts build your WordPress.com site. Whether you need a <br></br>
                        landing page or a full ecommerce site, we can build it for you.</p>
                    <Button variant="outline-light">Learn more</Button>{' '}
                </div>
                <img src='https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'
                        alt="main-3 banner"
                        className='main-3-img'/>
            </div>
            <div className='main-2'>
                <div className='container'>
                    <h1>The best way to WordGram</h1>
                    <p>From the free plan on up, when you build with WordPress.com you get all of the benefits of fast,
                        <br></br> secure managed WordPress hosting.</p>
                        <div className="policy-container">
                        {policies.map((policy) => (
                            <div key={policy.title} className="policy-card">
                                <img
                                src={policy.img_url}
                                alt={policy.title}
                                className="policy-image"
                                />
                                <h2 className="policy-title">{policy.title}</h2>
                                <p className="policy-description">{policy.description}</p>
                            </div>
                        ))}
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    
}

export default Pricing;
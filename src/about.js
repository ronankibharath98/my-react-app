import React from "react";
import Nav_Bar from "./nav";
import { useNavigate } from "react-router-dom";
import "./css/about.css";
import Footer from "./footer";

function About(){
    const details =[
        {
            img:"https://www.svgrepo.com/show/93163/voice-microphone.svg",
            title:"Everyone has a voice.",
            description:<p>Ideas don’t belong behind high walls. Software and your posts<br/> 
                        shouldn’t either. We’re here to help you express yourself.</p>
        },
        {
            img:"https://static.thenounproject.com/png/796210-200.png",
            title:"Real support from real people.",
            description:<p>Customer service isn’t something we offer. It’s who we are. We<br/>
                         call it Happiness—real support delivered by real human beings.</p>
        },
        {
            img:"https://www.svgrepo.com/show/309813/owner.svg",
            title:"Freedom and ownership.",
            description:<p>Whether it’s a blog, store, portfolio, or something entirely<br/>
                        different, you have the freedom to create a site that fits you, and<br/>
                        own all of your content and data too.</p>
        },
        {
            img:"https://www.svgrepo.com/show/172818/star-outline.svg",
            title:"You can make something that matters.",
            description:<p>With simple tools for designing and building your site, securely<br/>
                        hosting it, and finding your audience, you can have a website that<br/>
                        grows with you.</p>
        }
    ]
    const stats = [
        {
            img:"https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/group-people.png",
            title:"419M",
            description:"Unique visitors each month"
        },
        {
            img:"https://www.svgrepo.com/show/197996/internet.svg",
            title:"10B",
            description:"Page views each month"
        },
        {
            img:"https://icons.veryicon.com/png/o/miscellaneous/huihon_iconfont/menu-39.png",
            title:"80M",
            description:"New posts each month"
        },
        {
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Noun_Project_message_icon_1454470.svg/1024px-Noun_Project_message_icon_1454470.svg.png",
            title:"69M",
            description:"New comments each month"
        }
        
    ]

    const navigate = useNavigate();
    const handleButtonOnClick = ()=>{
        navigate('/home/pricing')
    }

    return(
            <div className="about">
                <Nav_Bar/>
                <div className="main-1">
                    <div className="container">
                    <h2>ABOUT US</h2>
                        <h1 className="main-1-h1">At WordGram.com, our mission<br></br> 
                            is to democratize publishing and <br></br> 
                            eCommerce one website at a time.</h1>
                        <p className="main-1-p">We’re a hosted version of the open source software, WordGram. Because when you<br/> 
                            have the freedom to create, express yourself, and earn money online,,<br/>
                            the impossible becomes business as usual.</p>
                    </div>
                </div>
                <div className="main-2">
                    <div className="container">
                        <h2>WHAT WE BELIEVE</h2>
                        <h1 className="main-2-h1">Anyone can have an idea. We<br/> 
                            want you to have the power<br/> 
                            and support to get it online.</h1>
                        <h3>Better products for a better web.</h3>
                        <p className="main-2-p">We’re trying to create a better web. An internet you can feel good<br/> 
                            about using. A place where people and ideas come together<br/>
                            freely and openly.</p>
                        <div className="details-container">
                            {details.map((detail) => (
                                <div key={detail.title} className="details-card">
                                    <img
                                        src={detail.img}
                                        alt={detail.title}
                                        className="policy-image"
                                    />
                                    <h2 className="details-title">{detail.title}</h2>
                                    <p className="details-description">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="main-3">
                    <div className="container">
                        <h2 className="">WHO WE ARE</h2>
                        <h1 className="main-3-h1">We’re as diverse as the <br/>
                            websites our customers create.</h1>
                        <p className="main-3-p">All of us work on improving WordGram.com and the products that help our<br/>
                            customers find new ways to do things online. At Automattic, we roll out<br/>
                            updates almost every day, and develop other services, from WooCommerce<br/>
                            and Jetpack to Gravatar and Simplenote, to enhance your experience on the web.
                        </p>
                        <h3 className="main-3-h3">OUR NETWORK</h3>
                        <p className="main-3-p">WordPress.com is part of a community of creators, bloggers,
                            business<br/> owners, community organizers, our supportive people, and customers<br/>
                            like you.
                        </p>
                        <hr className="seperator"/>
                        <div className="stats-container">
                            {stats.map((stat) => (
                                <div key={stat.title} className="stats-card">
                                    <img
                                        src={stat.img}
                                        alt={stat.title}
                                        className="stas-image"
                                    />
                                    <h1 className="stats-title">{stat.title}</h1>
                                    <p className="stats-description">{stat.description}</p>
                                </div>
                            ))}
                        </div>
                        <hr className="seperator"/>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1 className="seperator-h1"> WordPress.com has<br/> everything you need to<br/> get you started.</h1>
                                </div>
                                <div className="col">
                                    <p className="seperator-p">Custom domains, so you have your own address for your website.<br/> 
                                        Speed and security essentials from Jetpack, WooCommerce<br/>
                                        stores, anti-spam software Akismet, and many more features<br/>
                                        and upgrades.
                                    </p>
                                    <button className="main-3-btn" type="button" onClick={handleButtonOnClick}>See what we offer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    )
}

export default About;
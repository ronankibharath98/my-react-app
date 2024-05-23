import React from "react";
import './css/footer.css'

function Footer(){

    const links = [
        {
          title: 'Products',
          items: [
            'WordPress Hosting',
            'Domain Names',
            'Website Builder',
            'Create a Blog',
            'Professional Email',
            'WordPress for Teams',
            'Website Design Services',
            'Enterprise Solutions',
          ],
        },
        {
          title: 'Features',
          items: [
            'Overview',
            'WordPress Themes',
            'WordPress Plugins',
            'WordPress Patterns',
            'Google Apps',
          ],
        },
        {
          title: 'Resources',
          items: [
            'WordPress.com Support',
            'WordPress Forums',
            'WordPress News',
            'Website Building Tips',
            'Business Name Generator',
            'Logo Maker',
            'Discover New Posts',
            'Popular Tags',
            'Blog Search',
            'Daily Webinars',
            'Learn WordPress',
            'Developer Resources',
          ],
        },
        {
          title: 'Company',
          items: [
            'About',
            'Partners',
            'Press',
            'Terms of Service',
            'Privacy Policy',
          ],
        },
      ];

    return(
        <div className='main-4'>
                <div className='container'>
                    <h1 className='main-4-text'> WordGram.com </h1>
                    <h2 className='main-4-h2'>Explore what we offer</h2>
                    <div className="columns-container">
                        {links.map((link) => (
                            <div key={link.title} className="column">
                            <a href={link.href}>
                                <h3>{link.title}</h3>
                            </a>
                            {link.items && (
                                <ul>
                                    {link.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Footer;
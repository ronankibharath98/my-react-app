import React from 'react';
import Nav_Bar from './nav';
import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Footer from './footer';

function Home(){
    const blogs = [
        { id: 1, title: 'Podcast Blog', description: 'quis nostrud exercitation nisi ut aliquip 1', user: 'User 1',blogRef:"",imageUrl:"https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: 2, title: 'Tech Gear', description: 'quis nostrud exercitation ut aliquip', user: 'User 2',blogRef:"", imageUrl:"https://plus.unsplash.com/premium_photo-1680104511613-ac897df8c6a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: 3, title: 'Evolution Computer', description: 'nostrud exercitation ullamco laboris', user: 'User 3',blogRef:"", imageUrl:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8fDA%3D" },
      ];
    const features = [
    {
        id: 1,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovlZSBsVjROlKcoe2UJfLNrT-267q_6fwFA&s", // Replace with your image URL
        title: "Get seen",
        description: "Set your blog apart from the rest with professional design templates and intuitive, drag-and-drop customization.",
    },
    {
        id: 2,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH5Dx5y0FGd4inb-wQPLvyGNMCT601VZhpTwnGbpXeQ&s", // Replace with your image URL
        title: "Get found",
        description: "Grow your audience and generate new business with powerful SEO, newsletter, lead capture, and social sharing tools.",
    },
    {
        id: 3,
        imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8zMzMrKyslJSXt7e0fHx8uLi6hoaF0dHTBwcGTk5Pq6up7e3tYWFgiIiLl5eUVFRXz8/NOTk7e3t6mpqZlZWUaGhoQEBC4uLg9PT3W1tabm5s2NjZfX1+NjY3Ly8tJSUmFhYWvr69ubm4LCwt4eHhCQkIDe76LAAAEtklEQVR4nO2di3KiMBSGIYFQsUIRxbvWuu77P+K2JtTZUN1AYjyb+b+ZztQZyfAZcnIBTqIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBIlB/7V3Lky9KV32GyKDgjBy8Wu4MLv+rciJgoojk6EHznz/a4RzGxNpyyZ0vch+8sBY/FsxX+RZpbCR5SVY7g5GijQ1rbGE5UMekuJ8dE/fpsblOFb6qQkc3P9CiWKgYuLCrxVYaZdOnutFzyIWuR7YcXIQWFbbh6GNNLIxKrwQWsZSBtnIwcHsFIViIffJkupaFweVJOqWRLTAeHifxSADu5PCm37C6XKc+GHi8DDbPrUh/KkdmFmpfL8Xzj8pzcspeGg8ffdwyTkgJjVYfn8denxJ1hkk22vKCAGnKJr//5dpf1lbxhmF/HhLQQBZ85MKza8SBJmnlla1gRnzDyXlPinwznpKf8n/AXO8OsebbBP2l6zBO6hklbgwW9a5WrcxNb86bYNcxVKelsTI+Nur4K84DaMaxWspt4oznbWEpFMTU+omM4kkUUg0e6D2YvL7FmbXpAx1AOA8WqV5/jkbFqkcYj6Y6hXJgaPtB9OCc5TjVem9INK9kKU5qt8As1Z9+afr9jKJfemNUC5UNZyxHlm+n3dcNSLS4OmKZ4olSGpoFCGX5HzlKG0h49qm8SZWhaB9IwZqlCdffhGerA8InAUAeG9BgaSxtFEagh29d1vf78q0dFmIbXHr8OtMe/jtpg+HxgqANDesBQ5/8zrNwYxpuMKhvmxvDZT7TdIXZjSB4YwpA+1obPfkr/Do4MX8hyEk4Mje8K+MdRj094TBP+qA2GOjCkBwx1YEgPGOrAkB4w1IEhPWCoA0N6wFAHhj9SZxu3zHr8oD4Ms4XrWxFFYf7ErgfD9a/YOSI2rkUPhsdHvGli/qq1B8MbD4rZYZ4PwIPh8hG3NgrjZEI+Is0kFa5ZmL9q7aW3yKaOmfR42x49vg4M6QFDHRjSA4Y6MKQHDHVgSA8Y6sCQHjDUgeGPjM7zQZxyB6mdfRie39iw1RjGuXHCjpt4MGwzng6BmWdduYUHw71NGqmFdQP3YJjbGBone7iJB8N6MVyQ2yfZ9BFpZr+KgfeYmt9jO72ov6HM7sm/l5yNeovyYzYMF9mY+xqq3Jnn9nN4Pf7H5e30ayLi8AxVRvamzSkUnmEkQz97VR8DNJzL+51t/rMADVUGOrGSg+LwsihFkcoiKEQ++mTGwzP8vmnNw8wTFX23xL8IyzCJu0mRwzKMym4u1sAMo3KqbzUTmmEUZSyVKxPBGkbV8jhdfRGsYUuIPf7fKEPzRwW9M+6Z+1InUflLne1Z55xaGi6GHl+prYPo5qBVG88M3zdG7s3D6W5aItddLDY3ks/Hind3p+SWSkZ7iypYyouA6g5XUWa9fVOi+nyisWYtJz9W+cbVNmViSzHYjNSoyypOqGgci2I6ocZ7u3cKs1pZPrb3JRw+5ewKdWap5e5Nv2luonPF+h5d/cOUmBJsZZ1PvY7pbU9yha8chPlqnlJ1ZM3ZzazgcNo2KT2a1Yv9kwAtSX0YUeNQ053VAQAAAAAAAAAAAAAAAAAAAAAAAAAAADzyBwd0xC/qw5oZAAAAAElFTkSuQmCC", // Replace with your image URL
        title: "Get paid",
        description: "Give your readers a range of ways to support your work with subscriptions, ads, downloads, donations, gated content, and more.",
    },
    {
        id: 4,
        imageUrl: "data:image/png;base64,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", // Replace with your image URL
        title: "Go further",
        description: "Never outgrow your blog thanks to over 50,000 plugins, themes, and easy-to-set-up integrations with the tools you already use.",
    },
    ];
    const deals = [
        {
            title:'.Online',
            price:'$10.20/year'
        },
        {
            title:'.Store',
            price:'$7.10/year'
        },
        {
            title:'.Art',
            price:'$6.20/year'
        },
        {
            title:'.blog',
            price:'$40.90/year'
        }
    ];
    
    
    return(
        <div className='home-page'>
            <Nav_Bar/>
            <div className='main-1'>
                <div className="container">
                    <h1 className='main-text'> Simple to Start,<br></br>Easier to Grow</h1>
                    <p className='main-para'>Turn your idea into a blog in minutes. 
                        Then take it further with flexible, intuitive tools designed to <br></br>help you grow.</p>
                    <Button className="main-button" variant="primary" href="/blog">Start your blog</Button>
                    <div className="row justify-content-center" style={{paddingTop:"30px", paddingBottom:"20px"}}>
                        <h1>Browse Blog</h1>
                            {blogs.map(blog => (
                        <div key={blog.id} className="col-md-4 mb-4">
                            <div className="blog-post">
                                <img src={blog.imageUrl} alt={blog.title} className="img-fluid" />
                                <div className="blog-details">
                                    <h5>{blog.title}</h5>
                                    <p>{blog.description}</p>
                                    <small>{blog.user}</small>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='main-2'>
                <div className='container'>
                    <h1 className='main-text'>You're in control</h1>
                    <p className='main-para'>Whatever you’re publishing. Whoever your audience is. WordPress.com makes <br></br>
                        designing, editing, and sharing your work as simple as drag, drop, and click.</p>
                    <Button className="main-button" variant="primary">Start your blog</Button>
                    <div className="feature-container">
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card">
                                <img
                                src={feature.imageUrl}
                                alt={feature.title}
                                className="feature-image"
                                />
                                <h2 className="feature-title">{feature.title}</h2>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='main-3'>
                <div className='container'>
                    <h1 className='main-text'>Get your blog’s domain<br></br>
                        free with any paid plan</h1>
                    <p className='main-para'>Claim the perfect domain for your blog and pay nothing for a year with any annual plan 
                        <br></br>purchase. Choose your .com, .blog, or any of 350+ domain extensions.</p>
                    <Button className="domain-button" variant="primary">Get your free domain today</Button>
                    <h2 className='main-3-h2'>Deals on domain</h2>
                    <div className="deal-container">
                        {deals.map((deal) => (
                            <div key={deal.title} className="deal-card">
                                <h2 className="deal-title">{deal.title}</h2>
                                <p className="deal-description">{deal.price}</p>
                                <p className="deal-description">Get your blog's perfect domain & first year FREE! 
                                <br></br> (This emphasizes the free year and grabs attention)</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;

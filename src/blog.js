import React from "react";
import './css/blog.css'

function Blog(){
    return(
        <div className="blog">
            <div className="container">
                <h1>What's your site about?</h1>
                <p>This will help us find you some starting ideas and examples.</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button>Media & Podcasts</button>
                        </div>
                        <div className="col">
                            <button>Travel</button>
                        </div>
                        <div className="col">
                            <button>Gaming</button>
                        </div>
                        <div className="col">
                            <button>Weddings</button>
                        </div>
                        <div className="col">
                            <button>Fitness</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button>Nature & Animals</button>
                        </div>
                        <div className="col">
                            <button>Marketing</button>
                        </div>
                        <div className="col">
                            <button>Art</button>
                        </div>
                        <div className="col">
                            <button>Education</button>
                        </div>
                        <div className="col">
                            <button>Health & Beauty</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button>Jewelry</button>
                        </div>
                        <div className="col">
                            <button>Food</button>
                        </div>
                        <div className="col">
                            <button>Fashion</button>
                        </div>
                        <div className="col">
                            <button>Real Estate & Properties</button>
                        </div>
                        <div className="col">
                            <button>Consulting</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button>Non-Pofit</button>
                        </div>
                        <div className="col">
                            <button>Retaurants</button>
                        </div>
                        <div className="col">
                            <button>Technology</button>
                        </div>
                        <div className="col">
                            <button>Photography</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button>Interior Design</button>
                        </div>
                        <div className="col">
                            <button>Music</button>
                        </div>
                        <div className="col">
                            <button>Design</button>
                        </div>
                        <div className="col">
                            <button>Personal & Cv</button>
                        </div>
                    </div>
                </div>
                <p>Don't see what you're looking for?</p>
                    <form action="/submit-data" method="POST">
                    <label for="user_input">Describe your site:</label>
                    <input type="text" id="user_input" name="user_input"/>
                    <button type="submit">Next</button>
                    </form>
            </div>
        </div>
    )
}

export default Blog;
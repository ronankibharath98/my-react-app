import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const LandingPage=()=>{
    return(
        <div className="landing-page" 
        style={{backgroundColor:"#011627",position:"fixed",overflow:"auto",
        top:"0%",left:"0%",width:"100%",height:"100%",color: "white",
                    fontFamily:"arial"}}>

            <img style={{height:"60px", padding:"10px"}}
                alt=""  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Blogger_icon_2017.svg/400px-Blogger_icon_2017.svg.png'
                />
            <span style={{fontSize:"20px" }}>BlogPost</span>
            <a href="Signup" id="googleSignInBtn" style={{color:"white",float:"right", display:"flex",justifyContent:"flex-end",paddingRight:"10px",paddingTop:"5px"}}>
                SIGN IN
            </a>
            <div className="container" style={{paddingBottom:"10px",paddingTop:"60px",display:"grid", placeItems:"center"}}>
                <h1>Publish your passions, your way</h1>
                <p style={{fontSize:"25px"}}>Create a unique and beautiful blogs easily.</p>
                <Image src="https://img.freepik.com/premium-vector/blog-icons-design_18591-34344.jpg?w=1380"
                    alt="banner"
                    style={{padding:"20px",borderRadius:"10px", height:"500px"}}/>
                <Button variant="light" style={{borderColor:"#D34E24" ,backgroundColor:"#D34E24", color:"white"}}>CREATE YOUR BLOG</Button>
            </div>
        </div>
    );
}

export default LandingPage;
const HeroSection=()=>{
    return(
        <main className="hero container">
        <div className="herocontent">
       <h1>YOUR FEET DESERVE THE BEST</h1>
       <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                 <img src="/images/amazon.png" alt=""/>
            <img src="/images/flipkart.png" alt=""/>
            </div>
           
        </div>
         
        </div>
        <div className="heroimg">
             <img src="/images/shoe_image.png" alt=""></img>
        </div>
        </main>

    );
};

export default HeroSection;
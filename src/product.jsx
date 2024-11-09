import Section from "./components/section";


const Product = () =>{
    return(
        <>
         <div className="top">
        <div className="container">
            <div className="top-main">
                <h4>COLLECTIONS</h4>
                <h1>Top Products</h1>

                <ul>
                    <li>All products</li>
                    <li>Bags</li>
                    <li>Suits</li>
                    <li>Pants</li>
                    <li>Shirts</li>
                </ul>
            </div>
        </div>


        <div className="product">
            <div className="container">
                <div className="product-main">
                    <div className="product-img-1" data-aos="flip-left" data-aos-duration="1000">
                        <img src="imges/c1.png" alt="" />
                        <h3>Harper's Bazaar Suit</h3>
                        <p>$523</p>
                        <button className="btn6">Create Now </button>
                    </div>
                    <div className="product-img-2" data-aos="flip-left" data-aos-duration="1200">
                        <img src="imges/c2.png" alt="" />
                        <h3>Harper's Bazaar Suit</h3>
                        <p>$523</p>
                    </div>
                    <div className="product-img-3" data-aos="flip-left" data-aos-duration="1400">
                        <img src="imges/c3.png" alt="" />
                        <h3>Harper's Bazaar Suit</h3>
                        <p>$523</p>
                    </div>
                </div>
            </div>




            <div className="view-more">
                <img src="imges/view.png" alt="" />
            </div>



            <div className="bag">
                <div className="container">
                    <div className="bag-main">
                        <div className="bag-img-1" data-aos="flip-left" data-aos-duration="1000">
                            <img src="imges/b1.png" alt="" />
                            <h3>Harper's Bazaar Suit</h3>
                            <p>$523</p>
                            <button className="btn6">Create Now </button>
                        </div>
                        <div className="bag-img-2" data-aos="flip-left" data-aos-duration="1200">
                            <img src="imges/b2.png" alt="" />
                            <h3>Harper's Bazaar Suit</h3>
                            <p>$523</p>
                        </div>
                        <div className="bag-img-3" data-aos="flip-left" data-aos-duration="1400">
                            <img src="imges/b3.png" alt="" />
                            <h3>Harper's Bazaar Suit</h3>
                            <p>$523</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
    )
}

export default Product;
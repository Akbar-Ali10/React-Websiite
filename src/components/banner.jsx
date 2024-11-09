


const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-main">
                        <div className="banner-img" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/imges/banner.png" alt="Banner" />
                        </div>
                        <div className="banner-h1-p-btn" data-aos="fade-up" data-aos-duration="1000">
                            <div className="banner-h1">
                                <h1>The Fall <br />Collection</h1>
                            </div>
                            <div className="banner-p">
                                <p>
                                    Fashion plays an important role in people's lives. <br />
                                    The way people dress expresses their individuality <br />
                                    and personality, and can influence how others <br />
                                    perceive them.
                                </p>
                            </div>
                            <div className="banner-btn">
                                <button className="btn3">Shop Now</button>
                                <button className="btn4">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;

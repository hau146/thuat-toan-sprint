import "../css/bootstrapMainPage.min.css"
import "../css/owl.carousel.css"
import "../css/mainPage.css"
export function MainPage(){
    return(
        <>
            <header>
                <div className="main-nav">
                    <div className="logo">
                        <img src="assets/images/logo/logo1.png" />
                    </div>
                    <div className="menu-toggle" />
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                                <a href="services.html">Services</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="book">
                        <ul>
                            <li>
                                <a href="#">Book a Tabble</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="flaticon-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="flaticon-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="flaticon-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* //////////////////////header-End/////////////////////// */}
            {/* ====================================================== */}
            {/* //////////////////////Main-Started/////////////////////// */}
            <main>
                <section className="slider">
                    <div className="shape" />
                    <div
                        id="carouselExampleFade"
                        className="carousel slide carousel-fade"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://i.pinimg.com/564x/0a/b8/d9/0ab8d95277147528bdc0890daeb0fe76.jpg"
                                    className=""
                                    alt="..."
                                />
                                <div className="wrapper">
                                    <h6>Exclusive Offer</h6>
                                    <h1>We are here to provide the best service</h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </p>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.pinimg.com/564x/9c/fc/a4/9cfca4041f5040796b6fa5880becaadc.jpg"
                                    className=""
                                    alt="..."
                                />
                                <div className="wrapper">
                                    <h6>Exclusive Offer</h6>
                                    <h1>We are here to provide the best service</h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </p>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.pinimg.com/564x/de/5b/fa/de5bfa8652e393ea337a0e361bbccfea.jpg"
                                    className=""
                                    alt="..."
                                />
                                <div className="wrapper">
                                    <h6>Exclusive Offer</h6>
                                    <h1>We are here to provide the best service</h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </p>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleFade"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleFade"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="se-second">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <div className="image">
                                            <img src="assets/images/abt-img/1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <h5>About Us</h5>
                                        <h3>We are here with 20 years of experience</h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look
                                            even slightly believable. If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum
                                            generators on the Internet tend to repeat predefined chunk
                                        </p>
                                        <a href="#">Read More</a>
                                        <li>
                                            <h4>David Ambrose</h4>
                                            <span>CEO &amp; Founder</span>
                                            <img src="assets/images/team/person.jpg" />
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="se-third">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h5>Work</h5>
                                    <h2>How It Works</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Asperiores officiis explicabo blanditiis consequuntur fugit
                                        fugiat, incidunt totam consectetur veritatis minus corporis
                                        doloribus, qui maxime velit nesciunt, officia praesentium odit
                                        facilis.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <ol>
                                            <li>
                                                <i className="flaticon-fish" />
                                                <h4>Pick Meals</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Asperiores officiis explicabo blanditiis consequuntur
                                                    fugit
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <ol>
                                            <li>
                                                <i className="flaticon-shipped" />
                                                <h4>Fast Deliveries</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Asperiores officiis explicabo blanditiis consequuntur
                                                    fugit
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <ol>
                                            <li>
                                                <i className="flaticon-tap" />
                                                <h4>choose How Often</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Asperiores officiis explicabo blanditiis consequuntur
                                                    fugit
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="se-five">
                    <div className="shap" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wrapper">
                                    <h5>29% Discount</h5>
                                    <h2>Enjoy with Family and Friends</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim minim veniam, quis nostrud exercitation ullamco
                                    </p>
                                    <a>View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="se-four">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2>Services</h2>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <img src="assets/images/icons/ico-1.png" />
                                        <h4>High Quality Foods</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humou
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <img src="assets/images/icons/ico-2.png" />
                                        <h4>Inspiring Recipes</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humou
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <img src="assets/images/icons/ico-3.png" />
                                        <h4>Salutary Meals</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humou
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <img src="assets/images/icons/ico-4.png" />
                                        <h4>Veteran Staff</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humou
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <img src="assets/images/icons/ico-5.png" />
                                        <h4>Pristine Ingredientss</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humou
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <img src="assets/images/icons/ico-6.png" />
                                        <h4>Express Delivery</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humou
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="menu-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2>Our Menu</h2>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="wrapper">
                                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="starters-item"
                                                data-toggle="tab"
                                                href="#starters"
                                                role="tab"
                                                aria-controls="all"
                                                aria-selected="true"
                                            >
                                                Starters
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="breakfast-items"
                                                data-toggle="tab"
                                                href="#breakfast"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                breakfast
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="lunch-items"
                                                data-toggle="tab"
                                                href="#lunch"
                                                role="tab"
                                                aria-controls="contact"
                                                aria-selected="false"
                                            >
                                                lunch
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="dinner-item"
                                                data-toggle="tab"
                                                href="#dinner"
                                                role="tab"
                                                aria-controls="contact"
                                                aria-selected="false"
                                            >
                                                dinner
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="beverage-item"
                                                data-toggle="tab"
                                                href="#beverage"
                                                role="tab"
                                                aria-controls="contact"
                                                aria-selected="false"
                                            >
                                                Beverage
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="starters"
                                            role="tabpanel"
                                            aria-labelledby="starters-item"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/1.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Almond Baked Brie</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/2.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Tuscan Flatbread</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/3.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="breakfast"
                                            role="tabpanel"
                                            aria-labelledby="breakfast-items"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Tuscan Flatbread</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Almond Baked Brie</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="lunch"
                                            role="tabpanel"
                                            aria-labelledby="lunch-items"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="dinner"
                                            role="tabpanel"
                                            aria-labelledby="dinner-item"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="beverage"
                                            role="tabpanel"
                                            aria-labelledby="beverage-item"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Almond Baked Brie</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Tuscan Flatbread</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2>BLOG POSTS</h2>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="wrapper">
                                            <div className="content">
                                                <article className="blog-sub">
                                                    <div className="blog-content">
                                                        <img src="assets/images/blog/1.jpg" />
                                                    </div>
                                                    <div className="blog-content-date">
                                                        Dec
                                                        <span> 28</span>
                                                    </div>
                                                    <div className="blog-content-section">
                                                        <div className="blo-content-title">
                                                            <h4>How to make a hot pizza?</h4>
                                                            <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                                                elit. Neque at numquam, asperiores aut praesentium
                                                                facilis ratione! Voluptatibus neque dignissimos ipsa
                                                            </p>
                                                        </div>
                                                        <div className="blog-admin">
                                                            <ol>
                                                                <li>
                                                                    <i className="flaticon-user" /> By Admin
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-calendar" /> dec 28, 2020
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wrapper">
                                            <div className="content">
                                                <article className="blog-sub">
                                                    <div className="blog-content">
                                                        <img src="assets/images/blog/2.jpg" />
                                                    </div>
                                                    <div className="blog-content-date">
                                                        Dec
                                                        <span> 28</span>
                                                    </div>
                                                    <div className="blog-content-section">
                                                        <div className="blo-content-title">
                                                            <h4>How to make a hot pizza?</h4>
                                                            <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                                                elit. Neque at numquam, asperiores aut praesentium
                                                                facilis ratione! Voluptatibus neque dignissimos ipsa
                                                            </p>
                                                        </div>
                                                        <div className="blog-admin">
                                                            <ol>
                                                                <li>
                                                                    <i className="flaticon-user" /> By Admin
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-calendar" /> dec 28, 2020
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wrapper">
                                            <div className="content">
                                                <article className="blog-sub">
                                                    <div className="blog-content">
                                                        <img src="assets/images/blog/3.jpg" />
                                                    </div>
                                                    <div className="blog-content-date">
                                                        Dec
                                                        <span> 28</span>
                                                    </div>
                                                    <div className="blog-content-section">
                                                        <div className="blo-content-title">
                                                            <h4>How to make a hot pizza?</h4>
                                                            <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                                                elit. Neque at numquam, asperiores aut praesentium
                                                                facilis ratione! Voluptatibus neque dignissimos ipsa
                                                            </p>
                                                        </div>
                                                        <div className="blog-admin">
                                                            <ol>
                                                                <li>
                                                                    <i className="flaticon-user" /> By Admin
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-calendar" /> dec 28, 2020
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wrapper">
                                            <div className="content">
                                                <article className="blog-sub">
                                                    <div className="blog-content">
                                                        <img src="assets/images/blog/1.jpg" />
                                                    </div>
                                                    <div className="blog-content-date">
                                                        Dec
                                                        <span> 28</span>
                                                    </div>
                                                    <div className="blog-content-section">
                                                        <div className="blo-content-title">
                                                            <h4>How to make a hot pizza?</h4>
                                                            <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                                                elit. Neque at numquam, asperiores aut praesentium
                                                                facilis ratione! Voluptatibus neque dignissimos ipsa
                                                            </p>
                                                        </div>
                                                        <div className="blog-admin">
                                                            <ol>
                                                                <li>
                                                                    <i className="flaticon-user" /> By Admin
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-calendar" /> dec 28, 2020
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2>our team</h2>
                                </div>
                            </div>
                            <div className="main-team-card d-flex">
                                <div className="team-setup">
                                    <div className="team-items">
                                        <div className="team-user">
                                            <img src="assets/images/team/1.jpg" />
                                        </div>
                                        <div className="team-user-social">
                                            <ol>
                                                <li>
                                                    <i className="flaticon-facebook" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-twitter" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-behance" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-youtube" />
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="team-name">
                                            <h2>Mark Anthony</h2>
                                            <b>Founder &amp; CEO</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-setup">
                                    <div className="team-items">
                                        <div className="team-user">
                                            <img src="assets/images/team/2.jpg" />
                                        </div>
                                        <div className="team-user-social">
                                            <ol>
                                                <li>
                                                    <i className="flaticon-facebook" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-twitter" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-behance" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-youtube" />
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="team-name">
                                            <h2>Jessica Lee</h2>
                                            <b>Chinese Kitchen Lead</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-setup">
                                    <div className="team-items">
                                        <div className="team-user">
                                            <img src="assets/images/team/3.jpg" />
                                        </div>
                                        <div className="team-user-social">
                                            <ol>
                                                <li>
                                                    <i className="flaticon-facebook" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-twitter" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-behance" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-youtube" />
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="team-name">
                                            <h2>John Bennett</h2>
                                            <b>French Kitchen Lead</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-setup">
                                    <div className="team-items">
                                        <div className="team-user">
                                            <img src="assets/images/team/4.jpg" />
                                        </div>
                                        <div className="team-user-social">
                                            <ol>
                                                <li>
                                                    <i className="flaticon-facebook" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-twitter" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-behance" />
                                                </li>
                                                <li>
                                                    <i className="flaticon-youtube" />
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="team-name">
                                            <h2>ANDERSON JHON</h2>
                                            <b>Sous Chef</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* //////////////////////Main-End/////////////////////// */}
            {/* ====================================================== */}
            {/* //////////////////////Footer-Started/////////////////////// */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="wrapper">
                                <h3>
                                    <img src="assets/images/logo/logo1.png" />
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
                                    repellendus necessitatibus doloribus
                                </p>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Enter Your Email"
                                        role="text"
                                        name="email"
                                        type="email"
                                    />
                                    <i className="flaticon-email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="wrapper">
                                <h2>Usefull Links</h2>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Menu</a>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="wrapper">
                                <h2> Opening Time</h2>
                                <div className="content">
                                    <ul className="d-flex se">
                                        <li>
                                            <a>Monday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                        <li>
                                            <a>Tuseday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                        <li>
                                            <a>Wednesday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                        <li>
                                            <a>Thursday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                        <li>
                                            <a>Friday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                        <li>
                                            <a>Saturday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                        <li>
                                            <a>Sunday</a>
                                            <span>8 AM &nbsp;-&nbsp; 10 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                2020 @ All Rights Reserved Designed and developed by
                                <a href="https://www.smarteyeapps.com">smarteyeapps</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* *********************************************************** */}
        </>

    )
}
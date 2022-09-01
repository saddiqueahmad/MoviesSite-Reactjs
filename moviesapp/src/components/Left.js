import React from "react";

const Left = () => {
return(

    <main className="main-content-area">

    <section className="posts">
        <article className="post post-half">
            <a href="/">
                <div>
                    <img src="images/img_1.jpg" alt="fight club" />
                </div>
                <div className="post-content">
                    <h2>fight club</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis,
                        doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae
                        praesentium suscipit esse assumenda laboriosam et enim quis facilis nam,
                    </p>
                </div>
            </a>
        </article>

        <article className="post post-half">
            <a href="#">
                <div>
                    <img src="images/img_2.jpg" alt="captain jack sparrow" />
                </div>
                <div className="post-content">
                    <h2>captain jack sparrow</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis,
                        doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae
                        praesentium suscipit esse assumenda laboriosam et enim quis facilis nam,
                    </p>
                </div>
            </a>
        </article>

        <article className="post post-one-third">
            <a href="#">
                <div>
                    <img src="images/img_3.jpg" alt="the good the bad and the ugly" />
                </div>
                <div className="post-content">
                    <h2>the good the bad and the ugly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis,
                        doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae
                        praesentium suscipit esse assumenda laboriosam et enim quis facilis nam,
                    </p>
                </div>
            </a>
        </article>

        <article className="post post-one-third">
            <a href="#">
                <div>
                    <img src="images/img_4.jpg" alt="sherlock holmes" />
                </div>
                <div className="post-content">
                    <h2>sherlock holmes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis,
                        doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae
                        praesentium suscipit esse assumenda laboriosam et enim quis facilis nam,
                    </p>
                </div>
            </a>
        </article>

        <article className="post post-one-third">
            <a href="#">
                <div>
                    <img src="images/img_6.jpg" alt="the joker" />
                </div>
                <div className="post-content">
                    <h2>the joker</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis,
                        doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae
                        praesentium suscipit esse assumenda laboriosam et enim quis facilis nam,
                    </p>
                </div>
            </a>
        </article>

        <article className="post post-full">
            <a href="#">
                <div>
                    <img src="images/img_7.jpg" alt="mission impossible" />
                </div>
                <div className="post-content">
                    <h2>mission impossible</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad ipsa. Perspiciatis,
                        doloremque consectetur recusandae quidem provident voluptatibus nobis! Molestiae
                        praesentium suscipit esse assumenda laboriosam et enim quis facilis nam,
                    </p>
                </div>
            </a>
        </article>

    </section> 

    <section className="watch">
        <h2 className="section-header">watch today</h2>
        <div className="watch-card">
            <div className="watch-img">
                <img src="images/img_8.jpg" />
            </div>
            <div className="watch-content">
                <h2>Baby Driver</h2>
                <div className="movie-info">
                    <span>2017</span>
                    <span>121 min</span>
                    <span>action</span>
                    <span>7.78</span>
                    <span>8:30 pm</span>
                    <p className="movie-story">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad
                        ipsa. Perspiciatis, doloremque consectetur recusandae</p>
                    <a href="#">read more</a>
                </div>
            </div>
        </div>
        <div className="watch-card">
            <div className="watch-img img-right">
                <img src="images/img_9.jpg" />
            </div>
            <div className="watch-content">
                <h2>Baby Driver</h2>
                <div className="movie-info">
                    <span>2017</span>
                    <span>121 min</span>
                    <span>action</span>
                    <span>7.78</span>
                    <span>8:30 pm</span>
                    <p className="movie-story">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad
                        ipsa. Perspiciatis, doloremque consectetur recusandae</p>
                    <a href="#">read more</a>
                </div>
            </div>
        </div>
    </section> 

    <section className="download">
        <h2 className="section-header">Download Now</h2>
        <div className="download-card">
            <div className="download-img">
                <img src="images/img_11.png" />
            </div>
            <div className="download-content">
                <a href="#">
                    <span>download</span>
                    <i className="fas fa-cloud-download-alt"></i>
                </a>
                <div className="download-info">
                    <div className="download-genre">
                        <h4>Genre : </h4>
                        <p>adventure, romance, action, horror</p>
                    </div>
                    <div className="download-cast">
                        <h4>cast : </h4>
                        <img src="images/img_11.jpg" />
                        <img src="images/img_12.jpg" />
                        <img src="images/img_13.jpg" />
                        <img src="images/img_14.jpg" />
                        <img src="images/img_15.jpg" />
                    </div>
                </div>
                <div className="download-rating">
                    <span className="rate">8.7</span>
                    <span>( 1200 ratings )</span>
                    <span>( 6 seasons )</span>
                </div>
            </div>
        </div>
    </section> 

    <section className="gallery">
        <h2 className="section-header">Movies Gallery</h2>
        <div className="gallery-imgs">

            <div className="gallery-img">
                <a href="images/gallery_1.jpg" data-lightbox="image">
                    <img src="images/gallery_1.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_2.jpg" data-lightbox="image">
                    <img src="images/gallery_2.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_3.jpg" data-lightbox="image">
                    <img src="images/gallery_3.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_4.jpg" data-lightbox="image">
                    <img src="images/gallery_4.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_5.jpg" data-lightbox="image">
                    <img src="images/gallery_5.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_6.jpg" data-lightbox="image">
                    <img src="images/gallery_6.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_7.jpg" data-lightbox="image">
                    <img src="images/gallery_7.jpg" alt=""  />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_8.jpg" data-lightbox="image">
                    <img src="images/gallery_8.jpg" alt="" />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_9.jpg" data-lightbox="image">
                    <img src="images/gallery_9.jpg" alt="" />
                </a>
            </div>

            <div className="gallery-img">
                <a href="images/gallery_10.jpg" data-lightbox="image">
                    <img src="images/gallery_10.jpg" alt="" />
                </a>
            </div>

        </div>
    </section>

</main>

)

}




export default Left;
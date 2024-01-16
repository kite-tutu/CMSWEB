import React from 'react'

const News = () => {
  return (
    <>
      <section className='news-section sec-pad'>
        <div className='auto-container'>
          <div className='sec-title centred'>
            <span className='sub-title'>What’s Happening</span>
            <h2>News &amp; Articles</h2>
          </div>
          <div className='row clearfix'>
            <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
              <div className='news-block-one wow fadeInUp animated' data-wow-delay='00ms' data-wow-duration='1500ms'>
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a href='blog-details.html'>
                      <img src='/assets/images/news/news-1.jpg' alt />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <span className='post-date'>20 oct, 2021</span>
                    <ul className='post-info clearfix'>
                      <li>
                        <i className='far fa-user' />
                        <a href='blog-details.html'>by Admin</a>
                      </li>
                      <li>
                        <i className='far fa-comments' />
                        <a href='blog-details.html'>2 Comments</a>
                      </li>
                    </ul>
                    <h3>
                      <a href='blog-details.html'>Get Ready for the Summer Camp</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
              <div className='news-block-one wow fadeInUp animated' data-wow-delay='300ms' data-wow-duration='1500ms'>
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a href='blog-details.html'>
                      <img src='/assets/images/news/news-2.jpg' alt />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <span className='post-date'>19 oct, 2021</span>
                    <ul className='post-info clearfix'>
                      <li>
                        <i className='far fa-user' />
                        <a href='blog-details.html'>by Admin</a>
                      </li>
                      <li>
                        <i className='far fa-comments' />
                        <a href='blog-details.html'>5 Comments</a>
                      </li>
                    </ul>
                    <h3>
                      <a href='blog-details.html'>Duis Laoreet Cursus Justo, sed</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
              <div className='news-block-one wow fadeInUp animated' data-wow-delay='600ms' data-wow-duration='1500ms'>
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a href='blog-details.html'>
                      <img src='/assets/images/news/news-3.jpg' alt />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <span className='post-date'>18 oct, 2021</span>
                    <ul className='post-info clearfix'>
                      <li>
                        <i className='far fa-user' />
                        <a href='blog-details.html'>by Admin</a>
                      </li>
                      <li>
                        <i className='far fa-comments' />
                        <a href='blog-details.html'>4 Comments</a>
                      </li>
                    </ul>
                    <h3>
                      <a href='blog-details.html'>Morbi nec Finibus mi Cras Risus</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default News

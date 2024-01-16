import React from 'react'

const Video = () => {
  return (
    <>
      <section className='video-section'>
        <div
          className='bg-layer parallax-bg'
          data-parallax='{"y": 100}'
          style={{ backgroundImage: 'url(/assets/images/background/video-bg.jpg)' }}
        />
        <div className='auto-container'>
          <div className='inner-box'>
            <div className='sec-title light'>
              <span className='sub-title'>Cmapning That’s Right For You</span>
              <h2>Get Now Memorable Wonderful Outdoor Experiences</h2>
            </div>
            <div className='video-btn'>
              <a
                href='https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s'
                className='lightbox-image'
                data-caption
                style={{ backgroundImage: 'url(/assets/images/shape/shape-7.png)' }}
              >
                <i className='fas fa-play' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video

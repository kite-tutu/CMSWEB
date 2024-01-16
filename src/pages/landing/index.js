// ** Layout Import
import Head from 'next/head'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Script from 'next/script'
import Header from 'src/views/components/header/header'
import About from 'src/views/components/about/about'
import Hero from 'src/views/components/hero/hero'
import Activity from 'src/views/components/activity/activity'
import Video from 'src/views/components/video/video'
import WhyUs from 'src/views/components/whyUs/whyUs'
import Gallery from 'src/views/components/gallery/gallery'
import Testimonial from 'src/views/components/testimonial/testimonial'
import News from 'src/views/components/news/news'
import Footer from 'src/views/components/footer/footer'
const Landing = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <title>Camp Mangement</title>
        {/* Fav Icon */}
        <link rel='icon' href='/assets/images/favicon.ico' type='image/x-icon' />
        {/* Google Fonts */}
        <link href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap' rel='stylesheet' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        {/* Stylesheets */}
        <link href='/assets/css/font-awesome-all.css' rel='stylesheet' />
        <link href='/assets/css/flaticon.css' rel='stylesheet' />
        <link href='/assets/css/owl.css' rel='stylesheet' />
        <link href='/assets/css/bootstrap.css' rel='stylesheet' />
        <link href='/assets/css/jquery.fancybox.min.css' rel='stylesheet' />
        <link href='/assets/css/animate.css' rel='stylesheet' />
        <link href='/assets/css/color.css' rel='stylesheet' />
        <link href='/assets/css/style.css' rel='stylesheet' />
        <link href='/assets/css/responsive.css' rel='stylesheet' />
      </Head>
      <Header />
      <Hero />
      <About />
      <Activity />
      <Video />
      <WhyUs />
      <Gallery />
      <Testimonial />
      <News />
      <Footer />

      <Script src='/assets/js/jquery.js' />
      <Script src='/assets/js/popper.min.js' />
      <Script src='/assets/js/owl.js' />
      <Script src='/assets/js/wow.js' />
      <Script src='/assets/js/validation.js' />
      <Script src='/assets/js/jquery.fancybox.js' />
      <Script src='/assets/js/appear.js' />
      <Script src='/assets/js/scrollbar.js' />
      <Script src='/assets/js/parallax-scroll.js' />
      <Script src='/assets/js/isotope.js' />

      <Script src='/assets/js/script.js' />
    </>
  )
}
Landing.getLayout = page => <BlankLayout>{page}</BlankLayout>
Landing.guestGuard = true

export default Landing

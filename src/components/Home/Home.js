import Nav from '../Nav'
import Hero from './Hero'
import Footer from '../Footer'
import Partners from './Partners'
import OurRating from './OurRating'
// import Blogs from './Blogs'
import Reviews from './Reviews'
import CommonQuestions from './CommonQuestions'
import ConsultationSession from './ConsultationSession'

// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {

//   useEffect(() => {

//     const initAOS = async () => {
//         await import('aos');
//         AOS.init({
//             duration: 1000,
//             easing: 'ease',
//             once: true,
//             anchorPlacement: 'top-bottom',
//         });
//     }
//     initAOS();
// }, []);

  return (
    <div>
        <Nav />
        <Hero />
        <Partners/>
        <OurRating />
        <Reviews />
        <CommonQuestions />
        <ConsultationSession/>
        <Footer />
    </div>
  )
}

export default Home
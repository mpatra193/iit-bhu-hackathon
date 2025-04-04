import Navbar from "../components/landingPage/navbar";
import Hero from "../components/landingPage/Hero";
import Features from "../components/landingPage/Features";
import Extendedfeatures from "../components/landingPage/Extendedfeatures";
import Courses from "../components/landingPage/Courses";
import About from "../components/landingPage/About";
import Testimonial from "../components/landingPage/Testimonial";
import Footer from "../components/landingPage/Footer";

function Landing() {
    return (
        <>
            <Navbar  />
            <Hero  />
            <Features  />
            <Extendedfeatures  /> 
            <Courses title="Explore Top Course"  />
            <Courses title="Explore Trending Course"  />
            <About  />
            <Testimonial  />
            <Footer  />
        </>
    )

}

export default Landing;
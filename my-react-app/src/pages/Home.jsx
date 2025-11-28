import Banner from "../components/Banner";
import About from "../components/About";
import Coffeeorder from "../components/Coffeeorder";
import ClientReview from "../components/Clientreview"
import Blog from "../components/BlogForm";
import Contact from "../components/Contact"
const Home=()=>{
    return(
        <>
        <Banner/>
        <About/>
        <Coffeeorder/>
        <ClientReview/>
        <Blog/>
        <Contact/>
        </>
    )
}
export default Home;
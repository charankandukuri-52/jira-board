import HeroSection from '../Components/HeroSection/HeroSection'
import Navbar from '../Components/Navbar/Navbar'
import './Cosmetics/HomePage.css'
function HomePage() {
    return (
        <>
            <div className="HomePage">
                <Navbar />
                <HeroSection />
            </div>
        </>
    )
}

export default HomePage
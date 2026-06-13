import Navbar from '../features/landing/components/Navbar';
import HeroSection from '../features/landing/components/HeroSection';
import CategoriesSection from '../features/landing/components/CategoriesSection';
import FeaturedProducts from '../features/landing/components/FeaturedProducts';
import WhyChooseGearly from '../features/landing/components/WhyChooseGearly';
import StatisticsSection from '../features/landing/components/StatisticsSection';
import HowItWorks from '../features/landing/components/HowItWorks';
import Testimonials from '../features/landing/components/Testimonials';
import SellerCTA from '../features/landing/components/SellerCTA';
import Footer from '../features/landing/components/Footer';

const Landing = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <CategoriesSection />
            <FeaturedProducts />
            <WhyChooseGearly />
            <StatisticsSection />
            <HowItWorks />
            <Testimonials />
            <SellerCTA />
            <Footer />
        </div>
    );
};

export default Landing;

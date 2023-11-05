import { getHero1 } from "@/libs/querys";
import { useQuery } from "@apollo/client";
import Hero2XL from "./XL/Hero2XL";
import Hero3XL from "./XL/Hero3XL";
import Hero2Mid from "./Mid/Hero2Mid";
import Hero3Mid from "./Mid/Hero3Mid";
import Hero2Mobile from "./Mobile/Hero2Mobile";
import Hero3Mobile from "./Mobile/Hero3Mobile";
import Hero1Mobile from "./Mobile/Hero1Mobile";
import Hero1XL from "./XL/Hero1XL";


function Hero() {

        const { loading, error, data } = useQuery(getHero1);

  return (
    <section className="home-slider style-2 mb-20">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="home-slide-cover d-none d-xl-block">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                           <Hero2XL/>
                           <Hero3XL/>          
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                    <div className="home-slide-cover d-none d-md-block d-xl-none">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <Hero2Mid/>
                            <Hero3Mid/>
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>

                    <div className="home-slide-cover d-block d-md-none">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <Hero2Mobile/>
                            <Hero3Mobile/>
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                </div>
                <Hero1XL/>
                <Hero1Mobile/>
            </div>
        </div>
    </section>
  )
}
export default Hero
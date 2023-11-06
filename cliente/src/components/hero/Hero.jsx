import { getHero1, getHero2, getHero3 } from "@/libs/querys";
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

    const { loading: loading1, error: error1, data: data1 } = useQuery(getHero1);
    const { loading: loading2, error: error2, data: data2 } = useQuery(getHero2);
    const { loading: loading3, error: error3, data: data3 } = useQuery(getHero3);
    
    if(!loading1) console.log(data1);
    if(!loading2) console.log(data2);
    if(!loading3) console.log(data3);
    
  return (
    <section className="home-slider style-2 mb-20">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="home-slide-cover d-none d-xl-block">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <Hero2XL background={data2?.hero?.hero2Fields?.imagen?.link} texto1={data2?.hero?.hero2Fields?.texto1} texto2={data2?.hero?.hero2Fields?.texto2} texto3={data2?.hero?.hero2Fields?.texto3} texto4={data2?.hero?.hero2Fields?.texto4} textoBoton={data2?.hero?.hero2Fields?.textoBoton}/>
                            <Hero3XL background={data3?.hero?.hero3Fields?.imagen?.link} texto1={data3?.hero?.hero3Fields?.texto1} texto2={data3?.hero?.hero3Fields?.texto2} texto3={data3?.hero?.hero3Fields?.texto3} qr={data3?.hero?.hero3Fields?.qr?.link}/>
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                    <div className="home-slide-cover d-none d-md-block d-xl-none">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <Hero2Mid background={data2?.hero?.hero2Fields?.imagen?.link} texto1={data2?.hero?.hero2Fields?.texto1} texto2={data2?.hero?.hero2Fields?.texto2} texto3={data2?.hero?.hero2Fields?.texto3} texto4={data2?.hero?.hero2Fields?.texto4} textoBoton={data2?.hero?.hero2Fields?.textoBoton}/>
                            <Hero3Mid background={data3?.hero?.hero3Fields?.imagen?.link} texto1={data3?.hero?.hero3Fields?.texto1} texto2={data3?.hero?.hero3Fields?.texto2} texto3={data3?.hero?.hero3Fields?.texto3} qr={data3?.hero?.hero3Fields?.qr?.link}/>
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>

                    <div className="home-slide-cover d-block d-md-none">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <Hero2Mobile background={data2?.hero?.hero2Fields?.imagen?.link} texto1={data2?.hero?.hero2Fields?.texto1} texto2={data2?.hero?.hero2Fields?.texto2} texto3={data2?.hero?.hero2Fields?.texto3} texto4={data2?.hero?.hero2Fields?.texto4} textoBoton={data2?.hero?.hero2Fields?.textoBoton}/>
                            <Hero3Mobile background={data3?.hero?.hero3Fields?.imagen?.link} texto1={data3?.hero?.hero3Fields?.texto1} texto2={data3?.hero?.hero3Fields?.texto2} texto3={data3?.hero?.hero3Fields?.texto3} qr={data3?.hero?.hero3Fields?.qr?.link}/>
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                </div>
                    <Hero1XL background={data1?.hero?.hero1Fields?.imagen?.link} texto1={data1?.hero?.hero1Fields?.texto1} texto2={data1?.hero?.hero1Fields?.texto2} texto3={data1?.hero?.hero1Fields?.texto3} texto4={data1?.hero?.hero1Fields?.texto4} texto5={data1?.hero?.hero1Fields?.texto5} textoBoton={data1?.hero?.hero1Fields?.textoBoton} />
                    <Hero1Mobile background={data1?.hero?.hero1Fields?.imagen?.link} texto1={data1?.hero?.hero1Fields?.texto1} texto2={data1?.hero?.hero1Fields?.texto2} texto3={data1?.hero?.hero1Fields?.texto3} texto4={data1?.hero?.hero1Fields?.texto4} texto5={data1?.hero?.hero1Fields?.texto5} textoBoton={data1?.hero?.hero1Fields?.textoBoton}/>
            </div>
        </div>
    </section>
  )
}
export default Hero
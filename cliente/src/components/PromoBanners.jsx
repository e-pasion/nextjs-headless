import { getBanners } from "@/libs/querys";
import { useQuery } from "@apollo/client";

function PromoBanners() {
    const { loading, error, data } = useQuery(getBanners);


    if(!loading) {
        console.log(data);
    };

  return (
    <section className="banners mb-25">
    <div className="container">
        <div className="row  justify-content-center">
            <div className="col-xl-4 col-md-6">
                <div className="banner-img">
                    <img src={data?.banner?.bannerFields?.banner1?.imagen?.link} alt="" />
                    <div className="banner-text">
                        <h4 className="text-white">
                            {data?.banner?.bannerFields?.banner1?.texto1} <br/>{data?.banner?.bannerFields?.banner1?.texto2}
                        </h4>
                        <p className="text-white mb-10">{data?.banner?.bannerFields?.banner1?.texto3}</p>
                        <a href="#" className="btn rounded text-secondary">{data?.banner?.bannerFields?.banner1?.textoBoton}<i
                                className="fi-rs-arrow-small-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="banner-img">
                    <img src={data?.banner?.bannerFields?.banner2?.imagen?.link} alt="" />
                    <div className="banner-text">
                        <h4 className="text-white">
                        {data?.banner?.bannerFields?.banner2?.texto1} <br/>{data?.banner?.bannerFields?.banner2?.texto2}
                        </h4>
                        <p className="text-white mb-10">{data?.banner?.bannerFields?.banner2?.texto3}<br/>
                        {data?.banner?.bannerFields?.banner2?.texto4}</p>
                        <a href="#" className="btn btn-yellow rounded text-secondary">{data?.banner?.bannerFields?.banner2?.textoBoton}<i
                                className="fi-rs-arrow-small-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="banner-img mb-sm-0">
                    <img src={data?.banner?.bannerFields?.banner3?.imagen?.link} alt="" />
                    <div className="banner-text">
                        <h4 className="text-white">{data?.banner?.bannerFields?.banner3?.texto1}<br/>
                        {data?.banner?.bannerFields?.banner3?.texto2}<br/>
                        {data?.banner?.bannerFields?.banner3?.texto3}</h4>
                        <p className="text-white mb-10">{data?.banner?.bannerFields?.banner3?.texto4}<br/>
                        {data?.banner?.bannerFields?.banner3?.texto5}</p>
                        <a href="page.html" className="btn rounded text-secondary">{data?.banner?.bannerFields?.banner3?.textoBoton}<i
                                className="fi-rs-arrow-small-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default PromoBanners
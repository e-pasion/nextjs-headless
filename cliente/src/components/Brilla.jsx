import { getBrilla } from "@/libs/querys";
import { useQuery } from "@apollo/client";

function Brilla() {
    const { loading, error, data } = useQuery(getBrilla);

    if(!loading) {
        console.log(data);
    };
  return (
    <section className="featured section-padding">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 col-md-6 col-lg-4 col-xl  d-flex mb-10">
                        <img src={data?.brilla?.brillaFields?.logo?.link} alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl  mb-10">
                        <div className="banner-left-icon style-3 flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                            data-wow-delay="0">
                            <div className="banner-icon">
                                <img src={data?.brilla?.brillaFields?.campo1?.icono?.link} alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">{data?.brilla?.brillaFields?.campo1?.texto}<br/></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl  d-flex align-items-stretch mb-10">
                        <div className="banner-left-icon style-3 flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                            data-wow-delay=".1s">
                            <div className="banner-icon">
                                <img src={data?.brilla?.brillaFields?.campo2?.icono?.link} alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">{data?.brilla?.brillaFields?.campo2?.texto}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl  d-flex align-items-stretch mb-10">
                        <div className="banner-left-icon style-3 flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                            data-wow-delay=".1s">
                            <div className="banner-icon">
                                <img src={data?.brilla?.brillaFields?.campo3?.icono?.link} alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">{data?.brilla?.brillaFields?.campo3?.texto}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl d-flex align-items-stretch mb-10">
                        <div className="banner-left-icon style-3 flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                            data-wow-delay=".3s">
                            <div className="banner-icon">
                                <img src={data?.brilla?.brillaFields?.campo4?.icono?.link} alt="" />
                            </div>
                            <div className="banner-text">
                                <h3 className="icon-box-title">{data?.brilla?.brillaFields?.campo4?.texto}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default Brilla
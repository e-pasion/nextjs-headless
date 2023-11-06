import { getBusiness } from "@/libs/querys";
import { useQuery } from "@apollo/client";

function Business() {
    const { loading, error, data } = useQuery(getBusiness);


    if(!loading) {
        console.log(data);
    };

  return (
    <section className="featured section-padding">
    <div className="container">
        <div className="row d-flex">
            <div className="col-xl-3 col-12 col-sm-6 d-flex align-items-stretch mb-10">
                <div className="banner-left-icon flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                    data-wow-delay="0">
                    <div className="banner-icon">
                        <img src={data?.business?.businessFields?.business1?.icono?.link} alt="" />
                    </div>
                    <div className="banner-text">
                        <h3 className="icon-box-title">{data?.business?.businessFields?.business1?.texto1}</h3>
                        <p>{data?.business?.businessFields?.business1?.texto2}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-12 col-sm-6 d-flex align-items-stretch mb-10">
                <div className="banner-left-icon flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                    data-wow-delay=".1s">
                    <div className="banner-icon">
                        <img src={data?.business?.businessFields?.business2?.icono?.link} alt="" />
                    </div>
                    <div className="banner-text">
                        <h3 className="icon-box-title">{data?.business?.businessFields?.business2?.texto1}</h3>
                        <p>{data?.business?.businessFields?.business2?.texto2}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-12 col-sm-6 d-flex align-items-stretch mb-10">
                <div className="banner-left-icon flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                    data-wow-delay=".1s">
                    <div className="banner-icon">
                        <img src={data?.business?.businessFields?.business3?.icono?.link} alt="" />
                    </div>
                    <div className="banner-text">
                        <h3 className="icon-box-title">{data?.business?.businessFields?.business3?.texto1}</h3>
                        <p>{data?.business?.businessFields?.business3?.texto2}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-12 col-sm-6 d-flex align-items-stretch mb-10">
                <div className="banner-left-icon flex-fill d-flex align-items-center wow animate__animated animate__fadeInUp"
                    data-wow-delay=".3s">
                    <div className="banner-icon">
                        <img src={data?.business?.businessFields?.business4?.icono?.link} alt="" />
                    </div>
                    <div className="banner-text">
                        <h3 className="icon-box-title">{data?.business?.businessFields?.business4?.texto1}</h3>
                        <p>{data?.business?.businessFields?.business4?.texto2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Business
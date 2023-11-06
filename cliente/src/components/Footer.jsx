import { getFooterInferior, getFooterSuperior } from "@/libs/querys";
import { useQuery } from "@apollo/client";

function Footer() {
    const { loading: loading1, error: error1, data: data1 } = useQuery(getFooterSuperior);
    const { loading: loading2, error: error2, data: data2 } = useQuery(getFooterInferior);
    
    if(!loading1) console.log(data1);
    if(!loading2) console.log(data2);
  return (
    <footer className="main">
    <section className="section-padding footer-mid  bg-primary">
        <div className="container pt-15 pb-20">
            <div className="row">
                <div className="col-12 col-md-6 col-lg">
                    <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                        <div className="logo">
                            <a href="#"><img src={data1?.footer?.footerFields?.logo1?.link} alt="logo" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <p className="text-white font-xs">{data1?.footer?.footerFields?.texto1}</p>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <div>
                        <a href="#"><img src={data1?.footer?.footerFields?.logo2?.link} alt="iso" /></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <ul className="contact-infor text-white font-xs">
                        <li><img src={data1?.footer?.footerFields?.icono1?.link} alt="" /><span>{data1?.footer?.footerFields?.texto2}<br/>
                        {data1?.footer?.footerFields?.texto3}</span></li>

                        <li><img src={data1?.footer?.footerFields?.icono2?.link} alt="" /><span>{data1?.footer?.footerFields?.texto4}<br/>
                        {data1?.footer?.footerFields?.texto5}</span></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <h6 className="mb-5 mt-10 mt-md-0 text-white">{data1?.footer?.footerFields?.socialMedia?.texto}</h6>
                    <div className="mobile-social-icon">
                        <a href="#"><img src={data1?.footer?.footerFields?.socialMedia?.icono1?.link} alt="" /></a>
                        <a href="#"><img src={data1?.footer?.footerFields?.socialMedia?.icono2?.link} alt="" /></a>
                        <a href="#"><img src={data1?.footer?.footerFields?.socialMedia?.icono3?.link} alt="" /></a>
                        <a href="#"><img src={data1?.footer?.footerFields?.socialMedia?.icono4?.link} alt="" /></a>
                        <a href="#"><img src={data1?.footer?.footerFields?.socialMedia?.icono5?.link} alt="" /></a>
                    </div>
                </div>

            </div>
            </div>
    </section>

    <div className="container-fluid bg-primary pb-30">
        <div className="row align-items-center">
            <div className="col-12 mb-30">
                <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <span className="mb-5 text-white">
                    <h6 className="mb-5 text-white">{data2?.footer?.footerInferiorFields?.texto1} </h6> {data2?.footer?.footerInferiorFields?.texto2}
                </span>
                <p className="font-sm  text-white"><u>{data2?.footer?.footerInferiorFields?.texto3}</u></p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">

            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <h6 className="mb-5 text-white text-right">{data2?.footer?.footerInferiorFields?.texto4}</h6>
                <p className="font-sm  text-white text-right">{data2?.footer?.footerInferiorFields?.texto5}</p>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-primary pb-30">
        <div className="row align-items-center">
            <div className="col-12 mb-30">
                <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0  text-white">{data2?.footer?.footerInferiorFields?.texto6}</p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">

            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">

                <p className="font-sm  text-white">{data2?.footer?.footerInferiorFields?.texto7}</p>
            </div>
        </div>
    </div>
</footer>
  )
}
export default Footer
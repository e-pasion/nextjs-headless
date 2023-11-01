function PromoBanners() {
  return (
    <section className="banners mb-25">
    <div className="container">
        <div className="row  justify-content-center">
            <div className="col-xl-4 col-md-6">
                <div className="banner-img">
                    <img src="imgs/banner/banner-01.png" alt="" />
                    <div className="banner-text">
                        <h4 className="text-white">
                            Construye la red de <br/>gas natural
                        </h4>
                        <p className="text-white mb-10">Y obten servicio seguro
                            y respaldo.</p>
                        <a href="#" className="btn rounded text-secondary">Quiero saber más<i
                                className="fi-rs-arrow-small-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="banner-img">
                    <img src="imgs/banner/banner-03.png" alt="" />
                    <div className="banner-text">
                        <h4 className="text-white">
                            Usa tu <br/>Cupo Aprobado
                        </h4>
                        <p className="text-white mb-10">Y para a través de la<br/>
                            factura de gas natural.</p>
                        <a href="#" className="btn btn-yellow rounded text-secondary">Consultar mi cupo<i
                                className="fi-rs-arrow-small-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="banner-img mb-sm-0">
                    <img src="imgs/banner/banner-02.png" alt="" />
                    <div className="banner-text">
                        <h4 className="text-white">Tu seguridad<br/>
                            siempre<br/>
                            será lo primero</h4>
                        <p className="text-white mb-10">Agenda la revisión<br/>
                            técnica reglamentaria</p>
                        <a href="page.html" className="btn rounded text-secondary">Agendar mi visita<i
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
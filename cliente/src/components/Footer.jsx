function Footer() {
  return (
    <footer className="main">
    <section className="section-padding footer-mid  bg-primary">
        <div className="container pt-15 pb-20">
            <div className="row">
                <div className="col-12 col-md-6 col-lg">
                    <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                        <div className="logo">
                            <a href="#"><img src="imgs/theme/logo-light.svg" alt="logo" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <p className="text-white font-xs">EFIGAS Gas Natural Para Todos. Brindamos calidad de vida para los
                        habitantes del Eje Cafetero: Caldas, Risaralda y Quindío.</p>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <div>
                        <a href="#"><img src="imgs/theme/isos.png" alt="iso" /></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <ul className="contact-infor text-white font-xs">
                        <li><img src="imgs/theme/icons/icon-location.svg" alt="" /><span>Sede principal<br/>
                                Av. Kevin Ángel #70 70,
                                Manizales, Caldas</span></li>

                        <li><img src="imgs/theme/icons/icon-contact.svg" alt="" /><span>Servicio al
                                cliente<br/>
                                018000966344.</span></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg">
                    <h6 className="mb-5 mt-10 mt-md-0 text-white">Síguenos en:</h6>
                    <div className="mobile-social-icon">
                        <a href="#"><img src="imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                        <a href="#"><img src="imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                        <a href="#"><img src="imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                        <a href="#"><img src="imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                        <a href="#"><img src="imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
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
                    <h6 className="mb-5 text-white">Notificaciones judiciales: </h6> ventanillaunica@efigas.com.co
                </span>
                <p className="font-sm  text-white"><u>Política de tratamiento de la información y datos personales
                        Formato autorización para el tratamiento de datos personales
                        Formato para autorización reporte a las centrales de información financiera, crediticia y
                        comercial</u></p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">

            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <h6 className="mb-5 text-white text-right">Organismos que vigilan nuestras acciones:</h6>
                <p className="font-sm  text-white text-right">Ministerio de Minas y Energía
                    CREG - Comisión de Regulación de Energía y Gas
                    UPME - Unidad de Planeación Minero Energética
                    Auditoría Externa de Gestión y Resultados</p>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-primary pb-30">
        <div className="row align-items-center">
            <div className="col-12 mb-30">
                <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0  text-white">2022 Todos los derechos reservados EFIGAS.</p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">

            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">

                <p className="font-sm  text-white">Superservicios</p>
            </div>
        </div>
    </div>
</footer>
  )
}
export default Footer
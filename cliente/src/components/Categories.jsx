function Categories() {
  return (
    <section className="popular-categories section-padding">
    <div className="container">
        <div className="section-title">
            <div className="title rounded bg-primary py-3 px-5">
                <h3 className="text-white">¿Qué te puedo ofrecer?</h3>
                <a className="text-white mr-30" href="#">
                    Efisoluciones
                </a>
                <a className=" text-white mr-30" href="#">
                    Conoce tu factura
                </a>
                <a className=" text-white" href="page.html">
                    Revisión técnica reglamentaria
                </a>
            </div>
            <div className="slider-arrow slider-arrow-2 flex-right carausel-4-columns-arrow"
                id="carausel-4-columns-arrows"></div>
        </div>
        <div className="carausel-4-columns-cover position-relative">
            <div className="carausel-4-columns" id="carausel-4-columns">
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src="imgs/theme/icons/category-1.svg" alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">Hogar</a><br />
                    </h6>
                    <p>Servicios y financiación</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src="imgs/theme/icons/category-2.svg" alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">Comercio</a><br />
                    </h6>
                    <p>Efisoluciones</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src="imgs/theme/icons/category-3.svg" alt="" /></a>
                    </figure>
                    <h6>
                        <a href="s#">Industrias</a><br />
                    </h6>
                    <p>Soluciones y financiación</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src="imgs/theme/icons/category-4.svg" alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">Constructoras</a><br />
                    </h6>
                    <p>Acompañamos tu proyecto</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src="imgs/theme/icons/category-5.svg" alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">Vehicular</a><br />
                    </h6>
                    <p>Gas Natural Vehicular</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src="imgs/theme/icons/category-6.svg" alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">Servicio seguro</a><br />
                    </h6>
                    <p>Uso seguro del gas natural</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Categories
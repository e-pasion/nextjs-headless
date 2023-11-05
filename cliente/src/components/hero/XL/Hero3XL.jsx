function Hero3XL() {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: "url(imgs/slider/slider-02.jpg)" }}
    >
      <div className="slider-content row">
        <h4
          className="mt-20 mb-20 col-md-5 offset-md-7 font-weight-bold text-white p-2"
          style={{ backgroundColor: "#29265b" }}
        >
          "Manual del eterno emprendedor"
        </h4>
        <h4 className="mt-20 mb-20 col-md-5 offset-md-7 font-weight-bold text-white">
          ¿Quieres potenciar tu negocio o proyectos gastronómicos?
        </h4>
        <div className="bg-success col-md-5 offset-md-7 p-2">
          <span className="font-weight-bold text-secondary">
            Escanea el QR y gánate una entrada al evento
          </span>
        </div>
        <img
          className="w-25 rounded-0 mt-15 col-md-5 offset-md-7"
          src="imgs/slider/qr-tulio.png"
          alt="QR"
        />
      </div>
    </div>
  );
}
export default Hero3XL;

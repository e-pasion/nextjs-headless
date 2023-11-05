function Hero3Mobile() {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: "url(imgs/slider/slider-03.jpg)" }}
    >
      <div className="slider-content row">
        <h4
          className="font-lg font-weight-bold text-white p-2 mb-20"
          style={{ backgroundColor: "#29265b" }}
        >
          "Manual del eterno emprendedor"
        </h4>
        <h4 className="font-lg font-weight-bold text-white col-6 mt-5 mb-10">
          ¿Quieres potenciar tu negocio o proyectos gastronómicos?
          <img
            className="rounded-0 col-6 mt-10"
            src="imgs/slider/qr-tulio.png"
            alt="QR"
          />
        </h4>

        <div className="bg-success">
          <span className="font-weight-bold text-secondary">
            Escanea el QR y gánate una entrada al evento
          </span>
        </div>
      </div>
    </div>
  );
}
export default Hero3Mobile;

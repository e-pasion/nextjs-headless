function Hero2XL() {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: "url(imgs/slider/slider-01.jpg)" }}
    >
      <div className="slider-content">
        <h2 className="display-2 mb-40 text-white">
          <span className="text-secondary border-text-white">
            -Contaminación
          </span>
          <br />
          +Aire limpio
        </h2>
        <span className="gradient-inverted display-4 px-2">
          Si ya pagas de manera online
        </span>
        <p className="mt-20 mb-20 font-weight-bold text-white">
          Pásate a factura digital
        </p>
        <form className="form-subcriber d-flex">
          <button className="btn text-secondary" type="submit">
            Inscribirme
          </button>
        </form>
      </div>
    </div>
  );
}
export default Hero2XL;

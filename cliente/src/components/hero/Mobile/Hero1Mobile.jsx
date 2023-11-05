function Hero1Mobile() {
  return (
    <div className="col-lg-4 d-none d-lg-block d-xl-none">
      <div
        className="banner-img style-3 animated animated"
        style={{ backgroundImage: "url(imgs/banner/banner-side-01.jpg)" }}
      >
        <div className="banner-text mt-50">
          <h2 className="text-white">
            Atención <br />
            en
            <span className="text-brand">línea</span>
          </h2>
          <p className="mt-10 mb-20 text-white font-xl">
            Lunes a viernes
            <br />
            de 8:00 am a 6:00 pm
          </p>
          <a href="#" className="btn rounded text-secondary">
            ir al chat <i className="fi-rs-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero1Mobile;

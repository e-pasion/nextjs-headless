function Hero3Mid({ texto1="",texto2="",texto3="",qr="",background="" }) {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider-content row">
        <h4
          className="col-md-5 offset-md-7 font-lg font-weight-bold text-white p-2 mb-20"
          style={{ backgroundColor: "#29265b" }}
        >
          {texto1}
        </h4>
        <h4 className="col-md-5 offset-md-7 font-lg font-weight-bold text-white mt-5 mb-10">
          {texto2}
          <img
            className="w-25 rounded-0 col-6 mt-10"
            src={qr}
            alt="QR"
          />
        </h4>

        <div className="bg-success col-md-5 offset-md-7">
          <span className="font-weight-bold text-secondary">
            {texto3}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Hero3Mid;

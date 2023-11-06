function Hero3Mobile({ texto1="",texto2="",texto3="",qr="",background="" }) {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider-content row">
        <h4
          className="font-lg font-weight-bold text-white p-2 mb-20"
          style={{ backgroundColor: "#29265b" }}
        >
          {texto1}
        </h4>
        <h4 className="font-lg font-weight-bold text-white col-6 mt-5 mb-10">
          {texto2}
          <img
            className="rounded-0 col-6 mt-10"
            src={qr}
            alt="QR"
          />
        </h4>

        <div className="bg-success">
          <span className="font-weight-bold text-secondary">
            {texto3}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Hero3Mobile;

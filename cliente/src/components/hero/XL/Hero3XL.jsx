function Hero3XL({
  texto1 = "",
  texto2 = "",
  texto3 = "",
  qr = "",
  background = "",
}) {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider-content row">
        <h4
          className="mt-20 mb-20 col-md-5 offset-md-7 font-weight-bold text-white p-2"
          style={{ backgroundColor: "#29265b" }}
        >
          {texto1}
        </h4>
        <h4 className="mt-20 mb-20 col-md-5 offset-md-7 font-weight-bold text-white">
          {texto2}
        </h4>
        <div className="bg-success col-md-5 offset-md-7 p-2">
          <span className="font-weight-bold text-secondary">{texto3}</span>
        </div>
        <img
          className="w-25 rounded-0 mt-15 col-md-5 offset-md-7"
          src={qr}
          alt="QR"
        />
      </div>
    </div>
  );
}
export default Hero3XL;

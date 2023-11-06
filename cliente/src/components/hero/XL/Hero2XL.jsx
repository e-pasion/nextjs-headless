function Hero2XL({background="",texto1="",texto2="",texto3="",texto4="",textoBoton=""}) {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider-content">
        <h2 className="display-2 mb-40 text-white">
          <span className="text-secondary border-text-white">
            { texto1 }
          </span>
          <br />
          { texto2 }
        </h2>
        <span className="gradient-inverted display-4 px-2">
        { texto3 }
        </span>
        <p className="mt-20 mb-20 font-weight-bold text-white">
        { texto4 }
        </p>
        <form className="form-subcriber d-flex">
          <button className="btn text-secondary" type="submit">
          { textoBoton }
          </button>
        </form>
      </div>
    </div>
  );
}
export default Hero2XL;

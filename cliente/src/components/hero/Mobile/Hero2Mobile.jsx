function Hero2Mobile({background="",texto1="",texto2="",texto3="",texto4="",textoBoton=""}) {
  return (
    <div
      className="single-hero-slider single-animation-wrap"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider-content ">
        <h2 className="display-4 font-weight-bold text-white mt-10 mb-50">
          <span className="text-secondary border-text-white">
            {texto1}
          </span>
          <br />
          {texto2}
        </h2>
        <span className="gradient-inverted font-lg text-white px-2">
          {texto3}
        </span>
        <p className="font-weight-bold text-white">{texto4}</p>
        <form className="form-subcriber d-flex">
          <button className="btn text-secondary" type="submit">
            {textoBoton}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Hero2Mobile;

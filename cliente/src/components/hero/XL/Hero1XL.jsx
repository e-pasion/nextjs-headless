function Hero1XL({texto1="",texto2="",texto3="",texto4="",texto5="",textoBoton="",background=""}) {
  return (
    <div className="col-xl-4 d-none d-xl-block">
      <div
        className="banner-img style-3 animated animated"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="banner-text mt-50">
          <h2 className="mb-50 text-white">
            {texto1} <br />
            {texto2}
            <span className="text-brand">{texto3}</span>
          </h2>
          <p className="mt-150 mb-20 text-white font-xl">
            {texto4}
            <br />
            {texto5}
          </p>
          <a href="#" className="btn rounded text-secondary">
            {textoBoton} <i className="fi-rs-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero1XL;

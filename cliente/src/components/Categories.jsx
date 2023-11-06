import { getCategorySlider } from "@/libs/querys";
import { useQuery } from "@apollo/client";

function Categories() {
   
    const { loading, error, data } = useQuery(getCategorySlider);


    if(!loading) {
        console.log(data);
    };


  return (
    <section className="popular-categories section-padding">
    <div className="container">
        <div className="section-title">
            <div className="title rounded bg-primary py-3 px-5">
                <h3 className="text-white">{data?.sliderCategoria?.CategoriaFields?.texto1}</h3>
                <a className="text-white mr-30" href="#">
                    {data?.sliderCategoria?.CategoriaFields?.texto2}
                </a>
                <a className=" text-white mr-30" href="#">
                {data?.sliderCategoria?.CategoriaFields?.texto3}
                </a>
                <a className=" text-white" href="page.html">
                {data?.sliderCategoria?.CategoriaFields?.texto4}
                </a>
            </div>
            <div className="slider-arrow slider-arrow-2 flex-right carausel-4-columns-arrow"
                id="carausel-4-columns-arrows"></div>
        </div>
        <div className="carausel-4-columns-cover position-relative">
            <div className="carausel-4-columns" id="carausel-4-columns">
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src={data?.sliderCategoria?.CategoriaFields?.icono1?.icono?.link} alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#"> {data?.sliderCategoria?.CategoriaFields?.icono1?.texto1}</a><br />
                    </h6>
                    <p>{data?.sliderCategoria?.CategoriaFields?.icono1?.texto2}</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src={data?.sliderCategoria?.CategoriaFields?.icono2?.icono?.link} alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">{data?.sliderCategoria?.CategoriaFields?.icono2?.texto1}</a><br />
                    </h6>
                    <p>{data?.sliderCategoria?.CategoriaFields?.icono2?.texto2}</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src={data?.sliderCategoria?.CategoriaFields?.icono3?.icono?.link} alt="" /></a>
                    </figure>
                    <h6>
                        <a href="s#">{data?.sliderCategoria?.CategoriaFields?.icono3?.texto1}</a><br />
                    </h6>
                    <p>{data?.sliderCategoria?.CategoriaFields?.icono3?.texto2}</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src={data?.sliderCategoria?.CategoriaFields?.icono4?.icono?.link} alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">{data?.sliderCategoria?.CategoriaFields?.icono4?.texto1}</a><br />
                    </h6>
                    <p>{data?.sliderCategoria?.CategoriaFields?.icono4?.texto2}</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src={data?.sliderCategoria?.CategoriaFields?.icono5?.icono?.link} alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">{data?.sliderCategoria?.CategoriaFields?.icono5?.texto1}</a><br />
                    </h6>
                    <p>{data?.sliderCategoria?.CategoriaFields?.icono5?.texto2}</p>
                </div>
                <div className="card-1">
                    <figure className="img-hover-scale overflow-hidden">
                        <a href="#"><img src={data?.sliderCategoria?.CategoriaFields?.icono6?.icono?.link} alt="" /></a>
                    </figure>
                    <h6>
                        <a href="#">{data?.sliderCategoria?.CategoriaFields?.icono6?.texto1}</a><br />
                    </h6>
                    <p>{data?.sliderCategoria?.CategoriaFields?.icono6?.texto2}</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Categories
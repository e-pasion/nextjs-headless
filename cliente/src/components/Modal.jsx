import { getModal } from "@/libs/querys";
import stopLoading from "@/libs/stop-loading";
import { useQuery } from "@apollo/client";

function Modal() {
    const { loading, error, data } = useQuery(getModal);


    if (!loading){
        console.log(data);
        //Si el modal cargo, hacer que la ventana de carga desaparezca
        stopLoading();
    }

  return (
    <div className="modal fade custom-modal" id="onloadModal" tabIndex="-1" aria-labelledby="onloadModalLabel"
 aria-hidden="true">
 <div className="modal-dialog">

{   loading?'':  
    <div className="modal-content bg-primary"
         style={{backgroundImage: `url(${data.modal.fields.imagen.link||'imgs/banner/banner-modal-01.png'})`}}>
         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

         <div className="modal-body d-none d-sm-block">
             <div className="deal">
                 <div className="deal-top">
                     <img src={data.modal.fields.logo.link} alt="RTR" width="150" />
                 </div>
                 <div className="deal-content detail-info">
                     <h4 className="line-1 text-white">{data.modal.fields.texto1}</h4>
                     <div className="clearfix">
                         <div className="product-price primary-color float-left">
                             <span className="line-3 text-white">{data.modal.fields.texto2}</span>
                         </div>
                     </div>
                     <div className="clearfix line-2">
                         <div className="primary-color float-left">
                             <span className="current-price text-white">{data.modal.fields.texto3}</span>
                         </div>
                     </div>
                 </div>
                 <div className="deal-bottom">
                     <span className="line-1 text-secondary gradient-inverted px-1">{data.modal.fields.texto4}</span>
                     <div className="product-detail-rating">
                         <div className="product-rate-cover text-end">
                             <div className="d-inline-block">
                                 <div className="product-rating" style={{width: '90%'}}></div>
                             </div>
                             <span className="line-4 text-white">{data.modal.fields.texto5}</span>
                         </div>
                     </div>
                     <a href="page.html" className="btn text-secondary hover-up"> <i className="fi-rs-calendar"></i> {data.modal.fields.textoBoton} <i className="fi-rs-arrow-right"></i></a>
                 </div>
             </div>
         </div>

         <div className="modal-body d-block d-sm-none">
             <div className="deal">
                 <div className="deal-top">
                     <img src="imgs/theme/logo-rtr.png" alt="RTR" width="150" />
                 </div>
                 <div className="deal-content detail-info">
                     <h4 className="display-4 font-weight-bold text-white">Amar a los tuyos</h4>
                     <div className="clearfix">
                         <div className="float-left">
                             <span className="font-lg text-white">es tan</span>
                         </div>
                     </div>
                     <div className="clearfix line-2">
                         <div className="primary-color float-left">
                             <span className="display-3 text-white">natural</span>
                         </div>
                     </div>
                 </div>
                 <div className="deal-bottom">
                     <span className="font-lg text-secondary gradient-inverted px-1">como nuestro gas.</span>
                     <div>
                         <div>
                             <div className="d-inline-block">
                                 <div className="product-rating" style={{width: '90%'}}></div>
                             </div>
                             <span className="font-lg text-white">Por tu seguridad</span>
                         </div>
                     </div>
                     <a href="page.html" className="btn text-secondary hover-up mt-15"> <i className="fi-rs-calendar"></i> Agenda
                         la Revisión Técnica Reglamentaria <i className="fi-rs-arrow-right"></i></a>
                 </div>
             </div>
         </div>
     </div>}
 </div>
</div>
  )
}
export default Modal
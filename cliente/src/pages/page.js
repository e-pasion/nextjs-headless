import { useEffect } from "react"
import $ from 'jquery';


function page() {
    useEffect(()=>{
        $('#preloader-active').delay(2000).fadeOut('slow');
        $('body').delay(450).css({
            overflow: 'visible',
        });
    },[])
  return (
    <main className="main">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Inicio</a>
                    <span></span> <a href="#">Hogar</a> <span></span> Revisión Técnica Reglamentaria
                </div>
            </div>
        </div>

        <div className="page-content mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-11 col-lg-12 m-auto">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-9">
                                <div className="single-page pt-50 pl-30">
                                    <div className="single-header style-2">
                                        <div className="row ">
                                            <div className="col-sm-12 col-md-6 mb-50">
                                                <div className="banner-img wow fadeIn mb-10 animated">
                                                    <img src="imgs/banner/banner-rtr-01.png" alt="RTR" />
                                                    <div className="banner-text">
                                                        <img src="imgs/theme/logo-rtr.svg" alt="RTR"
                                                            className="mb-200" />
                                                        <h4 className="display-4">
                                                            Tu seguridad<br />
                                                            <span
                                                                className="display-3 font-weight-bold text-secondary border-text-white">siempre</span><br />
                                                            <span className="gradient-inverted text-white px-2">será lo
                                                                primero</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            
                                                <button type="button" className="btn btn-secondary rounded w-100">
                                                    Agenda la Revisión Técnica Reglamentaria
                                                </button>
                                                                                        </div>
                                            <div className="col-sm-12 col-md-6">
                                                <h6 className="mb-10"><a href="#">Servicio seguro</a></h6>
                                                <h1 className="mb-10">Revisión Técnica Reglamentaria</h1>
                                                <div className="single-header-meta">
                                                    <div className="social-icons single-share">
                                                        <ul className="text-grey-5 d-inline-block">
                                                            <li className="mr-5">
                                                                <a href="#"><img
                                                                        src="imgs/theme/icons/icon-bookmark.svg"
                                                                        alt="" /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><img
                                                                        src="imgs/theme/icons/icon-heart-2.svg"
                                                                        alt="" /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="single-content">
                                                    <div className="row">
                                                        <div className="col-lg-12 m-auto">
                                                            <p className="single-excerpt">La Revisión técnica reglamentaria,
                                                                también denominada <strong>Revisión periódica</strong>,
                                                                se da cada 60 meses en cumplimiento a la resolución
                                                                número 059 de 2012 que expidió la <a
                                                                    href="https://creg.gov.co/" target="_blank">Comisión
                                                                    de Regulación de Energía y Gas, CREG</a>, la cual
                                                                exige que la empresa prestadora del servicio cumpla el
                                                                deber de notificar al usuario cinco meses antes de
                                                                cumplirse el plazo máximo, que su <a
                                                                    href="#">instalación de gas</a> debe cumplir con una
                                                                <a href="#">Revisión Técnica Reglamentaria</a>. </p>
                                                            <p>La Revisión Técnica Reglamentaria, que se realiza máximo
                                                                cada 60 meses (cinco años), debe realizarse con un ente
                                                                acreditado ante el <a href="https://onac.org.co/"
                                                                    target="_blank">ONAC (Organismo nacional de
                                                                    acreditación de Colombia)</a>.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row single-content">
                                            
                                            
                                            <h5 className="mt-30 mb-30">A continuación, te contamos cómo en <span
                                                    className="text-brand">Efigas</span> notificamos a los usuarios de este
                                                proceso:
                                            </h5>
                                            <p>Se envía anexo en la factura una comunicación que indica que la
                                                instalación se encuentra dentro del plazo para realizar la <strong>revisión
                                                periódica</strong>, entre otras recomendaciones relacionadas con la
                                                certificación.</p>
                                            <p>En la <a href="#">factura de Efigas</a> también se hace mención del plazo máximo que,
                                                como usuario, tienes para hacer llegar la certificación a la compañía
                                                distribuidora del servicio, en este caso, Efigas.</p>

                                            <p>La empresa cumple con informar los entes acreditados.
                                                En cuanto a la coordinación de la empresa para hacerla <strong>Revisión Técnica
                                                Reglamentaria</strong>, se procede con un agendamiento de visita que se informa
                                                por medio de comunicación formal dirigida al usuario y en la que se
                                                enuncia el día de la visita al domicilio o establecimiento comercial
                                                para cumplir con la <strong>revisión</strong>.
                                            </p>
                                            <p>Es importante que sepas que el plazo mínimo de la empresa para notificar
                                                la <strong>Revisión Técnica Reglamentaria es el mes 55. Entre el mes 56 y el mes
                                                58, en la factura se informa nuevamente el plazo máximo.</strong>
                                            </p>
                                            <p>En el mes 59 en la factura, se advierte la fecha de suspensión en caso de
                                                que no tenga el certificado de conformidad.
                                            </p>
                                            <p>Diez días antes de cumplir el plazo máximo (mes 60) se notifica por medio
                                                de carta que tienes cinco días para hacer llegar el certificado de
                                                conformidad.
                                            </p>
                                            <p>La <a href="#">suspensión</a> se realiza por no presentar este certificado que comprueba
                                                que las instalaciones de gas cumplen con toda la normativa técnica,
                                                fundamental para la garantizar la seguridad de los usuarios.
                                            </p>
                                            <blockquote>
                                                <p>
                                                    Te invitamos a comunicarte con nosotros a través de las líneas de
                                                    atención <a href="tel:+018000966344">01 8000 966 344</a> y, en caso
                                                    de alguna emergencia, a la línea <a href="tel:+164">164</a>.
                                                </p>
                                            </blockquote>
                                            <p>Nota: recuerda que con <strong>Efigas</strong> el pago de la <strong>Revisión Técnica
                                                Reglamentaria</strong> puede ser financiado a través de la factura del servicio
                                                de suministro de <a href="#">gas natural domiciliario</a> hasta por un plazo de 48
                                                meses.
                                            </p>
                                            <h2 className="mt-30 mb-30">Variables de Revisión Técnica Reglamentaria
                                            </h2>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead className="table-info">
                                                        <tr className="text-center text-secondary">
                                                            <th scope="col" colSpan="2">Residencial</th>
                                                            <th scope="col" colSpan="2">Comercial</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">Valor de Revisión Técnica Reglamentaria</td>
                                                            <td>$ 90.200 + IVA</td>
                                                            <td scope="row">Valor de Revisión Técnica Reglamentaria</td>
                                                            <td>$ 113.700 + IVA</td>
                                                        </tr>
                                                    </tbody>
                                                    <thead>
                                                        <tr className="table-info">
                                                            <th scope="col" colSpan="4"
                                                                className="text-center text-secondary">Otros valores a tener
                                                                en cuenta</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">Reconexión del servicio desde el centro de
                                                                medición</td>
                                                            <td>$ 51.000</td>
                                                            <td scope="row">Reconexión del servicio desde la acometida
                                                            </td>
                                                            <td>$ 222.500</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>*Estos valores son cobrados por medio de la factura hasta 48 meses
                                                    por financiación a través de la factura.
                                                </p>
                                            </div>
                                            <div className="text-center mt-20">
                                            <button type="button" className="btn btn-primary rounded text-secondary d-flex align-items-center m-auto" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                <i className="fi-rs-calendar mr-10"></i>Haz clic y agenda la visita de un técnico experto<i className="fi-rs-angle-right ml-10"></i>
                                            </button>
                                            <p>para el proceso de Revisión Técnica Reglamentaria</p>
                                    </div>
                                            <blockquote>
                                                <p>
                                                    Si realizas la <strong>Revisión Técnica Reglamentaria</strong> con un organismo de
                                                    inspección distinto a los contratistas de <strong>Efigas</strong>, obtienes una
                                                    certificación que debes hacernos llegar.
                                                </p>
                                            </blockquote>
                                            <p>
                                                Contamos con los siguientes medios de recepción para este trámite:
                                            </p>
                                            <ol>
                                                <li>Correo electrónico <a
                                                        href="mailto:recepcioncertificadosRP@efigas.com.co?Subject=Certificación%20RTR">recepcioncertificadosRP@efigas.com.co</a>
                                                    - Este no es un canal autorizado para la recepción de ninguna
                                                    petición, queja o reclamo. En caso de presentar alguna, deberás
                                                    hacerlo por medio de los canales autorizados como lo son oficinas de
                                                    servicio al cliente o las líneas de atención al cliente.</li>
                                                <li>Personalizada en los Centros de Atención al Cliente de cada una de
                                                    las oficinas de <strong>Efigas en Caldas, Quindío y Risaralda</strong>.</li>
                                            </ol>


                                            <p>
                                                Pensamos en tu bienestar y queremos brindar a nuestros usuarios del
                                                servicio de <a href="">gas natural</a> seguridad, confiabilidad y respaldo
                                            </p>
                                            
                                            <div className="entry-bottom mt-50 mb-30 row">
                                                <div className="tags col-12 col-lg-8">
                                                    <a href="page.html" rel="tag"
                                                        className="hover-up btn btn-sm btn-rounded mr-10 mb-10">Revisión
                                                        Técnica Reglamentaria</a>
                                                    <a href="#" rel="tag"
                                                        className="hover-up btn btn-sm btn-rounded mr-10 mb-10">Gas natural
                                                        domiciliario </a>
                                                    <a href="#" rel="tag"
                                                        className="hover-up btn btn-sm btn-rounded mr-10 mb-10">RTR</a>
                                                </div>
                                                <div className="social-icons single-share col-12 col-lg-4">
                                                    <ul className="text-grey-5 d-inline-block">
                                                        <li><strong className="mr-10">Compartir en:</strong></li>
                                                        <li className="social-facebook">
                                                            <a href="#"><img
                                                                    src="imgs/theme/icons/icon-facebook.svg"
                                                                    alt="" /></a>
                                                        </li>
                                                        <li className="social-twitter">
                                                            <a href="#"><img
                                                                    src="imgs/theme/icons/icon-twitter.svg"
                                                                    alt="" /></a>
                                                        </li>
                                                        <li className="social-instagram">
                                                            <a href="#"><img
                                                                    src="imgs/theme/icons/icon-instagram.svg"
                                                                    alt="" /></a>
                                                        </li>
                                                        <li className="social-linkedin">
                                                            <a href="#"><img
                                                                    src="imgs/theme/icons/icon-pinterest.svg"
                                                                    alt="" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 primary-sidebar sticky-sidebar pt-50 d-none d-xl-block">
                                <div className="widget-area">
                                    <div className="sidebar-widget widget-category-2 mb-50">
                                        <h5 className="section-title style-1 mb-30">Hogar</h5>
                                        <ul>
                                            <li>
                                                <a href="#">Mi Red Nueva</a>
                                            </li>
                                            <li>
                                                <a href="#">Remodelaciones</a>
                                            </li>
                                            <li>
                                                <a href="#">Agua Caliente</a>
                                            </li>
                                            <li className="active">
                                                <a href="page.html">Revisión Técnica</a>
                                            </li>
                                            <li>
                                                <a href="#">Financiación</a>
                                            </li>
                                            <li>
                                                <a href="#">Seguros</a>
                                            </li>
                                            <li>
                                                <a href="#">Conoce tu factura</a>
                                            </li>
                                            <li>
                                                <a href="#">Verifica tu consumo</a>
                                            </li>
                                            <li>
                                                <a href="#">Inscribe tu factura digital</a>
                                            </li>
                                            <li>
                                                <a href="#">Paga por PSE</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>

    </main>
  )
}

export default page
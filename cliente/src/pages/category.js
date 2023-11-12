import Articles from "@/components/articles/Articles";
import loadAllLibraries from "@/libs/loader-libraries";
import { getCategories } from "@/libs/querys";
import stopLoading from "@/libs/stop-loading"
import { useQuery } from "@apollo/client";
import { useEffect } from "react"

function Category() {
    const { loading: categoryLoading, data: categoryData } =useQuery(getCategories);


    useEffect(()=>{
        loadAllLibraries();
        stopLoading();
    },[])



  return (
    <main className="main">
        <div className="page-header mt-30 mb-75">
            <div className="container">
                <div className="breadcrumb mb-30">
                    <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Inicio</a>
                    <span></span> Conéctate con Efigas
                </div>

                <div className="archive-header">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-lg-4 text-center text-md-start">
                            <h1 className="mb-15">Conéctate con Efigas</h1>
                        </div>
                        <div className="col-md-8 col-lg-8 text-center text-md-end">
                            <ul className="tags-list">
                                {!categoryLoading &&
                                    categoryData.categories.nodes.map((category) => {
                                        return (
                                            <li key={category.slug} className="hover-up">
                                                <a href="newslatter.html"><i className="fi-rs-bookmark mr-10"></i>{category.name}</a>
                                            </li>
                                        );
                                    })}
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <Articles className="mt-50" initialPageCount={20} indexPage={false} />

          

            </div>
        </div>
    </main>

  )
}
export default Category
import ArticleHeader from "@/components/articles/ArticleHeader";
import Articles from "@/components/articles/Articles";
import loadAllLibraries from "@/libs/loader-libraries";
import { getCategories } from "@/libs/querys";
import stopLoading from "@/libs/stop-loading"
import { useQuery } from "@apollo/client";
import { useEffect } from "react"

function Category() {
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

                <ArticleHeader title={"Conéctate con Efigas"} />

                <Articles className="mt-50" initialPageCount={20} indexPage={false} />

          

            </div>
        </div>
    </main>

  )
}
export default Category
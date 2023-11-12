import ArticleHeader from "@/components/articles/ArticleHeader";
import Articles from "@/components/articles/Articles";
import stopLoading from "@/libs/stop-loading"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react"

function SubCategory() {
    const router = useRouter();

    const { slug } = router.query;

    useEffect(()=>{
        stopLoading();
        console.log(slug);
    })

  return (
    <main>
        <div className="page-header mt-30 mb-75">
            <div className="container">
                <div className="breadcrumb mb-30">
                    <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Inicio</a>
                    <span></span> <Link href="/category">Conéctate con Efigas</Link> <span></span> Blog
                </div>

                <ArticleHeader title={"Conéctate con Efigas"} categoryActive={slug} />

            </div>
        </div>
        <Articles horizontal={true} indexPage={false} initialPageCount={20} initialCategorySlug={slug} />

    </main>
  )
}
export default SubCategory
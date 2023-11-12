import { getArticleHeader, getCategories, paginatedPost } from "@/libs/querys";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import ArticleCard from "./ArticleCard";
import Image from "next/image";
import ArticleCardHorizontal from "./ArticleCardHorizontal";

function Articles({initialPageCount=4,initialCategorySlug="", indexPage=true,horizontal=false}) {
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [category, setCategory] = useState(initialCategorySlug);
    const [categoryActive, setCategoryActive] = useState(false);
    const [sizeActive,setSizeActive] = useState(false);
    const [orderActive,setOrderActive] = useState(false);
    const [order, setOrder] = useState("Recientes");
    const [postPerPage,setPostPerPage]= useState(initialPageCount);
    const { loading: categoryLoading, data: categoryData } =useQuery(getCategories);
    const { loading: headerLoading, data: headerData } =useQuery(getArticleHeader);

    const { loading, error, data } = useQuery(paginatedPost, {
      variables: {
        categoryName: category,
        offset: currentPage * postPerPage,
        size: postPerPage,
      },
    });

    if(initialCategorySlug) console.log(initialCategorySlug);

    if(!headerLoading) console.log(headerData);
  
    useEffect(() => {
      if (!loading && data) {
        setPageCount(
          Math.ceil(data.posts.pageInfo.offsetPagination.total / postPerPage)
        );
      }
    }, [loading, data]);

    useEffect(()=>{
        if(initialCategorySlug) handleCategoryChange(initialCategorySlug);
    },[initialCategorySlug])
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const handleCategoryChange = (categorySlug) => {
      setCurrentPage(0);
      setCategoryActive(false);
      setCategory(categorySlug);
    };

    const getCategoryBySlug = (categories, slug) => {
        return categories.find((category) => category.slug === slug);
      };



  return (
        <div className={`page-content mb-50 ${indexPage?"":"mt-50"} `}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shop-product-fillter mb-50">
                        <div className="totall-product">
                            <h2>
                                <img className="w-36px mr-10" src={headerData?.post?.headerPostFields?.icono1?.link} alt="" />
                                { initialCategorySlug? !categoryLoading && getCategoryBySlug(categoryData.categories.nodes, initialCategorySlug).name : 
                                  indexPage?headerData?.post?.headerPostFields?.texto1:order
                                }
                            </h2>
                        </div>
                        <div className={`sort-by-product-area ${indexPage?"":"row"}`} >
                            {
                                indexPage?  
                                <div className={`sort-by-cover mr-10 ${categoryActive ? 'show' : ''}`}>
                                    <div onClick={()=>setCategoryActive(!categoryActive)} className="sort-by-product-wrap">
                                        <div className="sort-by">
                                            <span><i className="fi-rs-apps"></i>Mostrar:</span>
                                        </div>
                                        <div className="sort-by-dropdown-wrap">
                                            <span> { (category=="")?headerData?.post?.headerPostFields?.texto2:category } <i className="fi-rs-angle-small-down"></i></span>
                                        </div>
                                    </div>
                                    <div className={`sort-by-dropdown ${categoryActive ? 'show' : ''}`}>
                                        <ul>
                                            <li onClick={()=> handleCategoryChange("")}><a > {headerData?.post?.headerPostFields?.texto2}  </a> </li>
                                        {!categoryLoading &&
                                            categoryData.categories.nodes.map((category) => {
                                            return (
                                                <li key={category.slug} onClick={()=> handleCategoryChange(category.slug)}><a > {category.name}</a></li>
                                            );
                                        })}
                                           
                                        </ul>
                                    </div>
                                </div>:
                                <>
                                 <div className={`sort-by-cover mr-10 col-xs-6 col-sm-auto mb-5 ${sizeActive ? 'show' : ''} `}>

                                            <div onClick={()=>setSizeActive(!sizeActive)} className={`sort-by-product-wrap`}>
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps"></i>Ver:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span> {postPerPage} <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className={`sort-by-dropdown ${sizeActive ? 'show' : ''} `}>
                                                <ul>
                                                    <li><a onClick={()=> setPostPerPage(20)} className={postPerPage==20?"active":""} >20</a></li>
                                                    <li><a onClick={()=> setPostPerPage(50)} className={postPerPage==50?"active":""}>50</a></li>
                                                    <li><a onClick={()=> setPostPerPage(100)} className={postPerPage==100?"active":""}>100</a></li>
                                                    <li><a onClick={()=> setPostPerPage(200)} className={postPerPage==200?"active":""}>200</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={`sort-by-cover col-xs-6 col-sm-auto ${orderActive ? 'show' : ''} `  }>
                                            <div onClick={()=>setOrderActive(!orderActive)} className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps-sort"></i>Ordenar:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span>{order} <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className={`sort-by-dropdown ${orderActive ? 'show' : ''}`}>
                                                <ul>
                                                    <li><a onClick={()=> setOrder("Destacados")} className={order=="Destacados"?"active":""} >Destacados</a></li>
                                                    <li><a onClick={()=> setOrder("Recientes")} className={order=="Recientes"?"active":""}>Recientes</a></li>
                                                    <li><a onClick={()=> setOrder("Más comentados")} className={order=="Más comentados"?"active":""}>Más comentados</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                </>
                            }
                                
                            </div>
      
                    </div>
                   { horizontal?
                   
                   <div className="loop-grid loop-list pr-30 mb-50">
                        {loading ?<div className="loading-post-container">
                            <Image src="/imgs/theme/loading.gif" alt="" width={60} height={60}  />                        
                        </div> : data.posts.nodes.length > 0 ? (
                        data.posts.nodes.map((post) => {
                            return (
                            <ArticleCardHorizontal
                                key={post.slug}
                                title={post.title}
                                imgLink={post?.featuredImage?.node?.link}
                                description={post?.excerpt}
                            />
                            );
                        })
                        ) : (
                        <div className="w-full h-[24rem] flex justify-center items-center">
                            <h1>No hay datos para mostrar</h1>
                        </div>
                        )}
                    </div>
                   :
                   
                   
                   <div className="loop-grid">
                        <div className="row">
                        {loading ?<div className="loading-post-container">
                            <Image src="/imgs/theme/loading.gif" alt="" width={60} height={60}  />                        
                        </div> : data.posts.nodes.length > 0 ? (
                        data.posts.nodes.map((post) => {
                            return (
                            <ArticleCard
                                key={post.slug}
                                slug={post.slug}
                                title={post.title}
                                principalCategory={post?.categories?.nodes[0]?.name}
                                imgLink={post?.featuredImage?.node?.link}
                            />
                            );
                        })
                        ) : (
                        <div className="w-full h-[24rem] flex justify-center items-center">
                            <h1>No hay datos para mostrar</h1>
                        </div>
                        )}
                          
                        </div>
                    </div>}
                    <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                        <nav aria-label="Page navigation example">
                            <ul className={`pagination ${indexPage? "justify-content-center" : "justify-content-start"}`}>
                                <Pagination
                                    currentPage={currentPage}
                                    handlePageChange={handlePageChange}
                                    pageCount={pageCount}
                                />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Articles
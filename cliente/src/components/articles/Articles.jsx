import { getArticleHeader, getCategories, paginatedPost } from "@/libs/querys";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import ArticleCard from "./ArticleCard";
import Image from "next/image";

function Articles() {
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [category, setCategory] = useState("");
    const [categoryActive, setCategoryActive] = useState(false);
    const postPerPage = 4;
    const { loading: categoryLoading, data: categoryData } =useQuery(getCategories);
    const { loading: headerLoading, data: headerData } =useQuery(getArticleHeader);

    const { loading, error, data } = useQuery(paginatedPost, {
      variables: {
        categoryName: category,
        offset: currentPage * postPerPage,
        size: 4,
      },
    });

    if(!headerLoading) console.log(headerData);
  
    useEffect(() => {
      if (!loading && data) {
        setPageCount(
          Math.ceil(data.posts.pageInfo.offsetPagination.total / postPerPage)
        );
      }
    }, [loading, data]);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const handleCategoryChange = (categorySlug) => {
      setCurrentPage(0);
      setCategoryActive(false);
      setCategory(categorySlug);
    };



  return (
    <div>
        <div className="page-content mb-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shop-product-fillter mb-50">
                        <div className="totall-product">
                            <h2>
                                <img className="w-36px mr-10" src={headerData?.post?.headerPostFields?.icono1?.link} alt="" />
                                {headerData?.post?.headerPostFields?.texto1}
                            </h2>
                        </div>
                        <div className="sort-by-product-area">
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
                                </div>
                            </div>
      
                    </div>
                    <div className="loop-grid">
                        <div className="row">
                        {loading ?<div className="loading-post-container">
                            <Image src="imgs/theme/bouncing-circles.svg" alt="" width={40} height={40}  />                        
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
                    </div>
                    <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <Pagination
                                    currentPage={currentPage}
                                    handlePageChange={handlePageChange}
                                    pageCount={pageCount}
                                />
                                {/* <li className="page-item">
                                    <a className="page-link" href="#"><i className="fi-rs-arrow-small-left"></i></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fi-rs-arrow-small-right"></i></a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Articles
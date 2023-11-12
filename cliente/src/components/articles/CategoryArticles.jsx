import { getArticleHeader, getCategories } from "@/libs/querys";
import { useQuery } from "@apollo/client";
import { useState } from "react";

function CategoryArticles() {
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
    <div>CategoryArticles</div>
  )
}
export default CategoryArticles
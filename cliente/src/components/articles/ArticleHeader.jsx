import { getCategories } from "@/libs/querys";
import { useQuery } from "@apollo/client";
import Link from "next/link";

function ArticleHeader({title, categoryActive=""}) {
    const { loading: categoryLoading, data: categoryData } =useQuery(getCategories);

  return (
    <div className="archive-header">
      <div className="row align-items-center">
        <div className="col-md-4 col-lg-4 text-center text-md-start">
          <h1 className="mb-15">{title}</h1>
        </div>
        <div className="col-md-8 col-lg-8 text-center text-md-end">
          <ul className="tags-list">
            {!categoryLoading &&
              categoryData.categories.nodes.map((category) => {
                return (
                  <li key={category.slug} className={`hover-up ${categoryActive==category.slug && "active"}`} >
                    <Link href={`/category/${category.slug}`}>
                      <i className="fi-rs-bookmark mr-10"></i>
                      {category.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ArticleHeader;

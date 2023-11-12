function ArticleCard({title,principalCategory,imgLink}) {
  return (
    <article className="col-xl-3 col-md-6 hover-up mb-30 animated">
      <div className="post-thumb">
        <a href="#">
          <img
            className="border-radius-15"
            src={imgLink}
            alt=""
          />
        </a>
      </div>
      <div className="entry-content-2">
        <h6 className="mb-10 font-sm">
          <a className="entry-meta text-muted" href="#">
            {principalCategory}
          </a>
        </h6>
        <h4 className="post-title mb-15">
          <a href="#">
            {title}
          </a>
        </h4>
        <div className="entry-meta font-xs color-grey mt-10 pb-10">
          <div>
            <span className="post-on mr-10">05 Oct 2023</span>
            <span className="hit-count has-dot mr-10">126k Vistas</span>
            <span className="hit-count has-dot">4 mins lectura</span>
          </div>
        </div>
      </div>
    </article>
  );
}
export default ArticleCard;

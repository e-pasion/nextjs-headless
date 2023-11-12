function ArticleCardHorizontal({title,description,imgLink}) {
  return (
    <article class="wow fadeIn animated hover-up mb-30 animated">
      <div
        class="post-thumb"
        style={{ backgroundImage: `url(${imgLink})` }}
      >
        <div class="entry-meta">
          <a class="entry-meta meta-2" href="blog-category-grid.html">
            <i class="fi-rs-play-alt"></i>
          </a>
        </div>
      </div>
      <div class="entry-content-2 pl-50">
        <h3 class="post-title mb-20">
          <a href="blog-post-right.html">
            {title}
          </a>
        </h3>
        <p class="post-exerpt mb-40">
          {description}
        </p>
        <div class="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
          <div>
            <span class="post-on">02 nov 2023</span>
            <span class="hit-count has-dot">126k Vistas</span>
          </div>
          <a
            href="blog-post-right.html"
            class="text-brand font-heading font-weight-bold"
          >
            Leer más <i class="fi-rs-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  );
}
export default ArticleCardHorizontal;

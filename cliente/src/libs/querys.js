import { gql } from "@apollo/client";

export const paginatedPost = gql`
  query GetPaginatedPosts($categoryName: String, $offset: Int!, $size: Int!) {
    posts(
      where: { offsetPagination: { offset: $offset, size: $size }, categoryName: $categoryName, categoryNotIn: "195"}) {
      nodes {
        slug
        title
        categories {
          nodes {
            name
          }
        }
        date
        featuredImage {
          node {
            link
          }
        }
      }
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
    }
  }
`;

export const getCategories= gql`
query getCategories {
  categories(where: {exclude: [195]}) {
    nodes {
      name
      slug
    }
  }
}
`

export const getPostBySlug = gql`
query getPostBySlug($slug: ID!) {
  post(idType: SLUG, id: $slug) {
    title
    content
  }
}
`

export const getModal= gql`
query getModal {
    modal(id: "modal-inicial", idType: SLUG) {
      title
      fields {
        imagen {
          link
        }
        logo {
          link
        }
        texto1
        texto2
        texto3
        texto4
        texto5
        textoBoton
      }
    }
  }
`

export const getHeader= gql`
query getHeader {
  header(id: "header", idType: SLUG) {
    headerFields {
      texto1
      texto2
      texto3
      texto4
      texto5
      texto6
      textoBoton
      textoBuscar
      logo {
        link
      }
      logoCelular{
        link
      }
      icono1 {
        link
      }
      icono2 {
        link
      }
    }
  }
}
`

export const getHero1=gql`
query getHero1 {
  hero(id: "hero-1", idType: SLUG) {
    hero1Fields {
      imagen {
        link
      }
      texto1
      texto2
      texto3
      texto4
      texto5
      textoBoton
    }
  }
}
`

export const getHero2=gql`
query getHero2 {
  hero(id: "hero-2", idType: SLUG) {
    hero2Fields {
      imagen {
        link
      }
      texto1
      texto2
      texto3
      texto4
      textoBoton
    }
  }
}
`

export const getHero3=gql`
query getHero3 {
  hero(id: "hero-3", idType: SLUG) {
    hero3Fields {
      texto3
      texto2
      texto1
      qr {
        link
      }
      imagenCelular {
        link
      }
      imagen {
        link
      }
    }
  }
}
`

export const getCategorySlider=gql`
query NewQuery {
  sliderCategoria(id: "slider-categorias", idType: SLUG) {
    CategoriaFields {
      texto4
      texto3
      texto2
      texto1
      icono1 {
        texto1
        texto2
        icono {
          link
        }
      }
      icono2 {
        texto1
        texto2
        icono {
          link
        }
      }
      icono3 {
        texto1
        texto2
        icono {
          link
        }
      }
      icono4 {
        texto1
        texto2
        icono {
          link
        }
      }
      icono5 {
        texto1
        texto2
        icono {
          link
        }
      }
      icono6 {
        texto1
        texto2
        icono {
          link
        }
      }
    }
  }
}
`

export const getBusiness=gql`
query NewQuery {
  business(id: "business", idType: SLUG) {
    businessFields {
      business1 {
        texto1
        texto2
        icono {
          link
        }
      }
      business2 {
        texto2
        texto1
        icono {
          link
        }
      }
      business3 {
        texto2
        texto1
        icono {
          link
        }
      }
      business4 {
        texto1
        texto2
        icono {
          link
        }
      }
    }
  }
}
`


export const getBrilla=gql`
query NewQuery {
  brilla(id: "brilla", idType: SLUG) {
    brillaFields {
      logo {
        link
      }
      campo1 {
        texto
        icono {
          link
        }
      }
      campo2 {
        texto
        icono {
          link
        }
      }
      campo3 {
        texto
        icono {
          link
        }
      }
      campo4 {
        texto
        icono {
          link
        }
      }
    }
  }
}
`

export const getBanners=gql`
query NewQuery {
  banner(id: "banners", idType: SLUG) {
    bannerFields {
      banner1 {
        texto1
        texto2
        texto3
        textoBoton
        imagen {
          link
        }
      }
      banner2 {
        texto1
        texto2
        texto3
        texto4
        textoBoton
        imagen {
          link
        }
      }
      banner3 {
        texto1
        texto2
        texto3
        texto4
        texto5
        textoBoton
        imagen {
          link
        }
      }
    }
  }
}
`


export const getFooterSuperior=gql`
query NewQuery {
  footer(id: "footer-superior", idType: SLUG) {
    footerFields {
      texto1
      texto2
      texto3
      texto4
      texto5
      icono1 {
        link
      }
      icono2 {
        link
      }
      logo1 {
        link
      }
      logo2 {
        link
      }
      socialMedia {
        icono1 {
          link
        }
        icono2 {
          link
        }
        icono3 {
          link
        }
        icono4 {
          link
        }
        icono5 {
          link
        }
        texto
      }
    }
  }
}

`

export const getFooterInferior=gql`
query NewQuery {
  footer(id: "footer-inferior", idType: SLUG) {
    footerInferiorFields {
      texto1
      texto2
      texto3
      texto4
      texto5
      texto6
      texto7
    }
  }
}

`

export const getArticleHeader=gql`
query getPostHeader {
  post(id: "post-header", idType: SLUG) {
    title
    headerPostFields {
      texto3
      texto1
      texto2
      icono1 {
        link
      }
    }
  }
}
`
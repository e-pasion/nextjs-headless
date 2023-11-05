import { gql } from "@apollo/client";

export const paginatedPost = gql`
  query GetPaginatedPosts($categoryName: String, $offset: Int!, $size: Int!) {
    posts(
      where: { offsetPagination: { offset: $offset, size: $size }, 
      categoryName: $categoryName}) {
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
  categories {
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
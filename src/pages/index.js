import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const albums = get(this, 'props.data.allContentfulAlbum.edges')

    return (
      <Layout>
        <div>
      
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
query albumQuery {
  allContentfulAlbum {
    edges {
      node {
        albumName
        artistName
        albumCover {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
}
`

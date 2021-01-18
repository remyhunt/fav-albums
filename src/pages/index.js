import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import AlbumView from '../templates/album-view'
import Marquee3k from 'marquee3000';

class RootIndex extends React.Component {
  render() {    
    
 
    //  Marquee3k.init();

    const albums = get(this, 'props.data.allContentfulAlbum.edges')
    return (
      <Layout>

      <div className="header">
          <div className="marquee3k" 
            data-speed="1.4" 
            data-reverse="bool" 
            data-pausable="bool">
            <h1>&nbsp;FAVORITE ALBUMS OF 2020 //</h1>
        </div>
      </div>
      <div className="test">
          {albums.map(({node}) => {
            return(
              <AlbumView key={node.albumName} album={node} />
            )
          })}
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
        runTime
        genre
      }
    }
  }
}
`

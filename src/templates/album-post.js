import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


class albumPostTemplate extends React.Component {
  render() {
    return (
      <Layout>
          album name
      </Layout>
    )
  }
}

export default albumPostTemplate

export const pageQuery = graphql`
  query albumsQuery($albumName: String!) {
    contentfulAlbum(albumName: { eq: $albumName }) {
      albumName
    }
  }
`

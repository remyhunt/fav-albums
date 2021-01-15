const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulAlbum {
              edges {
                node {
                  albumName
                  artistName
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const albums = result.data.allContentfulAlbum.edges
        albums.forEach(post => {
          createPage({
            path: `/album/${post.node.albumName}/`,
            component: albumPost,
            context: {
              albumName: post.node.albumName,
            },
          })
        })
      })
    )
  })
}

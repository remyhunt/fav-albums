import React from 'react'
import Layout from '../components/layout'

import albumViewStyles from './album-view.module.css'


class albumViewTemplate extends React.Component {
    
  render() {
    return (
      <Layout>
        <div>
          <p>{this.props.album.albumName} - {this.props.album.artistName}</p> 
          <img class={albumViewStyles.albumCover} src={this.props.album.albumCover.file.url}/>
        </div>
      </Layout>
    )
  }
}

export default albumViewTemplate

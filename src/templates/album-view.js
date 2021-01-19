import React from 'react'
import Layout from '../components/layout'

import albumViewStyles from './album-view.module.css'


class albumViewTemplate extends React.Component {
    
  render() {
    return (
      <Layout>
        <div className={albumViewStyles.albumName}>
            <h1> {this.props.album.albumName} </h1>
        </div>
        <div className={albumViewStyles.albumContainer}>
          <div className={albumViewStyles.albumDescription}>
            <p className={albumViewStyles.artistName}> {this.props.album.artistName} </p>
            <p> {this.props.album.runTime} </p>
            <p> {this.props.album.genre} </p>
          </div>
          <div className={albumViewStyles.albumBackdrop} alt="album cover backdrop"></div>
          <div className={albumViewStyles.albumCoverContainer}>              
              <img className={albumViewStyles.albumCover} alt="album cover" src={this.props.album.albumCover.file.url}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default albumViewTemplate

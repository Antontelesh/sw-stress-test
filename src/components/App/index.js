import React from 'react'
import Images from '../Images/index'
import CurrentImage from '../CurrentImage/index'
import styles from './styles.css'

class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>

        <aside className={styles.sidebar}>
          <Images
            images={this.props.images}
            onSelect={this.props.openImage}
            onImageLoadStart={this.props.loadStart}
            onImageLoad={this.props.loadSuccess}
            onImageLoadError={this.props.loadError}
          />
        </aside>

        <main className={styles.content}>
          <CurrentImage
            source={this.props.current}
            onLoadStart={this.props.loadStart}
            onLoad={this.props.loadSuccess}
            onLoadError={this.props.loadError}
          />
        </main>

      </div>
    )
  }

}


export default App

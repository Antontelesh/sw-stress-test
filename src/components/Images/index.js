import React from 'react'
import ImageListItem from '../ImageListItem/index'
import map from 'lodash/map'
import styles from './styles.css'

class Images extends React.Component {

  render() {
    return (
      <ul className={styles.images}>
        {map(this.props.images, image => (
          <li
            className={styles.image}
            key={image.source}
            onClick={this.props.onSelect.bind(null, image.source)}
          >

            <ImageListItem
              image={image}
              onLoadStart={this.props.onImageLoadStart}
              onLoad={this.props.onImageLoad}
              onLoadError={this.props.onImageLoadError}
            />

          </li>
        ))}
      </ul>
    )
  }

}

export default Images

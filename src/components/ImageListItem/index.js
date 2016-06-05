import React from 'react'
import StatusBadge from '../StatusBadge/index'
import styles from './styles.css'
import Http from '../../services/http/Http'

const http = Http.getInstance()

class ImageListItem extends React.Component {

  componentDidMount() {
    this.props.onLoadStart(this.props.image.source)
    http.get(this.props.image.source)
      .then(
        this.props.onLoad.bind(null, this.props.image.source),
        this.props.onLoadError.bind(null, this.props.image.source)
      )
  }

  render() {
    return (
      <div className={styles.imageListItem + (this.props.image.isCurrent ? ' current' : '')}>
        <div className={styles.status}>
          <StatusBadge
            loaded={this.props.image.loaded}
            loading={this.props.image.loading}
            error={this.props.image.error}
          />
        </div>
        <div className={styles.source}>{this.props.image.source}</div>
      </div>
    )
  }

}

export default ImageListItem

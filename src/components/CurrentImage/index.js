import React from 'react'
import styles from './styles.css'
import Http from '../../services/http/Http'

const http = Http.getInstance()

class CurrentImage extends React.Component {

  constructor(props, state) {
    super(props, state)

    this.state = {
      loaded: false,
    }
  }

  request(source) {
    this.props.onLoadStart(source)
    http.get(source, 'high')
      .then(() => {
        this.setState({loaded: true})
        this.props.onLoad(source)
      })
      .catch(err => {
        this.props.onLoadError(source, err)
      })
  }

  componentWillReceiveProps(props) {
    if (props.source && props.source !== this.props.source) this.request(props.source)
  }

  render() {
    if (!this.props.source) return null

    const img = this.state.loaded
      ? <img className={styles.image} src={this.props.source} />
      : <div>{'loading...'}</div>

    return (
      <div className="currentImage">
        <h1 className="title">{this.props.source}</h1>
        {img}
      </div>
    )
  }

}

export default CurrentImage

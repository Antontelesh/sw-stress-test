import React from 'react'
import styles from './styles.css'

class Badge extends React.Component {

  render() {
    return (
      <span className={styles.badge + ' ' + styles[this.props.type]}>{this.props.text}</span>
    )
  }

}

export default Badge

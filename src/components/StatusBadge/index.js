import React from 'react'
import Badge from '../Badge/index'

class StatusBadge extends React.Component {

  getBadge() {
    if (this.props.error) {
      return <Badge type="error" text="E" />
    }

    if (this.props.loaded) {
      return <Badge type="success" text="OK" />
    }

    if (this.props.loading) {
      return <Badge type="warning" text="..." />
    }

    else {
      return <Badge type="pending" text=" " />
    }
  }

  render() {
    const badge = this.getBadge()
    return badge || null
  }

}

export default StatusBadge

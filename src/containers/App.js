import App from '../components/App/index'
import {connect} from 'react-redux'
import map from 'lodash/map'
import includes from 'lodash/includes'
import {openImage} from '../actions'
import {loadStart} from '../actions'
import {loadSuccess} from '../actions'
import {loadError} from '../actions'

const composeImages = (sources, loading, loaded, errors, current) => {
  return map(sources, source => ({
    source,
    loading: includes(loading, source),
    loaded: includes(loaded, source),
    error: includes(errors, source),
    isCurrent: source === current,
  }))
}

const mapStateToProps = state => {
  return {
    current: state.current,
    images: composeImages(state.sources, state.loading, state.loaded, state.errors, state.current),
  }
}

const mapDispatchToProps = {
  openImage,
  loadStart,
  loadSuccess,
  loadError,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

export const LOAD_SOURCES = 'LOAD_SOURCES'
export const LOAD_START = 'LOAD_START'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_ERROR = 'LOAD_ERROR'
export const OPEN_IMAGE = 'OPEN_IMAGE'

export const loadSources = sources => ({
  type: LOAD_SOURCES, sources,
})

export const loadStart = source => ({
  type: LOAD_START, source,
})

export const loadSuccess = source => ({
  type: LOAD_SUCCESS, source,
})

export const loadError = source => ({
  type: LOAD_ERROR, source,
})

export const openImage = source => ({
  type: OPEN_IMAGE, source,
})

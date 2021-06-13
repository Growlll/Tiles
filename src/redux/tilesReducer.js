import {
  SET_ACTIVE,
  SET_ACTIVE_TILE,
  SET_HIDE_TILES, SET_START,
  SET_STOP_CLICK, SET_TILES_ACTIVE
} from './types'

const tilesArr = [
  {id: 1, status: 'inactive', color: 'gold'},
  {id: 2, status: 'inactive', color: 'gold'},
  {id: 3, status: 'inactive', color: 'blue'},
  {id: 4, status: 'inactive', color: 'blue'},
  {id: 5, status: 'inactive', color: 'green'},
  {id: 6, status: 'inactive', color: 'green'},
  {id: 7, status: 'inactive', color: 'violet'},
  {id: 8, status: 'inactive', color: 'violet'},
  {id: 9, status: 'inactive', color: 'orange'},
  {id: 10, status: 'inactive', color: 'orange'},
  {id: 11, status: 'inactive', color: 'lime'},
  {id: 12, status: 'inactive', color: 'lime'},
  {id: 13, status: 'inactive', color: 'brown'},
  {id: 14, status: 'inactive', color: 'brown'},
  {id: 15, status: 'inactive', color: 'pink'},
  {id: 16, status: 'inactive', color: 'pink'},
]

const initialState = {
  tiles: [],
  activeTile: null,
  isChange: true,
  isStart: false
}

export const tilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START:
      return {
        ...state,
        isStart: action.flag
      }

    case SET_TILES_ACTIVE:
      return {
        ...state,
        tiles: [...action.tiles]
      }

    case SET_ACTIVE:
      return {
        ...state,
        tiles: [...state.tiles.map(item => (item.id === action.id) ? {...item, status: 'active'} : {...item})]
      }

    case SET_HIDE_TILES:
      return {
        ...state,
        tiles: state.tiles.map(item => (
          item.status === action.from ? {...item, status: action.to, color: action.color || item.color} : {...item})),
        activeTile: null
      }

    case SET_ACTIVE_TILE:
      return {
        ...state,
        activeTile: action.tileId
      }

    case SET_STOP_CLICK:
      return {
        ...state,
        isChange: action.flag
      }

    default:
      return state
  }
}

export const changeTileStatus = (id) => ({type: SET_ACTIVE, id})
export const setStart = (flag) => ({type: SET_START, flag})
export const stopClick = (flag) => ({type: SET_STOP_CLICK, flag})
export const setActiveTileId = (tileId) => ({type: SET_ACTIVE_TILE, tileId})
export const toggleTiles = (from, to, color) => ({type: SET_HIDE_TILES, from, to, color})
export const setTiles = (tiles) => ({type: SET_TILES_ACTIVE, tiles})

export const hideEqualTiles = (activeTile, currentTile) => (dispatch) => {
  dispatch(stopClick(false))
  if (activeTile.color === currentTile.color) {
    dispatch(changeTileStatus(currentTile.id))

    setTimeout(() => {
      dispatch(toggleTiles('active', 'hide', 'transparent'))
      dispatch(stopClick(true))
    }, 500)
  } else {
    dispatch(changeTileStatus(currentTile.id))

    setTimeout(() => {
      dispatch(toggleTiles('active', 'inactive'))
      dispatch(stopClick(true))
    }, 500)
  }
}

export const setTilesActive = () => dispatch => {
  dispatch(setTiles(tilesArr))
}
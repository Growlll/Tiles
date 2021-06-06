const initialState = {
  tiles: [
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
  ],
  activeTile: null
}

const SET_ACTIVE = 'tiles/SET_ACTIVE'
const SET_HIDE_TILES = 'tiles/SET_HIDE_TILES'
const SET_ACTIVE_TILE = 'tiles/SET_ACTIVE_TILE'

export const tilesReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state
  }
}

export const changeTileStatus = (id) => ({type: SET_ACTIVE, id})
export const toggleTiles = (from, to, color) => ({type: SET_HIDE_TILES, from: from, to: to, color: color})
export const setActiveTileId = (tileId) => ({type: SET_ACTIVE_TILE, tileId})

export const hideEqualTiles = (activeTile, currentTile) => (dispatch) => {
  if(activeTile.color === currentTile.color) {
    dispatch(changeTileStatus(currentTile.id))
    setTimeout(() => dispatch(toggleTiles('active', 'hide', 'transparent')), 500)
  } else {
    dispatch(toggleTiles('active', 'inactive', ))
  }
}
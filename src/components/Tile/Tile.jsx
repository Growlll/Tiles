import React from 'react'
import {useDispatch} from 'react-redux'

import {changeTileStatus, hideEqualTiles, setActiveTileId} from '../../redux/tilesReducer'

import s from './Tile.module.css'

const Tile = ({item, activeTile, isChange}) => {
  const {id, status, color} = item
  const Color = (status === 'active' || status === 'hide') ? color : '#14D7D7'
  const hiddenClass = status !== 'hide' ? s.active : ''
  const dispatch = useDispatch()

  const onClick = (id) => {
    if(!isChange || item.status !== 'inactive') return

    dispatch(changeTileStatus(id))

    if(!activeTile) {
      dispatch(setActiveTileId(item))
    } else {
      dispatch(hideEqualTiles(activeTile, item))
    }
  }

  return <div className={s.tile + ' ' + hiddenClass} style={{backgroundColor: Color}} onClick={() => onClick(id)}></div>
}

export default Tile
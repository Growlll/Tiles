import React from 'react';
import s from './Tile.module.css';
import {useDispatch} from 'react-redux';
import {changeTileStatus, hideEqualTiles, setActiveTileId} from '../../redux/tilesReducer';

const Tile = ({item, activeTile}) => {
  const {id, status, color} = item
  const dispatch = useDispatch()
  const Color = (status === 'active' || status === 'hide') ? color : '#14D7D7'

  const onClick = (id) => {
    if(item.status !== 'inactive') return

    dispatch(changeTileStatus(id))

    if(!activeTile) {
      dispatch(setActiveTileId(item))
    } else {
      dispatch(hideEqualTiles(activeTile, item))
    }
  }

  return <div className={s.tile} style={{backgroundColor: Color}} onClick={() => onClick(id)}></div>
}

export default Tile
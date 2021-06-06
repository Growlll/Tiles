import React from 'react';
import s from './Content.module.css';
import Tile from '../Tile/Tile';
import {useSelector} from 'react-redux';

const Content = () => {
  const tiles = useSelector(state => state.tiles.tiles)
  const activeTile = useSelector(state => state.tiles.activeTile)
  console.log(activeTile)

  return (
    <div className={s.tiles}>
      {
        tiles.map(item => (<Tile key={item.id} item={item} activeTile={activeTile}/>))
      }
    </div>
  )
}

export default Content
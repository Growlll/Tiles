import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {setStart, setTilesActive} from '../../redux/tilesReducer'

import Tile from '../Tile/Tile'

import s from './Content.module.css'

const Button = ({text, startGame}) => {
  return (
    <div className={s.mat}>
      <button onClick={startGame} className={s.btn}>{text}</button>
    </div>
  )
}

const Content = () => {
  const tiles = useSelector(state => state.tiles.tiles)
  const activeTile = useSelector(state => state.tiles.activeTile)
  const isChange = useSelector(state => state.tiles.isChange)
  const isStart = useSelector(state => state.tiles.isStart)
  const dispatch = useDispatch()
  const checkTiles = tiles.every(item => item.status === 'hide')

  useEffect(() => {
    if(checkTiles) {
      dispatch(setStart(false))
    }
  }, [dispatch, checkTiles])

  const onStartGame = () => {
    dispatch(setStart(true))
    dispatch(setTilesActive())
  }

  return (
    <div className={s.tiles}>
      {
        !isStart &&
        <Button text={'Start game'} startGame={onStartGame}/>
      }
      {
        tiles.map(item => <Tile key={item.id}
                                item={item}
                                activeTile={activeTile}
                                isChange={isChange}/>)
      }
    </div>
  )
}

export default Content
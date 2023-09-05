import React, { useState, useEffect } from 'react'
import infoPic from '../img/info.png'

export default function ResultsComp(props) {
  const { name, surname, timeStamp, country, playerScore, handleDel, id, scoreUpdate } = props

  const [infoVisible, setInfVisible] = useState(false)

  function handleInfo() {
    setInfVisible(!infoVisible)
    console.log(infoVisible)
  }

  const [showEffect, setShowEffect] = useState(false)

  useEffect(() => {
    setShowEffect(true)
  }, [])

  const info = <span>Info Added;<br />{timeStamp}</span>
  return (
    <div className={`resultsContainer container mt-4 ${showEffect ? 'showEffect' : ''} `}>

      <div className='position-relative d-flex flex-column shadow rounded flex-sm-row justify-content-between align-items-center pe-2 py-2 listBgColor' >
        <span className='ms-2 listBgColor' onClick={handleInfo}><img className='listBgColor makeBigger ' src={infoPic} alt="" height={32} width={32} />
          <span className={infoVisible ? 'showInfo' : 'hideInfo'}> {info}</span></span>

        <div className='d-flex justify-content-around w-100 ms-0 listBgColor'>
          <div className='listBgColor'>
            <div className='listBgColor'>{name} {surname}</div>
          </div>
          <div className='listBgColor'>{country}</div>
          <div className='listBgColor'>{playerScore}</div>
        </div>

        <div className='d-flex align-items-center listBgColor'>
          <button className=' ms-0 circleClass btn rounded-circle m-1' onClick={() => scoreUpdate(id, 5)}>+5</button>
          <button className=' circleClass btn rounded-circle  m-1 ' onClick={() => scoreUpdate(id, -5)}>-5</button>
          <button className=' circleClass btn rounded-circle m-1' onClick={() => handleDel(id)}>Del</button>
        </div>

      </div>
    </div>
  )
}

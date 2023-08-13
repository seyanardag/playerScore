import React, { useContext } from 'react'
import "../App.css"
import UserContext from './helpers/UserContext'

export default function AddPlayerComp(props) {
    // const {setName, surname, setSurname, addPlayer, country, setCountry, playerScore, setPlayerScore } = props

    const {name, setName,surname, setSurname,  country, setCountry,playerScore, setPlayerScore,addPlayer, errMessage} = useContext(UserContext)

    return (
        <div className='container '>
            <div className=' d-flex flex-column flex-sm-row input-groupA justify-content-between align-items-center '>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='inputBgColor form-control shadow px-2 m-1  ' type="text" id='lastNameID' placeholder='Name' />
                <input value={surname} onChange={(e)=>setSurname(e.target.value)} className='inputBgColor form-control shadow px-2 m-1  ' type="text" id='nameID' placeholder='Surname' />
                <input value={country} onChange={(e)=>setCountry(e.target.value)} className='inputBgColor form-control shadow px-2 m-1  ' type="text" id='countryID' placeholder='Country' />
                <input value={playerScore} onChange={(e)=>setPlayerScore(e.target.value) } className='inputBgColor form-control shadow px-2 m-1  ' type="text" id='ageID' placeholder='Score' />
            </div>
                <button id="addBtn" className='btn  shadow  w-100 mt-2 text-nowrap ' onClick={addPlayer} >ADD PLAYER</button>
                <div className='text-danger mt-2'>{errMessage && errMessage}</div>
        </div>

    )
}

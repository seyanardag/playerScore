
import './App.css';
import data from './components/dataBase/data';

import { createContext, useContext, useRef, useState, useEffect } from 'react';
import AddPlayerComp from './components/AddPlayerComp';
import ResultsComp from './components/ResultsComp';
import ColorMngmnt from './components/ColorMngmnt';

import UserContext from './components/helpers/UserContext';
import useGetCurrentTime from './components/helpers/useGetCurrentTime';

function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [country, setCountry] = useState('');
  const [playerScore, setPlayerScore] = useState('');
  const [errMessage, setErrMessage] = useState('')

  const [newdata, setNewdata] = useState(data)


  let nextid = newdata.length > 0 ? newdata[newdata.length - 1].id : 0

  const currentTime = useGetCurrentTime()

  function addPlayer() {
    setErrMessage('')
    let pattern = /[^0-9]/g
    let regexResult = !pattern.test(playerScore)
    const isScoreValid = ((regexResult) && (playerScore <= 100) && (playerScore.length > 0))
    switch (true) {
      case name.length < 3:
        setErrMessage('Names should not be shorter than 2 chars. Please check player name!')
        break;
      case surname < 3:
        setErrMessage('Surnames should not be shorter than 2 chars. Please check player name!')
        break;
      case country.length < 1:
        setErrMessage('Please Enter a country name')
        break;
      case !isScoreValid:
        setErrMessage('Player scores must be between 0-100')
        break;
      default:
        setPlayerScore(playerScore)
        const tempData = [...newdata, { id: nextid + 1, name: name, surname: surname, country: country, playerScore: +playerScore, timestamp: currentTime }]
        setNewdata(tempData)
        console.log(newdata)
        setName('')
        setSurname('')
        setCountry('')
        setPlayerScore('')
        break;
    }
  }
  function handleDel(idParam) {
    setNewdata(newdata.filter(data => {
      return data.id !== idParam
    }
    ))
  }

  function scoreUpdate(idParam, scoreParam) {
    let tempData;
    console.log(newdata)

    tempData = newdata.map((data, index) => {
      if (idParam === data.id) {
        return { ...data, playerScore: data.playerScore + scoreParam }
      } else {
        return data
      }

    })
    setNewdata(tempData)
  }

  return (
    <UserContext.Provider value={{ name, setName, surname, setSurname, country, setCountry, playerScore, setPlayerScore, addPlayer, errMessage }}>
      <div className="App ">
        <h3 className='text-success mt-3 ' > Leaderboard Challenge</h3>
        <ColorMngmnt />
        <AddPlayerComp />
        {
          newdata.map((element, index) => {
            return <ResultsComp key={index} name={element.name} surname={element.surname} timeStamp={element.timestamp} country={element.country} playerScore={element.playerScore} id={element.id} handleDel={handleDel} scoreUpdate={scoreUpdate} />
          })
        }
      </div>
    </UserContext.Provider>
  );
}
export default App;

import React, { useRef } from 'react'

export default function ColorMngmnt() {


  function handleBgChange(param) {
    var root_ = document.querySelector(':root')
    root_.style.setProperty('--arkaPlan', param);
  }

  function handleListBgChange(newColor) {
    document.querySelector(':root').style.setProperty('--listBgColor', newColor)
  }

  function handleAddBtnBgColor(newColor) {
    document.querySelector(':root').style.setProperty('--addButtonBgColor', newColor)
  }

  function handleInputBgColor(newColor) {
    document.querySelector(":root").style.setProperty('--inputBgColor', newColor)
  }

  const colorBtnRef = useRef()
  function handleRenkBtn() {
    colorBtnRef.current.classList.toggle("downArrow")
    colorBtnRef.current.classList.toggle("upArrow")
  }

  return (
    <div>
      <p>
        <button onClick={handleRenkBtn} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#colorCollapse" aria-expanded="false" aria-controls="colorCollapse">
          <span ref={colorBtnRef} className='bg-transparent upArrow' >

            <i className="bg-transparent bi mx-1 bi-caret-down-fill"></i>
          </span>
          Color Management
        </button>
      </p>

      <div className="container collapse mx-auto  p-0 border-0" id="colorCollapse">
        <div className="card card-body m-0 p-0 border-0 ">
          <section id="colorChangePanel" className='d-flex justify-content-center row m-0 px-5 p-md-0   border-0'>
            <div className='row col-md-6 p-2'>
              <input type="color" className="d-inline form-control form-control-color z-1" id="bodyBgColor" value="#563d7c" title="Choose your background color" onChange={(e) => handleBgChange(e.target.value)} ></input>
              <label className='d-inline w-auto'>Background Color</label>
            </div>
            <div className='row col-md-6 p-2'>
              <input type="color" className="d-inline form-control form-control-color z-1" id="listBgColor" value="#563d7c" title="Choose your List color" onChange={(e) => handleListBgChange(e.target.value)} ></input>
              <label className='d-inline w-auto'>List Bg Color</label>
            </div>
            <div className='row col-md-6 p-2'>
              <input type="color" className="d-inline form-control form-control-color z-1" id="addBtnBgColor" value="#563d7c" title="Choose your Add Button color" onChange={(e) => handleAddBtnBgColor(e.target.value)} ></input>
              <label className='d-inline w-auto'>Add Btn Color</label>
            </div>
            <div className='row col-md-6 p-2'>
              <input type="color" className="d-inline form-control form-control-color z-1" id="inputBgColor" value="#a84d4d" title="Choose your Input color" onInput={(e) => handleInputBgColor(e.target.value)} ></input>
              <label className='d-inline w-auto'>Input Bg Color</label>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

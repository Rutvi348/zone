
// Component  
import Promo from './project';
import './App.css';
import { useState } from 'react'

export function App() {

  const [inputdata, setInputData] = useState({ uname: "", useremail: "", phone: "", gsearch: "", bdate: "", week: "", month: "", gender: "", game: "", color: "" })

  const [data, setData] = useState(JSON.parse(localStorage.getItem("localdata")) || []);
  const [isEdit, setIsEdit] = useState(-1);

  const handleOnChange = (e) => {

    console.log(e.target.name);
    setInputData({ ...inputdata, [e.target.name]: e.target.value })
  }

  const deleteData = (dataItem) => {
    const updatedData = data.filter((item, index) => index !== dataItem);
    setData(updatedData);
    localStorage.setItem('localdata', JSON.stringify(updatedData));
  }

  const handleEdit = (idx, record) => {
    setIsEdit(idx)
    setInputData(record)
  }

  const handleSubmit = () => {

    if (isEdit === -1)
    // spread operator 
    {
      setData([...data, inputdata])
      localStorage.setItem('localdata', JSON.stringify([...data, inputdata]))
    }
    else {
      const updated = data.map((item, index) => {
        if (index === isEdit) {
          return inputdata
        }
        else return item
      })
      setData(updated);
      localStorage.setItem('localdata', JSON.stringify(updated))
    }
  }
  // react hook 
  // console.log("inputdata", inputdata);
  console.log(data);

  return (
    <>
      <div style={{ backgroundColor: ' rgb(10, 2, 51)' }}>
        <div style={{ padding: '30px' }}>

          <div style={{ padding: '70px', backgroundColor: 'yellow', color: 'black', }} class="op">
            <img alt='' src="data:image/jpeg;base64,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" height="300px" width="550px" />
            <h1>ANANTA ACADEMY </h1>
            <div>
              <label htmlFor="name">NAME :</label>
              <input className='hello' type='text' id='uname' name='uname' onChange={(e) => handleOnChange(e)} value={inputdata.uname} />
            </div>
            <div style={{ marginTop: '20px' }}>
              <label htmlFor="email">EMAIL:</label>
              <input className="hello" type='email' id='email' name='useremail' onChange={(e) => handleOnChange(e)} value={inputdata.useremail} />
            </div>
            <div style={{ marginTop: '20px' }}>
              <label htmlFor="phone">PHONE :</label>
              <input className="hello" type='tel' id='phone' name='phone' onChange={(e) => handleOnChange(e)} value={inputdata.phone} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor="gsearch">GOOGLE SERCH :</label>
              <input className="hello" type="search" name="gsearch" id="search" onChange={(e) => handleOnChange(e)} value={inputdata.gsearch} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor="bdate">BDATE :</label>
              <input className="hello" type="date" id="bdate" name="bdate" onChange={(e) => handleOnChange(e)} value={inputdata.bdate} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor=" week">WEEK :</label>
              <input className="hello" type='week' id="week" name="week" onChange={(e) => handleOnChange(e)} value={inputdata.week} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor="month">MONTH :</label>
              <input className="hello" type="month" name="month" id="month" onChange={(e) => handleOnChange(e)} value={inputdata.month} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor="pwd">Password:</label>
              <input className="hello" type="password" id="pass" name="pass" onChange={(e) => handleOnChange(e)} value={inputdata.pass} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor='message'>MESSAGE :</label>
              <textarea className="hello" rows="5" cols="73" onChange={(e) => handleOnChange(e)}></textarea>
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor="gender">GENDER :</label>

              <input type="radio" name="gender" id="female" onChange={(e) => handleOnChange(e)}
                value="female" />female
              <input type="radio" onChange={(e) => handleOnChange(e)} name="gender" id="male" value="male" />male
            </div>

            <div style={{ marginTop: '20px' }}>
              <label htmlFor="game">GAME :</label>
              <input type="checkbox" name="game" id="cricket" />cricket
              <input type="checkbox" name="game" id="football" />football
              <input type="checkbox" name="game" id="wallyball" />wallyball
            </div>

            <div style={{ marginTop: '20px' }}>
              <lable htmlFor="color">COLOR :</lable>
              <input className="hello" type="color" name="color" id="color" onChange={(e) => handleOnChange(e)} value={inputdata.color} />
            </div>
            <div style={{ marginTop: '20px' }}>
              <label htmlFor="vol">VOLUME (between 0 and 50):</label>
              <input type="range" id="vol" name="vol" min="0" max="50" />

            </div>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <button onClick={handleSubmit} style={{ height: "30px", width: "150px", backgroundColor: "yellow", }}>SUBMIT</button>
            </div>
          </div>
        </div >

        <table style={{ color: 'white' }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PHONE</th>
            <th>GOOGLE SEARCH</th>
            <th>BDATE </th>
            <th>WEEK</th>
            <th>MONTH</th>
            <th>GENDER</th>
          </tr>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{item.uname}</td>
                  <td>{item.useremail}</td>
                  <td>{item.phone}</td>
                  <td>{item.gsearch}</td>
                  <td>{item.bdate}</td>
                  <td>{item.week}</td>
                  <td>{item.month}</td>
                  <td>{item.gender}</td>
                  <td><button onClick={() => deleteData(index)}>Delete</button></td>
                  <td><button onClick={() => handleEdit(index, item)}>Edit</button></td>

                </tr>
              )
            })}
          </tbody>

        </table>

      </div>




      <Promo />
    </>
  );







}
// export default App;

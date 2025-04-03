import React from 'react'

function Form() {
  return (
    <>
    <div id="form-card">
        <form action="">
            <div id="name-input">
            <label htmlFor="Name">Name : </label>
            <input type="text" placeholder='Enter your name' />
            </div>
            <div id="email-input">
            <label htmlFor="Email">Email : </label>
            <input type="email" placeholder='Enter your mail' />
            </div>
            <div id="contact-input">
            <label htmlFor="contact">Contact : </label>
            <input type="text" placeholder='Enter your phone number' />
            </div>
            <div id="Position-input">
            <label htmlFor="contact">Position  : </label>
            <input type="text" placeholder='Applicant Position' />
            </div>
            <div id="Dob-input">
            <label htmlFor="contact">Date Of birth : </label>
            <input type="date"/>
            </div>
            {/* <button onClick={HandleAdd}>Add Data</button> */}
        </form>
    </div>
    </>
  )
}

export default Form
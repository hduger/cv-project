import React, { useState } from "react";

const GeneralInfo = () => {

    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault();
        const personalInfo = {address, email, phone}
        // console.log(personalInfo)
        // return personalInfo
    }

    return (
        <div className="container">
            <form className="general-info-form" onSubmit={HandleSubmit}>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" placeholder="123 456 7890" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="JohnDoe@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <div className="personal-info">
                <p className="info-title">Address</p>
                <p className="user-input">{address}</p>
                <p className="info-title">Phone</p>
                <p className="user-input">{phone}</p>
                <p className="info-title">Email</p>
                <p className="user-input">{email}</p>
            </div>
            
            
        </div>
    )
}

const HeaderInfo = (props) => {
    const {phone} = props
    return (
        <h1>{phone}</h1>
        
    )
}

export default GeneralInfo
export {HeaderInfo}
import React from "react";
import './Education.css'
import {COUNTRY} from './Constant'
import { Link } from "react-router-dom";
import { useState } from 'react';


function Education({language,setLanguage}) {

    const [setData,setFormData] = useState({
       education: '' ,
       graduation:'',
       school:'',
       country:''
    })

    const saveData = (event) =>{
        const {name,value}=event.target;

    setFormData (() => ({
        ...setData,
        [name]:value
    }))
    }

    console.log(setData)
    return (
        <>
            <div className="container-2">
                <div className="Education-container">
                    <div className="Education-pg">
                        <h1 className="education-heading">Education</h1>
                        <div className="line"></div>
                    </div>
                    <div className="education-row">
                        <div className="education-field">
                            <h3>High School or Equivalent Name</h3>
                            <input type="text" name="education"  value={setData.education} onChange={saveData} />
                        </div>
                        <div className="Graduation-date">
                            <h3>Graduation Date</h3>
                            <input type="text" name="graduation" value={setData.graduation}  onChange={saveData}/>
                        </div>
                    </div>
                    <div className="education-row2">
                        <div className="School-address">
                            <h3 className="school-address-h3">School Address</h3>
                            <input type="text" name="school" value={saveData.school} onChange={saveData}/>
                            <p>City</p>
                        </div>
                        <div className="country-address">
                            <input type="text"  name="country" value={setData.country} onChange={saveData}/>
                            <p>State/Province</p>
                        </div>
                    </div>
                    <div className="Education-country">
                        <select>
                                <option>Please select a Country</option>
                                {COUNTRY.map((COUNTRY) => (
                                    <option key={COUNTRY} value={COUNTRY}>{COUNTRY}</option>
                                ))}
                            </select>
                    </div>
                <div className='line-1'></div>
                    <div className="education-btn">
                        <Link to="/" className="education-btn1">
                          Back
                        </Link>
                        <Link to="/Application" className="education-btn2">
                          Next
                        </Link>
                    </div>
            </div>
            </div>
        </>
    );
}


export default Education
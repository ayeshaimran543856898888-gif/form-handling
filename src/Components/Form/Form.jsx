import React from 'react'
import './Form.css'
import {MONTHS,DAYS,YEARS,COUNTRY} from './Constant'
import { Link } from "react-router-dom";
import { useState } from 'react';

function Form({language,setLanguage}) {

    const [setData,setFormData] = useState({
        userName: '',
        middleName:'',
        InitialName:'',
        PhoneNmbr:'',
        email:'',
        Mailing:'',
        Mailing2:'',
        city:'',
        state:'',
        postal:'',
        firstName:'',
        Lastname:'',
        Relationship:''
    })

    const saveData = (event) =>{
        const {name,value}=event.target;

    setFormData (() => ({
        ...setData,
        [name]:value
    }))
    }

    console.log(setData);
  

  return (
    <>
    <div className='container'>
     <div className='form-container'>
        <h1 className='form-h1'>College Admissions Form</h1>
        <p className='form-p'>Enter your admission information below</p>
        <div className='line'></div>
        <div className='form-box'>
       <h3 className='form-box-h3'>Name</h3>
       <div className="column1">
        <div className='column-input'>
            <input type='text' name='userName' value={setData.userName} onChange={saveData}/>
            <span>First Name</span>
        </div>
        <div>
            <input type='text' name='middleName' value={setData.middleName}  onChange={saveData}/>
            <span>Middle Initial</span>
        </div>
        <div>
            <input type='text' name='InitialName' value={setData.InitialName} onChange={saveData}/>
            <span>Last Name</span>
        </div>
       </div>
     </div>
     <h3 className='form-box-h3'>Birth Date</h3>
     <div className='column2'>
        <div className='month'>
        <select>
        <option>
            Please Select a month
        </option>
        {MONTHS.map((MONTHS) => (
           <option key={MONTHS}>{MONTHS}</option>
        ))}
        </select> 
        </div>  
        <div className='day'>
            <select>
                <option>Please select a Day</option>
            {
                DAYS.map((DAYS)=> (
                    <option key={DAYS} value={DAYS}>{DAYS}</option>
                ))
            }
            </select>
            </div>
        <div className='year'>
        <select>
        <option>
            Please Select a year
        </option>
        {
            YEARS.map((YEARS) =>(
                <option key={YEARS} >{YEARS}</option>
            ))
        }
        </select> 
        </div>   
        </div>
       <h3 className='form-gender-h3'>Gender</h3>
       <div className='form-gender'>
        <label>
            <input type='radio' name='gender' value='male'/>
            MALE
        </label>
        <label>
            <input type='radio' name='gender' value='Female'/>
            FEMALE
        </label>
        <div className='citizen'>
            <h2 className='citizen-h2'>Of which country are you a citizen?</h2>
            <select>
                <option>Please select a Country</option>
                {
                    COUNTRY.map((COUNTRY) =>(
                        <option key={COUNTRY} value={COUNTRY}>{COUNTRY}</option>
                    ))
                }
            </select>
        </div>
       </div>
       <div className='Contact-container'>
        <div className='contact'>
       <h3 className='contact-h3'>Phone</h3>
        <input type="text" placeholder=' (000) 000-0000' name='PhoneNmbr' value={setData.PhoneNmbr} onChange={saveData}/>
        </div>
        <div className='email'>
            <h3 className='email--h3'>E-mail Address</h3>
         <input type="text" placeholder=' ex: myname@example.com' name='email' value={setData.email} onChange={saveData}/>
         <h4 className='email-h4'>example@example.com</h4>
       </div>
       </div>
       <div className='mailing'>
        <h3 className='mailing-h3'>Mailing Address</h3>
        <input type='text' name='Mailing'  value={setData.Mailing}  onChange={saveData}/>
        <h4 className='mailing-h4'>Street Address</h4>
       </div>
       <div className='mailing2'>
       <input type='text' name='Mailing2' value={setData.Mailing2} onChange={saveData}/>
       <h4 className='mailing2-h4'>Street Address Line 2</h4>
       </div>
       <div className='city-state'>
         <input type='text' name='city' value={setData.city} onChange={saveData}/>
         <input type='text' name='state' value={setData.state} onChange={saveData}/>
       </div>
       <div className='city-state-heading'>
       <h4 className='city-state-h4'>City</h4>
        <h4 className='city-state-h4'>State / Province</h4>
        </div>
        <div className='postal-code'>
            <input type='text' name='postal' value={setData.postal} onChange={saveData}/>
        </div>
        <h4 className='postal-code-h4'>Postal / Zip Code</h4>
            <div className='contact-container'>
            <div className='emergency-contact-heading'>
                <h3>Emergency Contact</h3>
           <div className='name-inputs'>
            <div>
                <input type='text' name='firstName' value={setData.firstName} onChange={saveData} />
                <p>First Name</p>
            </div>
            <div>
                <input type='text' name='Lastname' value={setData.Lastname} onChange={saveData} />
                <p>Last Name</p>
                </div>
            </div>
           </div>
           <div className='contact-relationship'>
            <h3>Relationship</h3>
            <input type='text' name='relationship' value={saveData.Relationship} onChange={saveData}/>
           </div>
           </div>
           <div className='Contact-container1'>
        <div className='email-1'>
            <h3 className='email--h3'>E-mail Address</h3>
         <input type="email" placeholder=' ex: myname@example.com'/>
         <h4 className='email-h4'>example@example.com</h4>
         </div>
         <div className='contact-1'>
       <h3 className='contact-h3'>Phone</h3>
        <input type="text" placeholder=' (000) 000-0000'/>
        <h4 className='email-h4'>Please enter a valid phone number.</h4>
        </div>
       </div>
       <div className='Language'>
          <h3>Do you speak any languages other than English?</h3>
          <div className='form-language'>
            <label>
                <input type='radio' name='language' value="yes" onChange={(e)=> setLanguage(e.target.value)} />
                <h4 className='language-h4'>Yes</h4>
                <input type='radio' name='language' value="no"  onChange={(e) => setLanguage(e.target.value)}/>
                <h4 className='language-h4'>No</h4>
            </label>
          </div>
          {language === "yes" && (
            <div className='other-language'>
                <h3>Please list them</h3>
                <input type='text' />
            </div>
          )}
          <div className='line'></div>
          <Link to="/Education" className="form-Btn">
           Next
          </Link>
       </div>
        </div>
        </div>

    </>
  )
}
export default Form

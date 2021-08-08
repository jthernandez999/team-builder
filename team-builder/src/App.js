import './App.css';
import TeamMember from './components/TeamMember';
import React, { useState, useEffect } from 'react';
import MemberForm from './components/MemberForm';
import axios from './axios'
import styled from 'styled-components'


const Div = styled.div`

max-width: 500px;
margin: 30px auto;
overflow: auto;
min-height: 300px;
padding: 30px;
border: 1px solid steelblue;
background-color: grey;
opacity: 1;
`


const initialFormValues = {
        fname: '', 
        lname: '', 
        role: '', 
        email: '', 
        phoneNumber: ''
}

function App() {
  
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    const newFormValues = {...formValues, [inputName]: inputValue }
    setFormValues(newFormValues)
  }

  const submitForm = () => {
    const newTeamMember = {
      fname: formValues.fname.trim(), 
      lname: formValues.lname.trim(), 
      role: formValues.role,
      email: formValues.email.trim(),
      phoneNumber: formValues.phoneNumber.trim()
    }
    const fnameIsEmpty = !newTeamMember.fname
    const lnameIsEmpty = !newTeamMember.lname
    const roleIsEmpty = !newTeamMember.role === ''
    const emailIsEmpty = !newTeamMember.email
    const phoneNumberIsEmpty = !newTeamMember.phoneNumber
    if (fnameIsEmpty || lnameIsEmpty || roleIsEmpty || emailIsEmpty || phoneNumberIsEmpty) return
    document.querySelector('.add-button').style.display= 'flex';

  axios
    .post('fakeApi.com', newTeamMember)
    .then(res => {
      const newTeamMembers = [...teamMembers, newTeamMember]
      setTeamMembers(newTeamMembers)
    })
    .catch(err => console.log(err))
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    axios.get('fakeapi.com')
    .then(res => {
      console.log(res.data)
      setTeamMembers(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  
  const onClick = () => {
    document.querySelector('.bg-modal').style.display= 'flex';
    document.querySelector('.add-button').style.display= 'none';
  }
  const close = () => {
      document.querySelector('.bg-modal').style.display = 'none';
    
  }

  return (
  <div>
    <Div className="App">

  {
  teamMembers.map(teamMember => {
    return (
      <TeamMember member={teamMember} />
    )
  })
  }
  </Div>


  <div>
  
  </div>
    <div className='bg-modal'>
      <div className='modal-content'>
        <div className='close' onClick={close}>+</div>
      <MemberForm 
  formValues={formValues}
  update={updateForm}
  submit={submitForm}
  close={close}/>
      </div>
      
    </div>
  <button className='add-button' onClick={onClick}>Add Team Member</button>
</div>    
  );
}

export default App;

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
  <MemberForm 
  formValues={formValues}
  update={updateForm}
  submit={submitForm}/>
  </div>
    
</div>    
  );
}

export default App;

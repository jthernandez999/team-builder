import './App.css';
import TeamMember from './components/TeamMember';
import React, { useState, useEffect } from 'react';
import MemberForm from './components/MemberForm';
import axios from './axios'

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
    <div className="App">

      

  {
  teamMembers.map(teamMember => {
    return (
      <TeamMember member={teamMember} />
    )
  })
  }
  <MemberForm 
  formValues={formValues}
  update={updateForm}
  submit={submitForm}
  />

    </div>
  );
}

export default App;

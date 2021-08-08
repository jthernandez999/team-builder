import React from 'react'
import styled from'styled-components'

const Div = styled.div`
border: 1px solid black;
padding: 1px;
margin: 4px;
background-color: lightgrey;
opacity: 1;
`

export default function TeamMember({ member }) {
    

    if (!member) {
        return <h3>Working on fetching your team member&apos;s details...</h3>
    }

    
    return (
        <Div className='teamMember container'>
            <h2>{member.fname} {member.lname}</h2>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
            <p>Phone Number: {member.phoneNumber}</p>
        </Div>
    )
}
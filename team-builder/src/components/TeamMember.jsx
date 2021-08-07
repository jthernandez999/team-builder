import React from 'react'

export default function TeamMember({ member }) {
    

    if (!member) {
        return <h3>Working on fetching your team member&apos;s details...</h3>
    }

    
    return (
        <div className='teamMember container'>
            <h2>{member.fname} {member.lname}</h2>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
            <p>Phone Number: {member.phoneNumber}</p>
        </div>
    )
}
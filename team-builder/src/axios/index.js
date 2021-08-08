import { v4 as uuid } from 'uuid'

const initialTeamList = [
    {
        id: uuid(),
        fname: 'Amber', 
        lname: 'Guerrero', 
        role: 'Front End Developer',
        email: 'amber@amber.com', 
        phoneNumber: '111-111-1111'
    }, 
    {
        id: uuid(),
        fname: 'Valerie', 
        lname: 'Guerrero', 
        role: 'Back End Developer',
        email: 'valerie@goatsmilk.com', 
        phoneNumber: '222-222-2222'
    }
]

export default { 
    get() {
        return Promise.resolve({ status: 200, success: true, data: initialTeamList })
    }, 
    post(url, { fname, lname, role, email, phoneNumber }) {
        const newTeamMember = { id: uuid(), fname, lname, role, email, phoneNumber }
        return Promise.resolve({ status: 200, success: true, data: newTeamMember })
    }
}

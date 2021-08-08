import styled from 'styled-components'

const Div = styled.div`
display: block;
align-items: center;
justify-contents: space-between;
margin: 75px auto;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: #f4f4f4;
    width: 90%;
    cursor: pointer;
    margin: 30px auto;
    opacity: 1;
    
`

export default function MemberForm(props) {

    const { formValues, update, submit, close } = props; 

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        close()
    }

    return(
        <Form className='form container' onSubmit={onSubmit}>
            <Div className='form-group inputs'>
                <label>First Name:
                    <input type='text' value={formValues.fname} name='fname' onChange={onChange} />
                </label>
                <label>Last Name: 
                    <input type='text' value={formValues.lname} name='lname' onChange={onChange} />
                </label>
                <label>Role:
                    <select name='role' value={formValues.role} onChange={onChange}>
                        <option>--Please choose an option--</option>
                        <option>FE Developer</option>
                        <option>BE Developer</option>
                        <option>Full Stack Developer</option>
                    </select>
                </label>
                <label>Email: 
                    <input type='email' name='email' value={formValues.email} onChange={onChange}/>
                </label>Phone Number: 
                <label>
                    <input type='tel' name='phoneNumber' value={formValues.phoneNumber} onChange={onChange} />
                </label>
                
            </Div>
            
            <button className='button'>Submit</button>
        </Form>
    )
}
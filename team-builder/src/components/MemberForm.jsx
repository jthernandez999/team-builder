
export default function MemberForm(props) {

    const { formValues, update, submit } = props; 

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
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
                
            </div>
            
            <button className='button'>Submit</button>
        </form>
    )
}
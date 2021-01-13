import React , { useState , useContext } from 'react';
import { MainFlowContext } from '../MainFlow/MainFlow';
import Button from '../Button/Button';
import '../ContentStyling/ContentStyling.modules.css';

const HealthForm = () => {
    const context = useContext(MainFlowContext);

    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [id,setId] = useState('');
    const [gender,setGender] = useState('');
    const [age,setAge] = useState('');
    const [status,setStatus] = useState('');
    const [membership,setMembership] = useState('');

    const checkFieldsHandler = () => {
        if(name.trim() !== '' && lastName.trim() !== '' && id.trim() !== '' && gender.trim() !=='' && age.trim() !== '' && status.trim() !== '' && membership.trim() !== ''){
            context.setTimeoutExecution('פרטייך נקלטו במערכת, שם משתמש וסיסמא ישלחו לכתובת המייל שלך דרך קופת החולים');
        }
        else {
            alert('עלייך למלא את כל השדות');
        }
    }
    let agesDropBox = [<option value={age}> </option>];
    for(let age = 16 ; age <= 90 ; age ++){
        agesDropBox.push(<option value={age}>{age}</option>);
    }

    agesDropBox = agesDropBox.concat(' ');

    const title=<h1>טופס בריאות</h1>;
    return ( 
        <div className="content health_form_input">
            {title}
            <label for="name">שם פרטי</label>
            <input type="text" id="name" onChange={e =>setName(e.target.value)}/>
            <label for="last-name">שם משפחה</label>
            <input type="text" id="last-name" onChange={e =>setLastName(e.target.value)}/>
            <label for="identifier">תעודת זהות</label>
            <input style={{textAlign:'left'}}type="text" id="identifier" onChange={e =>setId(e.target.value)}/>
            <label for="membership">קופת חולים</label>
            <input type="text" id="membership" onChange={e =>setMembership(e.target.value)}/>
            <div className="custom-select">
                <label for="status">מין</label>
                <select dir="rtl" name="gender" id="status" onChange={e =>setGender(e.target.value)}>
                    <option > </option>
                    <option value="רווק/ה">זכר</option>
                    <option value="נשוי/ה">נקבה</option>
                </select>
            </div>
            <div className="custom-select">
            <label for="age">גיל</label>
                <select dir="rtl" name="age" id="age" onChange={e =>setAge(e.target.value)}>
                    {agesDropBox}
                </select>
            </div>
            <div className="custom-select">
                <label for="status">מצב משפחתי</label>
                <select dir="rtl" name="status" id="status" onChange={e =>setStatus(e.target.value)}>
                    <option > </option>
                    <option value="רווק/ה">רווק/ה</option>
                    <option value="נשוי/ה">נשוי/ה</option>
                    <option value="גרוש/ה">גרוש/ה</option>
                </select>
            </div>
            <Button description="הגש" path="/signup" clicked={checkFieldsHandler}/>
        </div>
    )}

export default HealthForm;
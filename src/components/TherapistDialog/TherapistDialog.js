import React , { useState } from 'react';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';

const TherpistDialog = () => {
    const [therapyChosen,setTherapyChosen] = useState(null);
    
    const setTherapyChosenHandler = (therapyChosen) => {
        setTherapyChosen(therapyChosen);
    }

    const title = <h1>שלום פסיכולוג</h1>;
    const description = 
        <p>
            התקבלה התראה: שעה 12:33<br/>
            מעת משתמש X הרוצה להתחיל בטיפול<br/>
        </p>;
    return (
        <div className='content'>
            {title}
            {description}
            <RadioButton name="therapy-type" description="שיחה טלפונית   " changed={() => setTherapyChosenHandler("/phone-therapy")}/>
            <RadioButton name="therapy-type" description="צ'אט " changed={() => setTherapyChosenHandler("/chat-therapy")}/>
            <Button description="התחל טיפול" path={therapyChosen}/>
        </div>
    )
}

export default TherpistDialog;
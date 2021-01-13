import React from 'react';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';

const LastMonolog = () => {
    const title=<h1>מענה על בקשות</h1>;

    const description = (
    <p>
        <RadioButton name="recieved" description="התקבלה בקשה מלקוח א' להירשם אפליקציה, אנא אשר/דחה בקשה"/> 
        <br/>
        <RadioButton name="recieved" description="התקבלה בקשה מפסיכולוג ב' לעדכן תיק רפואי ללקוח א"/>
        <br/>
        <RadioButton name="recieved" description="התקבלה בקשה מפסיכולוג ג' להירשם לאפליקציה כמטפל"/> 
        <br/>
    </p>
    );

    return (
        <div className="content">
            {title}
            {description}
            <Button description="דחה בקשת הרשמה" path="/" />
            <Button description="אשר בקשת הרשמה" path="/" />
            <Button description="עדכן תיק רפואי" path="/" />
            <Button description="לחזרה לעמוד הראשי" path="/"/>
        </div>
    )

}

export default LastMonolog;
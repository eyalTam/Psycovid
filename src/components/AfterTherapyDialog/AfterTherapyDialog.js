import React , { useContext } from 'react';
import { MainFlowContext } from '../MainFlow/MainFlow';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';

const AfterTherapyDialog = () => {
    const context = useContext(MainFlowContext);

    const alert = "בבקשה בוצעה!";

    const title = <h1>פסיכולוג לאחר טיפול</h1>;
    const description=<p>סיום הטיפול</p>;
    return (
        <div className='content'>
            {title}
            {description}
            <Button description="הנפק תרופות" path="/" clicked={()=> context.setTimeoutExecution(alert)}/>
            <Button description="עדכן תיק רפואי" path="/" clicked={()=> context.setTimeoutExecution(alert)}/>
            <Button description="חזור לעמוד הראשי" path="/"/>
        </div>
    )

}

export default AfterTherapyDialog;
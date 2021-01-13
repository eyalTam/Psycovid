import React , { useEffect , useContext } from 'react';
import { MainFlowContext } from '../MainFlow/MainFlow';
import Button from '../Button/Button';
import '../ContentStyling/ContentStyling.modules.css';

const SignupForm = () => {
const context = useContext(MainFlowContext);

    const alert = "פרטי ההתחברות נשלחו למייל";
    const title = <h1>הרשמה</h1>;
    const firstDescription = 
    <p>
        על מנת לסיים את התהליך, <br/>
    מלא טופס בריאות דיגיטלי
    <Button description="למילוי לחץ כאן" path="/health-form"/>
    אם הנך פסיכולוג - הכנס מספר רישיון 
    </p>;

    const secondDescription = 
    <p style={{margin:'0'}}>לאחר מילוי השלבים, תישלח בקשה<br/>
    לקופת החולים/גוף שירותי הבריאות<br/> 
    אותה ציינת ואישור ישלח אלייך במייל.<br/>
    אם לא קיבלת אישור,<br/>
    פנה אל הגורם הרלוונטי</p>;

    return (
    <div className='content'>
        {title}
        {firstDescription}
        <Button  description="הגשת מועמדות כפסיכולוג" clicked={()=> context.setTimeoutExecution(alert)}/>
        <p>אחרת</p>
        <Button  description="הרשם לבקשת טיפולים" clicked={()=> context.setTimeoutExecution(alert)}/>
        {secondDescription}
    </div>
    )}

export default SignupForm;
import React , { useContext , useState } from 'react';
import { MainFlowContext } from '../MainFlow/MainFlow';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';

const PatientDialog = () => {
    const[listAppearence,setListAppearence] = useState(false);
    const[markedTherapist,setMarkedTherapist] = useState(null);
    const[therapistNotChosenAlert,setTherapistNotChosenAlert] = useState(null);
    
    const context = useContext(MainFlowContext);

    const setMarkedTherapistHandler = (therapist) =>{
        setMarkedTherapist(therapist);
    }

    const setListAppearenceHandler = () => {
        setListAppearence(true);
    }

    const startTherapyHandler = () => {
        if(markedTherapist){
            context.setTimeoutExecution(" נשלחה בקשה לטיפול מאת הפסיכולוג/ית " + markedTherapist);
        }
        else{
            const notChosenAlert = <p style={{color:"red"}}>יש לבחור פסיכולוג/ית על מנת להתחיל בטיפול</p>
            setTherapistNotChosenAlert(notChosenAlert);
            return;
        }
    }


    const gridItem = "grid_item";
    const markedTherapistItem = gridItem.concat(' marked_therapist_style');
    const title=<h1>שלום מטופל</h1>;
    let therapistList = null;
    if(listAppearence){
    therapistList=(
        <div>
            <div className="grid_container">
                <div className="grid_item grid_title">תחום</div>
                <div className="grid_item grid_title">שם פסיכולוג</div>
                <div className={markedTherapist === "שירז" ? markedTherapistItem : gridItem}>זוגיות</div>
                <div className={markedTherapist === "שירז" ? markedTherapistItem : gridItem} onClick={()=>setMarkedTherapistHandler("שירז")}>שירז</div>
                <div className={markedTherapist === "דני" ? markedTherapistItem : gridItem}>משפחה</div>
                <div className={markedTherapist === "דני" ? markedTherapistItem : gridItem} onClick={()=>setMarkedTherapistHandler("דני")}>דני</div>
                <div className={markedTherapist === "יורם" ? markedTherapistItem : gridItem}>עסקים</div>
                <div className={markedTherapist === "יורם" ? markedTherapistItem : gridItem} onClick={()=>setMarkedTherapistHandler("יורם")}>יורם</div>
                <div className={markedTherapist === "שני" ? markedTherapistItem : gridItem}>עסקים</div>
                <div className={markedTherapist === "שני" ? markedTherapistItem : gridItem} onClick={()=>setMarkedTherapistHandler("שני")}>שני</div>
            </div>
            <Button description="בחר מטפל" path="/" clicked={startTherapyHandler}/>
            {therapistNotChosenAlert}
        </div>
    );
    }
    return (
        <div className='content'>
            {title}
            <Button description='חפש מטפל' clicked={setListAppearenceHandler}/>
            {therapistList}
        </div>
    )}

export default PatientDialog;
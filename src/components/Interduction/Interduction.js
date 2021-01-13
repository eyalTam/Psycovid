import React from 'react';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';

const Interduction = () => {
    const title = <h1>Psycovid</h1>;
    const description = <p>
        ,שלום<br/>
        כאן תוכל לקבל טיפול פסיכולוגי<br/>
        בקלות ובמהירות או לתת שירות<br/>
        פסיכולוגי במערכת.<br/>
        כל שעליך לעשות הוא להירשם<br/>
        ולקבל אישור מקופת החולים או<br/>
        גוף שירותי בריאות ציבורי אליו אתה שייך</p>;
        
    return (
    <div className='content'>
        {title}
        {description}
        <Button description={'הרשם'} path="/signup"/>
        <Button description={'התחבר'} path="/auth-form"/>
    </div>
    );

}

export default Interduction;
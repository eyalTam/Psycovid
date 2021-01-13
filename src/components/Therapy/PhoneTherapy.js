import React from 'react';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';

const PhoneTherapy = () => {
    const title= <h1>פסיכולוג בטיפול</h1>;
    const description = <p>בשיחה טלפונית עם<br/> +9725326789</p>;

    return (
        <div className="content">
            {title}
            {description}
            <Button description="סיים טיפול" path="/after-therapy-dialog"/>
        </div>
    )
}

export default PhoneTherapy;
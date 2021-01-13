import React from 'react';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';

const ChatTherapy = () => {
    const title=<h1>פסיכולוג בטיפול</h1>;
    return (
        <div className="content ">
            {title}
            <div className="chat_therapy_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3wlfsZYiyLHxJXcYS1Cx41Kw24L6HeRaPg&usqp=CAU" alt="long-chat" style={{height:'22rem',width:'18rem'}} border="0"/>
                {/* <img src="https://ibb.co/jgkQbVw"  id="chat_img" alt=""/> */}
            </div>
            <Button description="סיים טיפול" path="/after-therapy-dialog"/>
        </div>
    )
}

export default ChatTherapy;
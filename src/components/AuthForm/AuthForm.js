import React , { useState , useContext } from 'react';
import { MainFlowContext } from '../MainFlow/MainFlow';
import '../ContentStyling/ContentStyling.modules.css';
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';


const AuthForm = () => {
    const context = useContext(MainFlowContext);
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [loginError,setLoginError] = useState(null);
    const[path,setPath] = useState('');

    const setPathHandler = (path) => {
        if(path){
            setPath(path);
        }
    }

    const setLoginHandler = () => {
        if(userName.trim() === '' || password.trim() === '')
        {
            const errorMessage = <p style={{color:'red'}}>יש להכניס שם משתמש וסיסמא תקינים</p>;
            setLoginError(errorMessage);
        }
        else {
            context.clicked(path);
        }
    }

    const setUserNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const setUserPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const title = <h1>התחברות</h1>;
    return (
        <div className="content">
            {title}
            <label for="uname">שם משתמש</label>
            <input type="userName" id="uname" value={userName} onChange={setUserNameHandler}/>
            <label for="pswd">סיסמא</label>
            <input type="password" id="pswd" value={password} onChange={setUserPasswordHandler}/>
            <RadioButton description="פסיכולוג   " name="authForm" changed={()=>setPathHandler("/therapist-dialog")}/>
            <RadioButton description="מטופל " name="authForm" changed={()=>setPathHandler("/patient-dialog")}/>
            <RadioButton description="פקיד   " name="authForm" changed={()=>setPathHandler("/official")}/>
            <Button description="התחבר" path={path} clicked={setLoginHandler}/>
            <p>שכחתי סיסמא</p>
            {loginError}
        </div>
    )
}

export default AuthForm;
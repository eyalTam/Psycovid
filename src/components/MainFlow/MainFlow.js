import React from 'react';
import { Route , Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ScreenTemplate from '../ScreenTemplate/ScreenTemplate';
import Interduction from '../Interduction/Interduction';
import ScreenFooter from '../ScreenFooter/ScreenFooter';
import SignupForm from '../SignupForm/SignupForm';
import AuthForm from '../AuthForm/AuthForm';
import HealthForm from '../HealthForm/HealthForm';
import PatientDialog from '../PatientDialog/PatientDialog';
import TherapistDialog from '../TherapistDialog/TherapistDialog';
import ChatTherapy from '../Therapy/ChatTherapy';
import PhoneTherapy from '../Therapy/PhoneTherapy';
import AfteTherapyDialog from '../AfterTherapyDialog/AfterTherapyDialog';
import Official from '../Official/Official';

export const MainFlowContext = React.createContext();

const MainFlow = () => {

    const setTimeoutHandler = (alertMessage) =>setTimeout(()=>{
        alert(alertMessage);
        setNavigationHandler('/');
            }, 3000);
    
    const history = useHistory();
    const setNavigationHandler = path => {
        if(path){
        history.push(path);
        }
    }

    return (
            <MainFlowContext.Provider value={{clicked:setNavigationHandler,setTimeoutExecution:setTimeoutHandler}}>
                <ScreenTemplate>
                    <Switch>
                        <Route path="/signup" component={SignupForm} />
                        <Route path="/auth-form" component={AuthForm} />
                        <Route path="/health-form" component={HealthForm} />
                        <Route path="/patient-dialog" component={PatientDialog} />
                        <Route path="/therapist-dialog" component={TherapistDialog} />
                        <Route path="/chat-therapy" component={ChatTherapy} />
                        <Route path="/phone-therapy" component={PhoneTherapy} />
                        <Route path="/after-therapy-dialog" component={AfteTherapyDialog} />
                        <Route path="/official" component={Official} />
                        <Route path="/" component={Interduction} />
                    </Switch>
                    <ScreenFooter/>
                </ScreenTemplate>
            </MainFlowContext.Provider>
    )}

export default MainFlow;
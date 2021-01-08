import './settings.css';
import MetricDisplayList from './components/metricDisplayList';
import LoginPanel from './components/loginPanel';
import Cookies from 'js-cookie';

function Settings() {
    let session = Cookies.get('PHPSESSID');
    let element = session != null && session ? <MetricDisplayList /> : <LoginPanel />;
    console.log("The value of cookie is:" + Cookies.get('PHPSESSID'))
    
    return (
        <div id="settingsContainer">
            {element}
        </div>
    );
}

export default Settings;
import { AuthContext } from "../../context/AuthContext";

//child component imports
import  "./Username";
import "./Password";
import LoginBtn from "./LBtn";
import LoginTitle from "./LTitle";
import Footer from "../Footer/Footer";
import {useContext, useState} from "react";
import {displayUnderscore} from "../../utils/homeUtil";
import {useNavigate} from "react-router-dom";
import {ERROR_MSGS, handleValue} from "../../utils/loginUtil";
import {submitLogin} from "../../services/userService";

const Login = (props) => {
    const { logInUser } = useContext(AuthContext);

    const [underscore, setUnderscore] = useState(false);
    displayUnderscore(underscore, setUnderscore);
    let title = underscore ? "Login_" : "Login";

    //field state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //error state
    const [userErr, showUserErr] = useState(false);
    const [passErr, showPassErr] = useState(false);

    const navigate = useNavigate();
    return (
        <>
            {" "}
            <div className="loginContainer">
                <LoginTitle title={title} />
                <div className="loginFormDiv">
                    <form>
                        {userErr ? ERROR_MSGS.username : <></>}
                        <Username
                            username={username}
                            handleValue={(e) => handleValue(e, setUsername)}
                        />
                        <br></br>

                        {passErr ? ERROR_MSGS.password : <></>}
                        <Password
                            password={password}
                            handleValue={(e) => handleValue(e, setPassword)}
                        />
                        <br></br>
                        <LoginBtn
                            submitLogin={(e) => {
                                submitLogin(
                                    e,
                                    username,
                                    password,
                                    navigate,
                                    showPassErr,
                                    showUserErr,
                                    logInUser
                                );
                            }}
                        />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Login;

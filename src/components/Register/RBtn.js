import { Link } from "react-router-dom";

import "./RBtn.css";

const RBtn = (props) => {
    return (
        <div>
            <button
                type="submit"
                className="submitBtn"
                onClick={props.submitRegister}
            >
                Register
            </button>
            <p className="logRedirect">
                Already registered? Log in{" "}
                <Link className="logLink" to={"/login"}>
                    {" "}
                    here
                </Link>
                .
            </p>
        </div>
    );
};

export default RBtn;

import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

const mapDispatchToProps = {
    //thunkCreators
    login,
};

export default connect(null, mapDispatchToProps)(Login);
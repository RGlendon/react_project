import Login from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
    }
}

const mapDispatchToProps = {
    //thunkCreators
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
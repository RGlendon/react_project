import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, logout} from "../../redux/authReducer";


class HeaderAPI extends React.Component {
    componentDidMount() {
        this.props.getAuthData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.auth.isLogin,
        login: state.auth.login
    };
}

const mapDispatchToProps = {
    // thunkCreators
    getAuthData,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);
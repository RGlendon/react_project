import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthInfo} from "../../redux/authReducer";


class HeaderAPI extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    this.props.setAuthInfo(resp.data.data);
                }
            })
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
    setAuthInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);
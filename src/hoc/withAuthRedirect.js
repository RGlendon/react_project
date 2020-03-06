import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
//можно использовать классовую компоненту, в данном случае решил исп. функцию
//     function RedirectComponent (props) {
//         if (!props.isLogin) return <Redirect to='/login' />
//         return <Component {...props}/>
//     }

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogin) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({
        isLogin: state.auth.isLogin,
    });

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent;
}
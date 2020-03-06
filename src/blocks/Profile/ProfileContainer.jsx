import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getProfile(userId)
    }

    render() {
        return <Profile userProfile={this.props.userProfile}/>
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.profilePage.userProfile,
    }
}

const mapDispatchToProps = {
    //thunkCreators
    getProfile
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPI);



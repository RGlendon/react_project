import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(resp => {
                this.props.setUserProfile(resp.data);
            })
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
    setUserProfile,
}

const ProfileURL = withRouter(ProfileAPI);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileURL);



import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserProfile, getUserStatus} from "../../redux/selectors/profileSelectors";


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authorizedId || this.props.history.push('/login');
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile userProfile={this.props.userProfile}
                        status={this.props.status}
                        getStatus={this.props.getStatus}
                        updateStatus={this.props.updateStatus}/>
    }
}

function mapStateToProps(state) {
    return {
        userProfile: getUserProfile(state),
        status: getUserStatus(state),

        authorizedId: state.auth.id,
    }
}

const mapDispatchToProps = {
    //thunkCreators
    getProfile,
    getStatus,
    updateStatus,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect
)(ProfileAPI);



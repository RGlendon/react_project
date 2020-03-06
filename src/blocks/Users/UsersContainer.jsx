import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    unfollowThunkCreator
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    //при исп стрелочной функции контекст не теряется. Вызываем в onClick, поидее надо bind использовать
    setCurrentPage = (p) => {
        this.props.setCurrentPage(p);
        //реакт не успеет поменять currentPage, axios запрос выполнит первее, поэтому указываем здесь актуальную страницу
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      setCurrentPage={this.setCurrentPage}
                      isLoading={this.props.isLoading}
                      disabled={this.props.disabled}
                      unfollowThunkCreator={this.props.unfollowThunkCreator}
                      followThunkCreator={this.props.followThunkCreator}/>
    }
}


function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isLoading: state.usersPage.isLoading,
        disabled: state.usersPage.disabled,
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         followToggle: (userID) => {
//             dispatch(followToggle(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setPreloader: (isLoading) => {
//             dispatch(setPreloaderAC(isLoading));
//         }
//     }
// }

//лайфхак с Dispatch'ем: можно переименовать ActionCreator'ы и сократить код, connect сам задиспатчит AC и вернет пропсы с такими же названиями
let mapDispatchToProps = {
    setCurrentPage,

    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);



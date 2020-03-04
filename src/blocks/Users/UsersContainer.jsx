import {connect} from "react-redux";
import {
    followToggle, makeDisable,
    setCurrentPage,
    setPreloader,
    setTotalCount,
    setUsers
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../api/usersAPI";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(resp => {
                // console.log(resp);
                this.props.setPreloader(false);
                this.props.setUsers(resp.data.items);
                this.props.setTotalCount(resp.data.totalCount);
            })
    }

    //при исп стрелочной функции контекст не теряется. Вызываем в onClick, поидее надо bind использовать
    setCurrentPage = (p) => {
        this.props.setPreloader(true);
        this.props.setCurrentPage(p);
        //реакт не успеет поменять currentPage, axios запрос выполнит первее, поэтому указываем здесь актуальную страницу
        usersAPI.getUsers(p, this.props.pageSize)
            .then(resp => {
                // console.log(resp);
                this.props.setPreloader(false);
                this.props.setUsers(resp.data.items);
                this.props.setTotalCount(resp.data.totalCount);
            })
    }

    render() {
        //можно использовать оператор расширения, для передачи всех пропрос в компоненту (в данном случае это не оч варик)
        // return <Users {...this.props} setCurrentPage={this.setCurrentPage}/>
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      followToggle={this.props.followToggle}
                      setCurrentPage={this.setCurrentPage}
                      isLoading={this.props.isLoading}
                      makeDisable={this.props.makeDisable}
                      disabled={this.props.disabled}/>
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
    followToggle,
    setUsers,
    setTotalCount,
    setCurrentPage,
    setPreloader,
    makeDisable
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);



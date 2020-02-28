import {connect} from "react-redux";
import {
    followToggle,
    setCurrentPage,
    setPreloader,
    setTotalCount,
    setUsers
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resp => {
                // console.log(resp);
                this.props.setPreloader(false);
                this.props.setUsers(resp.data.items);
                this.props.setTotalCount(resp.data.totalCount);
            })
    }

    //почему-то при исп стрелочной функции контекст не теряется. Вызываем в onClick, поидее надо bind использовать
    setCurrentPage = (p) => {
        this.props.setPreloader(true);
        this.props.setCurrentPage(p);
        //реакт не успеет поменять currentPage, axios запрос выполнит первее, поэтому указываем здесь актуальную страницу
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(resp => {
                // console.log(resp);
                this.props.setPreloader(false);
                this.props.setUsers(resp.data.items);
                this.props.setTotalCount(resp.data.totalCount);
            })
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      followToggle={this.props.followToggle}
                      setCurrentPage={this.setCurrentPage}
                      isLoading={this.props.isLoading}/>
    }
}


function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isLoading: state.usersPage.isLoading,
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
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);



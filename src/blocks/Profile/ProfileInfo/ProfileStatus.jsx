import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        // debugger
        //в старых версиях react в стрелочной функции this = undefined, нужно обьявлять метод стандартным способом и bind'ить его
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        // debugger
        this.props.updateStatus(this.state.status);
    };

    updateNewStatus = (event) => {
        this.setState({
            status: event.currentTarget.value,
        });
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}
                        onChange={this.updateNewStatus}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
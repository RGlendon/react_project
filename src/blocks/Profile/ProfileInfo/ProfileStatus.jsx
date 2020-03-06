import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    editModeToggle() {
        // debugger
        this.setState({
            editMode: !this.state.editMode,
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.editModeToggle.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" autoFocus={true} onBlur={this.editModeToggle.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
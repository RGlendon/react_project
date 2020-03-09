import React, {useState} from 'react';


const ProfileStatusHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const updateNewStatus = (event) => {
        setStatus(event.currentTarget.value);
    };

    // componentDidUpdate(prevProps, prevState)
    // {
    //     // debugger;
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status,
    //         });
    //     }
    // }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input type="text" autoFocus={true} onBlur={deactivateEditMode} value={status}
                       onChange={updateNewStatus}/>
            </div>
            }
        </div>
    );

}

export default ProfileStatusHook;
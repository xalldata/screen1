import React, {useEffect, useState} from 'react';

function EdittionPage({ users, setUsers, handleEditPage, name}) {
    console.log(name)
    const dateLastSeen = new Date().toLocaleString();
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [role, setRole] = useState(null);

    const addUser = (e) => {
        e.preventDefault()
        setUsers(oldArray => [...oldArray, {identifier: userName, role : role,
            lastSeen: dateLastSeen
        }]);
        console.log(users)
    }

    return <div>
        <h1>User Properties</h1>
        <form action="">
            <div>
                <label htmlFor="">Identifier</label>
                <input type="text"
                value={name}
                onChange={e => setUserName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                 <input type="text"value={password}
                onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Confirm password</label>
                <input type="text" value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <label for="role">Role</label>

            <select name="name" id="roles">
            <option value="super admin">super admin</option>
            <option value="admin">admin</option>
            <option value="Data scientist">Data scientist</option>
            </select>
            <p>Last seen</p>
            <p>{dateLastSeen} </p>
            <button onClick={addUser}>Save</button>
            <button>Cancel</button>
        </form>
  </div>;
}

export default EdittionPage;

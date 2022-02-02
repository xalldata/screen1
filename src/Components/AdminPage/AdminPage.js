import React, { useEffect, useState } from 'react';
import './AdminPage.css'
import Nav from '../Nav/Nav';
import NewUser from '../NewUser/NewUser'
import EdittionPage from '../EdittionPage/EdittionPage';

function AdminPage() {
    const [users, setUsers] = useState(null);
    const [newUser, setNewUser] = useState(null)
    const [editPage, setEditPage] = useState(null)

    const [name, setName] = useState(null)

    const handleNewUser = () => {
        setNewUser(prevState => "newUser")
    }

    const handleEditPage = (id, identifier, role, lastSeen) => {
        setEditPage(prevState => "editPage")
        console.log("id" + id, identifier, role, lastSeen)
        setName(identifier)
    }

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUsers(data)
        })
    }, [])

    var page;
    if (newUser === "newUser") {
        page = <NewUser users={users} setUsers={setUsers} />  
    } else if (editPage === "editPage") {
        page = <EdittionPage  name = {name} />
    } else {
        page = <div>
                <Nav />
                <table id="customers">
                    <tr>
                        <th>Identifier</th>
                        <th>Role</th>
                        <th>Last seen</th>
                        <th><button onClick={handleNewUser}>+</button></th>
                    </tr>   
                    {
                    users && users.map((user) => (
                        <tr>
                        <th>{user.identifier} </th>
                        <th>{user.role} </th>
                            <th>{user.lastSeen} </th>
                            <th><button onClick={() => handleEditPage(user.id, user.identifier, user.role, user.lastSeen)}>Edit</button></th>
                            <th><button>Delete</button></th>
                    </tr>  
                    )) 
                }
                </table>
            </div>
    }

    return <div>
        {page}
        
  </div>;
}

export default AdminPage;

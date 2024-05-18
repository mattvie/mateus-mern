import UserInfo from './UserInfo'
import { useEffect, useState } from 'react';

export default function GetPageContent() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://mern-methods-server.vercel.app/get')
            .then(response => {
                response.json().then(users => {
                    console.log(users);
                    setUsers(users);
                });;
            })
    }, []);

    return (
        <>
            {users.length > 0 && users.map(user => (
                <UserInfo {...user} />
            )
            )}
        </>
    );
}
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/userSlice';

export default function UserList() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    
  return (
    <div>
        <h2>List of users</h2>
        {user.loading && <div> Loading ... </div> }
        {!user.loading && user.error ? <div> Error :{user.error} </div> : null}
        {
            !user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map(user => (
                            <li key={user.id}>
                                {user.name}
                            </li>
                        ))
                    }
                </ul>
            ) : null
        }
    </div>
  )
}

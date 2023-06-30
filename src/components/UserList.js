import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from "react-redux";

import { addUser, deleteUser, editUser } from '../redux/User';
import { chnageColor } from '../redux/ThemeColor';

const UserList = () => {
    const dispatch = useDispatch()

    const listUser = useSelector((state) => state.users.value)
    const theme = useSelector((state) => state.theme.color)

   


    

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const [editMode, setEditMode] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert("name field must be complete")
            return
        }

        if (!username) {
            alert("user name field must be complete")
            return
        }


        if (editMode) {
            dispatch(editUser({ id: editMode.id, name: name, username: username }))
            setName("")
            setUsername("")
            setEditMode(null)
        } else {
            // addUser is action (action creator)
            const newUSer = { id: Number(new Date()), name, username }
            dispatch(addUser(newUSer))
            setName("")
            setUsername("")
        }

    }


    const [color, setColor] = useState("")

    useEffect(() => {
        dispatch(chnageColor({ color: color }))
    }, [color])



    const handleEdit = (item) => {
        setEditMode(item)
    }

    useEffect(() => {
        setName(editMode?.name || "")
        setUsername(editMode?.username || "")
    }, [editMode])


    
    const handleDelete = (item)=>{
        dispatch(deleteUser({ id: item.id }))
        if(item.id === editMode?.id){
            setEditMode(null)
        }
    }

    return (
        <>                                                                      
            <div style={{ backgroundColor: theme.color }} className='container'>
                <div className='changeTheme'>
                    <p>Change backgroudn color : </p>
                    <select value={color} onChange={(e) => setColor(e.target.value)}>

                        <option value={'white'}>white</option>
                        <option value={'red'}>red</option>
                        <option value={'blue'}>blue</option>
                        <option value={'pink'}>pink</option>
                        <option value={'green'}>green</option>
                    </select>
                </div>

                <div className='content'>

                    <div className='user-box-input'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <label>Name</label>
                                <input 
                                type='text' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='name' 
                                />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='name' />
                            </div>
                            <div>
                                {editMode ? <button type='submit'>update </button> : <button type='submit'>create </button>}
                            </div>
                        </form>
                    </div>

                    <div className='user-container'>
                        {listUser.map((item, index) => (
                            <div className='user-content' key={item.id}>
                                <div className='item'>
                                    <p>{item.id}</p>
                                    <p>Name : {item.name}</p>
                                    <p>UserName : {item.username}</p>
                                </div>

                                <div className='buttons'>
                                    <button onClick={() => handleDelete(item)}>delete</button>
                                    <button onClick={() => handleEdit(item)}>edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList

import React , {useEffect , useState} from 'react';
import { useDispatch , useSelector } from 'react-redux';

import { getData } from '../redux/fetche';

const DataCall = () => {


    const {posts} = useSelector(state => state)
    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
      }, [])

  return (
    <div>
        <h2>Data call api - redux toolkit</h2>
        <div>
            {posts.data.length === 0 ? <div>Loading ...</div> : posts.data.map((item , index)=>(
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DataCall
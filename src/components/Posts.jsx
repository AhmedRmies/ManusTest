import {useEffect, useState} from 'react'

const Posts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
    }
    ,[])
  return (
    <div>
        {data.map((post) =>
        
        <div className='flex flex-col justify-center items-center border-1 p-2 m-3 w-48'>
            <h1>{post.title}</h1>
            <hr className='w-full' />
            <p>{post.body}</p>
            </div>
          
        )}
    </div>
  )
}

export default Posts
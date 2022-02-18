import { tab } from '@testing-library/user-event/dist/tab'
import { useState, useEffect } from 'react'

const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    console.log(type)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {setPosts(posts)})
    },[type])
    return(
        <div>
            <div>
                {tabs.map((tab,index) =>{
                    return <button key={index} 
                                    style={ type === tab ? {
                                        color: '#fff',
                                        backgroundColor: '#333'
                                    } : {} }
                                    onClick={()=>setType(tab)}>
                            {tab}</button>
            } )}
            </div>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Content
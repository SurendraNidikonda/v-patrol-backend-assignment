import React, {useState} from 'react'

const Index = () => {
    const inilizeArray = [
        {
            name:'Surendra',
            lastName : 'Nidikonda',
            age : 25,
            id : 1
        },
        {
            name:'Suresh',
            lastName : 'Lankapalli',
            age : 25,
            id : 2
        },
        {
            name:'Khaleel',
            lastName : 'Basha',
            age : 25,
            id : 3
        }
    
    ]
    const [data,setData] = useState(inilizeArray)
    console.log(setData)

    const clickOn = (id) => {
        console.log(id)
    }
    
    return (
        <>
        <ul>
            {data.map(eachItem => {
                const {name,lastName,age,id} = eachItem
                return (
                    <li>
                        <div>Name : {name}</div>
                        <div>lastName: {lastName}</div>
                        <div>Age : {age}</div>
                        <button onClick={() => clickOn(id)}>click</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Index
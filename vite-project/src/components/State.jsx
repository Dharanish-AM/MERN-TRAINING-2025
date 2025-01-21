import React from 'react'

export default function State() {

    const [name, setName] = React.useState('Ram');
    const [age, setAge] = React.useState(25);
    return (
        <div style={{
            display: 'flex',
            width: "100vw",
            height: "100vh",
        }}>
            {
                name === 'Ram' ? <h1>Hi, {name}</h1> : <h1>Hi, Guest</h1>
            }
        </div>
    )
}

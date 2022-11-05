import React from 'react'

export default function Ex21() {
    const [name] = React.useState("Adam")
    const [age] = React.useState(35)
  return (
    <>
        <h1 style={{color: "red"}}>Ex2.1</h1>
        <p>My name is {name}</p>
        <p>My age is {age}</p>
    </>
  )
}

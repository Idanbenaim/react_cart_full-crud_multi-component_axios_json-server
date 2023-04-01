import React, { useState, useEffect } from 'react'

const TotalItems = (props) => {
    console.table(props.cart)
    const [Total, setTotal] = useState(0)
    useEffect(() => {
        let temp = 0
        console.log("Total Items Updated")
        props.cart.forEach(element => {
            temp += element.qty
        });
        setTotal(temp)
    }, [props.updCart])
    // setTotal(!updCart)
    
  return (
    <div style={{backgroundColor:"blue"}}>Total Items - {Total}</div>
  )
}

export default TotalItems
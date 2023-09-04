import React from "react"

const Total = ({course}) => {
    
    const exercises_num = course.parts.reduce((acc, part) => acc + part.exercises , 0 )
    
    return <p style={{ fontWeight: 'bold' }} >Total of {exercises_num} exercises</p>
    
}

export default Total;
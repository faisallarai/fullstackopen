import React from 'react'
import Course from './Course';

const Courses = ({courses}) => {
    const courseList = () => courses.map(course => <Course key={course.id} id={course.id} name={course.name} parts={course.parts} />) 
    return(
      <ul>
        {courseList()}
      </ul>
    )
  }

export default Courses
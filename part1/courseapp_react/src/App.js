import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';

const App = ({courses}) => {

  return(
    <div>
      <div>
        <Header title={'Become a full stack engineer'} />
        <Courses courses={courses} />
      </div>
    </div>
  )
}
export default App;

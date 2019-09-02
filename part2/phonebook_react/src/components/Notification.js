import React from 'react'

const Notification = ({messages}) => {

    const errorStyle = {
      color: 'red',
      fontSize: '20px',
      background: 'lightgrey',
      borderRadius: '5px',
      borderStyle: 'solid',
      padding: '10px',
      marginBottom: '10px'
    }

    const successStyle = {
      color: 'green',
      fontSize: '20px',
      background: 'lightgrey',
      borderRadius: '10px',
      borderStyle: 'solid',
      padding: '10px',
      marginBottom: '10px'
    }
  
    if(messages.length === 0 ){
      return []
    }
  
    const newMessages = () => {
      return messages.map((message, index) => {
        console.log(message)
        if(message.success !== ''){
          return(
            <div key={index} style={successStyle}>
              <div className='success'>{message.success}</div>
            </div>
          )
        }
        if(message.error !== ''){
          return(
            <div key={index} style={errorStyle}>
              <div className='error'>{message.error}</div>
            </div>
          )
        }
      })
    }
  
    return(
      <div>
        {newMessages()}
      </div>
    )
  
  }

export default Notification
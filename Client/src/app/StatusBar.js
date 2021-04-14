import React from 'react'

export default function StatusBar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '30vw',
        borderRight: '1px solid black',
        paddingRight: '50px',
      }}
    >
      <h1>Status Bar</h1>
      <div>
        <p> to Water</p>
        <h5
          style={{
            backgroundColor: '#f765a3',
            color: 'white',
            fontSize: '19px',
            padding: '23px',
            margin: '15px 0',
            width:"170px"
          }}
        >
          Water
        </h5>
      </div>
      <div>
        <p>10 secs long - click to stop</p>
        <h5
          style={{
            backgroundColor: '#a155b9',
            color: 'white',
            fontSize: '19px',
            padding: '23px',
            margin: '15px 0',
            width:"170px"
          }}
        >
          Watering
        </h5>
      </div>
      <div>
        <p>can't water again for 30 secs</p>

        <h5
          style={{
            backgroundColor: '#165baa',
            color: 'white',
            fontSize: '19px',
            padding: '23px',
            margin: '15px 0',
            width:"170px"
          }}
        >
          Just Watered
        </h5>
      </div>
      <div>
        <p>haven't been watered for at least 6hrs</p>{' '}
        <h5
          style={{
            backgroundColor: '#ff3403',
            color: 'white',
            fontSize: '19px',
            padding: '23px',
            margin: '15px 0',
            width:"170px"
          }}
        >
          Must Water
        </h5>
      </div>
    </div>
  )
}

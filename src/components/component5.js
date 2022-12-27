import React from 'react'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <h1 className="component5-text">
        <span>
          Somos la única
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component5-text2">
          empresa de alertamiento sísmico privado
        </span>
        <span>
          {' '}
          que cuenta con la base legal para operar, según la Suprema Corte de
          Justicia de la Nación (SCJN)
        </span>
      </h1>
    </div>
  )
}

export default Component5

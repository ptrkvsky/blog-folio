import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Fonction = styled('h2')`
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: -3px;
  mix-blend-mode: difference;
  color: white;
  transform: translateX(-100%);
  margin-top: 100px;

  &.smaller {
    font-size: 22px;
    letter-spacing: -1px;
  }
`

const SectionPresentation = () => {
  return (
    <div className="section section1" data-anchor="presentation">
      <div id="blockPresentation" className="block-presentation">
        <h1 id="mainTitle" className="main-title">
          <span className="item">Johan</span>
          <span className="item">Petri</span>
          <span className="item">Kovsky</span>
        </h1>

        <div className="relative wrap-fonction">
          <Fonction id="fonction">
            Creative front-end
            <br />
            web developer
          </Fonction>
        </div>
      </div>

      <div id="blockMoon" className="block-moon">
        <div className="half" />
        <div className="wrap">
          <div id="wrapLogo" className="wrap-logo">
            <div id="moon" className="moon" />
          </div>
          <div id="wrapMoon" className="wrap-moon">
            <div id="mainLogo" className="main-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionPresentation

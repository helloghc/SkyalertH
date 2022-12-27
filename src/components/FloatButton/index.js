import React from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../context';
import { Anchor, ButtonWhatsapp, ButtonInfo } from './styles';

const FloatButton = ({sticked, type}) =>
    type === 'whatsapp' ?
    <Anchor rel="noopener noreferrer" href="https://wa.me/525579020029?text=Quisiera%20saber%20m%C3%A1s%20sobre%20SkyAlert%20" target="_blank" className="eride">
        <ButtonWhatsapp sticked={sticked}>
            <i className="fa fa-laptop my-float "></i>
            Soporte técnico
        </ButtonWhatsapp>
    </Anchor>
    :
    <ModalContext.Consumer>
    {({toogleOpen}) => (
      <ButtonInfo sticked={sticked} className="float_cotiza eride" onClick={toogleOpen}>
         <i className="fa-solid fa-house-laptop my-float"></i>
          Cotiza SkyAlert
      </ButtonInfo>
    )}
  </ModalContext.Consumer>;

FloatButton.propTypes = {
    type: PropTypes.oneOf(['whatsapp', 'info']).isRequired,
    sticked: PropTypes.bool,
}

FloatButton.defaultProps = {
    sticked: false,
}

export default FloatButton;

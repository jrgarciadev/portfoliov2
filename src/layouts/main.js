import PropTypes from 'prop-types';
import { MainContainer } from './styles';

const Main = ({ children, className }) => (
  <MainContainer id="main-container" className={className}>
    {children}
  </MainContainer>
);

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Main;

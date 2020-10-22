import PropTypes from 'prop-types';
import { MainContainer } from './styles';

const Main = ({ children }) => <MainContainer id="main-container">{children}</MainContainer>;

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Main;

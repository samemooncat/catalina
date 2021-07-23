import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../screens/home';
import About from '../screens/about';
import Experience from '../screens/experience';
import Creations from '../screens/creations';
import NotFound from '../screens/404';
import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 180px;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 50px;
    bottom: 50px;
    justify-content: center;
    text-align: right;
`;

const MenuItem = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  margin: 5px 0;
  font-size: 15px;
  color: #212121;

  &:hover {
    color: #fdeff9;
    text-shadow:2px 2px 10px#ec38bc;
  }
`;


const RootComponent = () => {
    return (
        <Router>
            <MenuContainer>
                <MenuItem to="/">/home</MenuItem>
                <MenuItem to="/about">/about</MenuItem>
                <MenuItem to="/creations">/creations</MenuItem>
                <MenuItem to="/experience">/experience</MenuItem>
            </MenuContainer>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/creations" exact component={Creations} />
                <Route path="/experience" exact component={Experience} />
                <Route path="/not-found" exact component={NotFound} />
            </Switch>
        </Router>
    )
}

export default RootComponent;
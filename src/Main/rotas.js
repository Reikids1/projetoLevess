import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from '../componentes/Home/index.jsx';
import Loja from '../componentes/Loja/index.jsx';

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/loja' component={Loja} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;




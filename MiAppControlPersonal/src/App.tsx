import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

/* Importando los estilos CSS de Ionic */
import './theme/variables.css';
import './theme/global.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} />
        <Route exact path="/" render={() => <Home />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

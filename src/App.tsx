import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import Home from '@/pages/Home';
import '@/theme/ionic.scss';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactHashRouter>
            <IonRouterOutlet>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </IonReactHashRouter>
    </IonApp>
);

export default App;

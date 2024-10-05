import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Bienvenido a la App de Control de Personal</h1>
        <IonButton routerLink="/about">Ir a About</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Acerca de la Aplicación</h1>
        <IonButton routerLink="/home">Volver a Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default About;

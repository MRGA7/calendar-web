import { IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import DayCard from './DayCard';

const Calendar = () => (
  <IonGrid>
    <IonRow>
      {Array.from({ length: 24 }, (_, i) => (
        <IonCol key={i}>
          <IonCard>
            <DayCard day={i + 1} content={`Contenido del día ${i + 1}`} />
          </IonCard>
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
);

export default Calendar;
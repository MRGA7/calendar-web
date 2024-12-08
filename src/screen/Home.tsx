import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  const contentTexts = [
    "Sorpresa 1", "Sorpresa 2", "Sorpresa 3", "Sorpresa 4", "Sorpresa 5", "Sorpresa 6", "Sorpresa 7", "Sorpresa 8",
    "Sorpresa 9", "Sorpresa 10", "Sorpresa 11", "Sorpresa 12", "Sorpresa 13", "Sorpresa 14", "Sorpresa 15",
    "Sorpresa 16", "Sorpresa 17", "Sorpresa 18", "Sorpresa 19", "Sorpresa 20", "Sorpresa 21", "Sorpresa 22",
    "Sorpresa 23", "Sorpresa 24"
  ];

  // Inicializar el estado de los días canjeados a partir de localStorage
  const [revealedDays, setRevealedDays] = useState<boolean[]>(() => {
    const storedDays = localStorage.getItem('revealedDays');
    return storedDays ? JSON.parse(storedDays) : new Array(24).fill(false);
  });

  // Guardar los días canjeados en localStorage
  useEffect(() => {
    localStorage.setItem('revealedDays', JSON.stringify(revealedDays));
  }, [revealedDays]);

  const handleCardClick = (index: number) => {
    if (!revealedDays[index]) { // Solo marcar como canjeado si no lo está
      const updatedRevealedDays = [...revealedDays];
      updatedRevealedDays[index] = true;
      setRevealedDays(updatedRevealedDays);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-header">
          <h1>Calendario de Adviento</h1>
        </div>

        <IonGrid>
          <IonRow>
            {days.map((day, index) => (
              <IonCol size="4" key={day} className="day-card-container">
                <div 
                  className={`day-card ${revealedDays[index] ? 'flipped' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Parte frontal */}
                  <div className="day-card-front">
                    {day}
                  </div>

                  {/* Parte trasera */}
                  <div className="day-card-back">
                    🎄 {contentTexts[index]} 🎁
                  </div>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

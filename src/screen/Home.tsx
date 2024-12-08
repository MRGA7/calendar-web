import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonModal, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  const contentTexts = [
    "Sorpresa 1", "Sorpresa 2", "Sorpresa 3", "Sorpresa 4", "Sorpresa 5", "Sorpresa 6", "Sorpresa 7", "Sorpresa 8",
    "Sorpresa 9", "Sorpresa 10", "Sorpresa 11", "Sorpresa 12", "Sorpresa 13", "Sorpresa 14", "Sorpresa 15",
    "Sorpresa 16", "Sorpresa 17", "Sorpresa 18", "Sorpresa 19", "Sorpresa 20", "Sorpresa 21", "Sorpresa 22",
    "Sorpresa 23", "Sorpresa 24"
  ];
  const contenidoimportant = [
    "Hoy es un gran día, ¡disfrutemos juntos cada momento! 🌟",
    "Recuerda que juntos podemos con todo, no hay nada que nos detenga. 💖",
    "Hoy es un buen día para dar un paso más hacia nuestros sueños. ¡Vamos por más! 🚀",
    "Juntos podemos hacer que cada momento sea especial. 🌸",
    "No hay límites para lo que podemos lograr, ¡seguimos adelante juntos! 🌱",
    "Cada día es una nueva oportunidad para crecer, ¡vamos con todo! 💪",
    "Hoy es el día perfecto para soñar en grande, y lo haremos juntos. ✨",
    "Sonríe, que hoy será un día maravilloso. ¡Contigo todo es posible! 😄",
    "El camino que estamos recorriendo juntos es increíble. 🌠",
    "Te acompaño en cada paso, porque sé que lo mejor está por venir. 🌞",
    "El amor y la paciencia hacen maravillas, y sé que juntos podemos lograrlo todo. 💫",
    "Siempre que crees en ti, puedo ver cómo todo se vuelve posible. 🌻",
    "Este es solo el comienzo de una gran aventura, ¡y tú y yo estamos listos para vivirla! 🌍",
    "Lo mejor de la vida es compartirla contigo. ¡Vamos a hacer de este día algo inolvidable! 🌱",
    "Hazlo con amor, porque juntos todo tiene más sentido. ❤️",
    "El éxito está al alcance de nuestras manos, ¡sigamos trabajando para alcanzarlo! 🏆",
    "Hoy es un día más para hacer la diferencia, ¡y lo haremos juntos! 🌟",
    "Nuestra fuerza es ilimitada cuando estamos unidos. 💪",
    "Hoy, juntos, conseguiremos todo lo que nos propongamos. 🎉",
    "El éxito es mucho más dulce cuando lo compartimos con las personas que amamos. 😊",
    "No importa lo que pase, sé que lo conseguiremos porque estamos juntos. 💫",
    "Cada día contigo es un regalo, ¡y hoy lo voy a disfrutar al máximo! 🌞",
    "Cada día es una nueva oportunidad para ser grandes, y sé que lo seremos. ✨",
    "Aquí estamos, listos para lograr lo que nos propongamos. ¡Vamos juntos! 💫",
    "Siempre lo mejor está por venir, ¡y lo viviremos juntos! 🌅"
  ];

  const [revealedDays, setRevealedDays] = useState<boolean[]>(() => {
    const storedDays = localStorage.getItem('revealedDays');
    return storedDays ? JSON.parse(storedDays) : new Array(24).fill(false);
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    localStorage.setItem('revealedDays', JSON.stringify(revealedDays));
  }, [revealedDays]);

  const handleCardClick = (index: number) => {
    if (!revealedDays[index]) {
      const updatedRevealedDays = [...revealedDays];
      updatedRevealedDays[index] = true;
      setRevealedDays(updatedRevealedDays);
    }

    setModalContent(contenidoimportant[index]);
    setModalIsOpen(true);
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
                  <div className="day-card-front">
                    {day}
                  </div>
                  <div className="day-card-back">
                    {contentTexts[index]} 🎁
                  </div>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonModal isOpen={modalIsOpen} onDidDismiss={() => setModalIsOpen(false)}>
          <div className="modal-content">
            {/* Animación de nieve */}
            <div className="snowflake" style={{ left: '10%' }}>❄️</div>
            <div className="snowflake" style={{ left: '30%' }}>❄️</div>
            <div className="snowflake" style={{ left: '50%' }}>❄️</div>
            <div className="snowflake" style={{ left: '70%' }}>❄️</div>
            <div className="snowflake" style={{ left: '90%' }}>❄️</div>

            {/* Texto del reno */}
            <div className="reindeer">🦌</div>
            <h2>🎄 {modalContent} 🎄</h2>
            <IonButton onClick={() => setModalIsOpen(false)} className="custom-button">Cerrar</IonButton>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react';
import { useSpring, animated } from 'react-spring';

const DayCard = ({ day, content }: { day: number; content: string }) => {
  const [flipped, setFlipped] = React.useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <animated.div
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          position: 'absolute',
          backfaceVisibility: 'hidden',
        }}
      >
        {day}
      </animated.div>
      <animated.div
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
          position: 'absolute',
          backfaceVisibility: 'hidden',
        }}
      >
        {content}
      </animated.div>
    </div>
  );
};

export default DayCard
export default function FloatingHeartsOverlay() {
  const hearts = [
    { emoji: '❤️', left: '10%', delay: '0s' },
    { emoji: '💖', left: '20%', delay: '2s' },
    { emoji: '💕', left: '35%', delay: '4s' },
    { emoji: '❤️', left: '50%', delay: '1s' },
    { emoji: '💗', left: '65%', delay: '3s' },
    { emoji: '💞', left: '80%', delay: '5s' },
    { emoji: '❤️', left: '90%', delay: '6s' },
  ];

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}

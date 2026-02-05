import { useEffect, useState } from 'react';

interface PersonalMomentEffectProps {
  trigger: number;
}

export default function PersonalMomentEffect({ trigger }: PersonalMomentEffectProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger > 0) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 3000); // Effect duration: 3 seconds
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!isActive) return null;

  // Generate sparkle positions
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 1,
  }));

  return (
    <div className="personal-moment-overlay">
      {/* Radial burst effect */}
      <div className="radial-burst" />
      
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          ✨
        </div>
      ))}
      
      {/* Center heart burst */}
      <div className="center-heart-burst">
        <span className="burst-heart burst-heart-1">💖</span>
        <span className="burst-heart burst-heart-2">💕</span>
        <span className="burst-heart burst-heart-3">💗</span>
        <span className="burst-heart burst-heart-4">💞</span>
        <span className="burst-heart burst-heart-5">❤️</span>
        <span className="burst-heart burst-heart-6">💝</span>
        <span className="burst-heart burst-heart-7">💘</span>
        <span className="burst-heart burst-heart-8">💓</span>
      </div>
    </div>
  );
}

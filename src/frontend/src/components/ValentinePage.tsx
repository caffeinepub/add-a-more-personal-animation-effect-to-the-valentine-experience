import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Settings } from 'lucide-react';
import FloatingHeartsOverlay from './FloatingHeartsOverlay';
import PersonalMomentEffect from './PersonalMomentEffect';
import PhotoGallery from './PhotoGallery';
import ShareLinkButton from './ShareLinkButton';
import CustomDomainSection from './CustomDomainSection';
import { Button } from './ui/button';

export default function ValentinePage() {
  const [showFinal, setShowFinal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [effectTrigger, setEffectTrigger] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const finalSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Attempt autoplay on mount
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Autoplay blocked, user will need to click play button
          setIsPlaying(false);
        }
      }
    };
    attemptAutoplay();
  }, []);

  const toggleAudio = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
          setAudioError(false);
        }
      } catch (error) {
        setAudioError(true);
      }
    }
  };

  const handleYesClick = () => {
    setShowFinal(true);
    setEffectTrigger(prev => prev + 1);
    setTimeout(() => {
      if (finalSectionRef.current) {
        finalSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const scrollToCustomDomain = () => {
    const section = document.getElementById('custom-domain');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHeartsOverlay />
      <PersonalMomentEffect trigger={effectTrigger} />
      
      {/* Top controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Button
          onClick={scrollToCustomDomain}
          variant="outline"
          size="icon"
          className="bg-white/90 backdrop-blur-sm border-rose-200 hover:bg-rose-50 hover:border-rose-300 shadow-lg"
          aria-label="Custom Domain Setup"
          title="Custom Domain Setup"
        >
          <Settings className="h-5 w-5 text-rose-600" />
        </Button>
        <ShareLinkButton />
        <Button
          onClick={toggleAudio}
          variant="outline"
          size="icon"
          className="bg-white/90 backdrop-blur-sm border-rose-200 hover:bg-rose-50 hover:border-rose-300 shadow-lg"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Volume2 className="h-5 w-5 text-rose-600" />
          ) : (
            <VolumeX className="h-5 w-5 text-rose-600" />
          )}
        </Button>
      </div>

      <audio ref={audioRef} loop>
        <source src="/assets/love.mp3" type="audio/mpeg" />
      </audio>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-primary mb-8">
            Hey Harsheen ❤️
          </h1>
          <p className="text-romantic">
            If I could put my heart into words,<br />
            it would still fall short of what you mean to me.<br />
            But I wanted to try…<br />
            because loving you deserves effort.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-secondary mb-12 text-center">
            Our Love, Captured 📸
          </h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Forever Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-secondary mb-8">
            Why You Are My Forever
          </h2>
          <p className="text-romantic mb-8">
            You are the calm I didn't know I needed.<br />
            The strength I lean on without fear.<br />
            The love that feels safe, deep, and real.
          </p>
          <p className="text-romantic">
            In every lifetime,<br />
            in every version of me,<br />
            I would still find you…<br />
            and choose you again.
          </p>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-secondary mb-6">
            This is my heart asking you…
          </h2>
          <div className="text-7xl mb-8 animate-pulse">💘</div>
          <h1 className="heading-primary mb-12">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              onClick={handleYesClick}
              className="button-romantic text-lg px-10 py-6 h-auto"
            >
              Yes ❤️
            </Button>
            <Button
              onClick={handleYesClick}
              className="button-romantic text-lg px-10 py-6 h-auto"
            >
              Of course Yes 💕
            </Button>
          </div>
        </div>
      </section>

      {/* Final Section (Hidden until button click) */}
      {showFinal && (
        <section 
          ref={finalSectionRef}
          className="section-padding relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="heading-primary mb-8">
              You chose us ❤️
            </h1>
            <p className="text-romantic mb-8">
              Thank you for loving me the way you do.<br />
              Thank you for being my husband,<br />
              my home,<br />
              my forever.
            </p>
            <p className="text-romantic mb-8">
              I don't need one day to celebrate you —<br />
              but today feels extra special<br />
              because it's <em>us</em>.
            </p>
            <h2 className="heading-secondary mb-6">
              Happy Valentine's Day, Harsheen 💍
            </h2>
            <p className="text-xl text-rose-700 font-serif italic">
              — Your Wife, always
            </p>
          </div>
        </section>
      )}

      {/* Custom Domain Section */}
      <CustomDomainSection />

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center">
        <p className="text-lg text-rose-600 font-serif">
          Made with a heart that belongs to you 💖
        </p>
      </footer>
    </div>
  );
}

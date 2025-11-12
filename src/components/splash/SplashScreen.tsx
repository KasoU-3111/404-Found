import { useState } from 'react';

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 animate-scale-in">
        <div 
          className="cursor-pointer group"
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in transition-all duration-300 group-hover:scale-110">
            404
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-foreground mt-4 transition-all duration-300 group-hover:text-primary">
            Found
          </p>
          
          {/* Glowing effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl rounded-full animate-pulse" />
          )}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground text-lg animate-pulse">
            Click to enter
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-primary/30 animate-fade-in" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-accent/30 animate-fade-in" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-accent/30 animate-fade-in" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-primary/30 animate-fade-in" />
    </div>
  );
};

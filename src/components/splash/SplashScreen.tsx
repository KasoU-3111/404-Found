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
          className="cursor-pointer group relative"
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glowing effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-[100px] rounded-full animate-pulse" />
          )}
          
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in transition-all duration-500 group-hover:scale-110 group-hover:tracking-wider">
              (404 Found)
            </h1>
            
            {/* Animated underline */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            {/* Floating particles around text */}
            {isHovered && (
              <>
                <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-primary animate-ping" />
                <div className="absolute -top-2 right-1/3 w-1 h-1 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.2s' }} />
                <div className="absolute bottom-0 left-1/3 w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.4s' }} />
                <div className="absolute bottom-2 right-1/4 w-2 h-2 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.1s' }} />
              </>
            )}
          </div>
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

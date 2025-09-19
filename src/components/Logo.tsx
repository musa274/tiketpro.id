import React from 'react';
import { Building2 } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Simple Circle Logo */}
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg border-2 border-white relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
        
        {/* Simple Travel Icon */}
        <Building2 className="w-6 h-6 text-white relative z-10" />
        
        {/* Small decorative dot */}
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/60 rounded-full"></div>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="ml-3">
          <span className={`${textSizeClasses[size]} font-bold text-gray-900`}>
            <span className="text-blue-600">TIKET</span>
            <span className="text-gray-800">PRO.id</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
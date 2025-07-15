import React, { useState, useRef, useEffect } from 'react';

export function Popover({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="relative" ref={popoverRef}>
      {React.Children.map(children, child => {
        if (child.type === PopoverTrigger) {
          return React.cloneElement(child, { 
            onClick: () => setIsOpen(!isOpen) 
          });
        }
        if (child.type === PopoverContent) {
          return React.cloneElement(child, { 
            isOpen 
          });
        }
        return child;
      })}
    </div>
  );
}

export function PopoverTrigger({ children, onClick, asChild, ...props }) {
  if (asChild) {
    return React.cloneElement(children, { onClick });
  }
  
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export function PopoverContent({ children, isOpen, className = '' }) {
  if (!isOpen) return null;
  
  const baseStyles = 'absolute top-full left-0 z-50 mt-1 bg-white border border-slate-200 rounded-md shadow-lg';
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}
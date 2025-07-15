import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Select({ children, value, onValueChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="relative" ref={selectRef}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { 
            isOpen, 
            onClick: () => setIsOpen(!isOpen) 
          });
        }
        if (child.type === SelectContent) {
          return React.cloneElement(child, { 
            isOpen, 
            value, 
            onValueChange: (newValue) => {
              onValueChange(newValue);
              setIsOpen(false);
            }
          });
        }
        return child;
      })}
    </div>
  );
}

export function SelectTrigger({ children, className = '', isOpen, onClick, ...props }) {
  const baseStyles = 'flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <button
      type="button"
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}

export function SelectValue({ placeholder, value }) {
  return (
    <span className="block truncate">
      {value || placeholder}
    </span>
  );
}

export function SelectContent({ children, isOpen, value, onValueChange, className = '' }) {
  if (!isOpen) return null;
  
  const baseStyles = 'absolute top-full left-0 z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto';
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {React.Children.map(children, child => {
        if (child.type === SelectItem) {
          return React.cloneElement(child, { 
            selected: child.props.value === value,
            onSelect: () => onValueChange(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
}

export function SelectItem({ children, value, selected, onSelect, className = '' }) {
  const baseStyles = 'relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100';
  const selectedStyles = selected ? 'bg-slate-100' : '';
  
  return (
    <div
      className={`${baseStyles} ${selectedStyles} ${className}`}
      onClick={onSelect}
    >
      {children}
    </div>
  );
}
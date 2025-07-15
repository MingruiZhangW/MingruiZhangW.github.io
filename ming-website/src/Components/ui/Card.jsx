import React from 'react';

export function Card({ children, className = '', ...props }) {
  const baseStyles = 'rounded-lg border border-slate-200 bg-white shadow-sm';
  
  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  const baseStyles = 'flex flex-col space-y-1.5 p-6';
  
  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }) {
  const baseStyles = 'text-2xl font-semibold leading-none tracking-tight';
  
  return (
    <h3 className={`${baseStyles} ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = '', ...props }) {
  const baseStyles = 'p-6 pt-0';
  
  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
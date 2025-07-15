export function Badge({ 
  children,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  return (
    <span
      className={`${baseStyles} border-transparent ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
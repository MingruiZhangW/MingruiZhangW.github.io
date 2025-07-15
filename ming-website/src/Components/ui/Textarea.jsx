export function Textarea({ 
  className = '',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  id,
  name,
  rows = 4,
  ...props 
}) {
  const baseStyles = 'flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none';
  
  return (
    <textarea
      className={`${baseStyles} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      id={id}
      name={name}
      rows={rows}
      {...props}
    />
  );
}
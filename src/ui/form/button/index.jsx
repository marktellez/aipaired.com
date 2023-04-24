export function Button({ onChange, className, children }) {
  return (
    <div className={`px-5 py-2 ring-1 ring-gray-300 rounded-full ${className}`}>
      {children}
    </div>
  );
}

export function Container({ children, className }) {
  return (
    <div className={`container mx-auto lg:px-24 px-2 ${className}`}>
      {children}
    </div>
  );
}

export function Row({ children, className }) {
  return <div className={` my-5 ${className}`}>{children}</div>;
}

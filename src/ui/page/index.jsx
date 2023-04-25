export function Container({ children, className, full }) {
  return (
    <div
      className={`container mx-auto lg:px-24 px-2 ${
        !full && "sm:w-10/12 md:w-9/12 lg:w-10/12"
      }  ${className}`}
    >
      {children}
    </div>
  );
}

export function Row({ children, className }) {
  return <div className={` my-5 ${className}`}>{children}</div>;
}

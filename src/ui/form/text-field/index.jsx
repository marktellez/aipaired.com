export function TextField({
  multiline = false,
  value,
  onChange,
  className,
  ...rest
}) {
  return multiline ? (
    <textarea
      className={
        className
          ? className
          : "text-sm w-full bg-white py-2 px-4 text-purple-800 min-h-24 focus:border-transparent focus:outline-none"
      }
      {...{
        value: value,
        onChange: (e) => onChange(e.target.value),
        ...rest,
      }}
    />
  ) : (
    <input
      className={
        className
          ? className
          : "text-sm w-full bg-white py-2 px-4 text-purple-800 focus:border-transparent focus:outline-none"
      }
      type="text"
      {...{
        value: value,
        onChange: (e) => onChange(e.target.value),
        ...rest,
      }}
    />
  );
}

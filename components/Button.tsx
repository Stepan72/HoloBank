const Button = ({
  className,
  label,
}: {
  className?: string;
  label: string;
}) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

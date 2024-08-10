const Button = ({ className }: { className?: string }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${className}`}
    >
      Get Started
    </button>
  );
};

export default Button;

/* eslint-disable react/prop-types */
function ReusableButton({ children, backgroundColor, textColor }) {
  return (
    <button
      className={`${backgroundColor} text-${textColor} self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full`}
    >
      {children}
    </button>
  );
}

export default ReusableButton;

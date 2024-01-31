/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function PrimaryButton({
  widthbutton,
  text,
  icon,
  color,
  textColor,
  align,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{ width: widthbutton }}
      className={`rounded-sm py-1 text-neutral0 flex items-center bg-${color} text-${textColor} py-2 text-${align}`}
    >
      {icon}
      <span className="ml-2 w-full">{text}</span>
    </button>
  );
}

export default PrimaryButton;

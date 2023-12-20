// eslint-disable-next-line react/prop-types
function PrimaryButton({ color, widthbutton, text, icon, onclick }) {
  return (
    <button
      //  onclick={onclick}
      style={{ width: widthbutton }}
      className={`rounded-sm py-1 text-neutral0 flex items-center `}
    >
      {icon}
      <spann className="ml-2">{text}</spann>
    </button>
  );
}

export default PrimaryButton;

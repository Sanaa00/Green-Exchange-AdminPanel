// eslint-disable-next-line react/prop-types
function PrimaryButton({ widthbutton, text, icon }) {
  return (
    <button
      //  onclick={onclick}
      style={{ width: widthbutton }}
      className={`rounded-sm py-1 text-neutral0 flex items-center `}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
}

export default PrimaryButton;

export const FormTextarea = ({ defaultValue, id, label, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        defaultValue={defaultValue}
        className="py-3 px-4 border border-gray-200 rounded-sm read-only:bg-gray-100 outline-none focus:border-primary"
        {...rest}
      />
    </div>
  );
};

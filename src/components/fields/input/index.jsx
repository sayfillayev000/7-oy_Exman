import { memo } from "react";

const index = memo(
  ({
    ref,
    id,
    type,
    value,
    className,
    placeholder,
    required,
    onChange = () => {},
  }) => {
    return (
      <>
        <input
          type={type}
          value={value}
          required={required}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
        />
      </>
    );
  }
);

export default index;

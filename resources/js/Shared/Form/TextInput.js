import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className="flex items-stretch h-7 mb-3">
      <div className="w-12 self-center">
        <label htmlFor={name} className="mt-1 font-bold text-sm content-center	">
          {label}:
        </label>
      </div>
      <div className="w-full">
        <input
          id={name}
          name={name}
          className={`${className} ${
            errors.length ? 'error' : ''
          } ${'border border-black rounded p-1 placeholder-shown:border-black focus:outline-none'}`}
          {...props}
        />
        {errors && <div className="form-error">{errors}</div>}
      </div>
    </div>
  );
};

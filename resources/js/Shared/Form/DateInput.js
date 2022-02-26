import React, { useEffect } from 'react';
import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';

export default ({ label, name, className, errors = [], ...props }) => {
  useEffect(() => {
    const datepickerEl = document.getElementById(name);
    datepickerEl &&
      new Datepicker(datepickerEl, {
        format: 'dd/mm/yyyy'
      });
  }, []);

  return (
    <div className="flex items-stretch h-7 mb-3">
      <div className="self-center w-1/3 ">
        <label htmlFor={name} className="mt-1 font-bold text-sm content-center	">
          {label}:
        </label>
      </div>
      <div className="w-full">
        <input
          type="text"
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

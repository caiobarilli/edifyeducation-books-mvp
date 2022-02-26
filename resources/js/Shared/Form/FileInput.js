import React, { useState, useRef } from 'react';

const Button = ({ text, onClick }) => (
  <button
    type="button"
    className="px-4 py-1 text-xs font-medium text-white bg-orange-600 rounded-sm focus:outline-none hover:bg-orange-100"
    onClick={onClick}
  >
    {text}
  </button>
);

export default ({ className, name, label, accept, errors = [], onChange }) => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState('/img/book-cover-404.jpg');

  function browse() {
    fileInput.current.click();
  }

  function remove() {
    setFile(null);
    onChange(null);
  }

  function handleFileChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = function () {
      setImgSrc(reader.result);
    };

    reader.readAsDataURL(file);
    setFile(file);
    onChange(file);
  }

  return (
    <div className={className}>
      {!file && (
        <>
          {label && (
            <label className="font-bold text-sm content-center" htmlFor={name}>
              {label}:
            </label>
          )}
          <div
            className={`mt-2 border border-black rounded placeholder-shown:border-black focus:outline-none p-0 ${
              errors.length && 'error'
            }`}
          >
            <input
              id={name}
              ref={fileInput}
              accept={accept}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="p-2">
              <Button text="Procurar" onClick={browse} />
            </div>
          </div>
        </>
      )}

      {file && (
        <div>
          <img
            src={imgSrc}
            className="mt-2 mb-5 rounded-lg shadow-xl"
            width="152"
            height="202"
          />
          <Button text="Remover" onClick={remove} />
        </div>
      )}

      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};

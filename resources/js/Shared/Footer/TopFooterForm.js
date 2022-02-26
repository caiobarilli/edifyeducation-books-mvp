import React from 'react';

export default () => {
  function handleSubmit(e) {
    e.preventDefault();
    // post(route('newsletter.store'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1">
        <label className="form-label font-bold mb-4" htmlFor="email">
          Inscreva-se
        </label>
        <input
          className="border rounded p-1 placeholder-shown:border-gray-500 focus:outline-none  mb-3"
          name="email"
          type="email"
          placeholder="Seu e-mail"
          onChange={e => setData('email', e.target.value)}
        />
        <button
          type="submit"
          className="btn-blue text-center rounded-full p-2 font-OpenSans font-semibold text-xs"
        >
          Inscrever
        </button>
      </div>
    </form>
  );
};

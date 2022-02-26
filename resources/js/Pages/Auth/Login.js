import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Logo from '@/Shared/UI/Logo';
import LoadingButton from '@/Shared/Form/LoadingButton';
import TextInput from '@/Shared/TextInput';

export default () => {
  const { data, setData, errors, post, processing } = useForm({
    email: 'contato@edifyeducation.com',
    password: 'secret',
    remember: true
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <div className="flex items-center font-OpenSans justify-center min-h-screen p-6 ">
      <Helmet title="Login" />
      <div className="w-full max-w-md">
        <Logo
          className="block w-full max-w-xs mx-auto "
          width="278"
          height="293"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 512.667 586.5"
          xmlSpace="preserve"
        />
        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden rounded-lg shadow-xl"
        >
          <div className="px-10 py-4">
            <div className="w-24 mx-auto" />
            <TextInput
              className="mt-5"
              label="E-mail"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            <TextInput
              className="mt-6"
              label="Senha"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            <label
              className="flex items-center mt-6 select-none"
              htmlFor="remember"
            >
              <input
                name="remember"
                id="remember"
                className="mr-1"
                type="checkbox"
                checked={data.remember}
                onChange={e => setData('remember', e.target.checked)}
              />
              <span className="text-sm">Lembrar senha?</span>
            </label>
          </div>
          <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              type="submit"
              loading={processing}
              className="btn-blue"
            >
              Entrar
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

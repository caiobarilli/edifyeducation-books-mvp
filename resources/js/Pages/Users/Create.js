import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/Form/LoadingButton';
import TextInput from '@/Shared/TextInput';
import FileInput from '@/Shared/FileInput';

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user',
    remember_token: 'example',
    photo: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('users.store'));
  }

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="mb-8 text-3xl font-bold ">
          <InertiaLink
            href={route('users')}
            className="text-blue-100 hover:text-blue-600"
          >
            Usuários
          </InertiaLink>
          <span className="font-medium text-blue-100"> /</span> Novo
        </h1>
      </div>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form name="createForm" onSubmit={handleSubmit}>
          <div className="flex flex-wrap p-8 -mb-8 -mr-6">
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Nome"
              name="first_name"
              errors={errors.first_name}
              value={data.first_name}
              onChange={e => setData('first_name', e.target.value)}
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Sobrenome"
              name="last_name"
              errors={errors.last_name}
              value={data.last_name}
              onChange={e => setData('last_name', e.target.value)}
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="E-mail"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Senha"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            <FileInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Foto"
              name="photo"
              accept="image/*"
              errors={errors.photo}
              value={data.photo}
              onChange={photo => setData('photo', photo)}
            />
          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-blue"
            >
              Criar Usuário
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.layout = page => <Layout title="Novo Usuário" children={page} />;

export default Create;

import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DeleteButton from '@/Shared/DeleteButton';
import LoadingButton from '@/Shared/Form/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import FileInput from '@/Shared/FileInput';
import TrashedMessage from '@/Shared/Form/TrashedMessage';

const Edit = () => {
  const { user, auth } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    email: user.email || '',
    password: user.password || '',
    owner: user.owner ? '1' : '0' || '0',
    role: user.role,
    photo: '',

    // NOTE: When working with Laravel PUT/PATCH requests and FormData
    // you SHOULD send POST request and fake the PUT request like this.
    _method: 'PUT'
  });

  function handleSubmit(e) {
    e.preventDefault();

    // NOTE: We are using POST method here, not PUT/PACH. See comment above.
    post(route('users.update', user.id));
  }

  function destroy() {
    if (confirm('Tem certeza de que deseja apagar esse usuário?')) {
      Inertia.delete(route('users.destroy', user.id));
    }
  }

  function restore() {
    if (confirm('Tem certeza de que deseja recuperar esse usuário?')) {
      Inertia.put(route('users.restore', user.id));
    }
  }

  const show_component = auth.user.role === 'owner';

  return (
    <div className="container mx-auto">
      <Helmet title={`${data.first_name} ${data.last_name}`} />
      <div className="flex justify-start max-w-lg mb-8">
        <h1 className="text-3xl font-bold">
          {show_component && (
            <>
              <InertiaLink
                href={route('users')}
                className="text-blue-100 hover:text-blue-600"
              >
                Usuários
              </InertiaLink>
              <span className="mx-2 font-medium text-blue-100">/</span>
            </>
          )}
          {data.first_name} {data.last_name}
        </h1>
        {user.photo && (
          <img className="block w-8 h-8 ml-4 rounded-full" src={user.photo} />
        )}
      </div>
      {user.deleted_at && (
        <TrashedMessage onRestore={restore}>
          Esse usuário foi apagado.
        </TrashedMessage>
      )}
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
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
            {show_component && (
              <SelectInput
                className="w-full pb-8 pr-6 lg:w-1/2"
                label="Cargo"
                name="owner"
                errors={errors.role}
                value={data.role}
                onChange={e => setData('role', e.target.value)}
              >
                <option value="owner">Adminstrador</option>
                <option value="user">Usuário</option>
              </SelectInput>
            )}

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
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            {show_component && (
              <DeleteButton onDelete={destroy}>Apagar Usuário</DeleteButton>
            )}
            <LoadingButton
              loading={processing}
              type="submit"
              className="ml-auto btn-blue"
            >
              Atualizar
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Edit.layout = page => <Layout children={page} />;

export default Edit;

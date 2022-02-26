import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Icon from '@/Shared/UI/Icon';
import SearchFilter from '@/Shared/SearchFilter';
import Pagination from '@/Shared/Form/Pagination';

const Index = () => {
  const { users } = usePage().props;
  const {
    data,
    meta: { links }
  } = users;
  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Usuários</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
        <InertiaLink
          className="btn-blue focus:outline-none"
          href={route('users.create')}
        >
          <span>Novo</span>
          <span className="hidden md:inline"> Usuário</span>
        </InertiaLink>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Nome</th>
              <th className="px-6 pt-5 pb-4">Email</th>
              <th className="px-6 pt-5 pb-4" colSpan="2">
                Cargo
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, photo, email, role, deleted_at }) => {
              return (
                <tr
                  key={id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t">
                    <InertiaLink
                      href={route('users.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-gray-700 focus:outline-none"
                    >
                      {photo && (
                        <img
                          src={photo}
                          className="block w-5 h-5 mr-2 -my-2 rounded-full"
                        />
                      )}
                      {name}
                      {deleted_at && (
                        <Icon
                          name="trash"
                          className="flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"
                        />
                      )}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                    >
                      {email}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                    >
                      {role === 'owner' && 'Administrador'}
                      {role === 'user' && 'Usuário'}
                    </InertiaLink>
                  </td>
                  <td className="w-px border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={route('users.edit', id)}
                      className="flex items-center px-4 focus:outline-none"
                    >
                      <Icon
                        name="cheveron-right"
                        className="block w-6 h-6 text-gray-400 fill-current"
                      />
                    </InertiaLink>
                  </td>
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  Nenhum usuário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination links={links} />
    </div>
  );
};

Index.layout = page => <Layout title="Usuários" children={page} />;

export default Index;

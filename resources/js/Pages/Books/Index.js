import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Icon from '@/Shared/UI/Icon';
import SearchFilter from '@/Shared/SearchFilter';
import Pagination from '@/Shared/Form/Pagination';

const Index = () => {
  const { books } = usePage().props;
  const {
    data,
    meta: { links }
  } = books;
  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Livros</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
        <InertiaLink
          className="btn-blue focus:outline-none"
          href={route('books.create')}
        >
          <span>Novo</span>
          <span className="hidden md:inline"> Livro</span>
        </InertiaLink>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Title</th>
              <th className="px-6 pt-5 pb-4">Author</th>
              <th className="px-6 pt-5 pb-4">Pages</th>
              <th className="px-6 pt-5 pb-4">Nota</th>
              <th className="px-6 pt-5 pb-4">Description</th>
              <th className="px-6 pt-5 pb-4">Começou em</th>
              <th className="px-6 pt-5 pb-4">Terminou em</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({
                id,
                title,
                author,
                pages,
                rating,
                description,
                started_at,
                finished_at,
                photo,
                deleted_at
              }) => {
                return (
                  <tr
                    key={id}
                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                  >
                    <td className="border-t">
                      <InertiaLink
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray-700 focus:outline-none"
                      >
                        {photo && (
                          <img
                            src={photo}
                            className="block w-5 h-5 mr-2 -my-2 rounded-full"
                          />
                        )}
                        {title}
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
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                      >
                        {author}
                      </InertiaLink>
                    </td>
                    <td className="border-t">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                      >
                        {pages}
                      </InertiaLink>
                    </td>
                    <td className="border-t">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                      >
                        {rating}
                      </InertiaLink>
                    </td>
                    <td className="border-t">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                      >
                        {description}
                      </InertiaLink>
                    </td>
                    <td className="border-t">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                      >
                        {started_at}
                      </InertiaLink>
                    </td>
                    <td className="border-t">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('books.edit', id)}
                        className="flex items-center px-6 py-4 focus:text-gray focus:outline-none"
                      >
                        {finished_at}
                      </InertiaLink>
                    </td>
                  </tr>
                );
              }
            )}
            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  Nenhum livro encontrado.
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

Index.layout = page => <Layout title="Livros" children={page} />;

export default Index;

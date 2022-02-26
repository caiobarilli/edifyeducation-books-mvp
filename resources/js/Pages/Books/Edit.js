import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DeleteButton from '@/Shared/DeleteButton';
import TextInput from '@/Shared/TextInput';
import FileInput from '@/Shared/FileInput';
import TrashedMessage from '@/Shared/Form/TrashedMessage';
import LoadingButton from '@/Shared/Form/LoadingButton';

const Edit = () => {
  const { book, auth } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    title: book.title || '',
    author: book.author || '',
    pages: book.pages || '',
    description: book.description || '',
    rating: book.rating || '',
    started_at: book.started_at || '',
    finished_at: book.finished_at || '',
    photo: '',

    // NOTE: When working with Laravel PUT/PATCH requests and FormData
    // you SHOULD send POST request and fake the PUT request like this.
    _method: 'PUT'
  });

  function handleSubmit(e) {
    e.preventDefault();

    // NOTE: We are using POST method here, not PUT/PACH. See comment above.
    post(route('books.update', book.id));
  }

  function destroy() {
    if (confirm('Tem certeza de que deseja apagar esse livro?')) {
      Inertia.delete(route('books.destroy', book.id));
    }
  }

  function restore() {
    if (confirm('Tem certeza de que deseja recuperar esse livro?')) {
      Inertia.put(route('books.restore', book.id));
    }
  }

  return (
    <div className="container mx-auto">
      <Helmet title={`${data.title} ${' - '} ${data.author}`} />
      <div className="flex justify-start max-w-lg mb-8">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        {book.photo && (
          <img className="block w-8 h-8 ml-4 rounded-full" src={book.photo} />
        )}
      </div>
      {book.deleted_at && (
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
              name="title"
              errors={errors.title}
              value={data.title}
              onChange={e => setData('title', e.target.value)}
            />

            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Autor"
              name="author"
              errors={errors.author}
              value={data.author}
              onChange={e => setData('author', e.target.value)}
            />

            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Páginas"
              name="pages"
              errors={errors.pages}
              value={data.pages}
              onChange={e => setData('pages', e.target.value)}
            />

            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Descrição"
              name="description"
              errors={errors.description}
              value={data.description}
              onChange={e => setData('description', e.target.value)}
            />

            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Nota"
              name="rating"
              errors={errors.rating}
              value={data.rating}
              onChange={e => setData('rating', e.target.value)}
            />

            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Começou em"
              name="started_at"
              errors={errors.started_at}
              value={data.started_at}
              onChange={e => setData('started_at', e.target.value)}
            />

            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Terminou em"
              name="finished_at"
              errors={errors.finished_at}
              value={data.finished_at}
              onChange={e => setData('finished_at', e.target.value)}
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
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            <DeleteButton onDelete={destroy}>Apagar Livro</DeleteButton>
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

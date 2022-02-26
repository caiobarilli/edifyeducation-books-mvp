import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/Form/LoadingButton';
import TextInput from '@/Shared/TextInput';
import FileInput from '@/Shared/FileInput';

const Create = () => {
  const { auth } = usePage().props;

  const { data, setData, errors, post, processing } = useForm({
    title: '',
    author: '',
    pages: '',
    description: '',
    rating: '',
    started_at: '',
    finished_at: '',
    photo: '',
    user_id: auth.user.id
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('books.store'));
  }

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="mb-8 text-3xl font-bold ">
          <InertiaLink
            href={route('books')}
            className="text-blue-100 hover:text-blue-600"
          >
            Livros
          </InertiaLink>
          <span className="font-medium text-blue-100"> /</span> Novo
        </h1>
      </div>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form name="createForm" onSubmit={handleSubmit}>
          <div className="flex flex-wrap p-8 -mb-8 -mr-6">
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Titulo"
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
              label="Paginas"
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
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-blue"
            >
              Criar Livro
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.layout = page => <Layout title="Novo Livro" children={page} />;

export default Create;

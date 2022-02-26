import React, { useState, useEffect } from 'react';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Icon from '@/Shared/UI/Icon';
import Hr from '@/Shared/UI/Hr';
import TextInput from '@/Shared/Form/TextInput';
import DateInput from '@/Shared/Form/DateInput';
import StarRatingInput from '@/Shared/Form/StarRatingInput';
import FileInput from '@/Shared/Form/FileInput';
import Breadcrumb from '@/Shared/UI/Breadcrumb';
import { formatDate } from '@/utils';
import axios from 'axios';

const Dashboard = () => {
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

  const [book, setBook] = useState([]);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [showSearchResult, setSearchResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showBookForm, setShowBookForm] = useState(false);
  const apiKey = process.env.MIX_GOOGLE_API_KEY;

  useEffect(() => {
    const timer = setTimeout(() => {
      let getBooks = !(search === '');
      getBooks &&
        axios
          .get(
            'https://www.googleapis.com/books/v1/volumes?q=' +
              search +
              '&key=' +
              apiKey +
              '&maxResults=3'
          )
          .then(data => {
            if (data.data.items === undefined || data.data.items.length === 0) {
              setBooks([]);
              setSearchResult(false);
            } else {
              setBooks(data.data.items);
              setSearchResult(true);
            }
          });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  function handleOnChange(event) {
    event.preventDefault();
    event.target.value || !(event.target.value === '')
      ? setSearch(event.target.value)
      : setSearch(''),
      setSearchResult(false);
  }

  function addBookHandler(book) {
    setSearchResult(false);
    setSearch('');
    setBook(book);
    setShowForm(false);
    setShowBookForm(true);
  }

  function showFormHandler() {
    setShowForm(prevShowForm => !prevShowForm);
    if (showBookForm) {
      setShowBookForm(showBookForm => !showBookForm);
    }
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log('object');
    setSearch(e.target.s_book.value);
  }

  const saveVoteHandler = voteResult => {
    // console.log(voteResult);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // post(route('books.store'));
  }

  return (
    <div className="container mx-auto pt-4">
      <Breadcrumb />

      <div className="mb-6">
        <h2 className="font-Lato text-2xl">Adicionar livro</h2>
      </div>

      <form onSubmit={handleSearchSubmit}>
        <div>
          <label htmlFor="s_book" className="font-Lato text-base font-bold">
            Informe o nome do livro
          </label>
        </div>
        <div className="relative w-40 mt-3">
          <Icon
            name="search"
            className="absolute top-1/3 transform -translate-y-1 right-2"
          />
          <input
            id="s_book"
            name="s_book"
            className="border border-black rounded p-1 placeholder-shown:border-black focus:outline-none w-full pr-6"
            onChange={handleOnChange}
            value={search}
            placeholder="Pesquisar o livro"
            type="text"
          />
        </div>
      </form>

      <div className="flex items-center z-0 my-2 cursor-pointer">
        <InertiaLink
          href={route('dashboard')}
          className="mr-1 text-orange-100 hover:text-orange-600"
        >
          <Icon name="plus" />
        </InertiaLink>

        <strong
          onClick={showFormHandler}
          className=" text-orange-100 hover:text-orange-600 font-Lato text-base font-bold"
        >
          Preencher manualmente
        </strong>
      </div>

      {showSearchResult && (
        <div className="grid grid-cols-9 font-Lato absolute -mt-10">
          <div className="col-start-1 col-end-4 mb-6 bg-white">
            <div className="border rounded-sm p-3 shadow font-Lato ">
              {books.map(book => (
                <div
                  key={`${book.selfLink} . ${book.id}`}
                  onClick={() => addBookHandler(book)}
                >
                  <div className="flex cursor-pointer">
                    <div className="col-start-1">
                      {book.volumeInfo.imageLinks &&
                        book.volumeInfo.imageLinks['smallThumbnail'] && (
                          <img
                            src={book.volumeInfo.imageLinks['smallThumbnail']}
                            className="border border-gray-300 rounded"
                            width="50"
                            height="60"
                          />
                        )}
                    </div>

                    <div className="col-start-2 col-end-5 pl-2">
                      <div className="text-sm font-normal text-black">
                        {book.volumeInfo.title}
                      </div>
                      <div className="text-xs font-bold text-blue-100 mb-2">
                        {book.volumeInfo.authors}
                      </div>
                      <div className="text-xs text-gray-600">
                        {formatDate(book.volumeInfo.publishedDate)}
                      </div>
                    </div>
                  </div>
                  {book !== books[2] && (
                    <Hr className="border-b border-1 my-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showBookForm && (
        <form className="grid grid-cols-9 pt-4 font-Lato">
          <div className="col-start-1">
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks['smallThumbnail'] && (
                <img
                  src={book.volumeInfo.imageLinks['smallThumbnail']}
                  className=" rounded-lg shadow-xl"
                  width="152"
                  height="202"
                />
              )}
          </div>

          <div className="col-start-2 col-end-5 mb-6">
            <div className="flex flex-col">
              <h2 className="mb-2 font-normal text-base">
                {book.volumeInfo.title}
              </h2>
              <div className="flex mb-5">
                <strong className="text-blue-100 font-bold text-xs">
                  {book.volumeInfo.authors}
                </strong>
                {book.volumeInfo.pageCount && (
                  <strong className="text-blue-100 font-bold text-xs ml-auto self-end">
                    {book.volumeInfo.pageCount + ' páginas'}
                  </strong>
                )}
              </div>
            </div>

            <div className="mb-4">
              <DateInput
                name="started_at"
                label="Começou a ler em"
                className="w-full "
              />

              <DateInput
                name="finished_at"
                label="Terminou de ler em"
                className="w-full "
              />
            </div>

            <div className="mb-4">
              <strong>Sua avaliação</strong>
              <StarRatingInput
                numberOfStars="5"
                onVoteSubmit={saveVoteHandler}
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-normal mb-1">Escreva uma Resenha</h3>
              <strong className="text-xs font-bold mb-1">Resenha</strong>
              <textarea
                placeholder="Escrever"
                className="border-2 rounded p-1 placeholder-shown:border-gray-500 focus:outline-none w-full h-32 mb-3"
              ></textarea>
            </div>
            <InertiaLink
              className="btn-orange table w-32 text-center rounded-full my-2 p-2 font-OpenSans font-semibold text-md"
              href={route('livros.create')}
            >
              Cadastrar
            </InertiaLink>
          </div>
        </form>
      )}

      {showForm && (
        <form className="grid grid-cols-9 pt-4 font-Lato">
          <div className="col-start-1">
            <FileInput
              className="mb-3 w-32"
              label="Capa do livro"
              name="photo"
              accept="image/*"
              errors={errors.photo}
              value={data.photo}
              onChange={photo => setData('photo', photo)}
            />
          </div>
          <div className="col-start-2 col-end-5 mb-6">
            <TextInput
              label="Nome"
              name="title"
              id="title"
              className="w-full "
              type="text"
            />

            <TextInput
              label="Autor"
              name="author"
              id="author"
              className="w-full "
              type="text"
            />

            <TextInput
              label="Páginas"
              name="pages"
              id="pages"
              className="w-full "
              type="number"
            />

            <DateInput
              name="started_at"
              label="Começou a ler em"
              className="w-full "
            />

            <DateInput
              name="finished_at"
              label="Terminou de ler em"
              className="w-full "
            />

            <div className="mt-6 mb-4">
              <strong>Sua avaliação</strong>
              <StarRatingInput
                numberOfStars="5"
                onVoteSubmit={saveVoteHandler}
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-normal mb-1">Escreva uma Resenha</h3>
              <strong className="text-xs font-bold mb-1">Resenha</strong>
              <textarea
                placeholder="Escrever"
                className="border rounded p-1 placeholder-shown:border-gray-500 focus:outline-none w-full h-32 mb-3"
              ></textarea>
            </div>

            <InertiaLink
              className="btn-orange table w-32 text-center rounded-full my-2 p-2 font-OpenSans font-semibold text-md"
              href={route('livros.create')}
            >
              Cadastrar
            </InertiaLink>
          </div>
        </form>
      )}
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = page => <Layout title="Adicionar livro" children={page} />;

export default Dashboard;

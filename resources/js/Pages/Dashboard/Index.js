import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Icon from '@/Shared/UI/Icon';
import StarRating from '@/Shared/UI/StarRating';
import Hr from '@/Shared/UI/Hr';
import Pagination from '@/Shared/Form/Pagination';
import { formatDate } from '@/utils';

const Dashboard = () => {
  const { books } = usePage().props;
  const {
    data,
    meta: { links }
  } = books;

  return (
    <div className="container mx-auto pt-4">
      <div className="grid grid-cols-6">
        <div className="col-start-1 col-end-2">
          <InertiaLink
            className="btn-orange table w-11/12 text-center rounded-full mt-1 p-2 font-OpenSans font-semibold text-md"
            href={route('livros.create')}
          >
            Adicionar Livro
          </InertiaLink>
        </div>

        {data.length !== 0 && (
          <div className="col-start-2 col-end-6 ">
            <div className="grid grid-cols-1 gap-4 ">
              <div className="col-span-3">
                <span className="table px-1 py-2 ml-5 border-b-2 border-blue-100 font-Lato text-blue-100 font-normal text-sm">
                  Lendo Atualmente
                </span>
                <Hr className="border-b border-2 " />
              </div>
            </div>
          </div>
        )}

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
              <div key={id} className="col-start-2 col-end-6 font-Lato my-2">
                <div className="grid grid-cols-6 pt-4">
                  <div className="col-start-1">
                    {photo ? (
                      { photo }
                    ) : (
                      <img
                        className="rounded-lg shadow-xl"
                        src="/img/book-cover-404.jpg"
                        width="152"
                        height="202"
                      />
                    )}
                  </div>

                  <div className="col-start-2 col-end-7">
                    <h2 className="mb-2 font-normal text-base">{title}</h2>
                    <strong className="text-blue-100 font-bold text-xs">
                      {author}
                    </strong>

                    <StarRating rating={rating} numberOfStars="5" />

                    <div>
                      <p className="text-black font-normal text-xs">
                        Você começou a ler em:
                        <strong className="text-black font-bold text-xs ml-1">
                          {formatDate(started_at)}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}

        <div className="col-start-2 col-end-7">
          <Pagination links={links} />
        </div>
      </div>
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = page => <Layout title="Meus Livros" children={page} />;

export default Dashboard;

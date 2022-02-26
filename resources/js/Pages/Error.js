import React from 'react';
import Helmet from 'react-helmet';
// import { usePage } from '@inertiajs/inertia-react';

export default ({ status }) => {
  // const { status } = usePage().props;

  const title = {
    503: '503: Serviço indisponível',
    500: '500: Erro do servidor',
    404: '404: Página não encontrada',
    403: '403: Acesso Restrito'
  }[status];

  const description = {
    503: 'Desculpe, estamos fazendo uma manutenção. Por favor, volte em breve.',
    500: 'Opa, algo deu errado em nossos servidores.',
    404: 'Desculpe, a página que você está procurando não foi encontrada.',
    403: 'Desculpe, você não tem acesso a esta página.'
  }[status];

  return (
    <div className="flex items-center justify-center min-h-screen p-5 text-indigo-100 bg-gray-800">
      <Helmet title={title} />
      <div className="w-full max-w-md">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-3 text-lg leading-tight">{description}</p>
      </div>
    </div>
  );
};

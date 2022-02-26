import React from 'react';

export default ({ name, className }) => {
  if (name === 'home') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="11"
        fill="none"
        viewBox="0 0 12 11"
      >
        <path
          fill="#343A3B"
          d="M11.508 4.938l-1.133-1.016V1.344a.475.475 0 00-.469-.469H8.031a.463.463 0 00-.469.469v.058L6.508.465A.846.846 0 006 .25a.852.852 0 00-.527.215l-5 4.473a.444.444 0 00-.118.234c0 .078.04.176.098.215l.195.234a.36.36 0 00.235.098c.058 0 .156-.02.215-.078l.507-.47V9.47c0 .449.352.781.782.781h7.207c.43 0 .781-.332.781-.781V5.172l.508.469a.326.326 0 00.215.078.36.36 0 00.234-.098l.215-.234a.356.356 0 00.078-.215.444.444 0 00-.117-.234zm-2.07 4.375H2.561V4.332L6 1.246l3.438 3.086v4.98zm0-6.231l-.938-.84v-.43h.938v1.27zM4.75 4.312v1.875c0 .176.137.313.313.313h1.875a.321.321 0 00.312-.313V4.313A.336.336 0 006.937 4H5.063a.321.321 0 00-.312.313z"
        ></path>
      </svg>
    );
  }

  if (name === 'plus') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        viewBox="0 0 12 12"
      >
        <path
          fill="#F37920"
          d="M11.5 5H7V.5c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5V5H.5c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5H5v4.5c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5V7h4.5c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5z"
        ></path>
      </svg>
    );
  }

  if (name === 'cheveron-up') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="8"
        fill="none"
        viewBox="0 0 12 8"
        className={className}
      >
        <path
          fill="#495055"
          d="M10.24 7.18L6 2.94 1.76 7.18.7 6.12 6 .82l5.3 5.3-1.06 1.06z"
        ></path>
      </svg>
    );
  }

  if (name === 'cheveron-down') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="4"
        fill="none"
        viewBox="0 0 6 4"
      >
        <path
          fill="#495055"
          d="M5.566.344H.434C.281.344.194.506.29.617l2.566 2.975a.195.195 0 00.289 0L5.71.617c.096-.11.01-.273-.144-.273z"
        ></path>
      </svg>
    );
  }

  if (name === 'cheveron-right') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        fill="none"
        viewBox="0 0 6 10"
        className={className}
      >
        <path
          fill="#8F9EA1"
          d="M.969 1.012l-.39.37c-.079.098-.079.255 0 .333L4.112 5.25.578 8.805c-.078.078-.078.234 0 .332l.39.37a.225.225 0 00.333 0l4.101-4.081a.264.264 0 000-.332L1.301 1.012a.225.225 0 00-.332 0z"
        ></path>
      </svg>
    );
  }

  if (name === 'trash') {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
      </svg>
    );
  }

  if (name === 'vote') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className={className}
      >
        <path
          fill="#FDCA2A"
          d="M9.084 1.066A1.01 1.01 0 0110 .5c.364 0 .729.189.916.566l2.537 5.107 5.671.819c.838.12 1.173 1.144.566 1.731l-4.104 3.975.97 5.613c.142.83-.734 1.462-1.483 1.07L10 16.731l-5.073 2.65c-.75.392-1.625-.24-1.482-1.07l.969-5.613L.31 8.723c-.607-.587-.272-1.61.566-1.731l5.671-.82 2.537-5.106z"
        ></path>
      </svg>
    );
  }

  if (name === 'vote_null') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className={className}
      >
        <path
          fill="#DBDEDF"
          d="M9.084 1.066A1.01 1.01 0 0110 .5c.364 0 .729.189.916.566l2.537 5.107 5.671.819c.838.12 1.173 1.144.566 1.731l-4.104 3.975.97 5.613c.142.83-.734 1.462-1.483 1.07L10 16.731l-5.073 2.65c-.75.392-1.625-.24-1.482-1.07l.969-5.613L.31 8.723c-.607-.587-.272-1.61.566-1.731l5.671-.82 2.537-5.106z"
        ></path>
      </svg>
    );
  }

  if (name === 'border_menu') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="89"
        height="10"
        fill="none"
        viewBox="0 0 83 4"
        className={className}
      >
        <path fill="#0098A6" d="M0 0h83a4 4 0 01-4 4H4a4 4 0 01-4-4z"></path>
      </svg>
    );
  }

  if (name === 'search') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className={className}
      >
        <path
          fill="#343A3B"
          d="M14.883 14.615l-3.545-3.545c-.088-.058-.176-.117-.264-.117h-.38a6.135 6.135 0 001.493-3.984c0-3.34-2.753-6.094-6.093-6.094C2.724.875 0 3.629 0 6.969a6.09 6.09 0 006.094 6.093 6.17 6.17 0 003.984-1.464v.38c0 .088.03.176.088.264l3.545 3.545c.146.147.38.147.498 0l.674-.674c.146-.117.146-.351 0-.498zm-8.79-2.959A4.664 4.664 0 011.407 6.97 4.682 4.682 0 016.094 2.28 4.701 4.701 0 0110.78 6.97a4.682 4.682 0 01-4.687 4.687z"
        ></path>
      </svg>
    );
  }

  return null;
};

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[926],{3926:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(7294),l=r(1636),s=r(5989),a=r(1888),o=r(9572),i=r(5893),c=["label","name","className","errors"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const f=function(e){var t=e.label,r=e.name,n=e.className,l=e.errors,s=void 0===l?[]:l,a=h(e,c);return(0,i.jsxs)("div",{className:"flex items-stretch h-7 mb-3",children:[(0,i.jsx)("div",{className:"w-12 self-center",children:(0,i.jsxs)("label",{htmlFor:r,className:"mt-1 font-bold text-sm content-center\t",children:[t,":"]})}),(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("input",m({id:r,name:r,className:"".concat(n," ").concat(s.length?"error":""," ","border border-black rounded p-1 placeholder-shown:border-black focus:outline-none")},a)),s&&(0,i.jsx)("div",{className:"form-error",children:s})]})]})};var x=r(3616),v=["label","name","className","errors"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const w=function(e){var t=e.label,r=e.name,l=e.className,s=e.errors,a=void 0===s?[]:s,o=g(e,v);return(0,n.useEffect)((function(){var e=document.getElementById(r);e&&new x.Z(e,{format:"dd/mm/yyyy"})}),[]),(0,i.jsxs)("div",{className:"flex items-stretch h-7 mb-3",children:[(0,i.jsx)("div",{className:"self-center w-1/3 ",children:(0,i.jsxs)("label",{htmlFor:r,className:"mt-1 font-bold text-sm content-center\t",children:[t,":"]})}),(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("input",j({type:"text",id:r,name:r,className:"".concat(l," ").concat(a.length?"error":""," ","border border-black rounded p-1 placeholder-shown:border-black focus:outline-none")},o)),a&&(0,i.jsx)("div",{className:"form-error",children:a})]})]})};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const O=function(e){var t=e.numberOfStars,r=e.onVoteSubmit,l=(0,i.jsx)(a.Z,{name:"vote"}),s=(0,i.jsx)(a.Z,{name:"vote_null"}),o=y((0,n.useState)(function(){var e=[];t<=1?t=0:t--;for(var r=t;r>=0;r--)e.push(s);return e}()),2),c=o[0],u=o[1],m=(0,n.useRef)(c.map((function(){return(0,n.createRef)()})));return(0,i.jsx)("ul",{className:"flex my-2",children:c.map((function(e,n){return(0,i.jsx)("li",{className:"cursor-pointer inline mr-1",ref:m.current[n],onClick:function(){return function(e){var n=m.current[e].current.value,a=n++,o=[];t<=1&&(t=0);for(var i=t;i>=0;i--)a>=0?o.push(l):o.push(s),a--;u(o),r(n)}(n)},value:n,children:e},n)}))})};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=function(e){var t=e.text,r=e.onClick;return(0,i.jsx)("button",{type:"button",className:"px-4 py-1 text-xs font-medium text-white bg-orange-600 rounded-sm focus:outline-none hover:bg-orange-100",onClick:r,children:t})};const C=function(e){var t=e.className,r=e.name,l=e.label,s=e.accept,a=e.errors,o=void 0===a?[]:a,c=e.onChange,u=(0,n.useRef)(),m=k((0,n.useState)(null),2),d=m[0],h=m[1],f=k((0,n.useState)("/img/book-cover-404.jpg"),2),x=f[0],v=f[1];return(0,i.jsxs)("div",{className:t,children:[!d&&(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsxs)("label",{className:"font-bold text-sm content-center",htmlFor:r,children:[l,":"]}),(0,i.jsxs)("div",{className:"mt-2 border border-black rounded placeholder-shown:border-black focus:outline-none p-0 ".concat(o.length&&"error"),children:[(0,i.jsx)("input",{id:r,ref:u,accept:s,type:"file",className:"hidden",onChange:function(e){var t=new FileReader,r=e.target.files[0];t.onloadend=function(){v(t.result)},t.readAsDataURL(r),h(r),c(r)}}),(0,i.jsx)("div",{className:"p-2",children:(0,i.jsx)(A,{text:"Procurar",onClick:function(){u.current.click()}})})]})]}),d&&(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:x,className:"mt-2 mb-5 rounded-lg shadow-xl",width:"152",height:"202"}),(0,i.jsx)(A,{text:"Remover",onClick:function(){h(null),c(null)}})]}),o.length>0&&(0,i.jsx)("div",{className:"form-error",children:o})]})},z=function(){return(0,i.jsxs)("ul",{className:"flex items-center mb-2",children:[(0,i.jsx)("li",{className:"pr-2 py-2",children:(0,i.jsx)(l.ZQ,{href:route("dashboard"),className:"flex items-center text-black hover:text-gray-600",children:(0,i.jsx)(a.Z,{name:"home"})})}),(0,i.jsx)("li",{className:"pr-2 py-2",children:(0,i.jsxs)("div",{className:"flex items-center ",children:[(0,i.jsx)(a.Z,{name:"cheveron-right",className:"mr-2 text-black hover:text-gray-600"}),(0,i.jsx)(l.ZQ,{href:route("livros"),children:"Meus livros"})]})}),(0,i.jsx)("li",{className:"pr-2 py-2",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(a.Z,{name:"cheveron-right",className:"mr-2"}),"Adicionar livro"]})})]})};var L=r(8537),P=r(9669),I=r.n(P);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=function(){var e=(0,l.qt)().props.auth,t=(0,l.cI)({title:"",author:"",pages:"",description:"",rating:"",started_at:"",finished_at:"",photo:"",user_id:e.user.id}),r=t.data,s=t.setData,c=t.errors,u=(t.post,t.processing,M((0,n.useState)([]),2)),m=u[0],d=u[1],h=M((0,n.useState)([]),2),x=h[0],v=h[1],b=M((0,n.useState)(""),2),j=b[0],p=b[1],g=M((0,n.useState)(!1),2),y=g[0],N=g[1],k=M((0,n.useState)(!1),2),S=k[0],A=k[1],P=M((0,n.useState)(!1),2),Z=P[0],V=P[1];(0,n.useEffect)((function(){var e=setTimeout((function(){!(""===j)&&I().get("https://www.googleapis.com/books/v1/volumes?q="+j+"&key=&maxResults=3").then((function(e){void 0===e.data.items||0===e.data.items.length?(v([]),N(!1)):(v(e.data.items),N(!0))}))}),500);return function(){clearTimeout(e)}}),[j]);var D=function(e){};return(0,i.jsxs)("div",{className:"container mx-auto pt-4",children:[(0,i.jsx)(z,{}),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("h2",{className:"font-Lato text-2xl",children:"Adicionar livro"})}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("object"),p(e.target.s_book.value)},children:[(0,i.jsx)("div",{children:(0,i.jsx)("label",{htmlFor:"s_book",className:"font-Lato text-base font-bold",children:"Informe o nome do livro"})}),(0,i.jsxs)("div",{className:"relative w-40 mt-3",children:[(0,i.jsx)(a.Z,{name:"search",className:"absolute top-1/3 transform -translate-y-1 right-2"}),(0,i.jsx)("input",{id:"s_book",name:"s_book",className:"border border-black rounded p-1 placeholder-shown:border-black focus:outline-none w-full pr-6",onChange:function(e){e.preventDefault(),e.target.value||""!==e.target.value?p(e.target.value):p(""),N(!1)},value:j,placeholder:"Pesquisar o livro",type:"text"})]})]}),(0,i.jsxs)("div",{className:"flex items-center z-0 my-2 cursor-pointer",children:[(0,i.jsx)(l.ZQ,{href:route("dashboard"),className:"mr-1 text-orange-100 hover:text-orange-600",children:(0,i.jsx)(a.Z,{name:"plus"})}),(0,i.jsx)("strong",{onClick:function(){A((function(e){return!e})),Z&&V((function(e){return!e}))},className:" text-orange-100 hover:text-orange-600 font-Lato text-base font-bold",children:"Preencher manualmente"})]}),y&&(0,i.jsx)("div",{className:"grid grid-cols-9 font-Lato absolute -mt-10",children:(0,i.jsx)("div",{className:"col-start-1 col-end-4 mb-6 bg-white",children:(0,i.jsx)("div",{className:"border rounded-sm p-3 shadow font-Lato ",children:x.map((function(e){return(0,i.jsxs)("div",{onClick:function(){return function(e){N(!1),p(""),d(e),A(!1),V(!0)}(e)},children:[(0,i.jsxs)("div",{className:"flex cursor-pointer",children:[(0,i.jsx)("div",{className:"col-start-1",children:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail&&(0,i.jsx)("img",{src:e.volumeInfo.imageLinks.smallThumbnail,className:"border border-gray-300 rounded",width:"50",height:"60"})}),(0,i.jsxs)("div",{className:"col-start-2 col-end-5 pl-2",children:[(0,i.jsx)("div",{className:"text-sm font-normal text-black",children:e.volumeInfo.title}),(0,i.jsx)("div",{className:"text-xs font-bold text-blue-100 mb-2",children:e.volumeInfo.authors}),(0,i.jsx)("div",{className:"text-xs text-gray-600",children:(0,L.p)(e.volumeInfo.publishedDate)})]})]}),e!==x[2]&&(0,i.jsx)(o.Z,{className:"border-b border-1 my-3"})]},"".concat(e.selfLink," . ").concat(e.id))}))})})}),Z&&(0,i.jsxs)("form",{className:"grid grid-cols-9 pt-4 font-Lato",children:[(0,i.jsx)("div",{className:"col-start-1",children:m.volumeInfo.imageLinks&&m.volumeInfo.imageLinks.smallThumbnail&&(0,i.jsx)("img",{src:m.volumeInfo.imageLinks.smallThumbnail,className:" rounded-lg shadow-xl",width:"152",height:"202"})}),(0,i.jsxs)("div",{className:"col-start-2 col-end-5 mb-6",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h2",{className:"mb-2 font-normal text-base",children:m.volumeInfo.title}),(0,i.jsxs)("div",{className:"flex mb-5",children:[(0,i.jsx)("strong",{className:"text-blue-100 font-bold text-xs",children:m.volumeInfo.authors}),m.volumeInfo.pageCount&&(0,i.jsx)("strong",{className:"text-blue-100 font-bold text-xs ml-auto self-end",children:m.volumeInfo.pageCount+" páginas"})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)(w,{name:"started_at",label:"Começou a ler em",className:"w-full "}),(0,i.jsx)(w,{name:"finished_at",label:"Terminou de ler em",className:"w-full "})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("strong",{children:"Sua avaliação"}),(0,i.jsx)(O,{numberOfStars:"5",onVoteSubmit:D})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h3",{className:"text-lg font-normal mb-1",children:"Escreva uma Resenha"}),(0,i.jsx)("strong",{className:"text-xs font-bold mb-1",children:"Resenha"}),(0,i.jsx)("textarea",{placeholder:"Escrever",className:"border-2 rounded p-1 placeholder-shown:border-gray-500 focus:outline-none w-full h-32 mb-3"})]}),(0,i.jsx)(l.ZQ,{className:"btn-orange table w-32 text-center rounded-full my-2 p-2 font-OpenSans font-semibold text-md",href:route("livros.create"),children:"Cadastrar"})]})]}),S&&(0,i.jsxs)("form",{className:"grid grid-cols-9 pt-4 font-Lato",children:[(0,i.jsx)("div",{className:"col-start-1",children:(0,i.jsx)(C,{className:"mb-3 w-32",label:"Capa do livro",name:"photo",accept:"image/*",errors:c.photo,value:r.photo,onChange:function(e){return s("photo",e)}})}),(0,i.jsxs)("div",{className:"col-start-2 col-end-5 mb-6",children:[(0,i.jsx)(f,{label:"Nome",name:"title",id:"title",className:"w-full ",type:"text"}),(0,i.jsx)(f,{label:"Autor",name:"author",id:"author",className:"w-full ",type:"text"}),(0,i.jsx)(f,{label:"Páginas",name:"pages",id:"pages",className:"w-full ",type:"number"}),(0,i.jsx)(w,{name:"started_at",label:"Começou a ler em",className:"w-full "}),(0,i.jsx)(w,{name:"finished_at",label:"Terminou de ler em",className:"w-full "}),(0,i.jsxs)("div",{className:"mt-6 mb-4",children:[(0,i.jsx)("strong",{children:"Sua avaliação"}),(0,i.jsx)(O,{numberOfStars:"5",onVoteSubmit:D})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h3",{className:"text-lg font-normal mb-1",children:"Escreva uma Resenha"}),(0,i.jsx)("strong",{className:"text-xs font-bold mb-1",children:"Resenha"}),(0,i.jsx)("textarea",{placeholder:"Escrever",className:"border rounded p-1 placeholder-shown:border-gray-500 focus:outline-none w-full h-32 mb-3"})]}),(0,i.jsx)(l.ZQ,{className:"btn-orange table w-32 text-center rounded-full my-2 p-2 font-OpenSans font-semibold text-md",href:route("livros.create"),children:"Cadastrar"})]})]})]})};V.layout=function(e){return(0,i.jsx)(s.Z,{title:"Adicionar livro",children:e})};const D=V},5989:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(7294),l=r(5482),s=r(1636),a=r(4184),o=r.n(a),i=r(5893);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(){return(0,i.jsx)("svg",{className:"ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,i.jsx)("polygon",{points:"0 11 2 9 7 14 18 3 20 5 7 18"})})},d=function(){return(0,i.jsx)("svg",{className:"ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,i.jsx)("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"})})},h=function(e){var t=e.color,r=e.onClick,n=o()("block  w-2 h-2 fill-current",{"text-red-700 group-hover:text-red-800":"red"===t,"text-green-700 group-hover:text-green-800":"green"===t});return(0,i.jsx)("button",{onClick:r,type:"button",className:"focus:outline-none group mr-2 p-2",children:(0,i.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:"235.908",height:"235.908",viewBox:"278.046 126.846 235.908 235.908",children:(0,i.jsx)("path",{d:"M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"})})})};const f=function(){var e=c((0,n.useState)(!1),2),t=e[0],r=e[1],l=(0,s.qt)().props,a=l.flash,o=l.errors,u=Object.keys(o).length;return(0,n.useEffect)((function(){r(!0)}),[a,o]),(0,i.jsxs)("div",{className:"container mx-auto mt-2",children:[a.success&&t&&(0,i.jsxs)("div",{className:"mb-8 flex items-center justify-between bg-green-500 rounded max-w-3xl",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(m,{}),(0,i.jsx)("div",{className:"py-4 text-white text-sm font-medium",children:a.success})]}),(0,i.jsx)(h,{onClick:function(){return r(!1)},color:"green"})]}),(a.error||u>0)&&t&&(0,i.jsxs)("div",{className:"mb-8 flex items-center justify-between bg-red-500 rounded max-w-3xl",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(d,{}),(0,i.jsxs)("div",{className:"py-4 text-white text-sm font-medium",children:[a.error&&a.error,1===u&&"Há um erro no formulário",u>1&&"Há  ".concat(u," erros no formulário.")]})]}),(0,i.jsx)(h,{onClick:function(){return r(!1)},color:"red"})]})]})};var x=r(2541);const v=function(e){var t=e.link,r=e.text,n=e.className;return(0,i.jsx)(s.ZQ,{className:n,href:t,children:r})},b=function(e){var t=e.items;return(0,i.jsx)("ul",{className:"font-Open-sans table mx-auto",children:t.map((function(e){return(0,i.jsx)("li",{className:"mb-4",children:(0,i.jsx)(v,{className:e===t[0]?"font-bold text-black hover:text-gray-600":"text-black hover:text-gray-600",text:e.text,link:e.link})},e.text)}))})},j=function(){return(0,i.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)("label",{className:"form-label font-bold mb-4",htmlFor:"email",children:"Inscreva-se"}),(0,i.jsx)("input",{className:"border rounded p-1 placeholder-shown:border-gray-500 focus:outline-none  mb-3",name:"email",type:"email",placeholder:"Seu e-mail",onChange:function(e){return setData("email",e.target.value)}}),(0,i.jsx)("button",{type:"submit",className:"btn-blue text-center rounded-full p-2 font-OpenSans font-semibold text-xs",children:"Inscrever"})]})})},p=function(){return(0,i.jsx)("div",{className:"container mx-auto pt-3",children:(0,i.jsxs)("div",{className:"flex items-start justify-around",children:[(0,i.jsxs)("div",{className:"flex-none",children:[(0,i.jsx)(s.ZQ,{className:"mt-1 mb-2",href:"/",children:(0,i.jsx)(x.Z,{width:"161",height:"37"})}),(0,i.jsxs)("p",{className:"font-Lato mt-3",children:["Reading.com é um produto fictício para ",(0,i.jsx)("br",{}),"ajudar no processo seletivo para o time ",(0,i.jsx)("br",{}),"de Produto & Desenvolvimento da ",(0,i.jsx)("br",{})," Hivecloud."]})]}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(b,{items:[{text:"Reading.com",link:"#"},{text:"Meus Livros",link:"#"},{text:"Comunidade",link:"#"},{text:"Novidades",link:"#"},{text:"Aplicativos",link:"#"}]})}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(b,{items:[{text:"Sobre nós",link:"#"},{text:"Blog",link:"#"},{text:"Nossa missão",link:"#"},{text:"Contato",link:"#"},{text:"Carreiras",link:"#"}]})}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(j,{})})]})})},g=function(e){var t=e.link,r=e.text,n=e.className;return(0,i.jsx)(s.ZQ,{className:n,href:t,children:r})},w=function(e){var t=e.items;return(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsx)("li",{className:"inline ",children:(0,i.jsx)(g,{className:e===t[0]?"px-2 text-gray-600 text-xs":"px-2 text-gray-600 border-l-2 text-xs",text:e.text,link:e.link})},e.text)}))})};var y=r(1888);const N=function(e){e.items;return(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{className:"font-OpenSans font-semibold text-sm",children:["PT",(0,i.jsx)(y.Z,{name:"cheveron-up",className:"inline ml-2"})]})})},O=function(){return(0,i.jsx)("div",{className:"container mx-auto",children:(0,i.jsxs)("div",{className:"flex flex-row items-stretch font-OpenSans",children:[(0,i.jsx)("div",{className:"basis-1/6 self-end",children:(0,i.jsx)("p",{className:"text-xs text-gray-500",children:"Copyright © 2022 Reading All rights reserved"})}),(0,i.jsx)("div",{className:"basis-2/6 self-end",children:(0,i.jsx)(w,{items:[{text:"Política de privacidade",link:"#"},{text:"Termos de uso",link:"#"},{text:"Segurança",link:"#"},{text:"Legal",link:"#"},{text:"Site map",link:"#"}]})}),(0,i.jsx)("div",{className:"self-end ml-auto",children:(0,i.jsx)(N,{})})]})})},k=function(){return(0,i.jsxs)("div",{className:"container mx-auto py-2",children:[(0,i.jsx)("hr",{className:"h-2 border-t-2"}),(0,i.jsx)(p,{}),(0,i.jsx)("hr",{className:"h-2 border-t-2"}),(0,i.jsx)(O,{})]})},S=function(e){var t=e.title,r=e.link;return(0,i.jsxs)("li",{className:"border-t-4 py-2",children:[(0,i.jsx)(y.Z,{name:"border_menu",className:"absolute -top-1"}),(0,i.jsx)(s.ZQ,{href:route(r),className:"font-OpenSans text-base text-blue-100 hover:text-blue-600 text-center",children:t})]})},A=function(){return(0,i.jsx)("nav",{className:"ml-10",children:(0,i.jsx)("ul",{className:"h-full",children:(0,i.jsx)(S,{title:"Meus Livros",link:"livros"})})})},C=function(e){e.className;return(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(s.ZQ,{className:"mt-3",href:"/",children:(0,i.jsx)(x.Z,{width:"164",height:"32"})}),(0,i.jsx)(A,{})]})};function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const P=function(){var e=(0,s.qt)().props.auth,t=z((0,n.useState)(!1),2),r=t[0],l=t[1],a="owner"===e.user.role;return(0,i.jsx)("div",{className:"container mx-auto",children:(0,i.jsxs)("div",{className:"flex items-center justify-between w-full font-OpenSans",children:[(0,i.jsx)(C,{}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsxs)("div",{className:"flex items-center cursor-pointer select-none group",onClick:function(){return l(!0)},children:[e.user.photo?(0,i.jsx)("img",{className:"block w-8 h-8 mr-2 border-2 rounded-full",src:e.user.photo}):(0,i.jsx)("img",{className:"block w-8 h-8 mr-2 border-2 rounded-full",src:"/img/profile.jpg"}),(0,i.jsx)(y.Z,{name:"cheveron-down"})]}),(0,i.jsxs)("div",{className:r?"":"hidden",children:[(0,i.jsxs)("div",{className:"absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl",children:[(0,i.jsx)(s.ZQ,{href:route("users.edit",e.user.id),className:"block px-6 py-2 hover:bg-orange-100 hover:text-white",onClick:function(){return l(!1)},children:"Perfil"}),a&&(0,i.jsx)(s.ZQ,{href:route("users"),className:"block px-6 py-2 hover:bg-orange-100 hover:text-white",onClick:function(){return l(!1)},children:"Usuários"}),(0,i.jsx)(s.ZQ,{as:"button",href:route("logout"),className:"block w-full px-6 py-2 text-left focus:outline-none hover:bg-orange-100 hover:text-white",method:"post",children:"Sair"})]}),(0,i.jsx)("div",{onClick:function(){l(!1)},className:"fixed inset-0 z-10 bg-black opacity-25"})]})]})]})})};var I=r(9572);function M(e){var t=e.title,r=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ZP,{titleTemplate:"%s | Reading.com",title:t}),(0,i.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,i.jsx)("div",{className:"md:flex",children:(0,i.jsx)(P,{})}),(0,i.jsxs)("div",{className:"flex-grow",children:[(0,i.jsx)(I.Z,{className:"h-2 border-t-2"}),(0,i.jsx)(f,{}),r]}),(0,i.jsx)(k,{})]})]})}},9572:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(5893),l=["className"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const i=function(e){var t=e.className,r=o(e,l);return(0,n.jsx)("hr",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:t},r))}},1888:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var n=r(5893);const l=function(e){var t=e.name,r=e.className;return"home"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",fill:"none",viewBox:"0 0 12 11",children:(0,n.jsx)("path",{fill:"#343A3B",d:"M11.508 4.938l-1.133-1.016V1.344a.475.475 0 00-.469-.469H8.031a.463.463 0 00-.469.469v.058L6.508.465A.846.846 0 006 .25a.852.852 0 00-.527.215l-5 4.473a.444.444 0 00-.118.234c0 .078.04.176.098.215l.195.234a.36.36 0 00.235.098c.058 0 .156-.02.215-.078l.507-.47V9.47c0 .449.352.781.782.781h7.207c.43 0 .781-.332.781-.781V5.172l.508.469a.326.326 0 00.215.078.36.36 0 00.234-.098l.215-.234a.356.356 0 00.078-.215.444.444 0 00-.117-.234zm-2.07 4.375H2.561V4.332L6 1.246l3.438 3.086v4.98zm0-6.231l-.938-.84v-.43h.938v1.27zM4.75 4.312v1.875c0 .176.137.313.313.313h1.875a.321.321 0 00.312-.313V4.313A.336.336 0 006.937 4H5.063a.321.321 0 00-.312.313z"})}):"plus"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 12 12",children:(0,n.jsx)("path",{fill:"#F37920",d:"M11.5 5H7V.5c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5V5H.5c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5H5v4.5c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5V7h4.5c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5z"})}):"cheveron-up"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"8",fill:"none",viewBox:"0 0 12 8",className:r,children:(0,n.jsx)("path",{fill:"#495055",d:"M10.24 7.18L6 2.94 1.76 7.18.7 6.12 6 .82l5.3 5.3-1.06 1.06z"})}):"cheveron-down"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"4",fill:"none",viewBox:"0 0 6 4",children:(0,n.jsx)("path",{fill:"#495055",d:"M5.566.344H.434C.281.344.194.506.29.617l2.566 2.975a.195.195 0 00.289 0L5.71.617c.096-.11.01-.273-.144-.273z"})}):"cheveron-right"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"10",fill:"none",viewBox:"0 0 6 10",className:r,children:(0,n.jsx)("path",{fill:"#8F9EA1",d:"M.969 1.012l-.39.37c-.079.098-.079.255 0 .333L4.112 5.25.578 8.805c-.078.078-.078.234 0 .332l.39.37a.225.225 0 00.333 0l4.101-4.081a.264.264 0 000-.332L1.301 1.012a.225.225 0 00-.332 0z"})}):"trash"===t?(0,n.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,n.jsx)("path",{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"})}):"vote"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20",className:r,children:(0,n.jsx)("path",{fill:"#FDCA2A",d:"M9.084 1.066A1.01 1.01 0 0110 .5c.364 0 .729.189.916.566l2.537 5.107 5.671.819c.838.12 1.173 1.144.566 1.731l-4.104 3.975.97 5.613c.142.83-.734 1.462-1.483 1.07L10 16.731l-5.073 2.65c-.75.392-1.625-.24-1.482-1.07l.969-5.613L.31 8.723c-.607-.587-.272-1.61.566-1.731l5.671-.82 2.537-5.106z"})}):"vote_null"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20",className:r,children:(0,n.jsx)("path",{fill:"#DBDEDF",d:"M9.084 1.066A1.01 1.01 0 0110 .5c.364 0 .729.189.916.566l2.537 5.107 5.671.819c.838.12 1.173 1.144.566 1.731l-4.104 3.975.97 5.613c.142.83-.734 1.462-1.483 1.07L10 16.731l-5.073 2.65c-.75.392-1.625-.24-1.482-1.07l.969-5.613L.31 8.723c-.607-.587-.272-1.61.566-1.731l5.671-.82 2.537-5.106z"})}):"border_menu"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"89",height:"10",fill:"none",viewBox:"0 0 83 4",className:r,children:(0,n.jsx)("path",{fill:"#0098A6",d:"M0 0h83a4 4 0 01-4 4H4a4 4 0 01-4-4z"})}):"search"===t?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",className:r,children:(0,n.jsx)("path",{fill:"#343A3B",d:"M14.883 14.615l-3.545-3.545c-.088-.058-.176-.117-.264-.117h-.38a6.135 6.135 0 001.493-3.984c0-3.34-2.753-6.094-6.093-6.094C2.724.875 0 3.629 0 6.969a6.09 6.09 0 006.094 6.093 6.17 6.17 0 003.984-1.464v.38c0 .088.03.176.088.264l3.545 3.545c.146.147.38.147.498 0l.674-.674c.146-.117.146-.351 0-.498zm-8.79-2.959A4.664 4.664 0 011.407 6.97 4.682 4.682 0 016.094 2.28 4.701 4.701 0 0110.78 6.97a4.682 4.682 0 01-4.687 4.687z"})}):null}},2541:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var n=r(5893);const l=function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"163",height:"21",fill:"none",viewBox:"0 0 163 21",children:[(0,n.jsx)("path",{fill:"#F37920",d:"M21.914.5c-.469 0-6.055.273-9.414 2.227C9.102.773 3.516.5 3.047.5 1.367.5 0 1.867 0 3.508v12.265c0 1.563 1.25 2.891 2.852 2.97 1.445.077 5.039.39 7.343 1.523.313.156.664.234 1.016.234h2.539c.352 0 .703-.078 1.016-.234 2.304-1.133 5.898-1.446 7.343-1.524C23.711 18.664 25 17.336 25 15.773V3.508C25 1.868 23.594.5 21.914.5zM11.562 17.648c0 .43-.43.743-.859.586-2.5-.976-6.015-1.25-7.734-1.367-.625-.039-1.094-.508-1.094-1.094V3.508c0-.625.508-1.133 1.172-1.133.742.04 4.922.313 7.734 1.602.469.195.742.664.742 1.132l.04 4.141v8.398zm11.563-1.875c0 .586-.508 1.055-1.133 1.094-1.719.117-5.234.39-7.734 1.367-.43.157-.82-.156-.82-.586V5.11c0-.47.273-.938.742-1.133 2.812-1.29 6.992-1.563 7.734-1.602.664 0 1.211.508 1.211 1.133v12.265z"}),(0,n.jsx)("path",{fill:"#0098A6",d:"M41.396 18l-3.6-5.44c1.82-.16 3.48-1.48 3.48-3.88 0-2.46-1.76-4.02-4.2-4.02h-5.36V18h1.66v-5.3h2.68l3.38 5.3h1.96zm-4.52-6.76h-3.5v-5.1h3.5c1.58 0 2.68 1.02 2.68 2.54 0 1.5-1.1 2.56-2.68 2.56zM52.644 18v-1.48h-7.08v-4.6h6.94v-1.48h-6.94v-4.3h7.08V4.66h-8.74V18h8.74zm14.066 0L61.35 4.66h-2.06L53.91 18h1.9l1.18-2.98h6.64L64.81 18h1.9zm-3.56-4.44h-5.66l2.82-7.2 2.84 7.2zM73.014 18c4.16 0 6.84-2.86 6.84-6.66 0-3.78-2.68-6.68-6.84-6.68h-4.56V18h4.56zm0-1.48h-2.9V6.14h2.9c3.3 0 5.12 2.32 5.12 5.2 0 2.86-1.88 5.18-5.12 5.18zM84.118 18V4.66h-1.66V18h1.66zm14.166 0V4.66h-1.66v10.42l-7.68-10.42h-1.7V18h1.66V7.36L96.684 18h1.6zm9.32.26c4.12 0 6.4-2.94 6.4-7.12h-7.28v1.48h5.48c-.32 2.2-1.74 4.14-4.48 4.14-2.92 0-5.14-2.26-5.14-5.42 0-3.2 2.22-5.42 5.14-5.42 1.6 0 3.02.76 3.86 1.84l1.32-.84c-1.16-1.44-2.8-2.48-5.18-2.48-3.8 0-6.86 2.74-6.86 6.9 0 4.14 3.06 6.92 6.74 6.92zm8.798-.06c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1zm10.208.04c2.36 0 3.96-1.12 5.08-2.66l-1.4-.76a4.538 4.538 0 01-3.68 1.94c-2.92 0-5.14-2.26-5.14-5.42 0-3.2 2.22-5.42 5.14-5.42 1.52 0 2.92.8 3.68 1.94l1.38-.78c-1.06-1.52-2.7-2.64-5.06-2.64-3.84 0-6.86 2.8-6.86 6.9 0 4.1 3.02 6.9 6.86 6.9zm13.276 0c3.94 0 6.64-2.96 6.64-6.9 0-3.94-2.7-6.9-6.64-6.9-3.94 0-6.62 2.96-6.62 6.9 0 3.94 2.68 6.9 6.62 6.9zm0-1.48c-3 0-4.9-2.32-4.9-5.42 0-3.12 1.9-5.42 4.9-5.42 2.98 0 4.92 2.3 4.92 5.42 0 3.1-1.94 5.42-4.92 5.42zM162.159 18V4.66h-2.38l-4.14 10.28-4.16-10.28h-2.38V18h1.66V6.78l4.54 11.22h.68l4.52-11.22V18h1.66z"})]})}},8537:(e,t,r)=>{function n(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]}function l(e){var t=new Date(e),r=t.getDate().toString(),n=(t.getMonth()+1).toString();return(1==r.length?"0"+r:r)+"/"+(1==n.length?"0"+n:n)+"/"+t.getFullYear()}r.d(t,{G:()=>n,p:()=>l})}}]);
//# sourceMappingURL=926.js.map?id=e1d77f13f7594b17
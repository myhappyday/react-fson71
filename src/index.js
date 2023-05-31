// ==================== Module 1 Lesson 1 ====================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import users from './data.json';
// import Text from './components/Text';

// import { App } from 'components/App';
// import './index.css';

// const div1 = document.createElement('div');
// div1.id = '123';
// div1.className = 'qwerty';
// console.log('div1', div1);

// const root = document.getElementById('root');

// const p = React.createElement('p', { id: 'text', children: 'Text content' });
// const p2 = React.createElement('p', {
//   id: 'text2',
//   children: 'Text content 2',
// });

// const p3 = (
//   <p id="text3" className="qwerty" data-item="qwerty">
//     Text content 3
//   </p>
// );
// console.log('p', p);
// console.log('p3', p3);

// const div = React.createElement('div', {
//   id: '123',
//   className: 'qwerty',
//   // children: ['Hello', 'From React', p],
//   children: [p, p2],
// });

// const p = (
//   <p id="text" className="qwerty" data-item="qwerty">
//     Text content
//   </p>
// );

// const div = (
//   <div id="123" className="qwerty">
//     {p}
//   </div>
// );

// const name = 'Alex';

// const div = (
//   <div id="123" className="qwerty">
//     <p id="text" className="qwerty" data-item="qwerty">
//       {name} Hello {name}
//       {2 + 2}
//     </p>
//   </div>
// );

// ReactDOM.createRoot(root).render(div);

// console.log('p', p);
// console.log('div', div);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   React.createElement('div')
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>{/* <App /> */}</React.StrictMode>
// );

// const users = [
//   { name: 'Alex', age: 30 },
//   { name: 'Alex1', age: 30 },
//   { name: 'Alex2', age: 30 },
//   { name: 'Alex3', age: 30 },
// ];

// const result = users.map(el => {
//   return (
//     // <React.Fragment>
//     //   <p>{el.name}</p>
//     //   <p>age: {el.age}</p>
//     // </React.Fragment>
//     <>
//       <p>{el.name}</p>
//       <p>age: {el.age}</p>
//     </>
//   );
// });

// console.log('result', result);
// ReactDOM.createRoot(document.getElementById('root')).render(result);

// const Card = () =>
//   users.map(el => {
//     return (
//       <div key={el.id} className="card" style={{ width: '18rem' }}>
//         <img
//           src="https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_1280.jpg"
//           className="card-img-top"
//           alt="..."
//         />
//         <div className="card-body">
//           {/* <h5 className="card-title">{el.name}</h5> */}
//           {/* {Text({ name: el.name })} */}
//           <Text name={el.name} email={el.email} />
//           <p className="card-text">{el.email}</p>
//           <a href={el.website} className="btn btn-primary">
//             {el.website}
//           </a>
//         </div>
//       </div>
//     );
//   });

// // ReactDOM.createRoot(document.getElementById('root')).render(card());
// ReactDOM.createRoot(document.getElementById('root')).render(<Card />);

// ==================== Module 1 Lesson 2 ====================

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ==================== Module 1 Lesson 1 ====================

// const Text = props => {
//   return <h5>{props.name}</h5>;
// };

// const Text = ({ name }) => {
//   return <h5>{name}</h5>;
// };

// export default Text;

// ==================== Module 1 Lesson 2 ====================

// inline style
// const styled = { color: 'red', backgroundColor: 'darkgray' };

// const Text = ({ children }) => {
//   console.log('children', children);
//   return (
//     // <h5 style={{ color: 'red', backgroundColor: 'darkgray' }}>{children}</h5>
//     <h5 style={styled}>{children}</h5>
//   );
// };

// vanilla scc
// import './Text.css';
// const Text = ({ children }) => {
//   return <h5 className="title-name">{children}</h5>;
// };

// module css
// import cssModule from './Text.module.css';

// const Text = ({ children }) => {
//   console.log('cssModule', cssModule);
//   return (
//     <>
//       <h5 className={cssModule['title-name']}>{children}</h5>
//       <h5 className={cssModule.titleName}>{children}</h5>
//       <h5 className={`${cssModule.titleName} ${cssModule.module}`}>
//         {children}
//       </h5>
//     </>
//   );
// };

// import cssModule from './Text.module.css';

// const Text = ({ children, isOnline }) => {
//   console.log('cssModule', cssModule);
//   return (
//     <h5
//       className={
//         isOnline
//           ? `${cssModule.titleName} ${cssModule.online}`
//           : `${cssModule.titleName} ${cssModule.offline}`
//       }
//     >
//       {children}
//     </h5>
//   );
// };

// clsx

// import cssModule from './Text.module.css';
// import clsx from 'clsx';

// const Text = ({ children, isOnline }) => {
//   console.log('cssModule', cssModule);
//   return (
//     // <h5 className={clsx(cssModule.titleName, cssModule.online)}>{children}</h5>
//     <h5
//       // className={clsx(
//       //   cssModule.titleName,
//       //   isOnline ? cssModule.online : cssModule.offline
//       // )}
//       className={clsx(cssModule.titleName, { [cssModule.online]: isOnline })}
//     >
//       {children}
//     </h5>
//   );
// };

// css-in-JS

import { Header } from './Text.styled';

const Text = ({ children, isOnline }) => {
  return <Header isOn={isOnline}>{children}</Header>;
};

export default Text;

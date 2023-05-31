// ==================== Module 1 Lesson 1 ====================

// const Text = props => {
//   return <h5>{props.name}</h5>;
// };

// const Text = ({ name }) => {
//   return <h5>{name}</h5>;
// };

// export default Text;

// ==================== Module 1 Lesson 2 ====================

const Text = ({ children }) => {
  console.log('children', children);
  return <h5>{children}</h5>;
};

export default Text;

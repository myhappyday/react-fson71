// ==================== Module 1 Lesson 2 ====================

import Text from '../Text/Text';
import users from '../../data.json';

export const Card = () =>
  users.map(el => {
    // if (el.id % 2 === 0) {
    return (
      <div key={el.id} className="card" style={{ width: '18rem' }}>
        {/* Не рендеряться
        {false}
        {null}
        {undefined} */}
        {/* {el.id % 2 === 0 ? (
          <img
            src="https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_1280.jpg"
            className="card-img-top"
            alt="..."
          />
        ) : (
          <p>qwerty</p>
        )} */}
        {/* {el.id % 2 === 0 && ( */}
        <img
          src="https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_1280.jpg"
          className="card-img-top"
          alt="..."
        />
        {/* )} */}

        <div className="card-body">
          {/* <Text name={el.name} /> */}
          {/* <Text name={el.name}>
            <p>qwerty</p>
          </Text> */}

          <Text isOnline>{el.name}</Text>
          {/* <Text>{el.name}</Text>                                                                                                                                                                                                                                    */}
          <p className="card-text">{el.email}</p>
          <a href={el.website} className="btn btn-primary">
            {el.website}
          </a>
        </div>
      </div>
    );
    // }
    // return 'qwerty';
  });

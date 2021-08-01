import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import postAction from '../../actions/postAction';

import { PATHS } from '../../config';

const Posts = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.lists);

  useEffect(() => {
    dispatch(postAction.getPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <main className='d-flex justify-content-between'>
      <div
        className='border rounded overflow-scroll'
        style={{ maxHeight: '82.5vh' }}
      >
        <h1 className='bg-success text-center py-2 mb-0 sticky-top'>POSTS</h1>
        <div className='bg-secondary p-3'>
          {posts.map((item) => {
            return (
              <Card
                key={item.id}
                className='bg-danger mb-2'
                onClick={(e) => props.history.push(`${PATHS.POSTS}/${item.id}`)}
              >
                <Card.Body className='text-warning'>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className='text-truncate text-info'>
                    {item.body}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Posts;

import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import userAction from '../../actions/userAction';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.lists);
  const selectedUser = useSelector((state) => state.users.current);

  useEffect(() => {
    dispatch(userAction.getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <main className='d-flex justify-content-between'>
      <div
        className='w-50 border rounded overflow-scroll'
        style={{ maxHeight: '82.5vh' }}
      >
        <h1 className='bg-success text-center py-2 mb-0 sticky-top'>USERS</h1>
        <div className='bg-secondary p-3'>
          {users.map((item) => {
            return (
              <Card
                key={item.id}
                className='bg-danger mb-2'
                onClick={(e) => dispatch(userAction.setCurrentUser(item))}
              >
                <Card.Body>
                  <Card.Title className='text-light'>
                    Name: <span className='text-warning'>{item.name}</span>
                  </Card.Title>
                  <Card.Text className='text-light'>
                    Email: <span className='text-warning'>{item.email}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className='w-50 border rounded p-3 bg-dark'>
        <h1 className='text-center text-light bg-secondary rounded py-3'>
          Selected User
        </h1>
        <Card className='d-flex'>
          <Card.Body>
            {selectedUser.name ? (
              <div>
                <Card.Title className='text-warning fs-2'>
                  {selectedUser.name}
                </Card.Title>
                <Card.Subtitle className='text-muted mt-3 me-4'>
                  Email: {selectedUser.email}
                  <span className='float-end'>Phone: {selectedUser.phone}</span>
                </Card.Subtitle>
                <Card.Text className='text-muted mt-3 me-4'>
                  <span>Company: {selectedUser.company.name}</span>
                  <span className='float-end'>
                    Website: {selectedUser.website}
                  </span>
                  <br />
                  <span>
                    Address: {selectedUser.address.suite},
                    {selectedUser.address.street},{selectedUser.address.city}
                  </span>
                  <span className='float-end'>
                    Zipcode: {selectedUser.address.zipcode}
                  </span>
                </Card.Text>
              </div>
            ) : (
              <h3 className='text-muted'>No User Selected</h3>
            )}
          </Card.Body>
        </Card>
      </div>
    </main>
  );
};

export default Users;

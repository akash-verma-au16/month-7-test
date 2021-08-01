import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import postAction from '../../actions/postAction';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.current);

  useEffect(() => {
    dispatch(postAction.setCurrentPost(props.match.params.id));
    // eslint-disable-next-line
  }, [props.match.params.id]);

  return (
    <div className='container  mt-5' style={{ minHeight: '82.5vh' }}>
      <h1 className='text-center border rounded py-3 bg-success mb-0'>
        Selected Post
      </h1>
      <div className='bg-dark text-warning border container py-3 rounded px-5'>
        <h4 className='text-danger'>{selectedPost.title}</h4>
        <p>{selectedPost.body}</p>
        <Link className='text-uppercase text-decoration-none mt-3' to='/posts'>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;

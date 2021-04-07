import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import Login from './Login';

import {
  changeLoginField,
} from './redux/slice';

import { get } from './utils';

export default function LoginContainer() {
  const history = useHistory();

  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    // dispatch(requestLogin());
    history.push('/planets');
  };

  return (
    <Login
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

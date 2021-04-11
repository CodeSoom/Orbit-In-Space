import { useDispatch, useSelector } from 'react-redux';

import Login from '../components/Login';

import {
  changeLoginField,
  requestLogin,
} from '../redux/slice';

import { get } from '../utils';

export default function LoginContainer({ onSubmit }) {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin(loginFields));

    onSubmit();
  };

  return (
    <Login
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHome } from './actions';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHome());
  }, []);

  const { todos, isLoading } = useSelector(e => e.home);

  return (
    <>
      <h1>Welcome To Todos App</h1>
      {isLoading ? 'loading' :
        <ul>
          {todos.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      }
    </>
  );
}

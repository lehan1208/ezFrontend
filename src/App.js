import { useEffect, useState } from 'react';
import './App.scss';
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import queryString from 'query-string';
import PostList from './components/PostList/PostList';
import axios from 'axios';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      _page: newPage,
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const paramsString = queryString.stringify(filter);
        const res = await axios.get(`http://js-post-api.herokuapp.com/api/posts?${paramsString}`);
        setPostList(res.data.data);
        setPagination(res.data.pagination);
      } catch (error) {
        console.log('Failed to fetch data', error.message);
      }
    }
    fetchData();
  }, [filter]);

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index !== -1) {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  };

  const handleOnSubmit = (todoName) => {
    const newTodoList = [...todoList];
    newTodoList.push({ id: uuidv4(), title: todoName });
    setTodoList(newTodoList);
  };

  return (
    <div className='app'>
      <h1>Hello World - POST LIST</h1>
      {/* <TodoForm onSubmit={handleOnSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;

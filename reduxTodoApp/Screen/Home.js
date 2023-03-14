import TodoListCard from '../Componets/TodoListCard';
import {useSelector} from 'react-redux';
const Home = () => {
  const todoList = useSelector(state => state.todo);
  return (
    <>
      {todoList.map(task => (
        <TodoListCard
          task={task.task}
          id={task.key}
          isComplete={task.isComplete}
        />
      ))}
    </>
  );
};

export default Home;

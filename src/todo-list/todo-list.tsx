import React, {useState} from 'react';
import {Button, FlatList} from 'react-native';
import {ScreenBase} from '../components/screen-base/screen-base';
import {Input, ItemText, ListItem} from './todo-list.styles';
import {useDispatch, useSelector} from 'react-redux';
import {ReduxState} from '../redux/store';
import {addTask, removeTask} from '../redux/slices/taskSlice';

export interface Task {
  id: string;
  value: string;
}

const TodoList = () => {
  const [task, setTask] = useState<Task>({id: '', value: ''});
  const tasks = useSelector((state: ReduxState) => state.taskReducer.tasks);
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(addTask(task));
    setTask({id: '', value: ''});
  }

  function handleRemoveTask(taskId: string) {
    dispatch(removeTask(taskId));
  }

  function renderTask(taskItem: Task) {
    return (
      <ListItem>
        <ItemText>{taskItem.value}</ItemText>
        <Button title="X" onPress={() => handleRemoveTask(taskItem.id)} />
      </ListItem>
    );
  }

  return (
    <ScreenBase>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#404040"
        value={task.value}
        onChangeText={(text: string) =>
          setTask({id: Math.random().toString(), value: text})
        }
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={itemData => renderTask(itemData.item)}
        keyExtractor={item => item.id}
      />
    </ScreenBase>
  );
};

export default TodoList;

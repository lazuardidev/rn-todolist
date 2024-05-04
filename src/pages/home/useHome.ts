import Toast from 'react-native-toast-message';
import {TTodo} from '../../utils/type';
import {SCREENS} from '../../utils/constants';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../../redux/actions/todo';

export const useHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [todos, setTodos] = useState<TTodo[]>([]);
  const incompleteTodos = todos ? todos.filter(todo => !todo.isComplete) : [];
  // const todosState = useSelector(state => state.todos.todos);

  const onDeleteTodo = async (id: string) => {
    const storedData: TTodo[] = JSON.parse(
      (await AsyncStorage.getItem('todo')) as string,
    );
    const updatedTodos = storedData.filter(todo => todo.id !== id);
    dispatch(deleteTodo(id));
    await AsyncStorage.setItem('todo', JSON.stringify(updatedTodos));
    fetchData();
    Toast.show({
      type: 'error',
      text1: 'Todo was deleted successfully',
    });
  };

  const onToggleTodo = async (id: string) => {
    const storedData: TTodo[] = JSON.parse(
      (await AsyncStorage.getItem('todo')) as string,
    );
    const updatedTodos = storedData.map(todo =>
      todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo,
    );
    const updateTodoById = updatedTodos.find(item => item.id === id);
    if (updateTodoById) {
      dispatch(updateTodo(updateTodoById));
    }
    await AsyncStorage.setItem('todo', JSON.stringify(updatedTodos));
    fetchData();
    Toast.show({
      type: 'success',
      text1: 'Todo was completed successfully',
    });
  };

  const onNavigateToDetail = (item: any) => {
    // @ts-expect-error
    navigation.navigate(SCREENS.DETAIL, {
      item: item,
    });
  };

  const onNavigateToCreate = () => {
    // @ts-expect-error
    navigation.navigate(SCREENS.CREATE);
  };

  const onNavigateToComplete = () => {
    // @ts-expect-error
    navigation.navigate(SCREENS.COMPLETE);
  };

  const fetchData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('todo');
      if (storedData !== null) {
        setTodos(JSON.parse(storedData));
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  return {
    todos,
    onDeleteTodo,
    onToggleTodo,
    onNavigateToDetail,
    onNavigateToCreate,
    onNavigateToComplete,
    incompleteTodos,
  };
};

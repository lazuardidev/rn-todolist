import {useState} from 'react';
import {TTodo} from '../../utils/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateTodo, deleteTodo} from '../../redux/actions/todo';

export const useDetail = (route: any) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<TTodo>({
    id: item.id || '',
    title: item.title || '',
    description: item.description || '',
    isComplete: item.isComplete || false,
  });

  const onEditTodo = async (id: string) => {
    const storedData: TTodo[] = JSON.parse(
      (await AsyncStorage.getItem('todo')) as string,
    );
    const updatedTodos = storedData.map(todo =>
      todo.id === id
        ? {
            ...todo,
            title: formData.title,
            description: formData.description,
            isComplete: formData.isComplete,
          }
        : todo,
    );
    dispatch(updateTodo(formData));
    await AsyncStorage.setItem('todo', JSON.stringify(updatedTodos));
    Toast.show({
      type: 'success',
      text1: 'Todo edited successfully',
    });
    navigation.goBack();
  };

  const onDeleteTodo = async (id: string) => {
    const storedData: TTodo[] = JSON.parse(
      (await AsyncStorage.getItem('todo')) as string,
    );
    const updatedTodos = storedData.filter(todo => todo.id !== id);
    dispatch(deleteTodo(id));
    await AsyncStorage.setItem('todo', JSON.stringify(updatedTodos));
    Toast.show({
      type: 'error',
      text1: 'Todo was deleted successfully',
    });
    navigation.goBack();
  };

  return {
    formData,
    setFormData,
    onEditTodo,
    onDeleteTodo,
  };
};

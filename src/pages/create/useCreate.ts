import Toast from 'react-native-toast-message';
import {TTodo} from '../../utils/type';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/actions/todo';

export const useCreate = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<TTodo>({
    id: Date.now().toString(),
    title: '',
    description: '',
    isComplete: false,
  });

  const onCreate = async () => {
    if (!formData.title.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Please enter a title for the todo.',
      });
      return;
    }
    const todos: object[] =
      JSON.parse((await AsyncStorage.getItem('todo')) as string) || [];
    todos.push(formData);
    dispatch(addTodo(formData));
    await AsyncStorage.setItem('todo', JSON.stringify(todos));
    setFormData({
      id: '',
      title: '',
      description: '',
      isComplete: false,
    });
    Toast.show({
      type: 'success',
      text1: 'Success create new Todo',
    });
    navigation.goBack();
  };

  return {
    formData,
    setFormData,
    onCreate,
  };
};

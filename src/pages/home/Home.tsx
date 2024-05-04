import React, {SafeAreaView, Text, View} from 'react-native';
import {useHome} from './useHome';
import {styles} from './style';
import {ButtonComplete, ButtonCreate} from '../../components';
import {TodoList} from '../../components/TodoList';

const Home = () => {
  const {
    onDeleteTodo,
    onToggleTodo,
    onNavigateToDetail,
    onNavigateToCreate,
    onNavigateToComplete,
    incompleteTodos,
  } = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{'TodoApp'}</Text>
      </View>
      {incompleteTodos?.length < 1 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.textNoData}>No Data</Text>
        </View>
      ) : (
        <TodoList
          data={incompleteTodos}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onNavigateToDetail={onNavigateToDetail}
        />
      )}
      <ButtonCreate onPress={onNavigateToCreate} />
      <ButtonComplete onPress={onNavigateToComplete} />
    </SafeAreaView>
  );
};

export default Home;

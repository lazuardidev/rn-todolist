import React, {SafeAreaView, Text, View} from 'react-native';
import {useComplete} from './useComplete';
import {styles} from './style';
import {TodoList} from '../../components/TodoList';

const Complete = () => {
  const {onDeleteTodo, onToggleTodo, onNavigateToDetail, completeTodos} =
    useComplete();

  return (
    <SafeAreaView style={styles.container}>
      {completeTodos.length < 1 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.textNoData}>No Data</Text>
        </View>
      ) : (
        <TodoList
          data={completeTodos}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onNavigateToDetail={onNavigateToDetail}
        />
      )}
    </SafeAreaView>
  );
};

export default Complete;

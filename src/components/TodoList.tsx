import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const TodoList = ({
  data,
  onDeleteTodo,
  onToggleTodo,
  onNavigateToDetail,
}: any) => {
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => onNavigateToDetail(item)}
        style={styles.itemContainer}>
        <View style={styles.rowContainer}>
          <Text
            testID={`title-${item.id}`}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.itemText}>
            {item.title}
          </Text>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Ionicons
                testID={`btn-delete-${item.id}`}
                name="trash-outline"
                size={25}
                color="#333"
                onPress={() => onDeleteTodo(item.id)}
              />
              <Ionicons
                testID={`btn-complete-${item.id}`}
                name="checkmark-circle-outline"
                size={25}
                color="#333"
                onPress={() => onToggleTodo(item.id)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text
          testID={`desc-${item.id}`}
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.descText}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        testID="todo-list"
        data={data}
        renderItem={({item}) => renderItem({item})}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: 240,
  },
  descText: {
    fontSize: 14,
    color: '#333',
    marginTop: 16,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    color: '#333',
  },
});

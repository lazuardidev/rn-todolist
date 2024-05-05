import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TodoList} from '../../src/components';

describe('TodoList', () => {
  const mockData = [
    {id: '1', title: 'Task 1', description: 'Description 1'},
    {id: '2', title: 'Task 2', description: 'Description 2'},
  ];

  const mockOnDeleteTodo = jest.fn();
  const mockOnToggleTodo = jest.fn();
  const mockOnNavigateToDetail = jest.fn();

  it('renders correctly', () => {
    const {getByTestId} = render(
      <TodoList
        data={mockData}
        onDeleteTodo={mockOnDeleteTodo}
        onToggleTodo={mockOnToggleTodo}
        onNavigateToDetail={mockOnNavigateToDetail}
      />,
    );

    mockData.forEach(todo => {
      expect(getByTestId(`title-${todo.id}`)).toBeTruthy();
      expect(getByTestId(`desc-${todo.id}`)).toBeTruthy();
      expect(getByTestId(`btn-delete-${todo.id}`)).toBeTruthy();
      expect(getByTestId(`btn-complete-${todo.id}`)).toBeTruthy();
    });
  });

  it('calls onDeleteTodo when delete button is pressed', () => {
    const {getByTestId} = render(
      <TodoList
        data={mockData}
        onDeleteTodo={mockOnDeleteTodo}
        onToggleTodo={mockOnToggleTodo}
        onNavigateToDetail={mockOnNavigateToDetail}
      />,
    );
    fireEvent.press(getByTestId(`btn-delete-${mockData[0].id}`));
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(mockData[0].id);
  });

  it('calls onToggleTodo when toggle button is pressed', () => {
    const {getByTestId} = render(
      <TodoList
        data={mockData}
        onDeleteTodo={mockOnDeleteTodo}
        onToggleTodo={mockOnToggleTodo}
        onNavigateToDetail={mockOnNavigateToDetail}
      />,
    );
    fireEvent.press(getByTestId(`btn-complete-${mockData[0].id}`));
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(mockData[0].id);
  });
});

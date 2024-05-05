import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {FormTodo} from '../../src/components/FormTodo';

const mockSetFormData = jest.fn();
const mockOnCreate = jest.fn();
const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

const formData = {
  id: '1',
  title: 'Test Title',
  description: 'Test Description',
  isComplete: false,
};

describe('FormTodo', () => {
  it('renders correctly', () => {
    const {getByTestId, getByText} = render(
      <FormTodo
        formData={formData}
        setFormData={mockSetFormData}
        onCreate={mockOnCreate}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />,
    );

    expect(getByTestId('title')).toBeTruthy();
    expect(getByTestId('description')).toBeTruthy();
    expect(getByText('Mark as complete')).toBeTruthy();
    expect(getByText('Create')).toBeTruthy();
    expect(getByText('Edit')).toBeTruthy();
    expect(getByText('Delete')).toBeTruthy();
  });

  it('calls onCreate when Create button is pressed', () => {
    const {getByText} = render(
      <FormTodo
        formData={formData}
        setFormData={mockSetFormData}
        onCreate={mockOnCreate}
      />,
    );

    fireEvent.press(getByText('Create'));

    expect(mockOnCreate).toHaveBeenCalledTimes(1);
  });

  it('calls onEdit when Edit button is pressed', () => {
    const {getByText} = render(
      <FormTodo
        formData={formData}
        setFormData={mockSetFormData}
        onEdit={mockOnEdit}
      />,
    );

    fireEvent.press(getByText('Edit'));

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
    expect(mockOnEdit).toHaveBeenCalledWith(formData.id);
  });

  it('calls onDelete when Delete button is pressed', () => {
    const {getByText} = render(
      <FormTodo
        formData={formData}
        setFormData={mockSetFormData}
        onDelete={mockOnDelete}
      />,
    );

    fireEvent.press(getByText('Delete'));

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(formData.id);
  });

  it('toggles isComplete when Mark as complete is pressed', () => {
    const {getByText} = render(
      <FormTodo
        formData={formData}
        setFormData={mockSetFormData}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />,
    );

    fireEvent.press(getByText('Mark as complete'));

    expect(mockSetFormData).toHaveBeenCalledTimes(1);
    expect(mockSetFormData).toHaveBeenCalledWith(
      expect.objectContaining({isComplete: true}),
    );
  });
});

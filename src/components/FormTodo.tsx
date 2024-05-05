import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, TextInput, Checkbox} from 'react-native-paper';
import {TTodo} from '../utils/type';

type TFormTodo = {
  formData: TTodo;
  setFormData: React.Dispatch<React.SetStateAction<TTodo>>;
  onCreate?: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export const FormTodo = ({
  formData,
  setFormData,
  onCreate,
  onEdit,
  onDelete,
}: TFormTodo) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        testID="title"
        label="Title"
        mode="outlined"
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={text => setFormData({...formData, title: text})}
      />
      <TextInput
        testID="description"
        label="Description"
        mode="outlined"
        style={styles.input}
        placeholder="Description"
        value={formData.description}
        multiline
        numberOfLines={16}
        onChangeText={text => setFormData({...formData, description: text})}
      />
      {onEdit && onDelete && (
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            setFormData({...formData, isComplete: !formData.isComplete})
          }>
          <Checkbox
            key={'mark-complete-checkbox'}
            status={formData.isComplete ? 'checked' : 'unchecked'}
            // onPress={() =>
            //   setFormData({...formData, isComplete: !formData.isComplete})
            // }
          />
          <Text>Mark as complete</Text>
        </TouchableOpacity>
      )}
      {onCreate && (
        <Button
          id="create-button"
          mode="contained"
          onPress={onCreate}
          style={styles.btn}>
          Create
        </Button>
      )}
      {onEdit && (
        <Button
          id="edit-button"
          mode="contained"
          onPress={() => onEdit(formData.id)}
          style={styles.btn}>
          Edit
        </Button>
      )}
      {onDelete && (
        <Button
          id="delete-button"
          mode="contained"
          buttonColor="red"
          onPress={() => onDelete(formData.id)}
          style={styles.btn}>
          Delete
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    marginBottom: 16,
  },
  btn: {
    width: '100%',
    marginVertical: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

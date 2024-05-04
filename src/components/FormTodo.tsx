import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
        label="Title"
        mode="outlined"
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={text => setFormData({...formData, title: text})}
      />
      <TextInput
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
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={formData.isComplete ? 'checked' : 'unchecked'}
            onPress={() =>
              setFormData({...formData, isComplete: !formData.isComplete})
            }
          />
          <Text>Mark as complete</Text>
        </View>
      )}
      {onCreate && (
        <Button mode="contained" onPress={onCreate} style={styles.btn}>
          Create
        </Button>
      )}
      {onEdit && (
        <Button
          mode="contained"
          onPress={() => onEdit(formData.id)}
          style={styles.btn}>
          Edit
        </Button>
      )}
      {onDelete && (
        <Button
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

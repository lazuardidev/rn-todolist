import React from 'react';
import {ScrollView} from 'react-native';
import {FormTodo} from '../../components/FormTodo';
import {useCreate} from './useCreate';
import {styles} from './style';

const Create = () => {
  const {formData, setFormData, onCreate} = useCreate();

  return (
    <ScrollView style={styles.container}>
      <FormTodo
        formData={formData}
        setFormData={setFormData}
        onCreate={onCreate}
      />
    </ScrollView>
  );
};

export default Create;

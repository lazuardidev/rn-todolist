import React from 'react';
import {ScrollView} from 'react-native';
import {FormTodo} from '../../components/FormTodo';
import {useDetail} from './useDetail';
import {styles} from './style';

const Detail = ({route}: any) => {
  const {formData, setFormData, onEditTodo, onDeleteTodo} = useDetail(route);
  return (
    <ScrollView style={styles.container}>
      <FormTodo
        formData={formData}
        setFormData={setFormData}
        onEdit={onEditTodo}
        onDelete={onDeleteTodo}
      />
    </ScrollView>
  );
};

export default Detail;

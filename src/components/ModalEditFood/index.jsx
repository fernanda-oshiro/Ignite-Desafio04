import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form, Text, Icon } from './styles';
import Modal from '../Modal';
import Input from '../Input';

function ModalEditFood(props) {
  
  const { setIsOpen, handleUpdateFood, isOpen, editingFood } = props;
  const formRef = createRef()

  const handleSubmit = async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <Text>Editar Prato</Text>
          <Icon>
            <FiCheckSquare size={24} />
          </Icon>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;

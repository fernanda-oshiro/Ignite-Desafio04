import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form, Text, Icon } from './styles';
import Modal from '../Modal';
import Input from '../Input';

function ModalAddFood(props) {

  const { isOpen, setIsOpen, handleAddFood } = props;

  const formRef = createRef();

  const handleSubmit = async data => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <Text>Adicionar Prato</Text>
          <Icon>
            <FiCheckSquare size={24} />
          </Icon>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;

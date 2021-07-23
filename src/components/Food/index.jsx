import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { 
  Container, 
  FoodHeader, 
  ContainerBody, 
  ContainerFooter, 
  Button,
  Switch,
  IconContainer,
  AvailabilityContainer 
} from './styles';
import api from '../../services/api';

function Food(props){

  const { food, handleDelete, handleEditFood } = props;
  const {available} = food
  const [isAvailable, setIsAvailable] = useState(available)

  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !available,
    });

    setIsAvailable(!isAvailable)
  }

  const setEditingFood = () => {
    handleEditFood(food);
  }


    return (
      <Container>
        <FoodHeader available={isAvailable}>
          <img src={food.image} alt={food.name} />
        </FoodHeader>
        <ContainerBody>
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
        </ContainerBody>
        <ContainerFooter>
          <IconContainer>
            <Button
              type="button"
              onClick={setEditingFood}
              data-testid={`edit-food-${food.id}`}
            >
              <FiEdit3 size={20} />
            </Button>

            <Button
              type="button"
              onClick={() => handleDelete(food.id)}
              data-testid={`remove-food-${food.id}`}
            >
              <FiTrash size={20} />
            </Button>
          </IconContainer>

          <AvailabilityContainer>
            <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

            <Switch htmlFor={`available-switch-${food.id}`}>
              <input
                id={`available-switch-${food.id}`}
                type="checkbox"
                checked={isAvailable}
                onChange={toggleAvailable}
                data-testid={`change-status-food-${food.id}`}
              />
              <span className="slider" />
            </Switch>
          </AvailabilityContainer>
        </ContainerFooter>
      </Container>
    );
}

export default Food;

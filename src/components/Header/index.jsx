import { FiPlusSquare } from 'react-icons/fi';

import { Container, Text, Icon } from './styles';
import Logo from '../../assets/logo.svg';

function Header(props) {
  const { openModal } = props;

    return (
      <Container>
        <header>
          <img src={Logo} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={openModal}
              >
                <Text>Novo Prato</Text>
                <Icon>
                  <FiPlusSquare size={24} />
                </Icon>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    )
  }

export default Header;

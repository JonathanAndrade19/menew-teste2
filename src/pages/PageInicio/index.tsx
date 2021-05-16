import React, { JSXElementConstructor } from 'react';
import { Wrapper, Container, Main } from './styles';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import LojasList from '../../components/LojasList';

import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const PageInicio: React.FC = () => {
  const { data, indices} = React.useMemo(() =>{
    const items: Item[] = [
      {
        key: 'Menew',
        render: () => <Heading>Menew</Heading>
      },
      {
        key: 'OsMaisPedidos',
        render: () => <Title>Os Mais Pedidos</Title>,
        isTitle: true,
      },
      { key: 'CategoryList', render: () => <CategoryList/> },
      {
        key: 'OutrasLojas',
        render: () => <Title>Lojas</Title>,
        isTitle: true,
      },
      { key: 'LojaList', render: () => <LojasList/> },
    ];
    
    //Array que contem apenas os indices dos elementos que são Títulos!
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data:items,
      indices,
    }

  }, []);
  return (
    <Wrapper>
      <Container>
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            //Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default PageInicio;

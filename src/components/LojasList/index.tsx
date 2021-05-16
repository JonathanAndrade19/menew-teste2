import React from 'react';
import data from './data'
import { List, ListContainer, LeftSide, Logo, Column, Username, Info } from './styles';

interface ItemProps{
  item: typeof data[0];
}

const LojasList: React.FC = () => {
  const ListItem: React.FC<ItemProps> = ({ item }) => (
    <ListContainer>
      <LeftSide>
        <Logo source={ item.source }></Logo>
        <Column>
          <Username numberOfLines={1}>{ item.name }</Username>
          <Info numberOfLines={1}>{ item.info }</Info>
        </Column>
      </LeftSide>
    </ListContainer>
  )
  return (
    <List>
      {data.map(item =>(
        <ListItem key={item.name} item={item}/>
      ))}
    </List>
  );
};

export default LojasList;

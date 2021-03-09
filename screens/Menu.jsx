import React, { Fragment, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';
import FirebaseContext from '../context/firebase/firebaseContext';
import globalStyles from '../styles/global';

const Menu = () => {
  const { menu, getProducts } = useContext(FirebaseContext);
  useEffect(() => {
    getProducts();
    console.log(menu);
  }, []);
  const Heading = (category, index) => {
    if (index > 0) {
      const beforeCategory = menu[index - 1].category;
      if (beforeCategory !== category) {
        return (
          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>{category}</Text>
          </Separator>
        );
      }
      return null;
    }
    return (
      <Separator style={styles.separator}>
        <Text style={styles.separatorText}>{category}</Text>
      </Separator>
    );
  };
  return (
    <Container style={globalStyles.container}>
       <Content style={{ backgroundColor: '#ffffff' }}>
        <List>
          {menu.map(({
            id, name, description, image, price, category,
          }, index) => (
            <Fragment key={id}>
              {Heading(category, index)}
              <ListItem>
                <Thumbnail
                  large
                  square
                  source={{ uri: image }}
                />
                <Body>
                  <Text>{name}</Text>
                  <Text
                    note
                    numberOfLines={2}
                  >{description}</Text>
                  <Text>Precio: ${price}</Text>
                </Body>
              </ListItem>
            </Fragment>
          ))}
        </List>
       </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#000000',
  },
  separatorText: {
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Menu;

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';
import globalStyles from '../styles/global';

const NewOrder = () => {
  const { navigate } = useNavigation();
  return (
    <Container style={globalStyles.container}>
      <View style={[globalStyles.content, styles.content]} >
        <Button
          style={globalStyles.button}
          rounded
          block
          onPress={() => navigate('Menu')}
        >
          <Text style={globalStyles.buttonText}>
            New Order
          </Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default NewOrder;

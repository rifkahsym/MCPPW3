import React from "react";
import { View, Button, Text } from 'react-native';

interface CounterProps {
  value: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, handleIncrement, handleDecrement, handlePassValue }) => {
  return (
    <View>
      <Text>{value}</Text>
      <Button onPress={handleIncrement} title="INCREMENT" />
      <Button onPress={handleDecrement} title="DECREMENT" />
      <Button onPress={handlePassValue} title="PASS VALUE" />
    </View>
  );
};

export default Counter;
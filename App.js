import { StyleSheet, View, TextInput, Button } from 'react-native';
import Counter from "./component/Counter";
import Profile from "./component/Profile";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setShowProfile(true);
  };

  return (
    <View style={styles.container}>
  
      <TextInput
        placeholder="Masukkan nama"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handlePassValue={handlePassValue}
      />

      <Profile 
        name={showProfile ? name : "Unknown"} 
        age={showProfile ? count : 0} 
      />
  
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
  counter: {
    marginBottom: 20,
  },
  profile: {
    marginTop: 20,
  },
});
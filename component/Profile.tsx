import React from "react";
import { View, Text } from 'react-native';

interface ProfileProps {
  name: string;
  age: number;
}

const Profile: React.FC<ProfileProps> = ({ name, age }) => {
  return (
    <View>
      <Text>Halo, namaku {name}!</Text>
      <Text>Umurku {age} tahun</Text>
    </View>
  );
};

export default Profile;
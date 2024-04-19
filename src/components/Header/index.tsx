import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import logoImage from "../../assets/Logo.png";
import Theme from "../../styles/Theme";
import { AntDesign } from "@expo/vector-icons";

interface HeaderProps {
  onSearch: (term: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          placeholder="Pesquisar tarefa"
          placeholderTextColor={Theme.colors.GRAY_300}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <AntDesign name="search1" size={24} color={Theme.colors.GRAY_100} />
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useState, useCallback, useEffect } from "react";
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { TaskList } from "../../components/TaskList";
import Logo from '../../assets/logo.png'
import PlusIcon from '../../assets/plusIcon.png'
import Theme from "../../styles/Theme";
import { styles } from "./styles";
import { createItem, fetchItems } from "../../services/apiServices";
import api from "../../services/api";

export interface ItemsProps {
  id: string;
  task: string;
  description: string;
  checked: boolean;
}

export const Home = () => {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [inputItem, setInputItem] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [finishedItems, setFinishedItems] = useState<Number>(0);

  useEffect(() => {
    // Ao montar o componente, chama a função para buscar os itens da API
    fetchItems()
      .then((data) => {
        setItems(data); // Atualiza o estado com os itens da API
      })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
        // Trate o erro conforme necessário
      });
  }, []); // O segundo parâmetro do useEffect vazio indica que ele será executado apenas uma vez após a montagem do componente

  useEffect(() => {
    setFinishedItems(items.filter(item => item.checked).length);
  }, [items]);

  const handleAddItem = useCallback(()=> {
    if(inputItem === '') return;

    if(items.find(item => item.task.toLowerCase() === inputItem.toLowerCase())){
      Alert.alert("Item já existe!", "Você não pode cadastrar uma tarefa com o mesmo nome");
      return;
    }

    const data: ItemsProps = {
      id: Math.random().toString(), // Generate a unique id
      task: inputItem,
      description: inputDescription,
      checked: false
    };

    // Adiciona o novo item localmente
    setItems(old => [...old,data]);

    createItem(data)
      .then((response) => {
        // Se a criação for bem-sucedida, você pode tratar a resposta se necessário
        console.log("Item criado com sucesso:", response);
      })
      .catch((error) => {
        // Se ocorrer um erro ao criar o item, você pode tratar o erro aqui
        console.error("Erro ao criar item:", error);
        // Talvez você queira remover o item localmente se a criação falhar
        // setItems((oldItems) => oldItems.filter((item) => item.id !== data.id));
      });

    setInputItem('');
    setInputDescription('');
  }, [inputItem, inputDescription, setItems, items, setInputItem, setInputDescription]);

  const updateTask = (id: string, task: string, description: string) => {
    setItems(oldItems =>
      oldItems.map(item => {
        if (item.id === id) {
          return { ...item, task: task, description: description };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputItem}
            placeholder="Digite o nome da tarefa"
            placeholderTextColor={Theme.colors.GRAY_300}
            onChangeText={setInputItem}
          />
          <TextInput
            style={styles.input}
            value={inputDescription}
            placeholder="Digite a descrição da tarefa"
            placeholderTextColor={Theme.colors.GRAY_300}
            onChangeText={setInputDescription}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleAddItem}>
            <Image source={PlusIcon} style={styles.buttonIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <Text style={styles.textBlue}>Criadas</Text>
            <Text style={styles.valueCounter}>{items?.length || 0}</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.textPurple}>Concluídas</Text>
            <Text style={styles.valueCounter}>{String(finishedItems)}</Text>
          </View>
        </View>
        {/* Passa os itens para o componente TaskList */}
        <TaskList items={items} setItems={setItems} updateTask={updateTask} />
      </View>
    </View>
  );
};

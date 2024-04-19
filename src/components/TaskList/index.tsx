import { Text, View, Image, FlatList } from "react-native";

import { ItemsProps } from "../../screens/Home";
import { TaskItem } from "../TaskItem";

import ClipboardIcon from '../../assets/clipboard.png'

import { styles } from "./styles";

interface TaskListProps {
  items: ItemsProps[];
  setItems: (item: ItemsProps[]) => void;
  updateTask: (id: string, task: string, description: string) => void;
}

export const TaskList = ({ items, setItems, updateTask }: TaskListProps) => {
    const handleRemoveItem = (item: ItemsProps) => {
      const newItems = items.filter(taskItem => taskItem.task !== item.task);
      setItems(newItems);
    };

    const handleCheckItem = (item: ItemsProps) => {
      const updateItems = [...items];
      const index = items.findIndex((taskItem: ItemsProps) => taskItem.task === item?.task);
      updateItems[index] = { ...item, checked: !item.checked };
      setItems(updateItems);
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          inverted
          keyExtractor={item => item?.task}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onCheck={() => handleCheckItem(item)}
              onRemove={() => handleRemoveItem(item)}
              onUpdateTask={updateTask} // Corrigindo para onUpdateTask
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Image source={ClipboardIcon} style={styles.emptyIcon} />
              <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    );
  };

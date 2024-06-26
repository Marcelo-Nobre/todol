import { Text, View, Image, FlatList } from "react-native";

import { ItemsProps } from "../../screens/Home";
import { TaskItem } from "../TaskItem";

import ClipboardIcon from "../../assets/clipboard.png";

import { styles } from "./styles";
import { useState } from "react";

interface TaskListProps {
  items: ItemsProps[];
  setItems: (item: ItemsProps[]) => void;
  updateTask: (id: string, task: string, description: string) => void;
}

export const TaskList = ({ items, setItems, updateTask }: TaskListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveItem = (item: ItemsProps) => {
    const newItems = items.filter((taskItem) => taskItem.task !== item.task);
    setItems(newItems);
  };

  const handleCheckItem = (item: ItemsProps) => {
    const updateItems = [...items];
    const index = items.findIndex(
      (taskItem: ItemsProps) => taskItem.task === item?.task
    );
    updateItems[index] = { ...item, checked: !item.checked };
    setItems(updateItems);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        inverted
        keyExtractor={(item) => item?.task}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onCheck={() => handleCheckItem(item)}
            onRemove={() => handleRemoveItem(item)}
            onUpdateTask={updateTask}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image source={ClipboardIcon} style={styles.emptyIcon} />
          </View>
        )}
      />
    </View>
  );
};

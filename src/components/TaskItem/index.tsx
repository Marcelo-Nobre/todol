import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { ItemsProps } from "../../screens/Home";
import TrashIcon from "../../assets/trash.png";
import CheckIcon from "../../assets/check.png";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

interface TaskItemProps {
  item: ItemsProps;
  onUpdateTask: (id: string, task: string, description: string) => void; // Renomeando a propriedade para onUpdateTask
  onCheck: () => void;
  onRemove: () => void;
}

export const TaskItem = ({ item, onUpdateTask, onCheck, onRemove }: TaskItemProps) => { // Atualizando a lista de props
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(item.task);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    onUpdateTask(item.id, editedTask, editedDescription); // Chame a função onUpdateTask com os novos valores
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        {item.checked ? (
          <View style={[styles.circle, styles.checkedCircle]}>
            <Image source={CheckIcon} style={styles.checkIcon} />
          </View>
        ) : (
          <View style={[styles.circle, styles.emptyCircle]} />
        )}
      </TouchableOpacity>
      <View style={styles.taskInfo}>
        {editing ? (
          <TextInput
            style={[styles.text]}
            value={editedTask}
            onChangeText={setEditedTask}
            autoFocus
          />
        ) : (
          <Text style={[styles.text, item.checked && styles.strikeText]}>
            {item.task}
          </Text>
        )}
        {editing ? (
          <TextInput
            style={[styles.description]}
            value={editedDescription}
            onChangeText={setEditedDescription}
          />
        ) : (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={editing ? handleSaveEdit : handleEdit}
      >
        {editing ? (
          <AntDesign name="checkcircle" size={24} color="#808080" />
        ) : (
          <AntDesign name="edit" size={24} color="#808080" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={onRemove}>
        <Image source={TrashIcon} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );
};

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";

const TodoItems = ({
  task,
  onDelete,
  onEdit,
  editingTaskId,
  onStartEdit,
  onToggleCheck
}) => {
  const [updatedTask, setUpdatedTask] = useState(task.task);

  const handleUpdateTask = () => {
    onEdit(task.id, updatedTask);
  };

  return (
    <View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            width: 340,
            height: 80,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: Colors.RED,
          }}
        >
          <TouchableOpacity onPress={()=> onToggleCheck(task.id, task.check)} style={{margin:20}}>
            <Image source={ task.check ? require('../../assets/icons/checked.png'): require('../../assets/icons/unchecked.png')}
            style={{
              width:30,
              height:30
            }}/>
          </TouchableOpacity>
          {editingTaskId === task.id ? (
            <TextInput
              value={updatedTask}
              onChangeText={setUpdatedTask}
              style={{
                fontFamily: "fLight",
                fontSize: 18,
                padding: 10,
                flex: 1,
              }}
            />
          ) : (
            <Text
              style={{
                fontFamily: "fLight",
                fontSize: 18,
                padding: 10,
                flex: 1,
              }}
            >
              {task.task}
            </Text>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              margin: 10,
            }}
          >
            {editingTaskId === task.id ? (
              <TouchableOpacity onPress={handleUpdateTask}>
                <Image
                  source={require("../../assets/icons/save.png")}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => onStartEdit(task.id)}>
                <Image
                  source={require("../../assets/icons/edit.png")}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => onDelete(task.id)}>
              <Image
                source={require("../../assets/icons/delete.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodoItems;

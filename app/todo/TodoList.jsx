import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  FlatList,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import TodoItems from "../../components/TodoList/TodoItems";
import { Colors } from "../../constants/Colors";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { useRouter } from "expo-router";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getTodoList();
  }, [check]); // check durumu her değiştiğinde getTodoList fonksiyonunu yeniden çalıştırıyor

  /* veritabanına todo eklemek için */
  const handleAddTodo = async () => {
    if (task.trim() === "") {
      Alert.alert("Uyarı", "Todo eklemek için kutucuğu doldurunuz");
      return;
    }
    try {
      await addDoc(collection(database, "Todo"), {
        task: task.toLowerCase(),
        check: false,
        createdAt: serverTimestamp(),
      });
      setTask(""); 
      setCheck((prev) => !prev); // durum kontrolü yapmak için
      console.log("Doküman veritabanına eklendi");
    } catch (error) {
      console.log("Error! doküman eklenirken sorun yaşandı", error);
    }
  };
  /* todoları ver tabanından çekmek için */
  const getTodoList = async () => {
    const items = []; // eklenen todoları tutmak için oluşturulan dizi
    try {
      const querySnapshot = await getDocs(
        query(collection(database, "Todo"), orderBy("createdAt", "desc"))
      );
      querySnapshot.forEach((doc) => {
        // veritabanından gelen verileri küçük harfe dönüştürür
        const data = doc.data();
        items.push({
          id: doc.id,
          task: data.task ? data.task.toLowerCase() : "", // küçük harfe dönüştür
          check: data.check,
          createdAt: data.createdAt,
        });
      });
      setTaskItems(items);
    } catch (error) {
      console.log(error);
    }
  };
  /* todo silmek için */
  const onDelete = (taskId) => {
    Alert.alert(
      "Silmek istiyor musun?",
      "Bu todoyu silmek istediğine emin misin?",
      [
        {
          text: "İptal",
          style: "cancel",
        },
        {
          text: "Sil",
          style: "destructive",
          onPress: () => handleDeleteTask(taskId),
        },
      ]
    );
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(database, "Todo", taskId));
      setTaskItems((prev) => prev.filter((task) => task.id !== taskId)); // seçilen todonun idsini alarak filtrelemek için 
      console.log("doküman silindi", taskId);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  /* todoları düzenlemek için */
  const handleEditTask = async (taskId, updatedTask) => {
    try {
      await updateDoc(doc(database, "Todo", taskId), {
        task: updatedTask.toLowerCase(),
      });
      setTaskItems((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? { ...task, task: updatedTask.toLowerCase() }
            : task
        )
      );
      setEditingTaskId(null);
      Alert.alert("Başarılı", "Görev başarıyla güncellendi!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleStartEdit = (taskId) => {
    Alert.alert("Önemli", "Düzenlemek istediğiniz todonun üstüne tıklayın!");
    setEditingTaskId(taskId);
  };

  /* todoların durumlarını kontrol etmek için */
  const handleToggleCheck = async (taskId, check) => {
    try {
      await updateDoc(doc(database, "Todo", taskId), {
        check: !check,
      });
      setTaskItems((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, check: !check } : task
        )
      );
      console.log("Başarılı! todo için durum değiştirildi", taskId);
    } catch (error) {
      console.log("Error! durum değiştirilemedi", error);
    }
  };

  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              marginTop: 50,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 20,
              width: 340,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/icons/arrow.png")}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: "25%",
                textAlign: "center",
                fontFamily: "fExtraBold",
                fontSize: 25,
                color: Colors.RED,
              }}
            >
              To - do
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "4%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: Colors.YELLOW,
              }}
            >
              <Image
                source={require("../../assets/icons/unchecked.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text> : Tamamlanmamış</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: Colors.YELLOW,
              }}
            >
              <Image
                source={require("../../assets/icons/checked.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text> : Tamamlanmış</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <TextInput
                placeholder="Bir To-Do Girin..."
                placeholderTextColor={"rgba(9,9,9,0.4)"}
                onChangeText={(text) => setTask(text)}
                value={task}
                style={{
                  backgroundColor: Colors.WHITE,
                  height: 55,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: Colors.RED,
                  paddingHorizontal: 15,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={handleAddTodo}
              style={{
                backgroundColor: Colors.YELLOW,
                paddingVertical: 10,
                borderRadius: 20,
                width: 60,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: Colors.RED, fontSize: 30 }}>+</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={taskItems}
            renderItem={({ item }) => (
              <TodoItems
                task={item}
                onDelete={onDelete}
                onEdit={handleEditTask}
                editingTaskId={editingTaskId}
                onStartEdit={handleStartEdit}
                onToggleCheck={handleToggleCheck}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TodoList;

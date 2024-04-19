import { StyleSheet } from "react-native";
import Theme from "../../styles/Theme";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        backgroundColor: Theme.colors.GRAY_400,
        marginBottom: 12, // Aumentando o espaço entre os itens
    },
    circle: {
        width: 24,
        height: 24,
        marginRight: 16,
        borderRadius: 16,
    },
    emptyCircle: {
        borderWidth: 2,
        borderColor: Theme.colors.BLUE_LIGHT,
    },
    checkedCircle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Theme.colors.PURPLE_LIGHT,
    },
    checkIcon: {
        width: 12,
        height: 9,
    },
    taskInfo: {
        flex: 1, // Ocupa o espaço restante na linha
    },
    text: {
        textAlign: "left",
        color: Theme.colors.GRAY_100,
    },
    strikeText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: Theme.colors.GRAY_300,
    },
    description: {
        color: Theme.colors.GRAY_200, // Cor da descrição
        marginTop: 4, // Espaço entre o nome e a descrição
    },
    trashIcon: {
        width: 20,
        height: 24,
        marginRight: 16, // Movido para a direita para separar do ícone da lixeira
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 24,
        marginRight: 32,
    },
});

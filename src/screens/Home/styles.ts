import { StyleSheet } from "react-native";
import Theme from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: Theme.colors.GRAY_700,
    alignItems: "center",
    paddingBottom: 50,
  },
  logo: {
    width: 110,
    height: 32,
  },
  textPurple: {
    fontWeight: "bold",
    color: Theme.colors.PURPLE_LIGHT,
  },
  textBlue: {
    fontWeight: "bold",
    color: Theme.colors.BLUE_LIGHT,
  },
  wrapper: {
    flex: 0.8,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '86%',
    padding: 24,
    backgroundColor: Theme.colors.GRAY_600,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    width: '100%',
  },
  input: {
    height: 56,
    padding: 16,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    color: Theme.colors.GRAY_100,
    backgroundColor: Theme.colors.GRAY_500,
    marginBottom: 8,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: Theme.colors.BLUE_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 8,
  },
  buttonText: {
    color: Theme.colors.GRAY_100,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    height: 16,
    width: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueCounter: {
    marginLeft: 8,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 12,
    backgroundColor: Theme.colors.GRAY_400,
    color: Theme.colors.GRAY_100,
  },
  taskInfo: {
    flex: 1,
    marginLeft: 12,
  },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.GRAY_500,
    },

  text: {
    color: Theme.colors.GRAY_100,
  },
  description: {
    color: Theme.colors.GRAY_300,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyIcon: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  subtitle: {
    color: Theme.colors.GRAY_300,
  }
})

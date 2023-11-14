import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Text } from "react-native-paper";

const ErrorView = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <ScrollView contentContainerStyle={styles.errorContainer}>
      <View>
        <Text style={styles.header}>There was an error! </Text>
        <Text style={styles.errorStack}>{error.message}</Text>
      </View>
      <Button style={styles.resetBtn} mode="contained" onPress={() => resetErrorBoundary()}>
        Try again
      </Button>
    </ScrollView>
  );
};

export const HydraErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary fallbackRender={ErrorView} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: "1%",
  },
  errorStack: {
    fontFamily: "monospace",
  },
  resetBtn: {
    marginTop: "5%",
  },
});

export default HydraErrorBoundary;

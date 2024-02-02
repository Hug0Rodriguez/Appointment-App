import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function App() {
    return (
        <ClerkProvider publishableKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aXlzb21kc3R5c2ZpbmZoZWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NDkxNzcsImV4cCI6MjAyMjMyNTE3N30.Nqi1OlRIJiWeMbvURDb8JVxtLjOrFp7yLhFjvEdoiFk">
            <View style={styles.container}>
                {/* Sign in Component */}

                <SignedIn>
                    <Text>You are Signed in</Text>
                </SignedIn>
                {/* Sign out Component */}
                <SignedOut>
                    <Login />
                </SignedOut>
                <StatusBar style="auto" />
            </View>
        </ClerkProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
});

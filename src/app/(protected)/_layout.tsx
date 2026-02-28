import { Stack, Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

// clerk olmasaydı React Context + AsyncStorage ile yapardık
// (protected) klasöründeki sayfalara erişmeden önce bir auth guard görevi görür.
// Giriş yapmamış kullanıcı bu grubun hiçbir ekranını göremez, otomatik olarak sign-in sayfasına atılır.
export default function AppLayout() {
    const { isSignedIn } = useAuth();
    if (!isSignedIn) {
        return <Redirect href="/signIn" />
    }
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
// clerk olmasaydı React Context + AsyncStorage ile yapardık
// (protected) klasöründeki sayfalara erişmeden önce bir auth guard görevi görür.
// Giriş yapmamış kullanıcı bu grubun hiçbir ekranını göremez, otomatik olarak sign-in sayfasına atılır.
import { Stack, Redirect, router } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { View } from "react-native";
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function AppLayout() {
    const { isSignedIn } = useAuth();
    if (!isSignedIn) {
        return <Redirect href="/signIn" />
    }
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="post/[id]"
                options={{
                    headerTitle: '',
                    headerStyle: { backgroundColor: '#FF5700' },
                    headerLeft: () => <AntDesign name="close" size={34} color="white" onPress={() => router.back()} />,
                    headerRight: () =>
                        <View style={{ flexDirection: 'row', gap: 15, marginRight: 10, marginLeft: 10 }}>
                            <AntDesign name="search" size={24} color="white" />
                            <MaterialIcons name="sort" size={24} color="white" />
                            <Entypo name="dots-three-horizontal" size={24} color="white" />
                        </View>,
                    animation: "slide_from_bottom"
                }}
            />
        </Stack>
    );
}
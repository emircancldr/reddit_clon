//- The square brackets `[id]` make this a dynamic route in Expo Router.
//- This means if a user navigates to `/post/123`, the screen will receive `id = "123"` as a parameter.
//- Similar to how URLs work on the web (e.g., `example.com/post/123`), the `id` in the URL dynamically determines which post is shown.

import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import posts from '../../../../assets/data/posts.json'
import PostListItem from '../../../components/PostListItem'


export default function DetailedPost() {
    const { id } = useLocalSearchParams()
    const detailedPost = posts.find((post) => post.id === id)



    if (!detailedPost) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Post not found</Text>
            </View>
        )
    }
    return (
        <View >
            <PostListItem
                post={detailedPost}
                isDetailedPost />
        </View>
    )
}    
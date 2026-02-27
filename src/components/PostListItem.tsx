import { View, Text, Image,StyleSheet } from 'react-native';
import { formatDistanceToNowStrict } from 'date-fns';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import posts from '../../assets/data/posts.json';
import { Post } from '../types';


type PostListItemProps = {
    post:Post;
}
export default function PostListItem({post}:PostListItemProps) {
    
    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            {/* post header */}
            <View style={styles.headerContainer}>
                <Image source={{ uri: post.group.image }} style={styles.headerImage} />
                <Text style={styles.headerUsername}>{post.group.name}</Text>
                <Text style={styles.headerDate}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Text style={styles.headerButtonText}>Katıl</Text>
                </View>
            </View>


            {/* post content */}
            <Text style={styles.contentTitle}>{post.title}</Text>
            {post.image && (
                <Image source={{ uri: post.image }} style={styles.contentImage} />
            )}
            {!post.image && post.description && (
                <Text style={styles.contentDescription} numberOfLines={4}>{post.description}</Text>
            )}



            {/* post footer */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={[{ flexDirection: 'row' }, styles.iconBox]}>
                        <MaterialCommunityIcons name="arrow-up-bold-outline" size={19} color="black" />
                        <Text style={{ fontWeight: '500', marginLeft: 5, alignSelf: 'center' }}>{post.upvotes}</Text>
                        <View style={{ width: 1, backgroundColor: '#D4D4D4', height: 14, marginHorizontal: 7, alignSelf: 'center' }} />
                        <MaterialCommunityIcons name="arrow-down-bold-outline" size={19} color="black" />
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.iconBox]}>
                        <MaterialCommunityIcons name="comment-outline" size={19} color="black" />
                        <Text style={{ fontWeight: '500', marginLeft: 5, alignSelf: 'center' }}>{post.nr_of_comments}</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 'auto', flexDirection: 'row', gap: 10 }}>
                    <MaterialCommunityIcons name="trophy-outline" size={19} color="black" style={styles.iconBox} />
                    <MaterialCommunityIcons name="share-outline" size={19} color="black" style={styles.iconBox} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    gap: 10
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 25
  },
  headerUsername: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerDate: {
    fontSize: 13,
    color: 'gray',
    marginTop: 2
  },
  headerButtonText: {
    backgroundColor: '#0055ff',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 3,
    fontWeight: 'bold'
  },
  contentTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    letterSpacing: 0.5
  },
  contentImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    marginVertical: 10,
    borderRadius: 15,
    borderColor: '#963131',
    borderWidth: 1
  },
  contentDescription: {
    fontSize: 14,
    color: '#333'
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: '#D4D4D4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20
  }
});

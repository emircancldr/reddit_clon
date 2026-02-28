import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Post } from '../types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Link } from 'expo-router';

type PostListItemProps = {
  post: Post;
  isDetailedPost?: boolean;
}

export default function PostListItem({ post, isDetailedPost }: PostListItemProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 7, borderBottomColor: 'lightgrey', borderBottomWidth: 0.5, backgroundColor: 'white' }}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Image source={{ uri: post.group.image }} style={styles.headerImage} />
          <View>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text style={styles.headerUsername}>{post.group.name}</Text>
              <Text style={styles.headerDate}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
            </View>
            {isDetailedPost && <Text style={{ fontSize: 13, color: '#2E5DAA' }}>{post.user.name}</Text>}
          </View>
          <Pressable onPress={() => console.error('Pressed')} style={{ marginLeft: 'auto' }}>
            <Text style={styles.headerButtonText}>Katıl</Text>
          </Pressable>
        </View>

        {/* CONTENT */}
        <Text style={styles.contentTitle}>{post.title}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.contentImage} />
        )}

        {(post.description && !post.image) && (
          <Text style={styles.contentDescription} numberOfLines={isDetailedPost ? undefined : 4}>
            {post.description}
          </Text>
        )}

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <View style={styles.footerLeftGroup}>
            <View style={[styles.footerVoteBox, styles.iconBox]}>
              <MaterialCommunityIcons name="arrow-up-bold-outline" size={19} color="black" />
              <Text style={styles.footerText}>{post.upvotes}</Text>
              <View style={styles.footerDivider} />
              <MaterialCommunityIcons name="arrow-down-bold-outline" size={19} color="black" />
            </View>
            <View style={[styles.footerVoteBox, styles.iconBox]}>
              <MaterialCommunityIcons name="comment-outline" size={19} color="black" />
              <Text style={styles.footerText}>{post.nr_of_comments}</Text>
            </View>
          </View>
          <View style={styles.footerRightGroup}>
            <MaterialCommunityIcons name="trophy-outline" size={19} color="black" style={styles.iconBox} />
            <MaterialCommunityIcons name="share-outline" size={19} color="black" style={styles.iconBox} />
          </View>
        </View>
      </View>
    </Link>
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
    backgroundColor: '#1b479f',
    color: 'white',
    padding: 5,
    borderRadius: 13,
    paddingHorizontal: 7,
    paddingVertical: 3,
        fontSize: 15,
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
  footerContainer: {
    flexDirection: 'row'
  },
  footerLeftGroup: {
    flexDirection: 'row',
    gap: 10
  },
  footerVoteBox: {
    flexDirection: 'row'
  },
  footerText: {
    fontWeight: '500',
    marginLeft: 5,
    alignSelf: 'center'
  },
  footerDivider: {
    width: 1,
    backgroundColor: '#D4D4D4',
    height: 14,
    marginHorizontal: 7,
    alignSelf: 'center'
  },
  footerRightGroup: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 10
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: '#c4c3c3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20
  }
});
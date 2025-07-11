import { Feather } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// todo: add functionality to search

const TRENDING_TOPICS = [
  { topic: '#ReactNative', tweets: '120k' },
  { topic: '#TypeScript', tweets: '80k' },
  { topic: '#WebDevelopment', tweets: '50k' },
  { topic: '#AI', tweets: '301k' },
  { topic: '#TechNews', tweets: '10k' },
];

const SearchScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* header */}
      <View className='px-4 py-3 border-b border-gray-100'>
        <View className='flex-row items-center bg-gray-100 rounded-full px-4 py-3'>
          <Feather name='search' size={20} color='#657786' />
          <TextInput
            placeholder='Search'
            className='flex-1 ml-3 text-base'
            placeholderTextColor='#657786'
          />
        </View>
      </View>

      <ScrollView className='flex-1'>
        <View className='p-4'>
          <Text className='text-xl font-bold text-gray-900 mb-4'>
            Trending for You
          </Text>
          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity key={index} className='py-3 border-b'>
              <Text className='text-gray-500 text-sm'>
                Trending in Technology
              </Text>
              <Text className='font-bold text-lg text-gray-900'>
                {item.topic}
              </Text>
              <Text className='text-gray-500 text-sm'>
                {item.tweets} Tweets
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

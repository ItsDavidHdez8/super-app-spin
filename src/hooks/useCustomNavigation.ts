import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../interfaces/navigation';
import {useNavigation} from '@react-navigation/native';

export const useCustomNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return navigation;
};

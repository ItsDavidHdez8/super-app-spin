import React from 'react';
import {
  View,
  Image,
  ImageRequireSource,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import useTheme from '../../../library/hooks/useTheme';
import Text from '../../../library/components/Text/Text';

export interface Props {
  itemName: string;
  supportText: string;
  infoLabel: string;
  onPress: () => void;
  icon?: {uri: string} | ImageRequireSource | undefined;
}
export const MovemenListItem = ({
  itemName,
  supportText,
  infoLabel,
  onPress,
  icon,
}: Props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.container, {borderBottomColor: colors.stroke_secondary}]}>
      {icon && <Image resizeMode="contain" style={style.icon} source={icon} />}

      <View style={style.coreContent}>
        <Text variant="default-body-bold">{itemName}</Text>
        <Text variant="small-body">{supportText}</Text>
      </View>
      <Text variant="label-small-bold">{infoLabel}</Text>
    </TouchableOpacity>
  );
};

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingStart: 16,
    borderBottomWidth: 1,
    gap: 12,
  },
  coreContent: {
    flex: 1,
  },
  iconContainer: {
    height: 40,
    width: 40,
    padding: 8,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});

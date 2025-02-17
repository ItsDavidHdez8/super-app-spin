import React from 'react';
import {StyleSheet, View} from 'react-native';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type {BaseModalProps} from '../../types';
import BaseModal from './BaseModal';
import type {ThemeContextType} from '../../../themes/types';

const ChildrenModal = (props: BaseModalProps) => {
  const {newChildren} = props;
  const themedStyle = useThemedStyles(styles);

  return (
    <BaseModal
      {...props}
      defaultStyle={themedStyle.modalView}
      defaultTitleStyle={themedStyle.modalTitle}
      defaultDescriptionStyle={themedStyle.modalDescription}>
      {newChildren && <View {...props}>{newChildren}</View>}
    </BaseModal>
  );
};

const styles = (theme: ThemeContextType) =>
  StyleSheet.create({
    modalView: {
      minHeight: 245,
      width: 302,
    },
    modalTitle: {
      color: theme.colors.content_primary,
      marginBottom: 25,
    },
    modalDescription: {
      fontWeight: '400',
      color: '#000000',
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 35,
    },
    buttonContainer: {},
    firstButtonContainer: {
      marginBottom: 12,
    },
  });

export default ChildrenModal;

import React from 'react';
import {Text} from 'react-native';
import {SimpleModal, SimpleModalProps} from '../SimpleModal';

export default {
  title: 'Simple Modal',
  component: SimpleModal,
  args: {
    isVisible: true,
    children: <Text>Bonjour</Text>,
  },
};

export const Basic = (args: SimpleModalProps) => <SimpleModal {...args} />;

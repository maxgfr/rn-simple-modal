import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};

export const SimpleModal = (props: Props) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.container}>{props.children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

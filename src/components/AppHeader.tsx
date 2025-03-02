import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {goBack} from 'navigation';
import {Images} from 'assets/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appWidth} from 'configs';

export type AppheaderProps = {
  title?: string;
  returnEnabled?: boolean;
  onReturn?: () => void;
  iconRight?: React.ReactNode;
  onClickRight?: () => void;
  leading?: React.ReactNode;
};

export const AppHeader = (props: AppheaderProps) => {
  const {
    title,
    returnEnabled = true,
    onReturn,
    iconRight,
    onClickRight,
    leading,
  } = props;

  const insets = useSafeAreaInsets();

  const onClickReturn = () => {
    if (onReturn) {
      onReturn();
      return;
    }
    goBack();
  };

  return (
    <View
      style={[
        styles.container,
        {
          top: insets.top,
        },
      ]}>
      {!returnEnabled ? (
        <View style={styles.viewLeft} />
      ) : (
        <TouchableOpacity onPress={onClickReturn} style={styles.viewLeft}>
          {leading ? (
            leading
          ) : (
            <Image source={Images.ArrowLeft} style={styles.icon} />
          )}
        </TouchableOpacity>
      )}
      {title && <Text style={[styles.title]}>{title}</Text>}
      <TouchableOpacity
        onPress={onClickRight}
        disabled={!onClickRight || !iconRight}
        style={styles.viewRight}>
        {iconRight && iconRight}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: appWidth,
    minHeight: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  icon: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    color: 'black',
    letterSpacing: -0.165,
  },
  viewLeft: {
    width: 32,
    height: 32,
  },
  viewRight: {
    width: 32,
    height: 32,
  },
});

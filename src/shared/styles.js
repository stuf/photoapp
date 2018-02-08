import { StyleSheet, Platform } from 'react-native';

import { Color } from './colors';

const styles = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBackground: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    // backgroundColor: Color.BACKGROUND,
    flex: 1,
  },
  sceneStyles: {
    flex: 1,
  },
  itemRowTitle: {
    fontSize: 17,
  },
  itemRowSubtitle: {
    fontSize: 15,
  },
  itemRowBase: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemRow: {
    height: 47,
  },
  itemRowBig: {
    height: 60,
  },
});

export const Direction = {
  ROW: styles.directionRow,
};

export const Size = {
  TITLE: styles.itemRowTitle,
  SUBTITLE: styles.itemRowSubtitle,
};

export const ItemRow = {
  NORMAL: StyleSheet.flatten([styles.itemRowBase, styles.itemRow]),
  LARGE: StyleSheet.flatten([styles.itemRowBase, styles.itemRowBig]),
}

export default styles;

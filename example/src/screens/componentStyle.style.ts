import { StyleSheet } from 'react-native';

import { miColor } from '../constant/colors';

export const styles = StyleSheet.create({
  cardNumber: {
    color: miColor.gold,
    fontSize: 22,
  },
  cardStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  carNameText: {
    color: miColor.gold,
    fontSize: 15,
    marginTop: 0,
  },
  centerItemStyle: {
    alignItems: 'center',
    backgroundColor: miColor.black,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  coponentListStyle: {
    borderColor: miColor.white,
    borderRadius: 10,
    borderWidth: 0.9,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  dateContainer: {
    marginVertical: 20,
  },
  flatListStyle: {
    alignSelf: 'center',
  },
  flexDirectionRow: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  floatingTextStyle: {
    fontSize: 24,
  },
  mainContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: miColor.darkBlack,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  marginLeftMinus: {
    marginLeft: -10,
  },
  neoBtnTextStyle: {
    color: miColor.white,
  },
  neoButtonLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  safeAreabackground: {
    backgroundColor: miColor.darkBlack,
  },
  selectedItem: {
    backgroundColor: miColor.lightPink,
    borderWidth: 0,
  },
  selectedText: {
    color: miColor.white,
    fontWeight: '800',
  },
  timeText: {
    color: miColor.gold,
    fontSize: 15,
  },
  unSelectedText: {
    color: miColor.white,
    fontWeight: '500',
  },
  validText: {
    color: miColor.gold,
    fontSize: 10,
  },
});

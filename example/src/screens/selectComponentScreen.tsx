/* eslint-disable no-console */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { StackNavigationParamList } from '../navigation/navigation';

type StackNavigation = NativeStackNavigationProp<
  StackNavigationParamList,
  'SelectComponentScreen'
>;

const SelectComponentScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  const arrComponents = [
    {
      id: 1,
      name: 'CARD EXAMPLE SCREEN',
      navigation: () => {
        navigation.navigate('CardScreen');
      },
    },
    {
      id: 2,
      name: 'CARD COMPONENT',
      navigation: () => {
        navigation.navigate('CardComponent');
      },
    },
    {
      id: 3,
      name: 'NEO-POP BUTTON',
      navigation: () => {
        navigation.navigate('NeoPopButton');
      },
    },
    {
      id: 4,
      name: 'STAR WARS BUTTON',
      navigation: () => {
        navigation.navigate('StarWarsButtonScreen');
      },
    },
    {
      id: 5,
      name: 'FLOATING BUTTON',
      navigation: () => {
        navigation.navigate('FloatingButton');
      },
    },
    {
      id: 5,
      name: 'FANCY SCROLL INDICATOR',
      navigation: () => {
        navigation.navigate('FancyScrollIndicator');
      },
    },
  ];
  // const dataSolution = () => {
  //   const expense = [
  //     {
  //       Suraj: 50,
  //     },
  //     {
  //       Tejas: 20,
  //     },
  //     {
  //       Harsh: 10,
  //     },
  //     {
  //       Rohit: 40,
  //     },
  //   ];

  //   const expensesData: Array<number> = [];

  //   expense.forEach((item) => {
  //     expensesData.push(Object.values(item).at(0));
  //   });
  //   console.log('expensesData: ', expensesData);

  //   const totalExpenses = expensesData.reduce((prevVal, currVal) => {
  //     return prevVal + currVal;
  //   });
  //   console.log('totalExpenses >>', totalExpenses);

  //   const eachExpense = totalExpenses / expensesData.length;
  //   console.log('eachExpense: ', eachExpense);

  //   const remainToSettle = expensesData.map((item) => {
  //     return eachExpense - item;
  //   });
  //   console.log('remainToSettle: ', remainToSettle);
  //   /*
  //   So
  //   1. Suraj, Expecting 25 rupees from Tejas and Harsh.
  //   2. Tejas and Harsh need to settle amount of 25.

  //   In this case might be Tejas give 15 rupees to Suraj
  //   Harsh give 10 rupees to Tejas and 10 rupees to Suraj.
  // */
  // };

  // dataSolution();

  function settleAmount(expenses: User[]) {
    const users = makeFormatted();
    const average = getAverage();

    const finalAmounts: string[] = [];
    splitAmount();
    console.log('finalAmounts: ', finalAmounts);
    console.log('finalAmounts: ', users);

    function splitAmount() {
      for (const [, mainUser] of Object.entries(users)) {
        let giveMoney = mainUser.expense - average;

        if (giveMoney < 0) {
          while (giveMoney < 0) {
            const mainExpArray = users
              .filter((e) => {
                return e.expense > average;
              })
              .sort((a, b) => b.expense - a.expense);

            if (mainExpArray.length > 0) {
              let element = mainExpArray[0];
              const recMoney = element.expense - average;

              let mainEx = 0;
              let userEx = 0;

              if (recMoney < Math.abs(giveMoney)) {
                finalAmounts.push(
                  `${mainUser.name} gave ₹${recMoney} to ${element.name}`
                );

                mainEx = mainUser.expense + recMoney;
                userEx = element.expense - recMoney;
                giveMoney = giveMoney + recMoney;
              } else {
                const remain = Math.abs(giveMoney);
                finalAmounts.push(
                  `${mainUser.name} gave ₹${remain} to ${element.name}`
                );

                mainEx = average;
                userEx = element.expense - remain;
                giveMoney = 0;
              }

              element = {
                ...element,
                expense: userEx,
              };
              users[Number(element.key)] = element;

              const newMainUser = {
                ...mainUser,
                expense: mainEx,
              };
              users[Number(mainUser.key)] = newMainUser;
            }
          }
        }
      }
    }

    function getAverage() {
      const total = users
        .map((e) => {
          return e.expense;
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return total / users.length;
    }

    function makeFormatted() {
      let formattedArray: User[] = [];
      for (const [key, value] of Object.entries(expenses)) {
        const [obj] = Object.entries(value);
        formattedArray = [
          ...formattedArray,
          { name: obj[0], expense: obj[1], key: Number(key) },
        ];
      }
      return formattedArray;
    }
  }

  type User = {
    [key: string]: any;
  };

  settleAmount([
    {
      chirag: 33,
    },
    {
      tushar: 20,
    },
    {
      Harsh: 37,
    },
  ]);

  // -=-=-=-=-=-=-=-=-=-
  // function printSubsequences(s: string) {
  //   let str = s.split('');
  //   let n = str.length;
  //   // console.log('>>>>>>', 3 << 2);
  //   // 2,4,8,16,32,64
  //   // 6, 12, 24, 48

  //   for (let counter = 0; counter < Math.pow(2, n - 1); counter++) {
  //     if (counter !== 0) {
  //       let strSpace = '';
  //       for (let j = 0; j < n; j++) {
  //         strSpace += str[j];

  //         if ((counter & (1 << j)) > 0) {
  //           strSpace += ' ';
  //         }
  //       }
  //       console.log('strSpace', counter + 1, strSpace);
  //     }
  //   }
  // }

  // printSubsequences('ABCD');

  // function sumOfSum(value: number) {
  //   return function subValueSum(subItem: number) {
  //     return subItem + value;
  //   };
  // }
  // let main = sumOfSum(6);
  // for (let i = 1; i <= 100; i++) {
  //   let f = i % 3 == 0,
  //     b = i % 5 == 0;
  //   console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.selectAnimContainer}>
          <Text style={styles.selectAnimText}>SELECT COMPONENT TYPE</Text>
        </View>
        {arrComponents.map((item, index) => {
          return (
            <TouchableOpacity
              key={index + item.id.toString()}
              style={styles.animOptionStyle}
              onPress={() => item.navigation()}
            >
              <Text style={styles.animOptionText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SelectComponentScreen);

const styles = StyleSheet.create({
  animOptionNoneStyle: {
    marginBottom: '1%',
    marginStart: 16,
    marginTop: '4%',
  },
  animOptionStyle: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginStart: 16,
    marginTop: '4%',
  },
  animOptionText: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
  },
  animOtherOptionText: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingTop: 20,
    width: '95%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  selectAnimContainer: {
    borderBottomWidth: 1.5,
  },
  selectAnimText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
});

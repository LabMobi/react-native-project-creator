/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {AlertModalProps, AlertModalRefType} from '.';
import {useTheme} from '@react-navigation/native';

//to see the usage check the bottom of this file

const AlertModal = forwardRef(
  (props: AlertModalProps, ref?: React.Ref<AlertModalRefType>) => {
    const {actionButton1, actionButton2, description, title, options} = props;
    const [modalVisible, setModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      show: () => setModalVisible(true),
      hide: () => setModalVisible(false),
    }));
    const {colors} = useTheme();

    return (
      <View>
        <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
          {/* wrapped with TouchableOpacity to close modal when pressed outside of modal */}
          <TouchableOpacity
            activeOpacity={0}
            onPressOut={() => {
              setModalVisible(false);
            }}
            style={styles.touchableContainer}>
            <View style={styles.container}>
              <TouchableWithoutFeedback>
                <View
                  style={[
                    styles.centerContainer,
                    {backgroundColor: colors.modalBG},
                  ]}>
                  <Text style={[styles.title, {color: colors.text}]}>
                    {title}
                  </Text>

                  {options && options.length > 0 && (
                    <View style={styles.optionsRow}>
                      {options?.map(option => {
                        return (
                          <TouchableOpacity
                            key={option.name}
                            style={[
                              styles.option,
                              {backgroundColor: colors.optionBG},
                            ]}
                            onPress={() => option.onPress}>
                            {option.icon()}
                            <Text
                              style={{
                                color: colors.text,
                              }}>
                              {option.name}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  )}
                  <Text style={[styles.description, {color: colors.text}]}>
                    {description}
                  </Text>
                  <View style={styles.actionButtonsRow}>
                    {actionButton2 && (
                      <TouchableOpacity
                        style={styles.actionButton2}
                        onPress={actionButton2.onPress}>
                        <Text
                          style={[
                            styles.actionButtonText,
                            {color: colors.text},
                          ]}>
                          {actionButton2.title}
                        </Text>
                      </TouchableOpacity>
                    )}

                    {actionButton1 && (
                      <TouchableOpacity
                        disabled={actionButton1.disabled}
                        style={[
                          styles.actionButton1,
                          {
                            backgroundColor: colors.primary,
                            flex: actionButton2 ? 0.3 : 0.9,
                          },
                          actionButton1.disabled && {
                            backgroundColor: colors.disabledBG,
                          },
                        ]}
                        onPress={actionButton1.onPress}>
                        <Text
                          style={[
                            styles.actionButtonText,
                            {color: colors.actionButton1Text},
                            actionButton1.disabled && {
                              color: colors.disabledText,
                            },
                          ]}>
                          {actionButton1.title}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  },
);

export default AlertModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  centerContainer: {
    width: '90%',
    minHeight: '33%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 5,
    elevation: 1,
    // paddingVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 17,
  },
  actionButtonText: {
    fontSize: 17,
    fontWeight: '700',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  actionButton2: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton1: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  option: {
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
    width: '20%',
    height: 63,
    justifyContent: 'space-evenly',
  },
  optionIcon: {width: 24, height: 24, resizeMode: 'contain'},
  touchableContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//USAGE
// import {globalAlertModalRef} from '../../hooks/globalAlertModal/globalAlertModal';
// globalAlertModalRef.current?.show({
//   options: [
//     {
//       name: 'Electric',
//       icon: () => <Electric color={currentTheme.colors.optionIcon} />,
//       onPress: () => null,
//     },
//     {
//       name: 'Gas',
//       icon: () => <Gas color={currentTheme.colors.optionIcon} />,
//       onPress: () => null,
//     },

//     {
//       name: 'Leak',
//       icon: () => <Leak color={currentTheme.colors.optionIcon} />,
//       onPress: () => null,
//     },
//     {
//       name: 'Other',
//       icon: () => <Other color={currentTheme.colors.optionIcon} />,
//       onPress: () => null,
//     },
//   ],
//   title: 'Select your problem:',
//   description:
//     'By confirming the request, we will contact you by phone number',
//   actionButton2: {
//     title: 'Cancel',
//     onPress: ()=>    globalAlertModalRef?.current?.hide();
//   },
//   actionButton1: {
//     title: 'Confirm',
//     onPress: onHide,
//     // disabled: true,
//   },
// });

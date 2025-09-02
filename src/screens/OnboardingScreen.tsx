import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { slider_1, slider_2, slider_3 } from '../assets';
import FText from '../components/FText';
import { useAppTheme } from '../theme';
import { onboardingStyles } from '../theme/styles/onboardingStyles';


const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation()
  const theme = useAppTheme();
  const styles = onboardingStyles(theme);

  const sceneList = [
    {
      img: slider_1,
      title: 'Choose Products',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      img: slider_2,
      title: 'Make Payment',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      img: slider_3,
      title: 'Get Your Order',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
  ]


  const handleNextPrev = (isNext: boolean) => {
    if (currentPage === 2) {
      resetStack()
      return;
    }
    else {
      setCurrentPage((prevPage) => {
        if (isNext) {
          if (prevPage < sceneList.length - 1) {
            return prevPage + 1;
          }
        } else {
          if (prevPage > 0) {
            return prevPage - 1;
          }
        }
        return prevPage;
      })
    }
  }

  const resetStack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'authstack' as never }],
    });
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.header}>
        <FText>{currentPage + 1} / 3</FText>
        <FText onPress={resetStack} variant='bold'>Skip</FText>
      </View>
      <View style={styles.secondaryContainer}>
        <Image source={sceneList[currentPage].img} style={styles.imgStyle} />
        <FText style={styles.titleTxt} variant='bold'>{sceneList[currentPage].title}</FText>
        <FText style={styles.descriptionTxt}>{sceneList[currentPage].description}</FText>
      </View>
      <View style={[{ ...styles.tertiaryContainer }, currentPage !== 0 ? { flexDirection: "row" } : null,]}>
        {currentPage !== 0 ? <FText onPress={() => handleNextPrev(false)}>PREV</FText> : null}
        <FText style={{ alignSelf: "flex-end" }} onPress={() => handleNextPrev(true)}>{currentPage < 2 ? "NEXT" : "GET STARTED"}</FText>
      </View>
    </Surface>
  );
};

export default OnboardingScreen;
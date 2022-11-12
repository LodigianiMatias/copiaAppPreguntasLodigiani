import { Alert, Button, Image, Text, TouchableOpacity, View } from "react-native";

import { Incrementar } from "../../game/actions";
import React from "react";
import { generateRandomNumberBetween } from "../../utils/functions";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const QuestionItem = ({ item, navigation }) => {
    const dispatch = useDispatch();


    const inOrderQuestion = generateRandomNumberBetween(1, 3);

    const onCorrect = () => {
        dispatch(Incrementar())
        navigation.navigate("NextQuestion");
    };

    const onIncorrect = () => {
        navigation.navigate("TryAgain")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentContainer}>
                <Text style={styles.title}>{item.question}</Text>
            </TouchableOpacity>

            <View>
                <Image source={{ uri: item.img }} style={styles.image} />
            </View>

            <TouchableOpacity style={styles.answersContainer} onPress={onCorrect}>
                <Text style={styles.correct}>◉ {item.correct}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answersContainer} onPress={onIncorrect}>
                <Text style={styles.wrong}>◉ {item.wrong}</Text>
            </TouchableOpacity>

            {/* <View style={styles.preview}>
                {inOrderQuestion == 1 ? (
                    <TouchableOpacity style={styles.answersContainer} onPress={onCorrect}>
                        <Text style={styles.correct}>◉ {item.correct}</Text>
                    </TouchableOpacity>
                ) 
                // (
                //     <TouchableOpacity style={styles.answersContainer} onPress={onIncorrect}>
                //         <Text style={styles.wrong}>◉ {item.wrong}</Text>
                //     </TouchableOpacity>
                // )
                : 
                (
                    <TouchableOpacity style={styles.answersContainer} onPress={onIncorrect}>
                        <Text style={styles.wrong}>◉ {item.wrong}</Text>
                    </TouchableOpacity>
                ) 
                // (
                //     <TouchableOpacity style={styles.answersContainer} onPress={onCorrect}>
                //         <Text style={styles.correct}>◉ {item.correct}</Text>
                //     </TouchableOpacity>
                // )
                }
            </View> */}
        </View>
    );
};

export default QuestionItem;
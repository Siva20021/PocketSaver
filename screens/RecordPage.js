import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecordPage = () => {
  return (
    <View>
      <Text>RecordPage</Text>
    </View>
  );
};

export default RecordPage;

const styles = StyleSheet.create({});
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, Button, View } from "react-native";
// import { useEffect, useState } from "react";
// import Voice from "react-native-voice";

// const RecordPage = () => {
//   let [started, setStarted] = useState(false);
//   let [results, setResults] = useState([]);

//   useEffect(() => {
//     Voice.onSpeechError = onSpeechError;
//     Voice.onSpeechResults = onSpeechResults;

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const startSpeechToText = async () => {
//     await Voice.start("en-NZ");
//     setStarted(true);
//   };

//   const stopSpeechToText = async () => {
//     await Voice.stop();
//     setStarted(false);
//   };

//   const onSpeechResults = (result) => {
//     setResults(result.value);
//   };

//   const onSpeechError = (error) => {
//     console.log(error);
//   };

//   return (
//     <View style={styles.voiceContainer}>
//       {!started ? (
//         <Button title="Start Speech to Text" onPress={startSpeechToText} />
//       ) : undefined}
//       {started ? (
//         <Button title="Stop Speech to Text" onPress={stopSpeechToText} />
//       ) : undefined}
//       {results.map((result, index) => (
//         <Text key={index}>{result}</Text>
//       ))}
//     </View>
//   );
// };

// export default RecordPage;

// const styles = StyleSheet.create({});

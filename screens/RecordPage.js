import React, { useState } from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { Audio } from "expo-av";
// import * as Permissions from "expo-permissions";

const RecordPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const askForPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status === "granted") {
      setPermissionGranted(true);
    }
  };
  const startRecording = async () => {
    await askForPermission();
    if (!permissionGranted) {
      return;
    }
    const recording = new Audio.Recording();

    try {
      await recording.prepareToRecordAsync(
        Platform.select({
          android: {
            extension: ".m4a",
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 44100,
            numberOfChannels: 2,
          },
          ios: {
            extension: ".caf",
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
        })
      );
      await recording.startAsync();
      setIsRecording(true);
      setRecording(recording);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    if (!recording) {
      return;
    }
    try {
      await recording.stopAndUnloadAsync();
      setIsRecording(false);
      setRecording(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 500 }}
    >
      <View>
        {!isRecording ? (
          <TouchableOpacity onPress={startRecording}>
            <Text>Start Recording</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={stopRecording}>
            <Text>Stop Recording</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RecordPage;

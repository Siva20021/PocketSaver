import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Rainy Days"], // optional
};
const ChartsMonthly = () => {
  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={data}
        width={400}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#0EF1A0",
          backgroundGradientTo: "#CBEDD5",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
      />
    </View>
  );
};

export default ChartsMonthly;

const styles = StyleSheet.create({
  chartContainer: {
    margin: 20,
    borderColor: "black",
    borderWidth: 2,
  },
});

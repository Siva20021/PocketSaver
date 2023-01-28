import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit";
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  barPercentage: 0.7,
  height: 5000,
  fillShadowGradient: `rgba(1, 122, 205, 1)`,
  fillShadowGradientOpacity: 1,
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

  style: {
    borderRadius: 16,
    fontFamily: "Bogle-Regular",
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: "#e3e3e3",
    strokeDasharray: "0",
  },
  propsForLabels: {
    fontFamily: "Bogle-Regular",
  },
};
const ChartsDaily = () => {
  return (
    <View style={styles.chartContainer}>
      <BarChart
        data={data}
        width={370}
        height={250}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default ChartsDaily;

const styles = StyleSheet.create({
  chartContainer: {
    margin: 20,
    borderColor: "black",
    borderWidth: 2,
  },
});

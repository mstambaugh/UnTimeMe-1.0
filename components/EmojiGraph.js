// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// const EmojiGraph = props => {

//   const linedata = {
//     labels: ['sad', 'happ', 'mad', 'blush', 'cry'],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 55],
//         strokeWidth: 2, // optional
//       },
//     ],
//   };
  
//   return(
//     <View>
//       <Text>
//         Bezier Line Chart
//       </Text>
//       <LineChart
//         data={linedata}
//         width={300}
//         // width={Dimensions.get('window').width} // from react-native
//         height={220}
//         yAxisLabel={'Time'}
//         chartConfig={{
//           backgroundColor: 'black',
//           backgroundGradientFrom: 'black',
//           backgroundGradientTo: 'gray',
//           decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = .75) => `rgba(187, 255, 68, ${opacity})`,
//           style: {
//             borderRadius: 16
//           }
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16
//         }}
//       />
//     </View>
//   );
// };
// // const EmojiGraph = props => {
// //   return (
// //     <View>
// //       <Text style={styles.labelStyle}>Bezier Line Chart</Text>
// //       <LineChart
// //         data={data}
// //         width={width}
// //         height={height}
// //         chartConfig={styles.chartConfig}
// //         bezier
// //         style={styles.graphStyle}
// //       />
// //     </View>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   graphStyle: {
// //     marginVertical: 8
// //   },

// //   chartConfig: {
// //     backgroundGradientFrom: "#1E2923",
// //     backgroundGradientFromOpacity: 0,
// //     backgroundGradientTo: "#08130D",
// //     backgroundGradientToOpacity: 0.5,
// //     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
// //     strokeWidth: 2, // optional, default 3
// //     barPercentage: 0.5
// //   },

// //   labelStyle: {
// //     color: chartConfig.color(),
// //     marginVertical: 10,
// //     textAlign: 'center',
// //     fontSize: 16
// //   }
// // });



//   export default EmojiGraph;
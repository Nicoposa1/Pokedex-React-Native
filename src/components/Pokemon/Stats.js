import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";

const Stats = (props) => {
  const { stats } = props;

  const barStyles = (num) => {
    const color = num > 49 ? "green" : "red";
    return {
      backgroundColor: color,
      width: `${num}%`,
    }
  };

  return (
    <View style={styles.content}>
      <Text>Base Stats</Text>
      {map(stats, (stat, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stat.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(stat.base_stat)]}>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export { Stats };

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b"
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  }
});

import React from 'react';
import { View } from 'react-native';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import styles from './styles';

const CardHolder = () => {
  return (
    <Placeholder style={styles.container} Animation={Fade}>
      <View style={styles.cardContainer}>
        <PlaceholderLine width={30} height={20} />
        <PlaceholderLine width={80} height={20} />
        <PlaceholderLine width={30} height={20} />
        <PlaceholderLine width={80} height={20} />
        <PlaceholderLine width={30} height={20} />
        <PlaceholderLine width={80} height={20} />
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <PlaceholderLine width={80} height={20} />
          </View>
          <View style={styles.rowRight}>
            <PlaceholderLine width={80} height={20} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <PlaceholderLine width={80} height={20} />
          </View>
          <View style={styles.rowRight}>
            <PlaceholderLine width={80} height={20} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <PlaceholderLine width={80} height={20} />
          </View>
          <View style={styles.rowRight}>
            <PlaceholderLine width={80} height={20} />
          </View>
        </View>
      </View>
    </Placeholder>
  );
};

export default CardHolder;

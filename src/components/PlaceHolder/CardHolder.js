import React from 'react';
import { View } from 'react-native';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder';
import styles from './styles';

const CardHolder = () => {
  return (
    <Placeholder style={styles.container} Animation={Fade}>
      <View style={styles.cardContainer}>
        <View style={styles.itemHead}>
          <PlaceholderLine width={40} height={20} />
          <PlaceholderLine width={40} height={20} />
        </View>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <PlaceholderMedia size={20} />
            <PlaceholderLine width={60} height={20} style={styles.ml10} />
          </View>
          <View style={styles.rowRight}>
            <PlaceholderMedia size={20} />
            <PlaceholderLine width={60} height={20} style={styles.ml10} />
          </View>
        </View>
        <PlaceholderLine width={100} height={20} />
      </View>
    </Placeholder>
  );
};

export default CardHolder;

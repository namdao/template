import React from 'react';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import styles from './styles';

const ListHolder = () => {
  return (
    <Placeholder style={styles.container} Animation={Fade}>
      <PlaceholderLine width={40} height={15} />
      <PlaceholderLine width={70} height={15} />
      <PlaceholderLine width={40} height={15} />
      <PlaceholderLine width={70} height={15} />
      <PlaceholderLine width={40} height={15} />
      <PlaceholderLine width={70} height={15} />
    </Placeholder>
  );
};

export default ListHolder;

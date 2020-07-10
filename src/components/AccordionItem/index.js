import React, { PureComponent } from 'react';
import { ViewPropTypes, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Accordion from 'react-native-collapsible/Accordion';
import { l10n } from 'languages';
import colors from 'constant/colors';
import { doNothing } from 'utils/utility';
import styles from './styles';

class AccordionItem extends PureComponent {
  constructor(props) {
    super(props);
    this.sections = [];
    this.state = {
      activeSections: [0],
    };
    this.initSection();
  }

  initSection = () => {
    const { sections } = this.props;
    if (sections) this.sections = sections;
  };

  renderNoTitle = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{l10n.no_title}</Text>
      </View>
    );
  };

  renderHeader = (content, index, isActive, sections) => {
    const { renderHeader } = this.props;
    if (typeof renderHeader === 'function') {
      return renderHeader({ content, index, isActive, sections });
    }
    return this.renderNoTitle();
  };

  renderSectionTitle = (content, index, isActive, sections) => {
    const { renderTitle } = this.props;
    if (typeof renderTitle === 'function') {
      return renderTitle({ content, index, isActive, sections });
    }
    return this.renderNoTitle();
  };

  renderContent = (content, index, isActive, sections) => {
    const data = this.sections[index];
    const { renderContentProps } = data;
    if (typeof renderContentProps === 'function') {
      return renderContentProps({ content, index, isActive, sections });
    }
    return this.renderNoTitle();
  };

  updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    const { activeSections } = this.state;
    const { sectionContainerStyle, underlayColor, containerStyle } = this.props;
    return (
      <Accordion
        sections={this.sections}
        activeSections={activeSections}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
        renderSectionTitle={this.renderSectionTitle}
        onChange={this.updateSections}
        underlayColor={underlayColor}
        containerStyle={[styles.containerStyle, containerStyle]}
        sectionContainerStyle={[styles.sectionContainerStyle, sectionContainerStyle]}
      />
    );
  }
}
AccordionItem.propTypes = {
  sections: PropTypes.oneOf(PropTypes.shape({}), PropTypes.shape([])),
  renderHeader: PropTypes.func,
  renderTitle: PropTypes.func,
  sectionContainerStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  underlayColor: PropTypes.string,
};
AccordionItem.defaultProps = {
  sections: [],
  renderHeader: doNothing,
  renderTitle: doNothing,
  sectionContainerStyle: {},
  containerStyle: {},
  underlayColor: colors.blueWater,
};
export default AccordionItem;

import PropTypes from 'prop-types';

import { Section, Title } from './WidgetSection.styled';
const WidgetSection = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

export default WidgetSection;

WidgetSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

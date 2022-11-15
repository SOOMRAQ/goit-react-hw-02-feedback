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

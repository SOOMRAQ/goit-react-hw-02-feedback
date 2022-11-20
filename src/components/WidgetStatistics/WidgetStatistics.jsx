import PropTypes from 'prop-types';
import { Statistics, StatsValue } from './WidgetStatistics.styled';

const WidgetStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Statistics>
      <StatsValue>Good: {good}</StatsValue>
      <StatsValue>Neutral: {neutral}</StatsValue>
      <StatsValue>Bad: {bad}</StatsValue>
      <StatsValue>
        <strong>Total:</strong> {total}
      </StatsValue>
      <StatsValue>
        <strong>Positive feedback:</strong> {positivePercentage}%
      </StatsValue>
    </Statistics>
  );
};

export default WidgetStatistics;

WidgetStatistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

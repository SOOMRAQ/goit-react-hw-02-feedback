import PropTypes from 'prop-types';
import { Actions, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ type, options, onLeaveFeedback }) => {
  return (
    <Actions>
      {options.map(option => {
        return (
          <Button
            key={option}
            type={type}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </Actions>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  type: PropTypes.string,
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

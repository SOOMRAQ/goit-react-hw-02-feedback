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

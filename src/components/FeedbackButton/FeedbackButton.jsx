import PropTypes from 'prop-types';
import { ListBtn, StyleBtn } from './FeedbackButton.styled';

export const FeedbackButton = ({ options, addFeedback }) => {
    return (
      
            <ListBtn>
                {Object.keys(options).map(key => {
                    return (
                        <li key={key}>
                            <StyleBtn type="button" id={key} onClick={addFeedback}>
                                {options[key]}
                            </StyleBtn>
                        </li>
                    );
                })}
            </ListBtn>
    );
}

FeedbackButton.propTypes = {
    options: PropTypes.object.isRequired,
    addFeedback: PropTypes.func.isRequired,
};
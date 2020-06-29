import { RESET_FORM, CHANGE_VALUE } from '../types/form.types';

const initState = () => ({
  value: '',
});

export default (state = initState(), action) => {
  switch (action.type) {
    default:
    case RESET_FORM:
      return {
        value: '',
      };
    case CHANGE_VALUE:
      return {
        value: action.payload.value,
      };
      return state;
  }
};

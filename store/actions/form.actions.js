import { RESET_FORM, CHANGE_VALUE } from '../types/form.types';

const resetForm = () => ({
  type: RESET_FORM,
});

const changeValue = ({ value }) => ({
  type: CHANGE_VALUE,
  payload: { value },
});

export default {
  resetForm,
  changeValue,
};

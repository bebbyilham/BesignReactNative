const initStateRegister = {
  name: '',
  email: '',
  password: '',
  //   password_confirmation: '',
  //   address: '',
  //   city: '',
  //   hosuseNumber: '',
  //   phoneNumber: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  //   if (action.type === 'SET_ADDRESS') {
  //     return {
  //       ...state,
  //       address: action.value.address,
  //       city: action.value.city,
  //       hosuseNumber: action.value.hosuseNumber,
  //       phoneNumber: action.value.phoneNumber,
  //     };
  //   }
  return state;
};

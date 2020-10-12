export const loadState = () => {
  try {
    const seriaziedState = localStorage.getItem('state');
    if (seriaziedState === null) {
      return undefined;
    }
    return JSON.parse(seriaziedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const seriaziedState = JSON.stringify(state);
    localStorage.setItem('state', seriaziedState)
  } catch (err) {
    // console.log(err)
  }
};

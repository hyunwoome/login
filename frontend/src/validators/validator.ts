const spaceRemove = (data: string): string => {
  return data.replace(/ /g, '');
}

export const checkName = (name: string): boolean => {
  if (name) {
    const spaceRemoveName = spaceRemove(name);
    const format = /^[가-힇]+$/;
    if (!spaceRemoveName.match(format)) return false;
    if (!(spaceRemoveName.length >= 2 && spaceRemoveName.length <= 10)) return false;
  } else {
    return false;
  }
  return true;
};

export const checkEmail = (email: string): boolean => {
  if (email) {
    const spaceRemoveEmail = spaceRemove(email);
    const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!spaceRemoveEmail.match(format)) return false;
  } else {
    return false;
  }
  return true;
};

export const checkPassword = (password: string): boolean => {
  if (password) {
    const spaceRemovePassword = spaceRemove(password);
    if (spaceRemovePassword.length < 6 || spaceRemovePassword.length > 14) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}

export const sameCheckPassword = (password: string, verifyPassword: string): boolean => {
  return password === verifyPassword;
}
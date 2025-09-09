function isPasswordValid(password: string): boolean {
  const passwordLength = password.length;

  return passwordLength > 5 && passwordLength < 11;
}

export { isPasswordValid };

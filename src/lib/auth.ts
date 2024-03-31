interface InputValue {
  name?: string;
  email: string;
  password: string;
}

export const signIn = async (input: InputValue) => {
  // NextAuth signin

  const user = await User;
};

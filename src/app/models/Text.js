export const textInterface = (data = {}) => {
  return {
    text: data.text || "",
    palindrome: data.palindrome || null,
  };
};

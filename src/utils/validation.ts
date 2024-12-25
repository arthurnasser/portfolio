export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Accepts formats: (11) 99999-9999 or 11999999999
  const phoneRegex = /^(?:\(?([1-9]{2})\)?\s?)?(?:9\d{4}[-\s]?\d{4})$/;
  const numericPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(numericPhone) || numericPhone.length === 11;
};

export const formatPhone = (phone: string): string => {
  const numericPhone = phone.replace(/\D/g, '');
  if (numericPhone.length === 11) {
    return `(${numericPhone.slice(0, 2)}) ${numericPhone.slice(2, 7)}-${numericPhone.slice(7)}`;
  }
  return phone;
};

export const validateOption = (input: string, maxOption: number): boolean => {
  const num = parseInt(input);
  return !isNaN(num) && num >= 1 && num <= maxOption;
};
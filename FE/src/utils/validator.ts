export const isNameValid = (name: string) => {
    if (name.length < 3) return 'Name must be at least 3 characters';
    if (name.length > 20) return 'Name must be at most 20 characters';
    return null;
  };


export const showUserFullName = (user) => {
    return user ? `${user.name} ${user.surname}` : "";
  };
  
  export const checkUserCredentials = (users, checkingUser) => {
    return users.find((user) => {
      const storedEmail = user.email.toLowerCase();
      const checkingEmail = checkingUser.email.toLowerCase();
      return (
        storedEmail === checkingEmail && user.password === checkingUser.password
      );
    });
  };


 
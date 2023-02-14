import Router from 'next/router';

export const isAuthorized = async (role: string) => {
  if (!process.browser) {
    return false;
  }

  const user = localStorage.getItem('userRole')

  if (!user || user !== role) {
    await Router.push('/');
    return false;
  }

  return true;
};

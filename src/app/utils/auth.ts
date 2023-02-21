'use client'

import {useRouter} from "next/navigation";

export const IsAuthorized = async (role: string) => {
  const router = useRouter();

  if (!process.browser) {
    return false;
  }

  const user = localStorage.getItem('userRole')

  if (!user || user !== role) {
    await router.push('/')
    return false;
  }

  return true;
};


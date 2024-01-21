'use client'

import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";

const useIsAuthorized = (role: string): (() => boolean) => {
  const { user } = useAuth();

  const router = useRouter();

  const checkAuthorization = async (): Promise<boolean> => {
    if (!process.browser) {
      return false;
    }

    const getUserRole = user?.role;

    if (!getUserRole || getUserRole !== role) {
      await router.push('/');
      return false;
    }

    return true;
  };

  return () => {
    let isAuthorized = true;
    checkAuthorization().then((result) => {
      isAuthorized = result;
    });
    return isAuthorized;
  };
};


export default useIsAuthorized;

import React, { useEffect, useState } from 'react';
import { authApi } from '@src/apis/authApi';

const AuthHOC = (SpecificComponent: any, option: boolean) => {
  const AuthenticationCheck = (props: any) => {
    const [auth, setAuth] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        const result = await authApi();
        setAuth(result.data.isAuth);
      };
      fetchData();
      // console.log(auth);
    }, []);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};

export { AuthHOC };

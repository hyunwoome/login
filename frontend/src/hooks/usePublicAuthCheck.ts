import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {URL} from '@src/constants';
import {deleteLocalStorage, setLocalStorage} from "@src/utils/localStorage";
import {loggedApi} from "@src/apis/authApi";

const usePublicAuthCheck = () => {
  const history = useHistory();
  return useEffect(() => {
    loggedApi()
      .then(() => {
        setLocalStorage();
        history.push(URL.ACCOUNT)
      })
      .catch(() => {
        deleteLocalStorage();
      });
  }, []);
}

export {usePublicAuthCheck}
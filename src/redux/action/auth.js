const Axios = require('axios').default;
import {API_HOST} from '@env';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST}/api/register`, dataRegister)
      .then(res => {
        console.log('data success :', res.data);
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          Axios.post(
            'http://192.168.10.3:8000/api/user/photo',
            photoForUpload,
            {
              headers: {
                Authorization: `${res.data.data.token_type}${res.data.data.access_token}`,
                'Content-Type': 'multipart/form-data',
              },
            },
          )
            .then(resUpload => {
              console.log('success upload:', resUpload);
            })
            .catch(err => {
              showMessage('Upload photo tidak berhasil');
            });
        }
        dispatch(setLoading(false));
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        // console.log('error:', err.response.data.message);
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.message);
      });
  };

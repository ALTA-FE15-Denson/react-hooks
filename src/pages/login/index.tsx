import {useState} from 'react'
import Input from '../../component/Input'
import Button from '../../component/Button';
import Swal from 'sweetalert2';
import Cookie from 'js-cookie';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate: NavigateFunction = useNavigate();

    const handleLogin = () => {

        Cookie.set('username', username, {path: '/'});
        Cookie.set('password', password, {path: '/'});

        if(username !== '' && password !== ''){
            Swal.fire({
                icon: 'success',
                title: 'Login Success',
                text: `Welcome ${username}`,
                confirmButtonText: 'Go to News',
            }).then((res) => {
                if(res.isConfirmed){
                    navigate('/news', {
                        state: {
                            username: username,
                        }
                    })
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your username and password',
            })
        }
    }

  return (
    <div className='min-h-screen bg-black w-screen flex items-center justify-center'>
        <div className='bg-white p-6 rounded-md shadow-md'>
            <Input 
                id='username'
                label='Username'
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                id='password'
                label='Password'
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
                id='login'
                label='Login'
                onClick={() => handleLogin()}
            />
        </div>
    </div>
  )
}

export default Login
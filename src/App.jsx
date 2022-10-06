import { IconBrandFacebook, IconBrandGitlab, IconBrandTwitter } from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
    const type = 'submit';
    const onClick = () => console.log('Login with another style..');
    return (
        <div className={'bg-blue-900 grid place-content-center min-h-screen'}>
            <dir className={'flex gap-x-2'}>
                <Button {...{ type, onClick }}>
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button className={'bg-sky-600'} onClick={() => alert('Login')} type='reset'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className={'bg-orange-600'} onClick={() => alert('Login')} type='button'>
                    <IconBrandGitlab />
                    Login
                </Button>
            </dir>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    );
}

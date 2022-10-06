import { Button } from './components/Button';
import Card from './components/Card';

const App = () => {
    return (
        <div className={'bg-blue-100 antialiased flex items-center justify-center min-h-screen'}>
            <div className={'max-w-4xl flex items-center gap-4 w-full'}>
                <Card>
                    <Card.Title>Hello world</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis numquam suscipit aliquid rerum quaerat reiciendis veritatis
                        asperiores. Veniam accusantium quos vero? Possimus facere quas ipsa esse harum sit quibusdam?
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hello world</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis numquam suscipit aliquid rerum quaerat reiciendis veritatis
                        asperiores. Veniam accusantium quos vero? Possimus facere quas ipsa esse harum sit quibusdam?
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Title>Hello world</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis numquam suscipit aliquid rerum quaerat reiciendis veritatis
                        asperiores. Veniam accusantium quos vero? Possimus facere quas ipsa esse harum sit quibusdam?
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default App;

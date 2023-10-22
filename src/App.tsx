import { useEffect } from 'react';
import { useTMI } from './hooks/use-tmi';

function App() {
	const { onConnect, disconnect, onMessage } = useTMI({
		channels: ['willtraore'],
	});

	useEffect(() => {
		onConnect(() => {
			console.log('connected');
		});

		onMessage((channel, userstate, message, self) => {
			console.log('message', channel, userstate, message, self);
		});

		return () => {
			disconnect();
		};
	});

	return (
		<>
			<p>React TMI</p>
		</>
	);
}

export default App;

import { useState } from "react";

function App() {
	const [ Count, setCount ] = useState( { count: 0 } );

	return (
		<div className="App">
			<div className="bg-sky-300 p-5">
				<span className="text-sky-50">
					Example
				</span>
			</div>
			<h1>Vite + React + Tailwind + Boostrap-React</h1>
			<div className="card">
				<button
					onClick={ () =>
						setCount( count => ( {
							count: count.count + 1
						} ) )
					}>
					count is { Count.count }
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;

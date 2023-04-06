import { StrictMode } from "react";
import App            from "./App";
import { createRoot } from "react-dom/client";

import "./CSS/App.css";
import "./CSS/TW.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tailwind.css";

createRoot( document.getElementById( "root" ) as HTMLElement ).render(
	<StrictMode>
		<App />
	</StrictMode>
);

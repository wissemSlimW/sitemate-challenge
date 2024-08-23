import { app } from "./App";
import Loaders from './Loaders/index';

Loaders.start();

app.listen(8000, () => console.log('Server is running!✨🐺'));

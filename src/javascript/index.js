import '../css/styles.css';
import renderViews from './views/renderViews';
import createSampleData from './data/createSampleData';
import populateData from './data/populateData';
import populateHeader from './components/populateHeader';
import { isLocalStorageEmpty, setCurrentProjectId } from './data/localStorage';
import { manipulateProjects, manipulateTodos } from './manipulateObjects';

setCurrentProjectId(1);

renderViews();
if (isLocalStorageEmpty()) {
  createSampleData();
}
populateData();
populateHeader();

manipulateProjects();
manipulateTodos();

import { run } from './app';
import { AlertService } from './alert.service';
import { ComponentService } from './component.service';

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
import { AlertService } from "./alert.service";
import { run } from "./app";
import { ComponentService } from "./component.service";
import "./main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();
console.log("Hi!");
run(alertService, componentService);

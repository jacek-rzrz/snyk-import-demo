import {Target} from "./target";
import {ImportStateObserver} from "./importState";

export type TargetImporter = (target: Target, stateObserver: ImportStateObserver) => Promise<void>;

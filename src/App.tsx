import React from 'react';
import './App.css';
import {ImportTile} from "./presentation/ImportTile";
import {useTickingClock} from "./presentation/hooks/useTickingClock";
import {useLogs} from "./presentation/hooks/useLogs";

function App() {
    const now = useTickingClock();
    const [logs, setLogs] = useLogs();

    return (
        <>
            { logs && <pre className="log">{JSON.stringify(logs, null, 2)}</pre> }
            <div className={`import-grid ${logs ? 'hidden' : ''}`}>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'sakai', branch: 'master'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'element', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'rzrz-java-lang', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'RxJava', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'tetris', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'bareboat', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'speedback', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'gpx-fixer', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'spring-coroutines-json-api-response-entity', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'kotlin-test-factories', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'automerge-ex', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'resource-types', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'Commander', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
                <ImportTile now={now} displayLogs={setLogs} target={{owner: 'jacek-rzrz', name: 'assertj-reactor', branch: 'main'}}/>
            </div>
        </>
    );
}

export default App;

let vscode;
try {
    vscode = acquireVsCodeApi();
} catch (error) {

}

var message, moduleNode, route, routeJson;
var modifyflag = false;
var routings = new Map();
var deleteconn;
var modifyconn;
vscode.postMessage({ text: "start" })
window.addEventListener('message', event => {
    message = event.data;
    moduleNode = message.$edgeAgent["properties.desired"].modules;
    route = message.$edgeHub["properties.desired"].routes;
})
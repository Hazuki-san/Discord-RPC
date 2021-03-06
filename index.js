const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	console.log("[+] Loading...")
	console.log("[+] Your RPC is now displaying with buttons!")

var WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
	ws.on('message', function (message) {
		//console.log('received: %s', message)
		client.request('SET_ACTIVITY', {
			pid: process.pid,
			activity: JSON.parse(message)
			})
		})
	})
})

//client.login({clientId: "480573497962266634"}).catch(constole.error);
client.login({clientId: "463097721130188830"}).catch(console.error);
const http = require('http');

// Env Variables
const PORT = process.env.PORT||8080;
const COLOR = process.env.COLOR||'blue';
const VERSION = 'V1'; // V2로 변경하여 Pipeline Trigger Generate

http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	res.end(`[${VERSION}] 현재 응답 서버 식별: ${COLOR} (Port: ${PORT})\n`);
}).listen(PORT, () => {
	console.log(`서버 가동 완료 (Port: ${PORT})`);
});

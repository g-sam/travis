const tape = require('tape')
const shot = require('shot')
const handler = require('../src/handler.js')

tape('first test', (t) => {
	t.equal(true, true, 'true is true')
	t.end()
})

tape('test GET request to "/" endpoint', (t) =>{
	shot.inject(handler, {method: 'get', url: '/'}, (res) => {
		t.equal(res.statusCode, 200, 'has status 200')
		t.ok(res.payload.includes('<html>'), 'finds index.html file')
		t.equal(res.headers['Content-type'], 'text/html', 'is type html')
		t.end()
	})
})

tape('test GET request on non-existent endpoint', (t) => {
	shot.inject(handler, {method: 'get', url: '/does-not-exist'}, (res)=>{
		t.equal(res.statusCode, 404, 'has status 404')
		t.end()
	})
})
 
tape('test GET request to "/public/script.js" endpoint', (t) =>{
	shot.inject(handler, {method: 'get', url: '/public/script.js'}, (res) => {
		t.equal(res.statusCode, 200, 'has status 200')
		t.ok(res.payload.includes('function'), 'finds script.js file')
		t.equal(res.headers['Content-type'], 'text/js', 'is type js')
		t.end()
	})
})


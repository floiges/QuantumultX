// 响应的 HTTP Body，以 UTF-8 解码后的字符串，仅当 requires-body = true 时有效
let body = $response.body;

// add vConsole before return
const injectScript = "<script type='text/javascript' src='https://cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js'></script><script>new VConsole();</script></head>";
body = body.replace('</head>', injectScript);

$done({ body });
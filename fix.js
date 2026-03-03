const fs = require('fs');
let code = fs.readFileSync('src/pages/Login.jsx', 'utf8');
code = code.replace(/}\s*return \(\s*<main className="min-h-screen/m, '}\n    };\n\n    return (\n        <main className="min-h-screen');
fs.writeFileSync('src/pages/Login.jsx', code);

const https = require('https');
const fs = require('fs');
const token = process.argv[2];
const jobId = process.argv[3];
if(!token || !jobId){ console.error('Usage: node get-step-log.js <token> <jobId>'); process.exit(2); }
const opts = {
  hostname: 'api.github.com',
  path: `/repos/2506068-max/digestive/actions/jobs/${jobId}/logs`,
  method: 'GET',
  headers: {
    'User-Agent': 'node-script',
    'Authorization': 'token ' + token,
    'Accept': 'application/vnd.github+json'
  }
};
const req = https.request(opts, res=>{
  if(res.statusCode!==200){ console.error('Failed to fetch logs, status', res.statusCode); process.exit(1); }
  const out = fs.createWriteStream(`./job-${jobId}-logs.zip`);
  res.pipe(out);
  out.on('finish', ()=>{ console.log('Saved logs to', `job-${jobId}-logs.zip`); });
});
req.on('error', e=>{ console.error('Request error', e); process.exit(1); });
req.end();

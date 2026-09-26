const https = require('https');
const token = process.argv[2];
if(!token){ console.error('Missing token arg'); process.exit(2); }
const opts = {
  hostname: 'api.github.com',
  path: '/repos/2506068-max/digestive/actions/runs?per_page=6',
  method: 'GET',
  headers: {
    'User-Agent': 'node-script',
    'Authorization': 'token ' + token,
    'Accept': 'application/vnd.github+json'
  }
};
const req = https.request(opts, res=>{
  let body = '';
  res.on('data', c=> body += c);
  res.on('end', ()=>{
    try{
      const js = JSON.parse(body);
      const runs = js.workflow_runs || [];
      if(runs.length===0){ console.log('No workflow runs found'); return; }
      runs.forEach(r=>{
        console.log(`${r.name} | branch:${r.head_branch} | event:${r.event} | status:${r.status} | conclusion:${r.conclusion} | url:${r.html_url}`);
      });
    }catch(e){ console.error('Failed to parse response', e); console.error(body); process.exit(1);}    
  });
});
req.on('error', e=>{ console.error('Request error', e); process.exit(1); });
req.end();

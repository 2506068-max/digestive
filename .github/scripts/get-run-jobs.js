const https = require('https');
const token = process.argv[2];
const runId = process.argv[3];
if(!token || !runId){ console.error('Usage: node get-run-jobs.js <token> <runId>'); process.exit(2); }
const opts = {
  hostname: 'api.github.com',
  path: `/repos/2506068-max/digestive/actions/runs/${runId}/jobs`,
  method: 'GET',
  headers: {
    'User-Agent': 'node-script',
    'Authorization': 'token ' + token,
    'Accept': 'application/vnd.github+json'
  }
};
const req = https.request(opts, res=>{
  let body=''; res.on('data', c=> body+=c); res.on('end', ()=>{
    try{
      const js=JSON.parse(body);
      const jobs = js.jobs || [];
      if(!jobs.length){ console.log('No jobs found for run', runId); return; }
      jobs.forEach(job=>{
        console.log(`Job: ${job.name} | status:${job.status} | conclusion:${job.conclusion} | id:${job.id}`);
        (job.steps||[]).forEach(s=>{
          console.log(`  Step: ${s.number} ${s.name} | status:${s.status} | conclusion:${s.conclusion}`);
        });
      });
    }catch(e){ console.error('Parse error', e); console.error(body); process.exit(1); }
  });
});
req.on('error', e=>{ console.error('Request error', e); process.exit(1); });
req.end();

// File: local-repo/Dashboard/script.js
// --- a/file:///c%3A/Users/Shiva/Desktop/Github/local-repo/Dashboard/script.js
// +++ b/file:///c%3A/Users/Shiva/Desktop/Github/local-repo/Dashboard/script.js
// @@ -1,4 +1,38 @@
    // Demo interactions: switching status badge on Approve/Reject/Hold
    const statusBadge = document.getElementById('statusBadge');
    const history = document.getElementById('history');
    function addHistory(event, user, notes){
      const tr = document.createElement('tr');
      const now = new Date().toISOString().slice(0,16).replace('T',' ');
      tr.innerHTML = '<td>' + now + '</td><td>' + event + '</td><td>' + user + '</td><td>' + notes + '</td>';
      history.prepend(tr);
    }
    function setBadge(state){
      statusBadge.className = 'badge ' + state.className;
      statusBadge.textContent = state.text;
    }
    document.getElementById('approveBtn').onclick = () => { setBadge({className:'success', text:'Active'}); addHistory('Approved','admin','Marked active'); };
    document.getElementById('rejectBtn').onclick = () => { setBadge({className:'danger', text:'Rejected'}); addHistory('Rejected','admin','Rejected by moderator'); };
    document.getElementById('qaApprove').onclick = () => { setBadge({className:'success', text:'Active'}); addHistory('Approved','admin','Quick action approve'); };
    document.getElementById('qaHold').onclick = () => { setBadge({className:'warn', text:'On Hold'}); addHistory('On Hold','admin','Temporarily on hold'); };
    document.getElementById('qaRevoke').onclick = () => { setBadge({className:'danger', text:'Revoked'}); addHistory('Revoked','admin','Access revoked'); };
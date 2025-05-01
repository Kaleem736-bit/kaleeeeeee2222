// js/main.js
document.getElementById('sendForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const t = {
    type: 'send',
    coin: document.getElementById('coin').value,
    to: document.getElementById('wallet').value,
    amount: document.getElementById('amount').value,
    date: new Date().toLocaleString()
  };
  let transfers = JSON.parse(localStorage.getItem('transfers') || "[]");
  transfers.push(t);
  localStorage.setItem("transfers", JSON.stringify(transfers));
  document.getElementById("sendMsg").textContent = "✅ تم الإرسال بنجاح!";
});

document.getElementById('receiveForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const r = {
    type: 'receive',
    coin: document.getElementById('receiveCoin').value,
    from: document.getElementById('fromWallet').value,
    amount: document.getElementById('receiveAmount').value,
    date: new Date().toLocaleString()
  };
  let transfers = JSON.parse(localStorage.getItem('transfers') || "[]");
  transfers.push(r);
  localStorage.setItem("transfers", JSON.stringify(transfers));
  document.getElementById("receiveMsg").textContent = "✅ تم الاستلام!";
});

if (document.getElementById("logs")) {
  const transfers = JSON.parse(localStorage.getItem('transfers') || "[]");
  document.getElementById("logs").innerHTML = transfers.map(t => 
    `<p>${t.type === 'send' ? '🔁 إرسال' : '📥 استلام'}: ${t.amount} ${t.coin} (${t.date})</p>`
  ).join('');
}

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
const [upiId, setUpiId] = useState('');
const [amount, setAmount] = useState('');
const [generatedQRCode, setGeneratedQRCode] = useState(null);

const generateQRCode = () => {
if (upiId && amount) {
const qrCodeText = `upi://pay?pa=${encodeURIComponent(
upiId
)}&mc=&tid=&tr=&tn=&cu=INR&am=${encodeURIComponent(amount)}&mam=null&url=null`;
setGeneratedQRCode(qrCodeText);
} else {
alert('Please enter both UPI ID and Amount.');
}
};

return (
<div style={{ textAlign: 'center', margin: '50px' }}>
<h1>UPI QR Code Generator</h1>

<label htmlFor="upiId">UPI ID:</label>
<input
type="text"
id="upiId"
placeholder="Enter UPI ID"
value={upiId}
onChange={(e) => setUpiId(e.target.value)}
/>

<label htmlFor="amount">Amount:</label>
<input
type="text"
id="amount"
placeholder="Enter Amount"
value={amount}
onChange={(e) => setAmount(e.target.value)}
/>

<button
style={{
backgroundColor: '#4CAF50',
color: 'white',
padding: '10px 20px',
fontSize: '16px',
cursor: 'pointer',
border: 'none',
borderRadius: '5px',
marginTop: '20px',
}}
onClick={generateQRCode}
>
Generate QR Code
</button>

{generatedQRCode && (
<div style={{ marginTop: '20px' }}>
<QRCode value={generatedQRCode} size={200} />
</div>
)}
</div>
);
}

export default App;
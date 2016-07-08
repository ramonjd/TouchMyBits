export default function authenticateCode(code) {

  return fetch('http://172.18.46.77:3000/poll/' + code, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

}

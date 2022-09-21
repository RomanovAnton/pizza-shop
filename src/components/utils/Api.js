export default function getPizza() {
  return fetch("https://626d16545267c14d5677d9c2.mockapi.io/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
}

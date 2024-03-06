export async function httpRequest(url, body, method = "POST") {
  let response;
  if (method === "GET") {
    response = await fetch(url, {
      method: "GET",
      credentials: "include",
      crossDomain: true,
    });
  } else {
    response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
      crossDomain: true,
    });
  }

  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  if (response.type === "error") {
    throw new Error(response.message);
  }

  throw new Error(response.error.message);
}

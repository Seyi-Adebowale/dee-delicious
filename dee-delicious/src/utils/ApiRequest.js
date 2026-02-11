export const apiRequest = async ({ script, data = {}, token = null }) => {
  let body;
  let headers = {};
  const isFormData = data instanceof FormData;

  if (isFormData) {
    // Append script and token to FormData
    data.append("script", script);
    if (token) data.append("api_token", token);

    body = data;
  } else {
    // JSON payload
    headers["Content-Type"] = "application/json";
    body = JSON.stringify({
      script,
      api_token: token,
      data,
    });
  }

  try {
    const res = await fetch(
      "http://localhost/lko/public/proxy.php",
      {
        method: "POST",
        headers,
        body,
      } 
    );

    // Read body as text first
    const text = await res.text();

    // Try parsing JSON
    let result;
    try {
      result = JSON.parse(text);
    } catch (err) {
      console.error("Error parsing JSON response:", err);
      console.error("Response text:", text);
      throw new Error("Invalid JSON from server");
    }

    return result;
  } catch (err) {
    console.error("Network or fetch error:", err);
    throw err;
  }
};

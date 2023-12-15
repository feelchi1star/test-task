export async function dataFetcher(url, method = "GET", data) {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}` + url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      // Check if the response status is not in the range 200-299 (HTTP success range)
      throw await response.json();
    }
    const result = await response.json();
    // console.log("Success:", result);
    return result;
  } catch (error) {
    // console.error("Error:", error.message);
    throw error; // Rethrow the error to be handled by the calling code
  }
}

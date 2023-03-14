async function getData(url) {
  try {
    const resp = await fetch(url);
    const respData = await resp.json();
    return respData;
  } catch (e) {
    console.error(e);
  }
}

async function postData(url, data) {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("post request done: ", resp);
  } catch (e) {
    console.error(e);
  }
}

async function deleteData(url, id) {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
    });

    console.log("delete request done: ", resp);
  } catch (e) {
    console.error(e);
  }
}

export { getData, postData, deleteData };

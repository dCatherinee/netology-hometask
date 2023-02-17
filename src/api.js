async function getNotes(url) {
  try {
    const resp = await fetch(url);
    const respData = await resp.json();
    return respData;
  } catch (e) {
    console.error(e);
  }
}

async function postNotes(url, data) {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("api post", resp);
  } catch (e) {
    console.error(e);
  }
}

async function deleteNotes(url, id) {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    console.log("api delete", resp);
  } catch (e) {
    console.error(e);
  }
}

export { getNotes, postNotes, deleteNotes };

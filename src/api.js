async function getData(url) {
  try {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log("async func getData ");
    console.log(respData);
    return respData;
  } catch (e) {
    console.error(e);
  }
}

export default getData;

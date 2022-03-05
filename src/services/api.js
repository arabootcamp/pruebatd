const URL_BASE = process.env.VUE_APP_URL_BASE

const api = async (url, config = null) => {
  let res = config==null ? await fetch(URL_BASE+url) : await fetch(URL_BASE+url, config)
  // hay error
  if (!res.ok) {
    const {
      url,
      status,
      statusText
    } = res;
   throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }
  else 
    return await res.json(); 
}

export {
  api
}
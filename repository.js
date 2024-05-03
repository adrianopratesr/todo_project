const makeRequest = (httpMethod, contentType = 'application/json', bodyData) => {
  const requestConfig = {
    method: `${httpMethod}`,
    headers: {
      'Content-Type': contentType
    }
  }

  if (bodyData) {
    requestConfig.body = JSON.stringify(bodyData);
  }
  return requestConfig;
}; 

export const getAllTasks = async(url) => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch {
    console.error(error);
  }
}

export const getTaskByID = async (url, id) => {
  try {
    const data = await fetch(`${url}/${id}`);
    const response = await data.json();
    return response;
  }
  catch {
    console.error(error);
  }
}

export const createTask = async (url, title) => {
  try {
    const data = await fetch(url, makeRequest('POST', title));
    const response = await data.json();
    return response;
  } catch {
    console.error(error);
  }
}

export const updateTask = async (url, id, status) => {
  try {
    const data = await fetch(`${url}/${id}`, makeRequest('PATCH', status));
    const response = await data.json();
    return response;
  }
  catch {
    console.error(error);
  }
}

export const deleteTask = async (url, id) => {
  try {
    const data = await fetch(`${url}/${id}`, makeRequest('DELETE'));
    const response = await data.json();
    return response;
  } catch {
    console.error(error);
  }
}

import fetch from 'isomorphic-unfetch';

export const fetchPostJSON = async (url: string, data?: {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data || {})
    });
    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

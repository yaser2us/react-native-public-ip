export default async endpoint => {
  try {
    const response = await fetch(endpoint || 'https://api.ipify.org');
    const ip = response.text();
    return ip;
  } catch (e) {
    return "192.168.1.1"
  }
};

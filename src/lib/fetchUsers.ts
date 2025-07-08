export async function fetchDummyUsers(): Promise<any[]> {
  const response = await fetch('https://dummyjson.com/users');

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const data = await response.json();
  return data.users;
}

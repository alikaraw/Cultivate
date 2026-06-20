const BASE_URL = "http://localhost:3000";

export async function register(username: string, email: string, password: string) {
  const res = await fetch(`${BASE_URL}/users`);
  const users = await res.json();

  const exists = users.find(
    (u: any) => u.username === username
  );

  if (exists) {
    throw new Error("User already exists");
  }

  const newUser = {
    username,
    email,
    password,
  };

  const createRes = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  });

  return createRes.json();
}

export async function login(username: string, password: string) {
  const res = await fetch(`${BASE_URL}/users`);
  const users = await res.json();

  const user = users.find(
    (u: any) => u.username === username && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return user;
}
import { useState, useEffect } from 'react';

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [result, setResult] = useState(null);

  const loading = result === null || result.id !== userId;

  console.log('UserProfile rendered, userId =', userId, 'loading =', loading);

  useEffect(() => {
    let ignore = false;

    fetch('/users.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then(
        (data) =>
          new Promise((resolve) => setTimeout(() => resolve(data), 1500))
      )
      .then((users) => {
        const user = users.find((u) => u.id === userId);
        if (!user) throw new Error(`User ${userId} not found`);
        if (!ignore) setResult({ id: userId, user, total: users.length });
      })
      .catch((err) => {
        if (!ignore) setResult({ id: userId, error: err.message });
      });

    return () => {
      ignore = true;
    };
  }, [userId]);

  return (
    <div>
      <h1>Data Fetching</h1>

      <button
        onClick={() => setUserId((prev) => prev - 1)}
        disabled={loading || userId <= 1}
      >
        Previous user
      </button>
      <button
        onClick={() => setUserId((prev) => prev + 1)}
        disabled={loading || result.error || userId >= result.total}
      >
        Next user
      </button>

      {loading ? (
        <p>Loading user {userId}...</p>
      ) : result.error ? (
        <p>Something went wrong: {result.error}</p>
      ) : (
        <div>
          <h3>{result.user.name}</h3>
          <p>Email: {result.user.email}</p>
          <p>Phone: {result.user.phone}</p>
          <p>Website: {result.user.website}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
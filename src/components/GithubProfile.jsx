import { useEffect, useState } from 'react';

const API_URL = 'https://api.github.com/users/';

async function getUserDetails(username) {
  const response = await fetch(API_URL + username);

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub profile.');
  }

  return response.json();
}

function GithubProfile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const data = await getUserDetails('TaflanRares');
        if (isMounted) {
          setProfile(data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message);
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading GitHub profile...</p>;
  }

  return (
    <article>
      {/* <h3>{profile.name || profile.login}</h3> */}
      <p>{profile.bio || 'No bio available'}</p>
      <ul>
        <li>Followers: {profile.followers}</li>
        <li>Public repos: {profile.public_repos}</li>
        {/* <li>Location: {profile.location || 'Not available'}</li> */}
      </ul>
      <a href={profile.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </article>
  );
}

export default GithubProfile;
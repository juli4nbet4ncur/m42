import React from 'react';
import settings from '../../settings';

export default function Application() {
  return (
    <div>
      <h2>About M42</h2>
      <p>
        M42 is a nebula of tiny tools for learning purposes. You are highly
        encouraged to explore <a href={settings.repository}>source code</a> and use it in your
        projects.
      </p>
    </div>
  );
}

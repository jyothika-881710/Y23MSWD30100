import React from 'react'

function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <footer>
      <p>Current Date: {formattedDate}</p>
    </footer>
  );
}
export default Footer

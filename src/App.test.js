import { render, screen } from '@testing-library/react';
import App from './App';

describe('check front and back end render', ()=> {

  test('checks front end has loaded', () => {
    render(<App />);
    const linkElement = screen.getByText('Add New Job');
    expect(linkElement).toBeInTheDocument();
  });
  
  /*
  test('checks backend has loaded', async () => {
    render(<App />);
    await fetch('http://localhost:8000/jobs')
    .then(res =>{
      return res.json();
    })
  
    const jobTitle = screen.getByText('Civil Service');
    expect(jobTitle ).toBeInTheDocument();
  });
*/

})





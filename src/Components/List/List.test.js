
describe('useEffect loads data', () =>{
  const expectedJob = {
            "jobTitle": expect.any(String),
            "company": expect.any(String),
            "salary": expect.any(String),
            "link": expect.any(String),
            "applied": expect.any(Boolean),
            "interview": expect.any(Boolean),
            "offer": expect.any(Boolean),
            "dateApplied": expect.any(String),
            "notes": expect.any(Array),
            "notProgressed": expect.any(Boolean),
            "id": expect.any(Number)
      };

      test('Checks jobs contains the correct fields of data', async () => {
          const response = await  fetch('http://localhost:8000/jobs')
            .then(res =>{
              return res.json();
            })
              
   expect(response[0]).toStrictEqual(expectedJob);
      });

   
  
})
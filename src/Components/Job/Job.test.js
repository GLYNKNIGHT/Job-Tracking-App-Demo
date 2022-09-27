


describe('useEffect loads data', () =>{
    const expectedJob = {
    
            "jobTitle": "Civil Servant ",
            "company": "Civil Service ",
            "salary": "£25000-£30000",
            "link": "https://www.civilservicejobs.service.gov.uk/csr/index.cgi",
            "applied": false,
            "interview": false,
            "offer": false,
            "dateApplied": "22/09/22",
            "notes": [
              "Great pension"
            ],
            "notProgressed": false,
            "id": 1
          
        };
  
        test('Checks jobs contains the correct fields of data', async () => {
            const response = await  fetch('http://localhost:8000/jobs')
              .then(res =>{
                return res.json();
              })
                
     expect(response[0]).toStrictEqual(expectedJob);
        }
    );
    
  })
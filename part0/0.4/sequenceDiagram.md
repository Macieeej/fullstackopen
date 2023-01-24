sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

[![](https://mermaid.ink/img/pako:eNrNVMFu2zAM_RVB58RunC1tfehpxYZhbQckt7kYGIm2tdqSJ1FpgyD_Pjr2clgxoOmGYT5ZjxTf0xPFnVROo8xlwO8RrcJ3BioPbWEFfx14Msp0YEmsvXsM6J8HGNz0-BAZ06ZXVwOei893y5WoibqQp2mgqA2GRIWkxiYY-2CS0qT4BG3XIHRdavHxq3WEQzlQZDZAeGTpweF_yhwjWy4-rG4-Ce1UbNHSkKXx2ebfSXx_fZJCVhf-X3ktGMvhExVSjYI3idI0-C8EfnuFvo-wgaXypqOXyLzlaxLeVDUJV4pjoRUXGhciEPdxEPiEKpKx1a8s_dtgDJgPSdUYhoTl3a0ovWsPq7_rjQYC9sbZ09z5shMFv2RLfXvJnBeHjjN8NgjbQk4Y4dI4xLKzbD6dTWeFFPuJSJJE3P-5l4OJo0UKmmYN6kGU0XJFZwcXPVqNfkgZX5GcyBY9t4TmIbTr2QrJ4XaUqrGE2PCZCrvnVIjkllurZE4-4kTGrj_VOLNkXkITjui1NuT8EWwcMLfMd5K2XT_xKhOIS7Jrpal6PPqG4Z931YeTylAd14lybRqMrrlb6s3lIl1kiwvI5rg4n8Pb-Vyr9ezyoszezEp9fjbLQO73E4kH_pthvB6m7P4HurLiFQ?type=png)](https://mermaid.live/edit#pako:eNrNVMFu2zAM_RVB58RunC1tfehpxYZhbQckt7kYGIm2tdqSJ1FpgyD_Pjr2clgxoOmGYT5ZjxTf0xPFnVROo8xlwO8RrcJ3BioPbWEFfx14Msp0YEmsvXsM6J8HGNz0-BAZ06ZXVwOei893y5WoibqQp2mgqA2GRIWkxiYY-2CS0qT4BG3XIHRdavHxq3WEQzlQZDZAeGTpweF_yhwjWy4-rG4-Ce1UbNHSkKXx2ebfSXx_fZJCVhf-X3ktGMvhExVSjYI3idI0-C8EfnuFvo-wgaXypqOXyLzlaxLeVDUJV4pjoRUXGhciEPdxEPiEKpKx1a8s_dtgDJgPSdUYhoTl3a0ovWsPq7_rjQYC9sbZ09z5shMFv2RLfXvJnBeHjjN8NgjbQk4Y4dI4xLKzbD6dTWeFFPuJSJJE3P-5l4OJo0UKmmYN6kGU0XJFZwcXPVqNfkgZX5GcyBY9t4TmIbTr2QrJ4XaUqrGE2PCZCrvnVIjkllurZE4-4kTGrj_VOLNkXkITjui1NuT8EWwcMLfMd5K2XT_xKhOIS7Jrpal6PPqG4Z931YeTylAd14lybRqMrrlb6s3lIl1kiwvI5rg4n8Pb-Vyr9ezyoszezEp9fjbLQO73E4kH_pthvB6m7P4HurLiFQ)

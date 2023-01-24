sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

[![](https://mermaid.ink/img/pako:eNq1VD1z2zAM_Ss8zrYUy62TaMjUXHu9Jh3sreoAk5DERiJVEnTj8_m_FzJVD83SfFQT8QA-AE8gDlI5jbKUAX9GtAo_GGg89JUV_A3gySgzgCWx9e5XQP_UweBuxJNnCpvf3CS8FB9vN6IlGkKZ54GiNhgyFbIWu2Dsg8lqk-Mj9EOHMAx5GCARgSKzA8Iz_wim85zZpzyl-LS5-yK0U7FHSylK45PLb1NcD8ayOzyvQmpR8CVRmw7_c4GsXvbjBeV9hh2slTcD_UuV944hb5qWhKvFmWjDRJMhAvGEBIGPqCIZ2_ydZZw6xoDzIakWQwpYf70XtXf9yXpbaTTQqI2zz1Pn20FU_EYsjdMlSzZOA2e4Nwj7Ss4YYWpMvuKiWM4X80UlxXEmsiwT31-vZRJxkkhB121BPYg6WmZ0Nqno0Wr0KcQyZZAz2aPngdX8uA9jrkqys58K1VhD7Lijyh45FCK59d4qWZKPOJNxGHuadoEsa-jCGb3Vhpw_g50DzizLg6T9MG6SxgRiStasNs2IR98x_OdPje6sMdTGbaZcnwejW56Vdne9ylfF6gqKJa4ul_B-udRqu7i-qot3i1pfXiwKkMfjTOIp_11aW6ftdfwNvKCmew?type=png)](https://mermaid.live/edit#pako:eNq1VD1z2zAM_Ss8zrYUy62TaMjUXHu9Jh3sreoAk5DERiJVEnTj8_m_FzJVD83SfFQT8QA-AE8gDlI5jbKUAX9GtAo_GGg89JUV_A3gySgzgCWx9e5XQP_UweBuxJNnCpvf3CS8FB9vN6IlGkKZ54GiNhgyFbIWu2Dsg8lqk-Mj9EOHMAx5GCARgSKzA8Iz_wim85zZpzyl-LS5-yK0U7FHSylK45PLb1NcD8ayOzyvQmpR8CVRmw7_c4GsXvbjBeV9hh2slTcD_UuV944hb5qWhKvFmWjDRJMhAvGEBIGPqCIZ2_ydZZw6xoDzIakWQwpYf70XtXf9yXpbaTTQqI2zz1Pn20FU_EYsjdMlSzZOA2e4Nwj7Ss4YYWpMvuKiWM4X80UlxXEmsiwT31-vZRJxkkhB121BPYg6WmZ0Nqno0Wr0KcQyZZAz2aPngdX8uA9jrkqys58K1VhD7Lijyh45FCK59d4qWZKPOJNxGHuadoEsa-jCGb3Vhpw_g50DzizLg6T9MG6SxgRiStasNs2IR98x_OdPje6sMdTGbaZcnwejW56Vdne9ylfF6gqKJa4ul_B-udRqu7i-qot3i1pfXiwKkMfjTOIp_11aW6ftdfwNvKCmew)

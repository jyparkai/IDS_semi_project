const terminal = document.getElementById("terminal-content");

const lines = [

```
{
    text: "root@nightwatch:~$ ./initialize_security_system",
    type: ""
},

{
    text: "[✓] Loading network interface................ OK",
    type: "success"
},

{
    text: "[✓] Loading packet collector................. OK",
    type: "success"
},

{
    text: "[✓] Loading signature database............... OK",
    type: "success"
},

{
    text: "[✓] Loading detection engine................ OK",
    type: "success"
},

{
    text: "",
    type: ""
},

{
    text: "SYSTEM STATUS : ONLINE",
    type: "success"
},

{
    text: "INTERFACE     : eth0",
    type: "dim"
},

{
    text: "MODE          : NETWORK MONITORING",
    type: "dim"
},

{
    text: "",
    type: ""
},

{
    text: "192.168.10.154 → 192.168.10.147   TCP 443",
    type: ""
},

{
    text: "192.168.10.154 → 192.168.10.147   TCP 22",
    type: ""
},

{
    text: "192.168.10.154 → 192.168.10.147   TCP 8080",
    type: ""
},

{
    text: "",
    type: ""
},

{
    text: "[!] THREAT DETECTED",
    type: "alert"
},

{
    text: "SIGNATURE : PORT_SCAN_001",
    type: "alert"
},

{
    text: "SOURCE    : 192.168.10.154",
    type: ""
},

{
    text: "TARGET    : 192.168.10.147",
    type: ""
},

{
    text: "SEVERITY  : HIGH",
    type: "alert"
},

{
    text: "",
    type: ""
},

{
    text: "INCIDENT #0001 CREATED",
    type: "warning"
},

{
    text: "",
    type: ""
},

{
    text: "root@nightwatch:~$ _",
    type: "success"
}
```

];

let index = 0;

function addLine() {

```
if (index >= lines.length) {

    setTimeout(() => {

        terminal.innerHTML = "";

        index = 0;

        addLine();

    }, 5000);

    return;
}

const line = document.createElement("div");

line.className = `line ${lines[index].type}`;

line.textContent = lines[index].text;

terminal.appendChild(line);

index++;

setTimeout(addLine, 350);
```

}

addLine();

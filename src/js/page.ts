declare let axios: typeof import("axios").default;
declare let ejs: typeof import("ejs");

window.addEventListener("popstate",parseURL);
window.addEventListener("load", parseURL);

function goToPage(page: string) {// eslint-disable-line
    history.pushState({}, "title 1", page);
        parseURL( );
}

function secondPage() {
    axios.get("/api/templates", {
        params: {
            template: "second"
        }
    }).then((templateReq)=>{ $("#app").html(
        ejs.render(templateReq.data))
    });
}


function home() {
    axios.get("/api/templates", {
        params: {
            template: "home"
        }
    }).then((templateReq)=>{ $("#app").html(
        ejs.render(templateReq.data))
    });
}

function parseURL() {
    const url = window.location.href.split("/");
    console.log(url);
    if (url.length > 2) {
        switch (url[3]) {
            case "home":
                home();
                break;
            case "second":
                secondPage();
                break;
            default:
                home();
        }
    } else {
        home();
    }
}

//parseURL();
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory="templates")


@app.get("/")
def home(request: Request):

    name = "Prashu Chauhan"
    sap_id = "590016978"
    batch = "B.Tech CSE - 2024"

    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "name": name,
            "sap_id": sap_id,
            "batch": batch
        }
    )